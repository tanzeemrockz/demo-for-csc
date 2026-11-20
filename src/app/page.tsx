"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Search, 
  ArrowRight
} from "lucide-react";

type ClientCard = {
  id: string;
  name: string;
  client: string;
  category: "client";
  industry: string;
  statusBadge: string;
  statusColor: "emerald";
  description: string;
  tags: string[];
  url: string;
  domain: string;
  keywords: string;
};

const DIRECTORY_ITEMS: ClientCard[] = [
  {
    id: "nizam-butterfly",
    name: "Nizam Butterfly",
    client: "Nizam Food Products • South India",
    category: "client",
    industry: "FMCG & Food Manufacturing",
    statusBadge: "LIVE PRODUCTION",
    statusColor: "emerald",
    description:
      "The official digital platform and wholesale ordering hub for an established South Indian food manufacturer. Features an interactive product catalog for ready-roasted vermicelli, short pasta, ragi millet noodles, and 7-minute biriyani kits—delivering sub-second TTFB, 100% Google Lighthouse scores, and zero-friction WhatsApp B2B inquiry routing.",
    tags: [
      "⚡ Sub-Second TTFB",
      "📦 B2B Wholesale Dispatch",
      "💬 WhatsApp Order Channel",
      "🏆 100% Lighthouse Score",
    ],
    url: "https://nizambutterfly.com",
    domain: "nizambutterfly.com",
    keywords: "nizam butterfly food products manufacturing b2b wholesale vermicelli noodles pasta south india fmcg",
  },
];

export default function DirectoryPage() {
  const [search, setSearch] = useState("");

  const filteredItems = DIRECTORY_ITEMS.filter((item) => {
    const q = search.toLowerCase().trim();
    return (
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.client.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-bg text-fg relative overflow-hidden font-sans">
      {/* Ambient Radial Glow & Subtle Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.025] blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-grid opacity-35 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.08] bg-[#070708]/80 backdrop-blur-xl backdrop-saturate-150">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link href="https://cyberslayercorpz.dev" className="flex items-center gap-3 group">
            <div className="size-8 rounded-lg border border-white/10 bg-white/[0.04] p-1.5 flex items-center justify-center transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/[0.08]">
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
                <polygon points="250,110 360,180 360,320 250,390 140,320 140,180" stroke="#FFFFFF" strokeWidth="26" strokeLinecap="round" />
                <path d="M 250 110 V 250 M 360 180 L 250 250 M 140 180 L 250 250" stroke="#A1A1AA" strokeWidth="18" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-white/90">
                CyberSlayerCorpz
              </span>
              <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full border border-white/10 bg-white/[0.04] text-white/60">
                Directory
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="https://cyberslayercorpz.dev"
              className="text-xs font-medium text-white/60 hover:text-white transition-colors duration-200 hidden sm:inline-flex"
            >
              Main Studio
            </Link>
            <Link
              href="https://cyberslayercorpz.dev/services"
              className="text-xs font-medium text-white/60 hover:text-white transition-colors duration-200 hidden sm:inline-flex"
            >
              Services
            </Link>
            <Link
              href="https://cyberslayercorpz.dev/contact"
              target="_blank"
              className="text-xs font-medium bg-white text-[#070708] px-4 py-2 rounded-full hover:bg-neutral-200 transition-all duration-200 inline-flex items-center gap-1.5 shadow-sm"
            >
              Start a project
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 flex-1 max-w-7xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-24 w-full">
        {/* Hero Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-white/70 mb-5">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>PRODUCTION DIRECTORY • VERIFIED BUILDS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-5">
            Verified Client Platforms & Builds
          </h1>
          <p className="text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
            Bespoke digital platforms, high-speed wholesale ordering systems, and production web applications engineered by{" "}
            <span className="text-white font-medium">CyberSlayerCorpz</span>. Sub-second load times, zero bloat, edge deployed.
          </p>

          {/* Search Bar */}
          <div className="mt-8 sm:mt-10 max-w-md">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-3.5 text-white/30" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search platforms, clients, industries..."
                className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-white/25 text-white text-xs pl-9 pr-4 py-2.5 rounded-full outline-none transition duration-200 placeholder:text-white/30"
              />
            </div>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="glow-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                      <span>{item.statusBadge}</span>
                    </div>
                    <span className="text-xs text-white/40">{item.industry}</span>
                  </div>

                  <div className="mb-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-white/90 transition-colors">
                      {item.name}
                    </h2>
                    <span className="text-xs font-medium text-white/50 block mt-1">
                      Client: {item.client}
                    </span>
                  </div>

                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-md border border-white/[0.08] bg-white/[0.02] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white !text-[#070708] font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-all duration-200 group-hover:shadow-sm"
                  >
                    <span>Launch Platform</span>
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <span className="text-xs text-white/40">{item.domain}</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="py-20 text-center text-white/40 text-xs">
            No platforms found matching &quot;{search}&quot;.
          </div>
        )}

        {/* Studio Conversion Callout */}
        <section className="mt-14 sm:mt-18 p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-white/[0.02] relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs mb-3 font-medium">
              <span>ENGINEERING STANDARDS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
              Want an unbloated web platform for your business?
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              We design, build, and deploy production-grade websites, product catalogs, and direct inquiry systems starting at a flat ₹7,000 Starter Build. Delivered in 48 hours.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://cyberslayercorpz.dev/contact"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-[#070708] font-medium text-xs sm:text-sm px-6 py-3 rounded-full hover:bg-neutral-200 transition-all duration-200 inline-flex items-center gap-2 shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/[0.06] bg-[#070708]/90 py-10 px-5 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <Link
              href="https://cyberslayercorpz.dev"
              className="font-bold text-sm text-white hover:text-white/80 transition-colors"
            >
              CyberSlayerCorpz
            </Link>
            <span className="hidden sm:inline text-white/20">|</span>
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} CyberSlayerCorpz. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
            <Link href="https://cyberslayercorpz.dev" className="hover:text-white transition-colors">
              Main Studio
            </Link>
            <Link href="https://cyberslayercorpz.dev/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="https://cyberslayercorpz.dev/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <a
              href="https://instagram.com/cyberslayercorpz"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a href="mailto:hello@cyberslayercorpz.dev" className="hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
