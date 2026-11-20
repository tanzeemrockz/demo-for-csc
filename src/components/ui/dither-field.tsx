"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const VERTEX = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAGMENT = `
precision mediump float;
uniform vec2 uCells;
uniform float uTime;
uniform vec3 uMouse;
uniform vec4 uShape;
uniform float uBias;
uniform float uGrain;
uniform vec3 uC0;
uniform vec3 uC1;
uniform vec3 uC2;

float bayer8(vec2 p) {
  vec2 i = mod(floor(p), 8.0);
  float m = 0.0;
  vec2 b1 = mod(i, 2.0);
  vec2 i1 = floor(i * 0.5);
  vec2 b2 = mod(i1, 2.0);
  vec2 i2 = floor(i1 * 0.5);
  m += (b1.x * 2.0 + b1.y * 3.0);
  m += (b2.x * 8.0 + b2.y * 12.0);
  m += (i2.x * 32.0 + i2.y * 48.0);
  return m / 64.0;
}

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  vec2 cell = floor(gl_FragCoord.xy / 2.0);
  vec2 uv = gl_FragCoord.xy / (uCells * 2.0);

  vec2 d = (uv - uShape.xy) / max(uShape.zw, vec2(0.001));
  float falloff = clamp(1.0 - dot(d, d), 0.0, 1.0);
  falloff = falloff * falloff;

  float wave1 = sin(cell.x * 0.045 + cell.y * 0.025 + uTime * 0.7);
  float wave2 = cos(cell.x * -0.03 + cell.y * 0.04 + uTime * 0.5);
  float field = (wave1 + wave2) * 0.25 + 0.5;

  if (uMouse.z > 0.0) {
    vec2 mDelta = (uv - uMouse.xy) * vec2(uCells.x / uCells.y, 1.0);
    float mDist = length(mDelta);
    float ripple = sin(mDist * 28.0 - uTime * 3.5) * 0.5 + 0.5;
    float mFade = clamp(1.0 - mDist / 0.35, 0.0, 1.0);
    field += ripple * mFade * uMouse.z * 0.35;
  }

  field *= falloff;
  float threshold = mix(bayer8(cell), hash(cell + fract(uTime)), uGrain);
  float dotOn = step(threshold, field * uBias);

  float gradT = clamp((uv.x + uv.y) * 0.5 + sin(uTime * 0.2) * 0.1, 0.0, 1.0);
  vec3 col = gradT < 0.5
    ? mix(uC0, uC1, gradT * 2.0)
    : mix(uC1, uC2, (gradT - 0.5) * 2.0);

  gl_FragColor = vec4(col * dotOn, dotOn);
}
`;

export function DitherField({
  className,
  tone = "grey",
  shape = [0.5, 0.5, 0.6, 0.6],
  bias = 0.5,
  grain = 0.25,
  interactive = false,
}: {
  className?: string;
  tone?: "brand" | "grey" | "cool";
  shape?: [number, number, number, number];
  bias?: number;
  grain?: number;
  interactive?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: true, antialias: false });
    if (!gl) return;

    function createShader(glCtx: WebGLRenderingContext, type: number, src: string) {
      const s = glCtx.createShader(type);
      if (!s) return null;
      glCtx.shaderSource(s, src);
      glCtx.compileShader(s);
      return s;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, VERTEX);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(prog, "aPos");
    const uCellsLoc = gl.getUniformLocation(prog, "uCells");
    const uTimeLoc = gl.getUniformLocation(prog, "uTime");
    const uMouseLoc = gl.getUniformLocation(prog, "uMouse");
    const uShapeLoc = gl.getUniformLocation(prog, "uShape");
    const uBiasLoc = gl.getUniformLocation(prog, "uBias");
    const uGrainLoc = gl.getUniformLocation(prog, "uGrain");
    const uC0Loc = gl.getUniformLocation(prog, "uC0");
    const uC1Loc = gl.getUniformLocation(prog, "uC1");
    const uC2Loc = gl.getUniformLocation(prog, "uC2");

    const palettes = {
      brand: {
        c0: [0.1, 0.59, 0.92],
        c1: [0.94, 0.42, 0.22],
        c2: [0.82, 0.79, 0.64],
      },
      grey: {
        c0: [0.55, 0.55, 0.6],
        c1: [0.4, 0.4, 0.44],
        c2: [0.25, 0.25, 0.28],
      },
      cool: {
        c0: [0.1, 0.59, 0.92],
        c1: [0.35, 0.45, 0.75],
        c2: [0.5, 0.35, 0.8],
      },
    };
    const pal = palettes[tone] || palettes.grey;

    let animId: number;
    let t0 = performance.now();
    const mouse = { x: 0.5, y: 0.5, str: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = 1.0 - (e.clientY - rect.top) / rect.height;
      mouse.str = 1.0;
    };

    if (interactive) {
      window.addEventListener("pointermove", handlePointerMove);
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.floor(canvas.clientWidth * dpr * 0.5);
      const h = Math.floor(canvas.clientHeight * dpr * 0.5);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const render = (now: number) => {
      resize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(prog);

      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(uCellsLoc, canvas.width, canvas.height);
      gl.uniform1f(uTimeLoc, (now - t0) * 0.001);
      gl.uniform3f(uMouseLoc, mouse.x, mouse.y, mouse.str);
      gl.uniform4f(uShapeLoc, shape[0], shape[1], shape[2], shape[3]);
      gl.uniform1f(uBiasLoc, bias);
      gl.uniform1f(uGrainLoc, grain);
      gl.uniform3fv(uC0Loc, pal.c0);
      gl.uniform3fv(uC1Loc, pal.c1);
      gl.uniform3fv(uC2Loc, pal.c2);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      mouse.str *= 0.94;

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      if (interactive) {
        window.removeEventListener("pointermove", handlePointerMove);
      }
    };
  }, [tone, shape, bias, grain, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 size-full", className)}
      aria-hidden="true"
    />
  );
}
