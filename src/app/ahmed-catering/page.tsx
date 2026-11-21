"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Flame, 
  HeartHandshake, 
  MapPin, 
  MessageCircle, 
  PhoneCall, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  UtensilsCrossed, 
  Zap 
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

type PackageOption = {
  id: string;
  name: string;
  subtitle: string;
  estPrice: string;
  badge?: string;
  items: string[];
};

const PACKAGES: PackageOption[] = [
  {
    id: "simple",
    name: "Simple (Budget-Friendly)",
    subtitle: "Essential Wedding & Function Biryani Feast",
    estPrice: "Starting from ₹240 / plate",
    items: [
      "Traditional Wood-Fire Chicken or Mutton Biryani",
      "Signature Brinjal Dalcha (Ennai Kathirikai)",
      "Chilled Onion Raitha",
      "Hot Pineapple Kesari Sweet",
      "Packaged Mineral Water (500 ml)",
    ],
  },
  {
    id: "superb",
    name: "Superb (Simply Superb)",
    subtitle: "Our Most Popular Feast with Starter & Dessert",
    estPrice: "Starting from ₹340 / plate",
    badge: "MOST POPULAR",
    items: [
      "Chilled Welcome Drink on Arrival",
      "Crispy Chennai-Style Chicken 65",
      "Traditional Wood-Fire Dum Biryani (Mutton/Chicken)",
      "Traditional Brinjal Gravy & Onion Raitha",
      "Rich Ghee Bread Halwa",
      "Vanilla / Butterscotch Ice Cream Cup",
      "Packaged Mineral Water (500 ml)",
    ],
  },
  {
    id: "excellent",
    name: "Excellent (All-Time Favorite)",
    subtitle: "Complete Multi-Course Wedding Banquet",
    estPrice: "Starting from ₹460 / plate",
    badge: "WEDDING SPECIAL",
    items: [
      "Welcome Drinks (Rose Milk / Fruit Punch)",
      "Hot Idiappam or Chapati with Mutton/Chicken Gravy",
      "Signature Chicken 65 Starter",
      "Authentic Wood-Fire Dum Biryani",
      "Brinjal Dalcha & Rich Onion Raitha",
      "Bread Halwa or Hyderabadi Sheer Khurma",
      "Premium Ice Cream & Sweet Beeda Paan",
      "Packaged Mineral Water (500 ml)",
    ],
  },
  {
    id: "great",
    name: "Great (The Royal Feast)",
    subtitle: "Grand Reception Experience with Live Counters",
    estPrice: "Starting from ₹680 / plate",
    badge: "ROYAL BANQUET",
    items: [
      "Welcome Drinks & Hot Mutton/Chicken Soup",
      "Idiappam & Flaky Malabar Parotta with Gravy",
      "Chicken Leg Fry & Tandoori Starters",
      "Signature Dum Biryani (Tender Mutton)",
      "Gulab Jamun Sweet & Bread Halwa",
      "Curd Rice with South Indian Pickles",
      "Live Counters: Popcorn, Cotton Candy, Fruit Salad",
      "Premium Ice Cream, Sweet Beeda & Mineral Water",
    ],
  },
];

const SPECIALTIES = [
  "Wood-Fire Dum Biryani",
  "Full Lamb Roast",
  "Vanjaram Fish Fry",
  "Authentic Haleem",
  "Chicken Haryali Kebab",
  "Reshmi & Sheek Kebabs",
  "Bread Halwa",
  "Sheer Khurma",
];

export default function AhmedCateringDemo() {
  const [selectedPkg, setSelectedPkg] = useState<string>("superb");
  const [guestCount, setGuestCount] = useState<number>(350);
  const [eventDate, setEventDate] = useState<string>("");
  const [eventType, setEventType] = useState<string>("Wedding Feast");

  const currentPkg = PACKAGES.find((p) => p.id === selectedPkg) || PACKAGES[1];

  const whatsappMessage = encodeURIComponent(
    `Vanakkam Ahmed Catering! I explored your digital menu demo and would like a custom quote:\n\n` +
    `• Package: ${currentPkg.name}\n` +
    `• Event Type: ${eventType}\n` +
    `• Estimated Guests: ${guestCount} pax\n` +
    (eventDate ? `• Tentative Date: ${eventDate}\n\n` : `\n`) +
    `Please share your availability and finalized per-plate quote.`
  );

  const whatsappUrl = `https://wa.me/919176868282?text=${whatsappMessage}`;

  return (
    <div className="relative min-h-screen bg-[#070708] text-[#f5f5f5] selection:bg-accent-orange selection:text-black">
      {/* Top Prototype Notice Banner */}
      <div className="w-full bg-gradient-to-r from-accent-orange/20 via-white/[0.05] to-accent-blue/20 border-b border-white/10 px-4 py-2.5 text-center text-xs text-white/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-accent-orange">LIVE PROTOTYPE:</span>
            <span>Prepared for <strong>Ahmed Catering (Chennai)</strong></span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-white/60">
            <span>Engineered by CyberSlayerCorpz</span>
            <Link href="/" className="text-white hover:underline">
              Back to Directory
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Showcase */}
      <section className="relative pt-16 sm:pt-24 pb-16 border-b border-white/[0.08] overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent-orange/10 blur-[140px] rounded-full" />
          <div className="hero-grid-texture" />
        </div>

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-orange/30 bg-accent-orange/10 text-xs font-semibold text-accent-orange backdrop-blur-md">
              <Flame className="size-3.5 text-accent-orange" />
              <span>AUTHENTIC WOOD-FIRE CHENNAI DUM BIRYANI SPECIALISTS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Ahmed Catering
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-white/80 max-w-2xl mx-auto">
              Grand Wedding Feasts, Slow-Cooked Dum Biryani &amp; Banquets Across Chennai
            </p>

            <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto leading-relaxed">
              Serving Palavakkam, Taramani, OMR, ECR, and all greater Chennai venues. Crafted using traditional firewoods, premium Basmati grains, and farm-fresh ingredients.
            </p>

            {/* Quick Action Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-all shadow-lg hover:shadow-emerald-500/20"
              >
                <MessageCircle className="size-4" />
                <span>Quick WhatsApp Quote (+91 91768 68282)</span>
              </a>
              <a
                href="tel:+919176868282"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08] transition-all"
              >
                <PhoneCall className="size-3.5" />
                <span>Call Kitchen Desk</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <div className="text-[11px] font-mono text-white/40 uppercase">EXPERIENCE</div>
                <div className="text-base font-bold text-white mt-0.5">30+ Years</div>
                <div className="text-[11px] text-white/50">Palavakkam Kitchen</div>
              </div>
              <div className="p-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <div className="text-[11px] font-mono text-white/40 uppercase">CAPACITY</div>
                <div className="text-base font-bold text-emerald-400 mt-0.5">100 to 5,000+</div>
                <div className="text-[11px] text-white/50">Guests Per Event</div>
              </div>
              <div className="p-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <div className="text-[11px] font-mono text-white/40 uppercase">PREPARATION</div>
                <div className="text-base font-bold text-accent-orange mt-0.5">Pure Wood-Fire</div>
                <div className="text-[11px] text-white/50">Slow Dum Method</div>
              </div>
              <div className="p-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <div className="text-[11px] font-mono text-white/40 uppercase">SPEED STANDARD</div>
                <div className="text-base font-bold text-accent-blue mt-0.5">&lt; 0.6s TTFB</div>
                <div className="text-[11px] text-white/50">Instant Mobile Load</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Menu Package Selector & Estimator */}
      <section className="py-16 sm:py-24 border-b border-white/[0.08]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-orange block mb-1">
              Interactive Menu Selector
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Select Your Feast Package
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Explore Ahmed Catering's verified non-vegetarian wedding packages and instantly calculate your event details.
            </p>
          </div>

          {/* Package Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PACKAGES.map((pkg) => {
              const isSelected = selectedPkg === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPkg(pkg.id)}
                  className={`rounded-3xl p-6 flex flex-col justify-between transition-all cursor-pointer border ${
                    isSelected
                      ? "border-accent-orange bg-white/[0.05] shadow-xl shadow-accent-orange/10 -translate-y-1"
                      : "border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/10 bg-white/[0.03] text-white/60">
                        PACKAGE
                      </span>
                      {pkg.badge && (
                        <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-accent-orange/20 text-accent-orange border border-accent-orange/30">
                          {pkg.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-white/50 mt-1">
                        {pkg.subtitle}
                      </p>
                    </div>

                    <div className="text-xs font-mono text-emerald-400 font-semibold pt-1">
                      {pkg.estPrice}
                    </div>

                    {/* Menu Items List */}
                    <ul className="space-y-2 pt-3 border-t border-white/[0.08] text-xs text-white/70">
                      {pkg.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-accent-orange shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.08]">
                    <div className={`w-full py-2 rounded-full text-xs font-semibold text-center transition-all ${
                      isSelected
                        ? "bg-accent-orange text-black"
                        : "bg-white/[0.05] text-white/70 hover:text-white"
                    }`}>
                      {isSelected ? "Selected Package" : "Tap to Select"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Real-Time Live Quote Estimator Card */}
          <div className="mt-12 rounded-3xl border border-white/[0.12] bg-[#0c0d12]/90 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
                  <Sparkles className="size-3.5" />
                  <span>STEP 2: CONFIGURE EVENT GUESTS</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Instant Quote Summary
                </h3>

                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Adjust your guest count and select the event date. Clicking the button below opens WhatsApp directly with Ahmed Catering sales desk with all specs pre-filled.
                </p>

                {/* Event Type & Date Input */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="text-[11px] font-mono text-white/50 block mb-1">
                      EVENT OCCASION
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-accent-orange"
                    >
                      <option value="Wedding Feast" className="bg-[#070708]">Wedding Feast</option>
                      <option value="Wedding Reception" className="bg-[#070708]">Wedding Reception</option>
                      <option value="Engagement Banquet" className="bg-[#070708]">Engagement Banquet</option>
                      <option value="Corporate Celebration" className="bg-[#070708]">Corporate Celebration</option>
                      <option value="Family Gathering / Party" className="bg-[#070708]">Family Gathering / Party</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-white/50 block mb-1">
                      TENTATIVE DATE
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-accent-orange"
                    />
                  </div>
                </div>

                {/* Guest Count Slider */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-white/50">GUEST COUNT:</span>
                    <span className="font-bold text-accent-orange text-base">{guestCount} Guests</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="50"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full accent-accent-orange cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-white/40 mt-1">
                    <span>100 pax</span>
                    <span>500 pax</span>
                    <span>1,000 pax</span>
                    <span>2,000+ pax</span>
                  </div>
                </div>
              </div>

              {/* Generated Live Summary Output Box */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#050608] border border-white/[0.08] space-y-5">
                <div className="border-b border-white/[0.08] pb-4">
                  <span className="text-[10px] font-mono text-white/40 uppercase">LIVE SUMMARY</span>
                  <div className="text-xl font-bold text-white mt-1">
                    {currentPkg.name}
                  </div>
                  <div className="text-xs text-white/50">
                    For {guestCount} guests • {eventType}
                  </div>
                </div>

                <div className="space-y-2 text-xs text-white/80">
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-white/50">Dum Biryani Style</span>
                    <span className="font-medium text-white">Traditional Wood-Fire</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-white/50">Total Courses</span>
                    <span className="font-medium text-white">{currentPkg.items.length} Distinct Dishes</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-white/50">Delivery &amp; Service</span>
                    <span className="font-medium text-emerald-400">All Chennai Locations</span>
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-all shadow-lg hover:shadow-emerald-500/25"
                  >
                    <MessageCircle className="size-4" />
                    <span>Send Inquiry to Ahmed Catering WhatsApp</span>
                    <ArrowUpRight className="size-4" />
                  </a>
                  <p className="text-[11px] text-center text-white/40 mt-2">
                    Pre-fills your WhatsApp chat with all details above. Direct to +91 91768 68282.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Signature Specialties Strip */}
      <section className="py-14 border-b border-white/[0.08] bg-[#070708]/90">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-orange block mb-1">
                Signature Specialties
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Beyond Standard Catering
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 max-w-xl">
              {SPECIALTIES.map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/[0.03] text-white/80"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Production Handover Pitch for Ahmed Catering Management */}
      <section className="py-16 sm:py-24 bg-[#0a0a0e] border-b border-white/[0.08]">
        <Container>
          <div className="max-w-3xl mx-auto rounded-3xl border border-accent-orange/30 bg-accent-orange/[0.03] p-8 sm:p-12 text-center space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-orange block">
              For Ahmed Catering Management
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to launch this on your own official domain?
            </h2>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl mx-auto">
              This demo was engineered by <strong>CyberSlayerCorpz</strong> to showcase how an unbloated, sub-second web platform converts incoming phone calls and Instagram browsers into finalized event bookings.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-2">
              <div className="p-4 rounded-xl border border-white/10 bg-black/50">
                <div className="text-xs font-bold text-white mb-1">Turnkey Launch</div>
                <div className="text-xs text-white/60">Delivered on your domain with official corporate email setup.</div>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-black/50">
                <div className="text-xs font-bold text-white mb-1">Sub-Second Speed</div>
                <div className="text-xs text-white/60">Edge hosted on Vercel: loads instantly even on weak mobile networks.</div>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-black/50">
                <div className="text-xs font-bold text-white mb-1">Flat ₹7,000 Starter</div>
                <div className="text-xs text-white/60">50% advance via UPI (GPay/PhonePe), 100% code ownership.</div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/917667271516?text=Hi%20Tanzeem%2C%20we%20reviewed%20the%20Ahmed%20Catering%20demo%20and%20want%20to%20proceed%20with%20launching%20our%20website"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all shadow-lg"
              >
                <span>Launch This Website (WhatsApp Us)</span>
                <ArrowUpRight className="size-4" />
              </a>
              <Link
                href="/"
                className="text-xs text-white/60 hover:text-white transition-colors"
              >
                View Other Verified Client Builds
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-xs text-white/40 border-t border-white/[0.04]">
        <Container>
          <p>
            Demo preview engineered for Ahmed Catering by CyberSlayerCorpz. All brand trademarks remain property of their respective owners.
          </p>
        </Container>
      </footer>
    </div>
  );
}
