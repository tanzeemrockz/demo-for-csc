"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/shared/brand-logo";

const NAV_LINKS = [
  { label: "Main Studio", href: "https://cyberslayercorpz.dev" },
  { label: "Services", href: "https://cyberslayercorpz.dev/services" },
  { label: "Work", href: "https://cyberslayercorpz.dev/work" },
  { label: "Club", href: "https://club.cyberslayercorpz.dev" },
  { label: "Contact", href: "https://cyberslayercorpz.dev/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500",
        scrolled || open
          ? "border-white/[0.08] bg-black/70 backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto grid h-16 w-full max-w-7xl grid-cols-[1fr_auto] items-center gap-6 px-5 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-8">
        <div className="flex w-fit items-center">
          <BrandLogo />
        </div>

        {/* Links sit in a hairline capsule; a pill slides to the hovered item */}
        <nav
          onMouseLeave={() => setHovered(null)}
          className="hidden items-center rounded-full border border-white/[0.08] bg-white/[0.02] p-1 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHovered(link.label)}
              className={cn(
                "relative isolate rounded-full px-4 py-1.5 text-sm font-medium tracking-normal transition-colors duration-300",
                hovered === link.label ? "text-fg" : "text-fg-muted"
              )}
            >
              {hovered === link.label && (
                <motion.span
                  layoutId="nav-pill"
                  transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]"
                />
              )}
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Button
            href="https://cyberslayercorpz.dev/contact"
            target="_blank"
            className="hidden !px-4 !py-2 md:inline-flex text-xs"
          >
            Start a project
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex size-10 items-center justify-center rounded-full border border-white/10 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <span
              className={cn(
                "block h-px w-4 bg-fg transition-transform duration-300",
                open && "translate-y-[2px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-4 bg-fg transition-transform duration-300 -translate-y-[3px]",
                open && "translate-y-[-2px] -rotate-45"
              )}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden border-b border-white/[0.08] bg-black/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col px-5 pt-2 pb-6">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-white/[0.06] py-4 text-sm font-medium tracking-normal text-fg-muted transition-colors hover:text-fg"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-fg/30 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              ))}
              <Button
                href="https://cyberslayercorpz.dev/contact"
                target="_blank"
                className="mt-5 w-full text-xs"
                onClick={() => setOpen(false)}
              >
                Start a project
                <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
