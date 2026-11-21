"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight,
  ArrowUpRight, 
  Calendar,
  Check, 
  ChefHat,
  Clock, 
  Flame, 
  MapPin, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  Star,
  Users, 
  Utensils
} from "lucide-react";
import { Container } from "@/components/ui/container";

type Package = {
  id: string;
  name: string;
  tagline: string;
  pricePerPlate: number;
  highlight?: string;
  courses: {
    category: string;
    items: string[];
  }[];
};

const PACKAGES: Package[] = [
  {
    id: "simple",
    name: "Simple Feast",
    tagline: "Essential wood-fire biryani menu for intimate celebrations and prayers",
    pricePerPlate: 260,
    courses: [
      {
        category: "Main Course",
        items: [
          "Authentic Wood-Fire Mutton or Chicken Dum Biryani",
          "Signature Brinjal Dalcha (Ennai Kathirikai)",
          "Chilled Onion Raitha",
        ],
      },
      {
        category: "Dessert & Beverages",
        items: [
          "Hot Ghee Pineapple Kesari",
          "Packaged Mineral Water (500 ml)",
        ],
      },
    ],
  },
  {
    id: "superb",
    name: "Superb Banquet",
    tagline: "Our most requested wedding feast with starters, biryani, and dual desserts",
    pricePerPlate: 380,
    highlight: "MOST POPULAR",
    courses: [
      {
        category: "Welcome & Appetizers",
        items: [
          "Chilled Welcome Drink on Arrival",
          "Crisp Chennai-Style Chicken 65",
        ],
      },
      {
        category: "Main Course",
        items: [
          "Signature Wood-Fire Dum Biryani (Tender Mutton or Chicken)",
          "Traditional Brinjal Gravy",
          "Thick Chilled Onion Raitha",
        ],
      },
      {
        category: "Dessert & Finish",
        items: [
          "Rich Ghee Bread Halwa",
          "Vanilla or Butterscotch Ice Cream Cup",
          "Packaged Mineral Water (500 ml)",
        ],
      },
    ],
  },
  {
    id: "excellent",
    name: "Excellent Grand Feast",
    tagline: "Comprehensive multi-course banquet for traditional wedding receptions",
    pricePerPlate: 490,
    highlight: "WEDDING SPECIAL",
    courses: [
      {
        category: "Welcome Course",
        items: [
          "Welcome Drinks (Rose Milk or Fresh Fruit Punch)",
          "Hot Idiappam or Flaky Chapati with Rich Mutton or Chicken Gravy",
        ],
      },
      {
        category: "Starters & Biryani",
        items: [
          "Crispy Spiced Chicken 65",
          "Traditional Wood-Fire Dum Biryani (Seeraga Samba or Basmati)",
          "Brinjal Dalcha & Chilled Onion Raitha",
        ],
      },
      {
        category: "Desserts & Royal Finish",
        items: [
          "Ghee Bread Halwa or Hyderabadi Sheer Khurma",
          "Premium Ice Cream Cup",
          "Sweet Beeda Paan",
          "Packaged Mineral Water (500 ml)",
        ],
      },
    ],
  },
  {
    id: "royal",
    name: "Royal Reception Feast",
    tagline: "Grand multi-course feast featuring soups, live counters, and dual gravies",
    pricePerPlate: 690,
    highlight: "ROYAL BANQUET",
    courses: [
      {
        category: "Soups & Starters",
        items: [
          "Hot Mutton Bone Soup or Chicken Pepper Soup",
          "Welcome Drinks on Arrival",
          "Chicken Leg Fry & Tandoori Starters",
        ],
      },
      {
        category: "Tiffin & Biryani Courses",
        items: [
          "Soft Idiappam & Malabar Parotta with Rich Gravy",
          "Signature Wood-Fire Mutton Dum Biryani",
          "Brinjal Dalcha & Onion Raitha",
          "Steamed Curd Rice with Fresh South Indian Pickles",
        ],
      },
      {
        category: "Sweets & Live Stalls",
        items: [
          "Hot Gulab Jamun & Rich Bread Halwa",
          "Live Dessert Counters: Fresh Popcorn, Cotton Candy, Fruit Salad",
          "Premium Ice Cream, Sweet Beeda & Bottled Water",
        ],
      },
    ],
  },
];

const SPECIALTIES = [
  {
    title: "Wood-Fire Dum Biryani",
    desc: "Slow-cooked over mango wood logs and charcoal. Infused with freshly ground spices and pure ghee.",
  },
  {
    title: "Full Lamb Roast",
    desc: "Whole seasoned lamb marinated for twelve hours in traditional spices, prepared for milestone feasts.",
  },
  {
    title: "Vanjaram Fish Fry",
    desc: "Fresh coastal seer fish slices marinated in stone-ground Chettinad masala and pan-fried crisp.",
  },
  {
    title: "Authentic Haleem",
    desc: "Slow-simmered tender meat, broken wheat, and lentils, pounded to rich consistency with pure ghee.",
  },
  {
    title: "Hyderabadi Sheer Khurma",
    desc: "Fine roasted vermicelli cooked in full-cream milk with Medjool dates, saffron, and pistachios.",
  },
  {
    title: "Live Event Counters",
    desc: "Interactive live stalls for tandoor breads, hot kebabs, chaat, and artisan sweet paan.",
  },
];

export default function AhmedCateringRedesign() {
  const [selectedPackageId, setSelectedPackageId] = useState<string>("superb");
  const [guests, setGuests] = useState<number>(350);
  const [eventType, setEventType] = useState<string>("Wedding Reception");
  const [eventDate, setEventDate] = useState<string>("");

  const activePackage = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[1];
  const estimatedTotal = guests * activePackage.pricePerPlate;

  const whatsappMessage = encodeURIComponent(
    `Vanakkam Ahmed Catering team,\n\n` +
    `I am exploring your menu packages for an upcoming event:\n` +
    `• Package: ${activePackage.name} (₹${activePackage.pricePerPlate}/plate)\n` +
    `• Occasion: ${eventType}\n` +
    `• Guest Count: ${guests} guests\n` +
    (eventDate ? `• Tentative Date: ${eventDate}\n` : ``) +
    `• Estimated Total: ₹${estimatedTotal.toLocaleString("en-IN")}\n\n` +
    `Please share your availability and finalized quote.`
  );

  const whatsappUrl = `https://wa.me/919176868282?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-[#070708] text-[#f5f5f5] selection:bg-[#d4af37] selection:text-black">
      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#070708]/90 backdrop-blur-xl">
        <Container className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex size-10 items-center justify-center rounded-xl border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#d4af37]">
              <Flame className="size-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base tracking-tight text-white group-hover:text-[#d4af37] transition-colors">
                  Ahmed Catering
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] px-2 py-0.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5">
                  Estd. 1994
                </span>
              </div>
              <p className="text-[11px] text-white/50">Palavakkam &amp; Taramani, Chennai</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-white/70">
            <a href="#packages" className="hover:text-white transition-colors">Feast Packages</a>
            <a href="#specialties" className="hover:text-white transition-colors">Signature Specialties</a>
            <a href="#calculator" className="hover:text-white transition-colors">Event Calculator</a>
            <a href="#kitchens" className="hover:text-white transition-colors">Kitchen Locations</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919176868282"
              className="hidden sm:inline-flex items-center gap-2 text-xs text-white/70 hover:text-white px-3 py-1.5 rounded-full border border-white/10"
            >
              <Phone className="size-3" />
              <span>+91 91768 68282</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold bg-[#d4af37] hover:bg-[#e5c158] text-black px-4 py-2 rounded-full transition-all shadow-md shadow-[#d4af37]/20"
            >
              <MessageCircle className="size-3.5" />
              <span>WhatsApp Quote</span>
            </a>
          </div>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-white/[0.08]">
        <div aria-hidden className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/10 blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <Container className="text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-xs font-medium text-[#d4af37]">
            <Sparkles className="size-3.5" />
            <span>Thirty Years of Authentic Wood-Fire Dum Biryani in Chennai</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06]">
            Grand Wedding Feasts &amp; Wood-Fire Dum Biryani
          </h1>

          <p className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Slow cooked over aged firewood logs and glowing charcoal. Prepared fresh for weddings, receptions, and corporate banquets across Chennai.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#d4af37] hover:bg-[#e5c158] text-black font-semibold text-sm transition-all shadow-lg shadow-[#d4af37]/25"
            >
              <span>Build Event Menu &amp; Calculate Cost</span>
              <ArrowRight className="size-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm transition-all"
            >
              <MessageCircle className="size-4 text-emerald-400" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
              <span className="text-[11px] font-mono text-white/40 uppercase block">KITCHEN HERITAGE</span>
              <span className="text-xl font-bold text-white mt-1 block">Since 1994</span>
              <span className="text-xs text-white/50">Palavakkam Head Office</span>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
              <span className="text-[11px] font-mono text-white/40 uppercase block">EVENT CAPACITY</span>
              <span className="text-xl font-bold text-[#d4af37] mt-1 block">100 to 5,000+</span>
              <span className="text-xs text-white/50">Guests per ceremony</span>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
              <span className="text-[11px] font-mono text-white/40 uppercase block">COOKING DISCIPLINE</span>
              <span className="text-xl font-bold text-white mt-1 block">Pure Wood-Fire</span>
              <span className="text-xs text-white/50">No gas flame shortcuts</span>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
              <span className="text-[11px] font-mono text-white/40 uppercase block">SERVICE REACH</span>
              <span className="text-xl font-bold text-emerald-400 mt-1 block">All Chennai</span>
              <span className="text-xs text-white/50">OMR, ECR &amp; Central venues</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Feast Packages Section */}
      <section id="packages" className="py-24 border-b border-white/[0.08]">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] block">
              Curated Banquet Packages
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Select Your Wedding Menu
            </h2>
            <p className="text-sm sm:text-base text-white/60">
              Complete multi-course packages prepared with farm-fresh meats, stone-ground masalas, and pure ghee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGES.map((pkg) => {
              const isSelected = selectedPackageId === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackageId(pkg.id)}
                  className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all cursor-pointer border ${
                    isSelected
                      ? "border-[#d4af37] bg-white/[0.05] shadow-2xl shadow-[#d4af37]/15 ring-1 ring-[#d4af37]"
                      : "border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono uppercase text-white/40 tracking-wider">
                        MENU TIER
                      </span>
                      {pkg.highlight && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30">
                          {pkg.highlight}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-white/60 mt-1 leading-relaxed">
                        {pkg.tagline}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/[0.08]">
                      <span className="text-2xl font-extrabold text-[#d4af37]">
                        ₹{pkg.pricePerPlate}
                      </span>
                      <span className="text-xs text-white/50 ml-1.5">per guest plate</span>
                    </div>

                    {/* Courses Breakdown */}
                    <div className="space-y-4 pt-2">
                      {pkg.courses.map((course, cIdx) => (
                        <div key={cIdx} className="space-y-1.5">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">
                            {course.category}
                          </span>
                          <ul className="space-y-1.5">
                            {course.items.map((item, iIdx) => (
                              <li key={iIdx} className="text-xs text-white/80 flex items-start gap-2">
                                <Check className="size-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.08]">
                    <div className={`w-full py-2.5 rounded-full text-xs font-semibold text-center transition-all ${
                      isSelected
                        ? "bg-[#d4af37] text-black"
                        : "bg-white/[0.06] text-white/70 hover:text-white"
                    }`}>
                      {isSelected ? "Selected for Calculator" : "Tap to Select"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Interactive Banquet Calculator */}
      <section id="calculator" className="py-24 border-b border-white/[0.08] bg-[#09090c]">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl border border-white/[0.12] bg-[#0c0d12] p-7 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold text-[#d4af37] mb-3">
                    <Utensils className="size-3.5" />
                    <span>EVENT COST CALCULATOR</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                    Estimate Your Wedding Feast
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 mt-1.5 leading-relaxed">
                    Adjust your expected attendance and date. The quote summary updates live and routes directly to Ahmed Catering kitchen managers on WhatsApp.
                  </p>
                </div>

                {/* Controls */}
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-white/70 block mb-1.5">
                      Selected Menu Package
                    </label>
                    <select
                      value={selectedPackageId}
                      onChange={(e) => setSelectedPackageId(e.target.value)}
                      className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#d4af37]"
                    >
                      {PACKAGES.map((p) => (
                        <option key={p.id} value={p.id} className="bg-[#070708]">
                          {p.name} (₹{p.pricePerPlate}/plate)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-medium text-white/70 block mb-1.5">
                        Event Occasion
                      </label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#d4af37]"
                      >
                        <option value="Wedding Reception" className="bg-[#070708]">Wedding Reception</option>
                        <option value="Wedding Feast" className="bg-[#070708]">Wedding Feast</option>
                        <option value="Engagement Banquet" className="bg-[#070708]">Engagement Banquet</option>
                        <option value="Corporate Banquet" className="bg-[#070708]">Corporate Banquet</option>
                        <option value="Private Celebration" className="bg-[#070708]">Private Celebration</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-white/70 block mb-1.5">
                        Tentative Event Date
                      </label>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  {/* Guest Slider */}
                  <div className="pt-2">
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="text-white/70">Estimated Guest Count</span>
                      <span className="text-lg font-bold text-[#d4af37]">{guests} Guests</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="2000"
                      step="25"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full accent-[#d4af37] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-white/40 mt-1">
                      <span>100 pax</span>
                      <span>500 pax</span>
                      <span>1,000 pax</span>
                      <span>2,000+ pax</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Quote Output Card */}
              <div className="rounded-2xl border border-white/10 bg-[#07070a] p-6 sm:p-7 space-y-5">
                <div className="border-b border-white/[0.08] pb-4">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">
                    LIVE EVENT ESTIMATE
                  </span>
                  <div className="text-2xl font-bold text-white mt-1">
                    {activePackage.name}
                  </div>
                  <div className="text-xs text-white/60">
                    {eventType} for {guests} guests
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between text-white/70">
                    <span>Base rate per plate</span>
                    <span className="text-white font-mono">₹{activePackage.pricePerPlate}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Confirmed guest count</span>
                    <span className="text-white font-mono">{guests} guests</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Cooking method</span>
                    <span className="text-[#d4af37] font-medium">Wood-Fire Dum Method</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Delivery &amp; setup</span>
                    <span className="text-emerald-400 font-medium">Included</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <span className="text-[10px] font-mono text-white/40 uppercase block">
                    ESTIMATED TOTAL BUDGET
                  </span>
                  <div className="text-3xl font-extrabold text-[#d4af37] mt-0.5">
                    ₹{estimatedTotal.toLocaleString("en-IN")}
                  </div>
                  <span className="text-[11px] text-white/40 block mt-0.5">
                    Excludes applicable venue service taxes
                  </span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-all shadow-lg hover:shadow-emerald-500/25"
                >
                  <MessageCircle className="size-4" />
                  <span>Reserve Date via WhatsApp</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Signature Specialties Showcase */}
      <section id="specialties" className="py-24 border-b border-white/[0.08]">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] block">
              Beyond Conventional Menus
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Signature Specialties
            </h2>
            <p className="text-sm sm:text-base text-white/60">
              Dishes perfected through decades of heritage culinary preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALTIES.map((spec, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 space-y-3 hover:border-white/20 hover:bg-white/[0.04] transition-all"
              >
                <div className="size-10 rounded-xl border border-[#d4af37]/30 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                  <ChefHat className="size-5" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {spec.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Kitchens & Booking Locations */}
      <section id="kitchens" className="py-24 border-b border-white/[0.08] bg-[#09090c]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] block">
                Direct Kitchen Access
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Two Dedicated Kitchens Serving Greater Chennai
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
                To guarantee hot, freshly dum-cooked meals for lunch banquets and evening wedding receptions, our cooking teams operate out of two strategic Chennai hubs.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                  <MapPin className="size-5 text-[#d4af37] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-bold text-white">Palavakkam Head Office &amp; Central Kitchen</h4>
                    <p className="text-xs text-white/60 mt-1">
                      Palavakkam, Chennai - 600041. Serving ECR, Thiruvanmiyur, Adyar, and South Chennai wedding halls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                  <MapPin className="size-5 text-[#d4af37] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-bold text-white">Taramani Event Production Facility</h4>
                    <p className="text-xs text-white/60 mt-1">
                      Taramani, Chennai - 600113. Serving OMR IT corridor, Velachery, Guindy, and central Chennai celebrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0c0d12] p-8 sm:p-10 text-center space-y-6">
              <div className="size-14 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] mx-auto flex items-center justify-center">
                <Phone className="size-6" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">Talk to Our Chef Desk</h3>
                <p className="text-xs sm:text-sm text-white/60 mt-1.5 max-w-sm mx-auto">
                  Planning an event with specific dietary preferences or customized starters? Contact our kitchen leads directly.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href="tel:+919176868282"
                  className="block text-2xl sm:text-3xl font-extrabold text-[#d4af37] hover:underline tracking-tight"
                >
                  +91 91768 68282
                </a>
                <a
                  href="tel:+919176968282"
                  className="block text-lg font-bold text-white/70 hover:text-white"
                >
                  +91 91769 68282
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-all shadow-md"
                >
                  <MessageCircle className="size-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/[0.06] text-xs text-white/50">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-bold text-white">Ahmed Catering</span>
            <span className="mx-2 text-white/30">•</span>
            <span>Palavakkam &amp; Taramani, Chennai</span>
            <p className="mt-1 text-[11px] text-white/40">
              &copy; {new Date().getFullYear()} Ahmed Catering. All rights reserved.
            </p>
          </div>

          <div className="text-[11px] text-white/40">
            <span>Official digital platform engineered by </span>
            <a
              href="https://cyberslayercorpz.dev"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:underline"
            >
              CyberSlayerCorpz
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
