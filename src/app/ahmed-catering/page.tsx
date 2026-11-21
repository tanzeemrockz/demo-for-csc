"use client";

import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Check, 
  ChefHat, 
  Flame, 
  MapPin, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  Utensils 
} from "lucide-react";

type Package = {
  id: string;
  tier: string;
  name: string;
  tagline: string;
  price: number;
  badge?: string;
  color: string;
  courses: { label: string; items: string[] }[];
};

const PACKAGES: Package[] = [
  {
    id: "simple",
    tier: "01",
    name: "Simple Feast",
    tagline: "Essential dum biryani menu for intimate prayers and family gatherings",
    price: 260,
    color: "#c8a96e",
    courses: [
      {
        label: "Main Course",
        items: [
          "Authentic Wood-Fire Mutton or Chicken Dum Biryani",
          "Signature Brinjal Dalcha (Ennai Kathirikai)",
          "Chilled Onion Raitha",
        ],
      },
      {
        label: "Dessert & Beverages",
        items: [
          "Hot Ghee Pineapple Kesari",
          "Packaged Mineral Water (500 ml)",
        ],
      },
    ],
  },
  {
    id: "superb",
    tier: "02",
    name: "Superb Banquet",
    tagline: "Our most requested wedding feast with starters, biryani, and dual desserts",
    price: 380,
    badge: "Most Requested",
    color: "#d4af37",
    courses: [
      {
        label: "Welcome & Appetizers",
        items: [
          "Chilled Welcome Drink on Arrival",
          "Crisp Chennai-Style Chicken 65",
        ],
      },
      {
        label: "Main Course",
        items: [
          "Signature Wood-Fire Dum Biryani (Tender Mutton or Chicken)",
          "Traditional Brinjal Gravy",
          "Thick Chilled Onion Raitha",
        ],
      },
      {
        label: "Dessert & Finish",
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
    tier: "03",
    name: "Excellent Grand Feast",
    tagline: "Comprehensive multi-course banquet for traditional wedding receptions",
    price: 490,
    badge: "Wedding Special",
    color: "#e8c547",
    courses: [
      {
        label: "Welcome Course",
        items: [
          "Welcome Drinks (Rose Milk or Fresh Fruit Punch)",
          "Hot Idiappam or Flaky Chapati with Rich Mutton or Chicken Gravy",
        ],
      },
      {
        label: "Starters & Biryani",
        items: [
          "Crispy Spiced Chicken 65",
          "Traditional Wood-Fire Dum Biryani (Seeraga Samba or Basmati)",
          "Brinjal Dalcha & Chilled Onion Raitha",
        ],
      },
      {
        label: "Desserts & Royal Finish",
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
    tier: "04",
    name: "Royal Reception Feast",
    tagline: "Grand multi-course banquet with soups, live counters, and dual gravies",
    price: 690,
    badge: "Royal Banquet",
    color: "#f5d060",
    courses: [
      {
        label: "Soups & Starters",
        items: [
          "Hot Mutton Bone Soup or Chicken Pepper Soup",
          "Welcome Drinks on Arrival",
          "Chicken Leg Fry & Tandoori Starters",
        ],
      },
      {
        label: "Tiffin & Biryani Courses",
        items: [
          "Soft Idiappam & Malabar Parotta with Rich Gravy",
          "Signature Wood-Fire Mutton Dum Biryani",
          "Brinjal Dalcha & Onion Raitha",
          "Steamed Curd Rice with Fresh South Indian Pickles",
        ],
      },
      {
        label: "Sweets & Live Stalls",
        items: [
          "Hot Gulab Jamun & Rich Bread Halwa",
          "Live Dessert Counters (Popcorn, Cotton Candy, Fruit Salad)",
          "Premium Ice Cream, Sweet Beeda & Bottled Water",
        ],
      },
    ],
  },
];

const SPECIALTIES = [
  {
    icon: Flame,
    name: "Wood-Fire Dum Biryani",
    desc: "Slow-cooked over aged mango-wood logs and glowing charcoal. Infused with freshly ground spices and pure desi ghee. No gas shortcuts.",
  },
  {
    icon: Utensils,
    name: "Full Lamb Roast",
    desc: "Whole seasoned lamb marinated for twelve hours in traditional spices. Prepared as the centerpiece for milestone celebrations and grand receptions.",
  },
  {
    icon: ChefHat,
    name: "Vanjaram Fish Fry",
    desc: "Fresh coastal seer fish slices marinated in stone-ground Chettinad masala and pan-fried to a crisp golden finish.",
  },
  {
    icon: Sparkles,
    name: "Authentic Haleem",
    desc: "Slow-simmered tender meat, broken wheat, and lentils pounded to a rich, velvety consistency and finished with pure ghee and crisp fried onions.",
  },
  {
    icon: Sparkles,
    name: "Hyderabadi Sheer Khurma",
    desc: "Fine roasted vermicelli cooked in full-cream milk with Medjool dates, saffron strands, and hand-crushed pistachios.",
  },
  {
    icon: Utensils,
    name: "Live Event Counters",
    desc: "Interactive live stalls for hot tandoor breads, fresh seekh kebabs, chaat counters, and artisan sweet paan for grand events.",
  },
];

export default function AhmedCateringPage() {
  const [selectedPackageId, setSelectedPackageId] = useState<string>("superb");
  const [guests, setGuests] = useState<number>(350);
  const [eventType, setEventType] = useState<string>("Wedding Reception");
  const [eventDate, setEventDate] = useState<string>("");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activePackage = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[1];
  const estimatedTotal = guests * activePackage.price;

  const whatsappMessage = encodeURIComponent(
    `Vanakkam Ahmed Catering team,\n\n` +
    `I am exploring your wedding banquet packages for an upcoming event:\n` +
    `• Package: ${activePackage.name} (Rs. ${activePackage.price} per plate)\n` +
    `• Occasion: ${eventType}\n` +
    `• Guest Count: ${guests} guests\n` +
    (eventDate ? `• Tentative Date: ${eventDate}\n` : ``) +
    `• Estimated Budget: Rs. ${estimatedTotal.toLocaleString("en-IN")}\n\n` +
    `Please share your availability and finalized quote.`
  );

  const whatsappUrl = `https://wa.me/919176868282?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-[#050506] text-[#f5f0e8] selection:bg-[#d4af37] selection:text-black font-sans antialiased">
      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "border-white/10 bg-[#050506]/95 backdrop-blur-md shadow-2xl"
            : "border-white/5 bg-[#050506]/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
              <Flame className="size-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg text-white tracking-tight">
                  Ahmed Catering
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] px-2 py-0.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 hidden sm:inline-block">
                  Estd. 1994
                </span>
              </div>
              <p className="text-[11px] text-white/50 truncate">Palavakkam &amp; Taramani, Chennai</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-white/60">
            <a href="#packages" className="hover:text-white transition-colors">Banquet Packages</a>
            <a href="#calculator" className="hover:text-white transition-colors">Event Calculator</a>
            <a href="#specialties" className="hover:text-white transition-colors">Specialties</a>
            <a href="#kitchens" className="hover:text-white transition-colors">Kitchen Locations</a>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href="tel:+919176868282"
              className="hidden md:inline-flex items-center gap-2 text-xs font-medium text-white/80 hover:text-white px-3.5 py-2 rounded-full border border-white/10 hover:border-white/20 transition-all"
            >
              <Phone className="size-3.5 text-[#d4af37]" />
              <span>+91 91768 68282</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-[#25D366] hover:bg-[#20ba59] text-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all shadow-md shadow-[#25D366]/20 shrink-0"
            >
              <MessageCircle className="size-4" />
              <span>WhatsApp Quote</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 pb-20 sm:pb-28 overflow-hidden border-b border-white/5">
        <div aria-hidden className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-[#d4af37]/10 blur-[140px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-xs font-medium text-[#d4af37]">
            <Sparkles className="size-3.5" />
            <span>Thirty Years of Authentic Wood-Fire Dum Biryani in Chennai</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Grand Wedding Feasts &amp; Wood-Fire Dum Biryani
          </h1>

          <p className="text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Slow cooked over aged mango wood logs and glowing charcoal. Prepared fresh for weddings, receptions, and corporate banquets across Chennai for 100 to 5,000 guests.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#d4af37] hover:bg-[#e5c158] text-black font-bold text-sm transition-all shadow-lg shadow-[#d4af37]/25"
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
              <MessageCircle className="size-4 text-[#25D366]" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="pt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
              <span className="text-[10px] sm:text-[11px] font-mono text-white/40 uppercase block">KITCHEN HERITAGE</span>
              <span className="text-lg sm:text-2xl font-bold text-white mt-1 block">Since 1994</span>
              <span className="text-xs text-white/50">Palavakkam Head Office</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
              <span className="text-[10px] sm:text-[11px] font-mono text-white/40 uppercase block">EVENT CAPACITY</span>
              <span className="text-lg sm:text-2xl font-bold text-[#d4af37] mt-1 block">100 to 5,000+</span>
              <span className="text-xs text-white/50">Guests per ceremony</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
              <span className="text-[10px] sm:text-[11px] font-mono text-white/40 uppercase block">COOKING METHOD</span>
              <span className="text-lg sm:text-2xl font-bold text-white mt-1 block">Wood-Fire Dum</span>
              <span className="text-xs text-white/50">No gas flame shortcuts</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
              <span className="text-[10px] sm:text-[11px] font-mono text-white/40 uppercase block">SERVICE REACH</span>
              <span className="text-lg sm:text-2xl font-bold text-[#25D366] mt-1 block">All Chennai</span>
              <span className="text-xs text-white/50">OMR, ECR &amp; Central</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feast Packages Section */}
      <section id="packages" className="py-20 sm:py-28 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] block font-mono">
              CURATED BANQUET MENUS
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Select Your Wedding Menu
            </h2>
            <p className="text-xs sm:text-base text-white/60">
              Full multi-course packages prepared with farm-fresh meats, stone-ground spices, and pure ghee.
            </p>
          </div>

          {/* Package Selector Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PACKAGES.map((pkg) => {
              const isSelected = selectedPackageId === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackageId(pkg.id)}
                  className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all cursor-pointer border ${
                    isSelected
                      ? "border-[#d4af37] bg-white/[0.06] shadow-2xl shadow-[#d4af37]/15 ring-1 ring-[#d4af37]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase text-white/40 tracking-wider">
                        TIER {pkg.tier}
                      </span>
                      {pkg.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30">
                          {pkg.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-white/60 mt-1 leading-relaxed">
                        {pkg.tagline}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#d4af37]">
                        ₹{pkg.price}
                      </span>
                      <span className="text-xs text-white/50 ml-1.5">per guest plate</span>
                    </div>

                    {/* Courses Breakdown */}
                    <div className="space-y-3.5 pt-2">
                      {pkg.courses.map((course, cIdx) => (
                        <div key={cIdx} className="space-y-1.5">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">
                            {course.label}
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

                  <div className="pt-5 mt-5 border-t border-white/10">
                    <button
                      type="button"
                      className={`w-full py-2.5 rounded-full text-xs font-semibold text-center transition-all ${
                        isSelected
                          ? "bg-[#d4af37] text-black"
                          : "bg-white/[0.06] text-white/70 hover:text-white"
                      }`}
                    >
                      {isSelected ? "Selected for Calculator" : "Tap to Select"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Banquet Calculator */}
      <section id="calculator" className="py-20 sm:py-28 border-b border-white/5 bg-[#07070a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/15 bg-[#0a0a0f] p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-10 items-center">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold text-[#d4af37] mb-3 font-mono">
                    <Utensils className="size-3.5" />
                    <span>EVENT COST CALCULATOR</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
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
                      className="w-full rounded-xl bg-white/[0.04] border border-white/15 px-3.5 py-3 text-xs sm:text-sm text-white outline-none focus:border-[#d4af37] transition-colors"
                    >
                      {PACKAGES.map((p) => (
                        <option key={p.id} value={p.id} className="bg-[#070708] text-white">
                          {p.name} (₹{p.price} per plate)
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
                        className="w-full rounded-xl bg-white/[0.04] border border-white/15 px-3.5 py-3 text-xs sm:text-sm text-white outline-none focus:border-[#d4af37] transition-colors"
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
                        className="w-full rounded-xl bg-white/[0.04] border border-white/15 px-3.5 py-3 text-xs sm:text-sm text-white outline-none focus:border-[#d4af37] transition-colors"
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
              <div className="rounded-2xl border border-white/15 bg-[#050508] p-6 sm:p-7 space-y-5">
                <div className="border-b border-white/10 pb-4">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">
                    LIVE EVENT ESTIMATE
                  </span>
                  <div className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {activePackage.name}
                  </div>
                  <div className="text-xs text-white/60">
                    {eventType} for {guests} guests
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between text-white/70">
                    <span>Base rate per plate</span>
                    <span className="text-white font-mono">₹{activePackage.price}</span>
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
                    <span className="text-[#25D366] font-medium">Included</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] font-mono text-white/40 uppercase block">
                    ESTIMATED TOTAL BUDGET
                  </span>
                  <div className="text-2xl sm:text-4xl font-extrabold text-[#d4af37] mt-0.5">
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
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-[#25D366]/25"
                >
                  <MessageCircle className="size-4" />
                  <span>Reserve Date via WhatsApp</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Specialties Showcase */}
      <section id="specialties" className="py-20 sm:py-28 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] block font-mono">
              BEYOND CONVENTIONAL MENUS
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Signature Specialties
            </h2>
            <p className="text-xs sm:text-base text-white/60">
              Dishes perfected through decades of heritage culinary preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {SPECIALTIES.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <div
                  key={i}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 space-y-3 hover:border-white/20 hover:bg-white/[0.04] transition-all"
                >
                  <div className="size-10 rounded-xl border border-[#d4af37]/30 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {spec.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                    {spec.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kitchens & Booking Locations */}
      <section id="kitchens" className="py-20 sm:py-28 border-b border-white/5 bg-[#07070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] block font-mono">
                DIRECT KITCHEN ACCESS
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Two Dedicated Kitchens Serving Greater Chennai
              </h2>
              <p className="text-xs sm:text-base text-white/70 leading-relaxed font-normal">
                To guarantee hot, freshly dum cooked meals for lunch banquets and evening wedding receptions, our cooking teams operate out of two strategic Chennai hubs.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <MapPin className="size-5 text-[#d4af37] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">Palavakkam Head Office &amp; Central Kitchen</h4>
                    <p className="text-xs text-white/60 mt-1">
                      Palavakkam, Chennai 600041. Serving ECR, Thiruvanmiyur, Adyar, and South Chennai wedding halls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <MapPin className="size-5 text-[#d4af37] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">Taramani Event Production Facility</h4>
                    <p className="text-xs text-white/60 mt-1">
                      Taramani, Chennai 600113. Serving OMR IT corridor, Velachery, Guindy, and central Chennai celebrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-[#0a0a0f] p-7 sm:p-10 text-center space-y-6">
              <div className="size-14 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] mx-auto flex items-center justify-center">
                <Phone className="size-6" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Talk to Our Chef Desk</h3>
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
                  className="block text-base sm:text-lg font-bold text-white/70 hover:text-white"
                >
                  +91 91769 68282
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs sm:text-sm transition-all shadow-md"
                >
                  <MessageCircle className="size-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standalone Footer with subtle CyberSlayerCorpz credit */}
      <footer className="py-10 sm:py-12 border-t border-white/5 text-xs text-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-bold text-white">Ahmed Catering</span>
            <span className="mx-2 text-white/30">•</span>
            <span>Palavakkam &amp; Taramani, Chennai</span>
            <p className="mt-1 text-[11px] text-white/40">
              © {new Date().getFullYear()} Ahmed Catering. All rights reserved.
            </p>
          </div>

          <div className="text-[11px] text-white/40">
            <span>Official digital demo engineered by </span>
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
