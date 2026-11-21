"use client";

import { useState } from "react";
import {
  Crown,
  MapPin,
  Phone,
  MessageCircle,
  Users,
  Car,
  BedDouble,
  Zap,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building2,
  Trees,
  Utensils,
  Volume2,
} from "lucide-react";

interface VenueSpace {
  id: string;
  name: string;
  category: "Indoor Ballrooms" | "Outdoor Lawns" | "Dining & Banquets";
  capacity: string;
  area: string;
  ceiling: string;
  idealFor: string;
  features: string[];
  gradient: string;
  whatsappMsg: string;
}

const VENUE_SPACES: VenueSpace[] = [
  {
    id: "durbar-ballroom",
    name: "The Durbar Grand Ballroom",
    category: "Indoor Ballrooms",
    capacity: "2,500 Floating / 1,200 Seated",
    area: "22,000 sq ft Pillar-Less",
    ceiling: "28-Foot Clear Height",
    idealFor: "Muhurtham Ceremony, Grand Wedding Reception, Corporate Keynotes",
    features: [
      "Custom imported Bohemian crystal chandeliers",
      "High-tonnage central chiller air-conditioning",
      "Reinforced heavy stage rigging points for LED walls",
      "Dedicated acoustic dampening wall panels",
    ],
    gradient: "from-[#0a2e1c] via-[#061c11] to-[#070d0a]",
    whatsappMsg:
      "Hello Grand Palace, I want to inquire about The Durbar Ballroom",
  },
  {
    id: "mughal-lawns",
    name: "The Emerald Mughal Lawns",
    category: "Outdoor Lawns",
    capacity: "1,800 Open-Air Guests",
    area: "2-Acre Manicured Greens",
    ceiling: "Open Sky Canopy",
    idealFor: "Sangeet Under The Stars, Cocktail Gala, Sunset Pheras",
    features: [
      "Illuminated musical fountains with warm ambient uplighting",
      "Permanent stone pathways for elderly and wheelchair comfort",
      "Dedicated power sub-stations for concert sound and lighting",
      "Natural coastal breeze ventilation along ECR corridor",
    ],
    gradient: "from-[#0d3326] via-[#071f17] to-[#070d0a]",
    whatsappMsg:
      "Hello Grand Palace, I want to inquire about The Mughal Lawns",
  },
  {
    id: "shish-mahal",
    name: "The Shish Mahal Intimate Banquet",
    category: "Indoor Ballrooms",
    capacity: "450 Guests",
    area: "6,500 sq ft Handcrafted Mirrorwork",
    ceiling: "18-Foot Height",
    idealFor: "Engagement Ceremony, Mehendi Soiree, Private Anniversary Dinner",
    features: [
      "Intricate Belgian glass mirror mosaics and warm chandeliers",
      "Integrated surround audio for speeches and acoustic music",
      "Independent foyer and private guest registration foyer",
      "Attached bride and groom changing green rooms",
    ],
    gradient: "from-[#0d2e26] via-[#061b17] to-[#070d0a]",
    whatsappMsg:
      "Hello Grand Palace, I want to inquire about The Shish Mahal",
  },
  {
    id: "dining-pavilion",
    name: "The Royal Dining Pavilion",
    category: "Dining & Banquets",
    capacity: "450 Seated Per Batch",
    area: "14,000 sq ft Banquet Hall",
    ceiling: "High Ventilation Ceiling",
    idealFor: "Traditional Banana Leaf Feasts, Multi-Cuisine Wedding Buffets",
    features: [
      "Dual commercial kitchens with dedicated vegetarian prep zones",
      "High-speed steam dishwashing and sterilization units",
      "Wide service corridors for seamless, rapid plate refills",
      "Air-conditioned guest dining with exhaust air change cycles",
    ],
    gradient: "from-[#112d22] via-[#081a13] to-[#070d0a]",
    whatsappMsg:
      "Hello Grand Palace, I want to inquire about Dining Pavilion",
  },
];

interface PackagePlan {
  id: string;
  tier: string;
  name: string;
  badge?: string;
  price: string;
  duration: string;
  description: string;
  inclusions: string[];
  whatsappMsg: string;
}

const PACKAGES: PackagePlan[] = [
  {
    id: "aashirwad",
    tier: "PACKAGE 01",
    name: "Aashirwad Muhurtham Package",
    price: "Rs 3,50,000",
    duration: "1 Full Day (24 Hours)",
    description:
      "Essential luxury package tailored for traditional morning Muhurtham ceremonies and auspicious celebrations.",
    inclusions: [
      "1 Full Day rental of The Durbar Grand Ballroom",
      "The Royal Dining Pavilion with dual kitchen access",
      "4 Deluxe air-conditioned suites for bride and groom",
      "Standard architectural stage lighting and ambient foyer lamps",
      "Continuous generator power backup with fuel included",
    ],
    whatsappMsg:
      "Hello Grand Palace, I am interested in Aashirwad Muhurtham Package (Rs 3,50,000/day)",
  },
  {
    id: "rajwada",
    tier: "PACKAGE 02",
    name: "Rajwada Grand Celebration",
    badge: "Most Popular Wedding Choice",
    price: "Rs 6,75,000",
    duration: "2 Days (48 Hours)",
    description:
      "Comprehensive multi-event wedding package for Sangeet evening followed by grand next-day Muhurtham and Reception.",
    inclusions: [
      "2 Full Days access to Durbar Ballroom and Mughal Open Lawns",
      "The Shish Mahal for intimate Mehendi or tea reception",
      "12 Deluxe air-conditioned guest suites for direct family",
      "Dedicated 12-member valet parking crew for up to 300 cars",
      "100 percent generator power coverage and sound engineer support",
    ],
    whatsappMsg:
      "Hello Grand Palace, I am interested in Rajwada Grand Celebration (Rs 6,75,000/2 days)",
  },
  {
    id: "imperial",
    tier: "PACKAGE 03",
    name: "Imperial Royal Haven Buyout",
    badge: "Full Estate Buyout",
    price: "Rs 11,50,000",
    duration: "3 Days (72 Hours)",
    description:
      "Complete exclusive buyout of our entire 8-acre coastal estate, granting total privacy for high-profile weddings and global family reunions.",
    inclusions: [
      "Exclusive access to all indoor ballrooms, open lawns, and pavilions",
      "All 24 luxury guest suites with 24-hour concierge hospitality",
      "Full valet team managing 600 vehicles with 12 EV charging stations",
      "Professional stage trussing, line-array audio, and spotlight rigging",
      "Helipad coordination and dedicated security team perimeter patrol",
    ],
    whatsappMsg:
      "Hello Grand Palace, I am interested in Imperial Royal Haven Buyout (Rs 11,50,000/3 days)",
  },
];

const SPACE_CATEGORIES = [
  "All Spaces",
  "Indoor Ballrooms",
  "Outdoor Lawns",
  "Dining & Banquets",
] as const;

export default function GrandPalacePage() {
  const [activeSpaceFilter, setActiveSpaceFilter] = useState<string>("All Spaces");
  const [selectedEventType, setSelectedEventType] = useState<string>("Wedding Ceremony");
  const [selectedMonth, setSelectedMonth] = useState<string>("November 2026");
  const [guestCountEstimate, setGuestCountEstimate] = useState<string>("800 to 1,500 Guests");

  const filteredSpaces =
    activeSpaceFilter === "All Spaces"
      ? VENUE_SPACES
      : VENUE_SPACES.filter((space) => space.category === activeSpaceFilter);

  const walkthroughWhatsappUrl = `https://wa.me/919884012345?text=${encodeURIComponent(
    `Hello Grand Palace, I would like to schedule a private walkthrough tour for a ${selectedEventType} (${guestCountEstimate}) planned in ${selectedMonth}.`
  )}`;

  return (
    <div className="relative min-h-screen bg-[#050506] text-white">
      {/* Top Banner */}
      <div className="border-b border-[#10b981]/20 bg-[#070d0a]/90 backdrop-blur-md px-4 py-2 text-center text-xs tracking-wide text-[#34d399] flex items-center justify-center gap-2">
        <Sparkles className="size-3.5 text-[#fbbf24]" />
        <span>Wedding Season 2026-2027: Limited auspicious dates available on East Coast Road</span>
        <span className="hidden sm:inline text-white/30">|</span>
        <span className="hidden sm:inline text-white/70">8-Acre Private Estate with Helipad</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050506]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-full border border-[#10b981]/50 bg-gradient-to-br from-[#0a2e1c] to-[#070d0a] flex items-center justify-center shadow-lg shadow-[#10b981]/10">
              <Crown className="size-5 text-[#fbbf24]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold tracking-wider uppercase text-white font-serif">
                  Grand Palace
                </span>
                <span className="rounded bg-[#10b981]/15 px-1.5 py-0.5 text-[10px] font-semibold text-[#34d399] border border-[#10b981]/30">
                  LUXURY BANQUETS
                </span>
              </div>
              <p className="text-[11px] text-white/60 tracking-tight">
                8 Acres &middot; Up to 3,500 Guests &middot; ECR Chennai
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider text-white/70">
            <a href="#spaces" className="hover:text-[#34d399] transition-colors">
              Palace Spaces
            </a>
            <a href="#packages" className="hover:text-[#34d399] transition-colors">
              Packages
            </a>
            <a href="#amenities" className="hover:text-[#34d399] transition-colors">
              Infrastructure
            </a>
            <a href="#tour" className="hover:text-[#34d399] transition-colors">
              Schedule Tour
            </a>
          </nav>

          {/* Quick Contact & WhatsApp Booking CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden lg:flex flex-col text-right text-xs">
              <span className="text-white/50 text-[10px]">Venue Desk (Injambakkam)</span>
              <a href="tel:+919884012345" className="text-white font-semibold hover:text-[#34d399]">
                +91 98840 12345
              </a>
            </div>

            <a
              href="https://wa.me/919884012345?text=Hello%20Grand%20Palace,%20I%20want%20to%20inquire%20about%20wedding%20dates"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-black font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg shadow-[#25d366]/20"
            >
              <MessageCircle className="size-4 fill-black text-black" />
              <span>Inquire Dates</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.18),rgba(251,191,36,0.08),rgba(5,5,6,0))]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#34d399] text-xs font-medium mb-6">
            <Crown className="size-3.5 text-[#fbbf24]" />
            <span>Premier Royal Wedding &amp; Gala Destination</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto font-serif leading-tight">
            A Majestic Venue Designed for Timeless Celebrations and Grand Gatherings
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Featuring pillar-less royal banquet halls with 28-foot high ceilings, lush landscaped open lawns, 24 luxury guest suites, and dedicated international catering zones.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#spaces"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#10b981] to-[#059669] text-black font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-[#10b981]/20"
            >
              <span>Explore Palace Spaces</span>
              <ChevronRight className="size-4" />
            </a>

            <a
              href="https://wa.me/919884012345?text=Hello%20Grand%20Palace,%20I%20would%20like%20to%20check%20hall%20availability%20for%20my%20event"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#070d0a] border border-[#10b981]/40 hover:border-[#10b981] text-white font-semibold text-sm transition-all"
            >
              <MessageCircle className="size-4 text-[#25d366]" />
              <span>Check Date on WhatsApp</span>
            </a>
          </div>

          {/* Estate Highlights Grid */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <div className="p-4 rounded-xl bg-[#070d0a]/80 border border-white/10 backdrop-blur-sm text-left">
              <div className="flex items-center gap-2 text-[#34d399] font-bold text-base mb-1">
                <Users className="size-4 text-[#fbbf24]" />
                <span>3,500 Guests</span>
              </div>
              <p className="text-xs text-white/60">
                Pillar-less ballroom and manicured gardens for seamless floating crowds.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#070d0a]/80 border border-white/10 backdrop-blur-sm text-left">
              <div className="flex items-center gap-2 text-[#34d399] font-bold text-base mb-1">
                <Car className="size-4 text-[#fbbf24]" />
                <span>600 Car Valet</span>
              </div>
              <p className="text-xs text-white/60">
                Private paved parking compound with 12 fast EV charging stations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#070d0a]/80 border border-white/10 backdrop-blur-sm text-left">
              <div className="flex items-center gap-2 text-[#34d399] font-bold text-base mb-1">
                <BedDouble className="size-4 text-[#fbbf24]" />
                <span>24 Luxury Suites</span>
              </div>
              <p className="text-xs text-white/60">
                Five-star furnished rooms for bridal party and out-of-town guests.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#070d0a]/80 border border-white/10 backdrop-blur-sm text-left">
              <div className="flex items-center gap-2 text-[#34d399] font-bold text-base mb-1">
                <Zap className="size-4 text-[#fbbf24]" />
                <span>100% Power Backup</span>
              </div>
              <p className="text-xs text-white/60">
                Triple synchronized heavy diesel generators guaranteeing zero flicker.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spaces Showcase Section */}
      <section id="spaces" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#34d399] uppercase tracking-wider mb-2">
              <Building2 className="size-3.5" />
              <span>Architectural Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white">
              Grand Arenas for Every Wedding Ritual
            </h2>
            <p className="text-sm text-white/60 mt-1 max-w-xl">
              From majestic high-ceiling ballrooms to starry seaside lawns, explore spaces scaled to elevate your milestones.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {SPACE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveSpaceFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeSpaceFilter === cat
                    ? "bg-[#10b981] text-black font-semibold shadow-md shadow-[#10b981]/20"
                    : "bg-[#070d0a] text-white/70 border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Spaces Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSpaces.map((space) => {
            const whatsappLink = `https://wa.me/919884012345?text=${encodeURIComponent(
              space.whatsappMsg
            )}`;

            return (
              <div
                key={space.id}
                className="group rounded-3xl bg-[#070d0a] border border-[#10b981]/20 hover:border-[#10b981]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Space Visual Header */}
                  <div
                    className={`relative h-60 bg-gradient-to-br ${space.gradient} p-6 sm:p-8 flex flex-col justify-between border-b border-white/10 overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:16px_16px]" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-[#34d399] border border-[#10b981]/30">
                        {space.category}
                      </span>
                      <span className="text-xs text-white/70 font-medium">
                        {space.area}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <span className="text-[11px] uppercase tracking-wider text-[#fbbf24] font-medium block">
                        Clear Height: {space.ceiling}
                      </span>
                      <h3 className="text-2xl font-bold font-serif text-white mt-1 group-hover:text-[#34d399] transition-colors">
                        {space.name}
                      </h3>
                      <p className="text-xs text-white/70 mt-1">
                        Capacity: {space.capacity}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div>
                      <span className="text-[10px] text-white/50 uppercase tracking-wider block mb-1">
                        Ideal Occasions
                      </span>
                      <p className="text-xs font-medium text-white/80">
                        {space.idealFor}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5">
                      <span className="text-[10px] text-white/50 uppercase tracking-wider block mb-2">
                        Key Specifications
                      </span>
                      <ul className="space-y-2">
                        {space.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-white/70">
                            <CheckCircle2 className="size-3.5 text-[#10b981] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 sm:p-8 pt-0">
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-white/50 uppercase tracking-wider block">
                        Hall Booking Desk
                      </span>
                      <span className="text-xs text-[#34d399] font-semibold">
                        Custom Decor Permitted
                      </span>
                    </div>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-black font-bold text-xs transition-all shadow-md"
                    >
                      <MessageCircle className="size-3.5 fill-black text-black" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gala & Wedding Packages Section */}
      <section id="packages" className="py-16 sm:py-20 border-y border-white/10 bg-[#070d0a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold text-[#34d399] uppercase tracking-wider">
              Transparent Pricing &amp; High Hospitality Standards
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white mt-2">
              Signature Gala &amp; Wedding Packages
            </h2>
            <p className="text-sm text-white/60 mt-3">
              Clear inclusive rates covering hall rental, suite accommodations, backup power, and valet management without hidden surcharges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => {
              const whatsappLink = `https://wa.me/919884012345?text=${encodeURIComponent(
                pkg.whatsappMsg
              )}`;

              const isPopular = pkg.id === "rajwada";

              return (
                <div
                  key={pkg.id}
                  className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    isPopular
                      ? "bg-gradient-to-b from-[#0e3b25] via-[#071d12] to-[#070d0a] border-2 border-[#10b981] shadow-2xl shadow-[#10b981]/15"
                      : "bg-[#050506] border border-white/10 hover:border-white/20"
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-black text-[11px] font-bold uppercase tracking-wider shadow-md">
                      {pkg.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between text-xs text-white/50 mb-3">
                      <span>{pkg.tier}</span>
                      <span className="text-[#34d399] font-medium">{pkg.duration}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                      {pkg.name}
                    </h3>

                    <div className="mt-4 mb-4">
                      <span className="text-2xl sm:text-3xl font-bold font-serif text-white">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-white/60 ml-2">/ Event Cycle</span>
                    </div>

                    <p className="text-xs text-white/70 leading-relaxed mb-6">
                      {pkg.description}
                    </p>

                    <div className="pt-4 border-t border-white/10 space-y-3">
                      <span className="text-[10px] text-white/50 uppercase tracking-wider block">
                        Included Services
                      </span>
                      <ul className="space-y-2">
                        {pkg.inclusions.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-white/80">
                            <CheckCircle2 className="size-3.5 text-[#10b981] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full font-bold text-xs transition-all shadow-md ${
                        isPopular
                          ? "bg-[#25d366] hover:bg-[#20ba59] text-black"
                          : "bg-[#10b981] hover:bg-[#059669] text-black"
                      }`}
                    >
                      <MessageCircle className="size-4 fill-black text-black" />
                      <span>Inquire Package Availability</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Estate Infrastructure & Technical Specs Section */}
      <section id="amenities" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#34d399] uppercase tracking-wider">
            Engineered for Flawless Execution
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white mt-2">
            World-Class Estate Infrastructure
          </h2>
          <p className="text-sm text-white/60 mt-3">
            Built from the ground up to support elaborate celebrity wedding decor, heavy electrical rigging, and fast guest transit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#070d0a] border border-[#10b981]/20 flex flex-col justify-between">
            <div>
              <div className="size-10 rounded-xl bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#34d399] mb-4">
                <Volume2 className="size-5" />
              </div>
              <h3 className="text-base font-bold text-white font-serif mb-2">
                Pillar-less High Span Acoustics
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                JBL line-array acoustic compliance with balanced sound dispersion, ensuring crystal-clear speech intelligibility across all 2,500 seats.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#34d399]">
              Concert Grade Rigging
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#070d0a] border border-[#10b981]/20 flex flex-col justify-between">
            <div>
              <div className="size-10 rounded-xl bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#34d399] mb-4">
                <BedDouble className="size-5" />
              </div>
              <h3 className="text-base font-bold text-white font-serif mb-2">
                24 Luxury Guest Suites
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                En-suite Italian marble bathrooms, dressing vanity mirrors, electronic safes, and direct elevator access to the main ballroom foyer.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#34d399]">
              Five-Star Finishings
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#070d0a] border border-[#10b981]/20 flex flex-col justify-between">
            <div>
              <div className="size-10 rounded-xl bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#34d399] mb-4">
                <Utensils className="size-5" />
              </div>
              <h3 className="text-base font-bold text-white font-serif mb-2">
                Dual High-Capacity Kitchens
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Independent stainless-steel kitchens for vegetarian and non-vegetarian catering, equipped with high-pressure gas banks and blast chillers.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#34d399]">
              HACCP Hygiene Compliant
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#070d0a] border border-[#10b981]/20 flex flex-col justify-between">
            <div>
              <div className="size-10 rounded-xl bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#34d399] mb-4">
                <Car className="size-5" />
              </div>
              <h3 className="text-base font-bold text-white font-serif mb-2">
                Valet Hub for 600 Cars
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Segregated ingress and egress gates on ECR, automated number plate recognition, and 12 fast EV charging stations for guests.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#34d399]">
              Zero Highway Congestion
            </div>
          </div>
        </div>
      </section>

      {/* Tour & Walkthrough Booking Section */}
      <section id="tour" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0c2e1f] via-[#071a11] to-[#050506] border border-[#10b981]/30 p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="absolute right-0 top-0 size-96 bg-[#10b981]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 text-[#34d399] text-xs font-semibold mb-4">
                <Calendar className="size-3.5" />
                <span>Site Walkthrough &amp; Muhurtham Calendar</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white leading-tight">
                Schedule a Private Estate Tour
              </h2>

              <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                Visit Grand Palace in person along the scenic East Coast Road. Our estate director will guide you through ballrooms, suites, and commercial dining facilities.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#34d399] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-white">Full Access to All 4 Venues</span>
                    <p className="text-xs text-white/60">
                      Walk through the Durbar Ballroom, Mughal Lawns, and inspect deluxe guest suites firsthand.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#34d399] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-white">Custom Decor &amp; Stage Feasibility</span>
                    <p className="text-xs text-white/60">
                      Discuss your wedding planner concept with our technical staging team on-site.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#34d399] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-white">Complimentary Valet on Arrival</span>
                    <p className="text-xs text-white/60">
                      Executive guest reception with refreshments at our ocean-breeze estate lobby.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive WhatsApp Tour Booking Card */}
            <div className="rounded-2xl bg-[#050506]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-md">
              <h3 className="text-lg font-bold font-serif text-white mb-2">
                Plan Your Site Visit
              </h3>
              <p className="text-xs text-white/60 mb-6">
                Select your event type and target timeline to schedule an executive appointment on WhatsApp.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-white/80 block mb-2">
                    Event Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Wedding Ceremony",
                      "Reception Gala",
                      "Sangeet & Cocktail",
                      "Corporate Convention",
                    ].map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedEventType(type)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${
                          selectedEventType === type
                            ? "bg-[#10b981]/20 border border-[#10b981] text-white"
                            : "bg-[#070d0a] border border-white/10 text-white/60 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-white/80 block mb-2">
                    Target Month
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "November 2026",
                      "December 2026",
                      "January 2027",
                      "Feb-March 2027",
                    ].map((month) => (
                      <button
                        key={month}
                        onClick={() => setSelectedMonth(month)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${
                          selectedMonth === month
                            ? "bg-[#10b981]/20 border border-[#10b981] text-white"
                            : "bg-[#070d0a] border border-white/10 text-white/60 hover:text-white"
                        }`}
                      >
                        {month}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-white/80 block mb-2">
                    Expected Attendance
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "300 to 600 Guests",
                      "800 to 1,500 Guests",
                      "1,500 to 2,500 Guests",
                      "2,500+ Mega Gala",
                    ].map((est) => (
                      <button
                        key={est}
                        onClick={() => setGuestCountEstimate(est)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${
                          guestCountEstimate === est
                            ? "bg-[#10b981]/20 border border-[#10b981] text-white"
                            : "bg-[#070d0a] border border-white/10 text-white/60 hover:text-white"
                        }`}
                      >
                        {est}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href={walkthroughWhatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-black font-bold text-sm transition-all shadow-lg shadow-[#25d366]/20"
                  >
                    <MessageCircle className="size-4 fill-black text-black" />
                    <span>Book Private Walkthrough on WhatsApp</span>
                  </a>
                  <p className="text-[11px] text-center text-white/40 mt-2">
                    Direct confirmation &middot; Open 7 days a week: 09:00 AM to 08:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-16 sm:py-20 border-t border-white/10 bg-[#070d0a]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Location Details */}
            <div className="p-6 rounded-2xl bg-[#050506] border border-white/10">
              <div className="flex items-center gap-2 text-[#34d399] font-semibold text-sm mb-3">
                <MapPin className="size-4" />
                <span>Estate Address</span>
              </div>
              <h3 className="text-lg font-bold text-white font-serif">ECR Highway Campus</h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                188 East Coast Road (ECR), Injambakkam, Chennai 600115 (Opposite Prarthana Beach)
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-white/50">Front Desk: 9 AM to 8 PM</span>
                <a href="tel:+919884012345" className="text-[#34d399] font-medium hover:underline">
                  +91 98840 12345
                </a>
              </div>
            </div>

            {/* Transport & Airport Access */}
            <div className="p-6 rounded-2xl bg-[#050506] border border-white/10">
              <div className="flex items-center gap-2 text-[#34d399] font-semibold text-sm mb-3">
                <Car className="size-4" />
                <span>Transit &amp; Accessibility</span>
              </div>
              <h3 className="text-lg font-bold text-white font-serif">Airport &amp; Metro Proximity</h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                25 minutes from Chennai International Airport via 200 Feet Radial Road. Private helipad on site.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-white/50">Helipad: DGCA Approved</span>
                <span className="text-[#fbbf24] font-medium">600 Car Valet</span>
              </div>
            </div>

            {/* Direct WhatsApp Concierge Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0c2e1f] to-[#050506] border border-[#10b981]/30 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#34d399] uppercase tracking-wider">
                  Direct Inquiries
                </span>
                <h3 className="text-lg font-bold text-white font-serif mt-1">
                  Have Specific Event Dates?
                </h3>
                <p className="text-xs text-white/70 mt-2 leading-relaxed">
                  Connect with our Venue General Manager on WhatsApp for calendar availability and customized catering options.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href="https://wa.me/919884012345?text=Hello%20Grand%20Palace,%20I%20have%20an%20urgent%20inquiry%20regarding%20dates"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-black font-bold text-xs transition-all shadow-md"
                >
                  <MessageCircle className="size-4 fill-black text-black" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standalone Footer with subtle CyberSlayerCorpz credit */}
      <footer className="py-10 sm:py-12 border-t border-white/10 text-xs text-white/50 bg-[#050506]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-bold text-white font-serif">Grand Palace Conventions &amp; Luxury Banquets</span>
            <span className="mx-2 text-white/30">&middot;</span>
            <span>ECR Coastal Highway, Chennai</span>
            <p className="mt-1 text-[11px] text-white/40">
              Magnificent royal architecture for grand weddings, galas, and corporate summits.
            </p>
          </div>

          <div className="text-[11px] text-white/40">
            <span>Demo platform by </span>
            <a
              href="https://cyberslayercorpz.dev"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:underline font-medium"
            >
              CyberSlayerCorpz
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
