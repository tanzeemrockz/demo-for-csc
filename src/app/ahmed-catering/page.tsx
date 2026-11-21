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
  courses: { label: string; items: string[] }[];
};

const PACKAGES: Package[] = [
  {
    id: "simple",
    tier: "01",
    name: "Simple Feast",
    tagline: "Essential dum biryani menu for intimate prayers and family gatherings",
    price: 260,
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
    desc: "Slow cooked over aged mango-wood logs and glowing charcoal. Infused with freshly ground spices and pure desi ghee. No gas shortcuts.",
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
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] selection:bg-[#FDE68A] selection:text-[#78350F] font-sans antialiased">
      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "border-[#E7E0D6] bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs"
            : "border-[#E7E0D6]/60 bg-[#FAF8F5]/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] flex items-center justify-center text-[#B45309] shrink-0 shadow-xs">
              <Flame className="size-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg text-[#1C1917] tracking-tight">
                  Ahmed Catering
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#92400E] px-2 py-0.5 rounded-full border border-[#FCD34D] bg-[#FEF3C7] hidden sm:inline-block">
                  Estd. 1994
                </span>
              </div>
              <p className="text-[11px] text-[#78716C] truncate">Palavakkam &amp; Taramani, Chennai</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-[#57534E]">
            <a href="#packages" className="hover:text-[#B45309] transition-colors">Banquet Packages</a>
            <a href="#calculator" className="hover:text-[#B45309] transition-colors">Event Calculator</a>
            <a href="#specialties" className="hover:text-[#B45309] transition-colors">Specialties</a>
            <a href="#kitchens" className="hover:text-[#B45309] transition-colors">Kitchen Locations</a>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href="tel:+919176868282"
              className="hidden md:inline-flex items-center gap-2 text-xs font-medium text-[#44403C] hover:text-[#1C1917] px-3.5 py-2 rounded-full border border-[#D6CEBF] bg-white hover:bg-[#FAF8F5] transition-all shadow-xs"
            >
              <Phone className="size-3.5 text-[#B45309]" />
              <span>+91 91768 68282</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-[#16A34A] hover:bg-[#15803D] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all shadow-md shadow-[#16A34A]/20 shrink-0"
            >
              <MessageCircle className="size-4" />
              <span>WhatsApp Quote</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 pb-20 sm:pb-28 overflow-hidden border-b border-[#E7E0D6]">
        {/* Warm ambient background */}
        <div aria-hidden className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-[#FDE68A]/30 blur-[130px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(#D6CEBF_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FCD34D] bg-[#FEF3C7] text-xs font-semibold text-[#92400E] shadow-xs">
            <Sparkles className="size-3.5 text-[#B45309]" />
            <span>Thirty Years of Authentic Wood-Fire Dum Biryani in Chennai</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#1C1917] leading-[1.1]">
            Grand Wedding Feasts &amp; Wood-Fire Dum Biryani
          </h1>

          <p className="text-sm sm:text-lg text-[#57534E] max-w-2xl mx-auto leading-relaxed font-normal">
            Slow cooked over aged mango wood logs and glowing charcoal. Prepared fresh for weddings, receptions, and corporate banquets across Chennai for 100 to 5,000 guests.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#B45309] hover:bg-[#92400E] text-white font-bold text-sm transition-all shadow-lg shadow-[#B45309]/20"
            >
              <span>Build Event Menu &amp; Calculate Cost</span>
              <ArrowRight className="size-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#D6CEBF] bg-white hover:bg-[#F5EFE6] text-[#1C1917] font-semibold text-sm transition-all shadow-xs"
            >
              <MessageCircle className="size-4 text-[#16A34A]" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="pt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="rounded-2xl border border-[#E7E0D6] bg-white p-4 sm:p-5 shadow-xs">
              <span className="text-[10px] sm:text-[11px] font-mono text-[#78716C] uppercase block font-semibold">KITCHEN HERITAGE</span>
              <span className="text-lg sm:text-2xl font-bold text-[#1C1917] mt-1 block">Since 1994</span>
              <span className="text-xs text-[#78716C]">Palavakkam Head Office</span>
            </div>
            <div className="rounded-2xl border border-[#E7E0D6] bg-white p-4 sm:p-5 shadow-xs">
              <span className="text-[10px] sm:text-[11px] font-mono text-[#78716C] uppercase block font-semibold">EVENT CAPACITY</span>
              <span className="text-lg sm:text-2xl font-bold text-[#B45309] mt-1 block">100 to 5,000+</span>
              <span className="text-xs text-[#78716C]">Guests per ceremony</span>
            </div>
            <div className="rounded-2xl border border-[#E7E0D6] bg-white p-4 sm:p-5 shadow-xs">
              <span className="text-[10px] sm:text-[11px] font-mono text-[#78716C] uppercase block font-semibold">COOKING METHOD</span>
              <span className="text-lg sm:text-2xl font-bold text-[#1C1917] mt-1 block">Wood-Fire Dum</span>
              <span className="text-xs text-[#78716C]">No gas flame shortcuts</span>
            </div>
            <div className="rounded-2xl border border-[#E7E0D6] bg-white p-4 sm:p-5 shadow-xs">
              <span className="text-[10px] sm:text-[11px] font-mono text-[#78716C] uppercase block font-semibold">SERVICE REACH</span>
              <span className="text-lg sm:text-2xl font-bold text-[#16A34A] mt-1 block">All Chennai</span>
              <span className="text-xs text-[#78716C]">OMR, ECR &amp; Central</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feast Packages Section */}
      <section id="packages" className="py-20 sm:py-28 border-b border-[#E7E0D6] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B45309] block font-mono">
              CURATED BANQUET MENUS
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
              Select Your Wedding Menu
            </h2>
            <p className="text-xs sm:text-base text-[#78716C]">
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
                      ? "border-[#B45309] bg-[#FFFBEB] shadow-xl shadow-[#B45309]/10 ring-2 ring-[#B45309]"
                      : "border-[#E7E0D6] bg-white hover:border-[#D6CEBF] hover:shadow-md"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase text-[#78716C] tracking-wider font-semibold">
                        TIER {pkg.tier}
                      </span>
                      {pkg.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]">
                          {pkg.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1C1917] tracking-tight">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-[#57534E] mt-1 leading-relaxed">
                        {pkg.tagline}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E7E0D6]">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#B45309]">
                        ₹{pkg.price}
                      </span>
                      <span className="text-xs text-[#78716C] ml-1.5 font-medium">per guest plate</span>
                    </div>

                    {/* Courses Breakdown */}
                    <div className="space-y-3.5 pt-2">
                      {pkg.courses.map((course, cIdx) => (
                        <div key={cIdx} className="space-y-1.5">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#78716C] block font-semibold">
                            {course.label}
                          </span>
                          <ul className="space-y-1.5">
                            {course.items.map((item, iIdx) => (
                              <li key={iIdx} className="text-xs text-[#44403C] flex items-start gap-2">
                                <Check className="size-3.5 text-[#B45309] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#E7E0D6]">
                    <button
                      type="button"
                      className={`w-full py-2.5 rounded-full text-xs font-bold text-center transition-all ${
                        isSelected
                          ? "bg-[#B45309] text-white shadow-xs"
                          : "bg-[#F5EFE6] text-[#57534E] hover:bg-[#EAE2D5] hover:text-[#1C1917]"
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
      <section id="calculator" className="py-20 sm:py-28 border-b border-[#E7E0D6] bg-[#F5EFE6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#E7E0D6] bg-white p-6 sm:p-10 lg:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-10 items-center">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#FCD34D] text-xs font-semibold text-[#92400E] mb-3 font-mono">
                    <Utensils className="size-3.5" />
                    <span>EVENT COST CALCULATOR</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight">
                    Estimate Your Wedding Feast
                  </h3>
                  <p className="text-xs sm:text-sm text-[#78716C] mt-1.5 leading-relaxed">
                    Adjust your expected attendance and date. The quote summary updates live and routes directly to Ahmed Catering kitchen managers on WhatsApp.
                  </p>
                </div>

                {/* Controls */}
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-[#44403C] block mb-1.5">
                      Selected Menu Package
                    </label>
                    <select
                      value={selectedPackageId}
                      onChange={(e) => setSelectedPackageId(e.target.value)}
                      className="w-full rounded-xl bg-[#FAF8F5] border border-[#D6CEBF] px-3.5 py-3 text-xs sm:text-sm text-[#1C1917] outline-none focus:border-[#B45309] transition-colors"
                    >
                      {PACKAGES.map((p) => (
                        <option key={p.id} value={p.id} className="bg-white text-[#1C1917]">
                          {p.name} (₹{p.price} per plate)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-semibold text-[#44403C] block mb-1.5">
                        Event Occasion
                      </label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full rounded-xl bg-[#FAF8F5] border border-[#D6CEBF] px-3.5 py-3 text-xs sm:text-sm text-[#1C1917] outline-none focus:border-[#B45309] transition-colors"
                      >
                        <option value="Wedding Reception">Wedding Reception</option>
                        <option value="Wedding Feast">Wedding Feast</option>
                        <option value="Engagement Banquet">Engagement Banquet</option>
                        <option value="Corporate Banquet">Corporate Banquet</option>
                        <option value="Private Celebration">Private Celebration</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#44403C] block mb-1.5">
                        Tentative Event Date
                      </label>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full rounded-xl bg-[#FAF8F5] border border-[#D6CEBF] px-3.5 py-3 text-xs sm:text-sm text-[#1C1917] outline-none focus:border-[#B45309] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Guest Slider */}
                  <div className="pt-2">
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="font-semibold text-[#44403C]">Estimated Guest Count</span>
                      <span className="text-lg font-bold text-[#B45309]">{guests} Guests</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="2000"
                      step="25"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full accent-[#B45309] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#78716C] mt-1 font-medium">
                      <span>100 pax</span>
                      <span>500 pax</span>
                      <span>1,000 pax</span>
                      <span>2,000+ pax</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Quote Output Card */}
              <div className="rounded-2xl border border-[#FDE68A] bg-[#FFFBEB] p-6 sm:p-7 space-y-5 shadow-sm">
                <div className="border-b border-[#FDE68A] pb-4">
                  <span className="text-[10px] font-mono text-[#92400E] uppercase tracking-wider block font-bold">
                    LIVE EVENT ESTIMATE
                  </span>
                  <div className="text-xl sm:text-2xl font-bold text-[#1C1917] mt-1">
                    {activePackage.name}
                  </div>
                  <div className="text-xs text-[#78716C] font-medium">
                    {eventType} for {guests} guests
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between text-[#57534E]">
                    <span>Base rate per plate</span>
                    <span className="text-[#1C1917] font-mono font-bold">₹{activePackage.price}</span>
                  </div>
                  <div className="flex justify-between text-[#57534E]">
                    <span>Confirmed guest count</span>
                    <span className="text-[#1C1917] font-mono font-bold">{guests} guests</span>
                  </div>
                  <div className="flex justify-between text-[#57534E]">
                    <span>Cooking method</span>
                    <span className="text-[#B45309] font-bold">Wood-Fire Dum Method</span>
                  </div>
                  <div className="flex justify-between text-[#57534E]">
                    <span>Delivery &amp; setup</span>
                    <span className="text-[#16A34A] font-bold">Included</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#FDE68A]">
                  <span className="text-[10px] font-mono text-[#78716C] uppercase block font-semibold">
                    ESTIMATED TOTAL BUDGET
                  </span>
                  <div className="text-2xl sm:text-4xl font-extrabold text-[#B45309] mt-0.5">
                    ₹{estimatedTotal.toLocaleString("en-IN")}
                  </div>
                  <span className="text-[11px] text-[#78716C] block mt-0.5">
                    Excludes applicable venue service taxes
                  </span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-[#16A34A]/25"
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
      <section id="specialties" className="py-20 sm:py-28 border-b border-[#E7E0D6] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B45309] block font-mono">
              BEYOND CONVENTIONAL MENUS
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
              Signature Specialties
            </h2>
            <p className="text-xs sm:text-base text-[#78716C]">
              Dishes perfected through decades of heritage culinary preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {SPECIALTIES.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <div
                  key={i}
                  className="rounded-3xl border border-[#E7E0D6] bg-white p-6 sm:p-7 space-y-3 hover:border-[#D6CEBF] hover:shadow-md transition-all shadow-xs"
                >
                  <div className="size-10 rounded-xl border border-[#FDE68A] bg-[#FEF3C7] flex items-center justify-center text-[#B45309] shadow-xs">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1C1917] tracking-tight">
                    {spec.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-normal">
                    {spec.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kitchens & Booking Locations */}
      <section id="kitchens" className="py-20 sm:py-28 border-b border-[#E7E0D6] bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B45309] block font-mono">
                DIRECT KITCHEN ACCESS
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
                Two Dedicated Kitchens Serving Greater Chennai
              </h2>
              <p className="text-xs sm:text-base text-[#57534E] leading-relaxed font-normal">
                To guarantee hot, freshly dum cooked meals for lunch banquets and evening wedding receptions, our cooking teams operate out of two strategic Chennai hubs.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-[#E7E0D6] bg-white shadow-xs">
                  <MapPin className="size-5 text-[#B45309] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#1C1917]">Palavakkam Head Office &amp; Central Kitchen</h4>
                    <p className="text-xs text-[#78716C] mt-1">
                      Palavakkam, Chennai 600041. Serving ECR, Thiruvanmiyur, Adyar, and South Chennai wedding halls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-[#E7E0D6] bg-white shadow-xs">
                  <MapPin className="size-5 text-[#B45309] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#1C1917]">Taramani Event Production Facility</h4>
                    <p className="text-xs text-[#78716C] mt-1">
                      Taramani, Chennai 600113. Serving OMR IT corridor, Velachery, Guindy, and central Chennai celebrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#E7E0D6] bg-white p-7 sm:p-10 text-center space-y-6 shadow-xl">
              <div className="size-14 rounded-2xl bg-[#FEF3C7] border border-[#FDE68A] text-[#B45309] mx-auto flex items-center justify-center shadow-xs">
                <Phone className="size-6" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1C1917]">Talk to Our Chef Desk</h3>
                <p className="text-xs sm:text-sm text-[#78716C] mt-1.5 max-w-sm mx-auto">
                  Planning an event with specific dietary preferences or customized starters? Contact our kitchen leads directly.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href="tel:+919176868282"
                  className="block text-2xl sm:text-3xl font-extrabold text-[#B45309] hover:underline tracking-tight"
                >
                  +91 91768 68282
                </a>
                <a
                  href="tel:+919176968282"
                  className="block text-base sm:text-lg font-bold text-[#57534E] hover:text-[#1C1917]"
                >
                  +91 91769 68282
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm transition-all shadow-md"
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
      <footer className="py-10 sm:py-12 border-t border-[#E7E0D6] text-xs text-[#78716C] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-bold text-[#1C1917]">Ahmed Catering</span>
            <span className="mx-2 text-[#D6CEBF]">•</span>
            <span>Palavakkam &amp; Taramani, Chennai</span>
            <p className="mt-1 text-[11px] text-[#A8A29E]">
              © {new Date().getFullYear()} Ahmed Catering. All rights reserved.
            </p>
          </div>

          <div className="text-[11px] text-[#78716C]">
            <span>Official digital demo engineered by </span>
            <a
              href="https://cyberslayercorpz.dev"
              target="_blank"
              rel="noreferrer"
              className="text-[#1C1917] hover:underline font-medium"
            >
              CyberSlayerCorpz
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
