"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Search, 
  ExternalLink,
  ShieldCheck,
  Zap,
  Package,
  MessageCircle,
  TrendingUp,
  Layers
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { DitherField } from "@/components/ui/dither-field";
import { CTASection } from "@/components/shared/cta-section";

type DirectoryItem = {
  id: string;
  name: string;
  client: string;
  category: string;
  industry: string;
  statusBadge: string;
  statusColor: "emerald" | "blue" | "orange";
  description: string;
  tags: string[];
  url: string;
  domain: string;
  highlights: { icon: typeof Zap; label: string }[];
  keywords: string;
};

const DIRECTORY_ITEMS: DirectoryItem[] = [
  {
    id: "nizam-butterfly",
    name: "Nizam Butterfly",
    client: "Nizam Food Products • South India",
    category: "Wholesale & B2B Hub",
    industry: "FMCG & Food Manufacturing",
    statusBadge: "LIVE PRODUCTION",
    statusColor: "emerald",
    description:
      "The official digital platform and wholesale ordering hub for an established South Indian food manufacturer. Features an interactive product catalog for ready-roasted vermicelli, short pasta, ragi millet noodles, and 7-minute biriyani kits: delivering sub-second TTFB, 100% Google Lighthouse scores, and zero-friction WhatsApp B2B inquiry routing.",
    tags: [
      "Sub-Second TTFB",
      "B2B Wholesale Dispatch",
      "WhatsApp Order Channel",
      "100% Lighthouse Score",
    ],
    url: "https://nizambutterfly.com",
    domain: "nizambutterfly.com",
    highlights: [
      { icon: Zap, label: "< 0.8s TTFB" },
      { icon: MessageCircle, label: "Direct WhatsApp Flow" },
      { icon: ShieldCheck, label: "100% Client Ownership" },
    ],
    keywords: "nizam butterfly food products manufacturing b2b wholesale vermicelli noodles pasta south india fmcg",
  },
  {
    id: "princy-boutique",
    name: "Princy Boutique",
    client: "Princy Designer Apparel",
    category: "Bespoke Fashion Storefront",
    industry: "Retail & Apparel",
    statusBadge: "VERIFIED BUILD",
    statusColor: "blue",
    description:
      "A fast, high-conversion designer clothing storefront designed with rich visual lookbooks, instant size selector modals, and localized WhatsApp ordering for bridal and designer wear.",
    tags: [
      "Mobile Catalog",
      "Lookbook Gallery",
      "Instant Checkout Flow",
      "Zero Bloat",
    ],
    url: "https://cyberslayercorpz.dev/work/princy-boutique",
    domain: "cyberslayercorpz.dev/work",
    highlights: [
      { icon: Layers, label: "Rich Visual Lookbook" },
      { icon: Zap, label: "Instant Load" },
      { icon: ShieldCheck, label: "Zero Vendor Lock-in" },
    ],
    keywords: "princy boutique apparel fashion bridal designer dresses storefront retail",
  },
  {
    id: "jailani-catering",
    name: "Jailani Catering",
    client: "Jailani Event Services",
    category: "Event Booking & Menu Builder",
    industry: "Hospitality & Events",
    statusBadge: "VERIFIED BUILD",
    statusColor: "orange",
    description:
      "A dedicated banquet and event catering platform featuring interactive per-plate menu calculators, date reservation calendars, and automated lead capture for wedding and corporate celebrations.",
    tags: [
      "Menu Calculator",
      "Event Calendar",
      "Quote Dispatcher",
      "Edge Hosted",
    ],
    url: "https://cyberslayercorpz.dev/work/jailani-catering",
    domain: "cyberslayercorpz.dev/work",
    highlights: [
      { icon: Package, label: "Interactive Menu Builder" },
      { icon: TrendingUp, label: "Automated Inquiries" },
      { icon: Zap, label: "High Speed Forms" },
    ],
    keywords: "jailani catering event dining banquet wedding food service hospitality",
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
      item.industry.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q)
    );
  });

  return (
    <div className="relative min-h-screen bg-bg text-fg overflow-hidden">
      {/* Background Ambience: Grain + Radial Glow + 3D Orbits */}
      <div aria-hidden className="absolute inset-0 pointer-events-none -z-10">
        <DitherField
          tone="grey"
          className="inset-0 opacity-25"
          shape={[0.5, 0.3, 1.1, 0.9]}
          bias={0.36}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,#07070a_40%,transparent_100%)]" />
        <div className="hero-orbit" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-grid-texture" />
      </div>

      {/* Directory Hero Header */}
      <section className="relative z-10 pt-36 sm:pt-44 pb-14 sm:pb-20 border-b border-white/[0.08]">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs text-white/80 mb-6 backdrop-blur-md">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-wider">
                Production Directory • Verified Client Builds
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              Verified Client Platforms &amp; Builds
            </h1>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Bespoke digital platforms, high-speed wholesale ordering systems, and production web applications engineered by{" "}
              <strong className="text-white font-semibold">CyberSlayerCorpz</strong>. Sub-second load times, zero bloat, edge deployed.
            </p>

            {/* Interactive Search Bar */}
            <div className="mt-8 max-w-lg">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-white/40" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by client, platform, industry, or tech..."
                  className="w-full bg-white/[0.04] border border-white/10 focus:border-white/30 text-white text-sm pl-11 pr-5 py-3 rounded-full outline-none transition duration-200 placeholder:text-white/35 backdrop-blur-md focus-visible:ring-2 focus-visible:ring-white/20"
                />
              </div>

              {search && (
                <div className="flex items-center justify-between text-xs text-white/50 mt-2.5 px-3">
                  <span>Showing results for &quot;{search}&quot;</span>
                  <button
                    onClick={() => setSearch("")}
                    className="hover:text-white underline cursor-pointer"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Directory Showcase Grid */}
      <section className="relative z-10 py-16 sm:py-24">
        <Container>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10 pb-4 border-b border-white/[0.08]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-orange block mb-0.5">
                Active Client Catalog
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Live Platforms
              </h2>
            </div>

            <span className="text-xs font-mono text-white/50">
              {filteredItems.length} {filteredItems.length === 1 ? "PLATFORM" : "PLATFORMS"} LISTED
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="glow-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div>
                    {/* Status Badge Row */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                        <span className="size-1.5 rounded-full bg-emerald-400" />
                        <span>{item.statusBadge}</span>
                      </div>
                      <span className="text-xs font-mono text-white/50">{item.industry}</span>
                    </div>

                    {/* Title & Client */}
                    <div className="mb-4">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-white/90 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs font-medium text-white/50 mt-1">
                        Client: {item.client}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>

                    {/* Engineering Highlight Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
                      {item.highlights.map((h, i) => {
                        const Icon = h.icon;
                        return (
                          <div
                            key={i}
                            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.07]"
                          >
                            <Icon className="size-3.5 text-accent-orange shrink-0" />
                            <span className="text-xs text-white/80 font-medium truncate">
                              {h.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-md border border-white/[0.08] bg-white/[0.02] text-white/70 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Launch Action Footer */}
                  <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4 flex-wrap">
                    <Button
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      className="text-xs px-5 py-2.5"
                    >
                      <span>Launch Platform</span>
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
                    <span className="text-xs font-mono text-white/40">{item.domain}</span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filteredItems.length === 0 && (
            <div className="py-24 text-center space-y-3">
              <p className="text-white/50 text-sm">
                No verified platforms found matching &quot;{search}&quot;.
              </p>
              <button
                onClick={() => setSearch("")}
                className="text-xs text-accent-orange hover:underline cursor-pointer"
              >
                Reset search filter
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* Conversion CTA Section */}
      <CTASection
        eyebrow="Initiate Build"
        title="Want an unbloated web platform for your business?"
        description="We design, build, and deploy production-grade websites, product catalogs, and direct inquiry systems starting at a flat ₹7,000 Starter Build. Delivered in 48 hours."
        buttonLabel="Start a project"
        buttonHref="https://cyberslayercorpz.dev/contact"
      />
    </div>
  );
}
