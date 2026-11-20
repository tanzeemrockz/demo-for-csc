import Link from "next/link";

export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="https://cyberslayercorpz.dev"
      className={`inline-flex items-center gap-2.5 font-semibold tracking-tight text-white transition-opacity hover:opacity-90 ${className}`}
      aria-label="CyberSlayerCorpz studio"
    >
      <svg
        className="size-6 shrink-0 rounded-[6px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        aria-hidden="true"
      >
        <rect width="500" height="500" rx="100" fill="#18181B" />
        <g strokeWidth="16" strokeLinecap="square">
          <polygon
            points="250,110 360,180 360,320 250,390 140,320 140,180"
            stroke="#ffffff"
            fill="none"
          />
          <path
            d="M250 110V250M360 180L250 250M140 180L250 250"
            stroke="#A1A1AA"
            strokeWidth="10"
            fill="none"
          />
        </g>
      </svg>
      <span className="text-sm font-semibold tracking-tight text-white">
        CyberSlayerCorpz
      </span>
      <span className="text-white/30 text-xs">/</span>
      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border border-white/10 bg-white/[0.04] text-white/60">
        Demo Directory
      </span>
    </Link>
  );
}
