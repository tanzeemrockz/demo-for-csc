"use client";

import { useState } from "react";
import {
  Sparkles,
  Phone,
  MessageCircle,
  ShieldCheck,
  Gem,
  Scissors,
  Video,
  Clock,
  MapPin,
  ChevronRight,
  Award,
  Layers,
  Heart,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: "Bridal Kanjivaram" | "Banarasi Brocade" | "Soft Silk and Organza" | "Men Heritage Kurtas";
  description: string;
  price: string;
  badge: string;
  weave: string;
  zari: string;
  colorTone: string;
  gradient: string;
  whatsappMsg: string;
}

const PRODUCTS: Product[] = [
  {
    id: "swarnamukhi",
    name: "Swarnamukhi Bridal Kanjivaram",
    category: "Bridal Kanjivaram",
    description:
      "Pure crimson silk with authentic 2-gram gold korvai border and temple gopuram motifs hand-knotted by Kanchipuram master weavers.",
    price: "Rs 48,500",
    badge: "Bestseller",
    weave: "Handloom Korvai Weave",
    zari: "2-Gram Tested Gold Zari",
    colorTone: "Deep Crimson & Royal Gold",
    gradient: "from-[#4a0e17] via-[#240b10] to-[#0d0d12]",
    whatsappMsg:
      "Hello Vastra Silks, I am interested in Swarnamukhi Bridal Kanjivaram (Rs 48,500)",
  },
  {
    id: "mayilkan",
    name: "Mayilkan Royal Violet Silk",
    category: "Bridal Kanjivaram",
    description:
      "Deep amethyst silk featuring peacock feather zari buttas, pure mulberry silk yarn, and contrast magenta rich pallu.",
    price: "Rs 34,200",
    badge: "Artisan Weave",
    weave: "Traditional Pit Loom",
    zari: "Half-Fine Gold & Silver Zari",
    colorTone: "Royal Amethyst & Magenta",
    gradient: "from-[#2b1055] via-[#160b2c] to-[#0d0d12]",
    whatsappMsg:
      "Hello Vastra Silks, I am interested in Mayilkan Royal Violet Silk (Rs 34,200)",
  },
  {
    id: "varamahalaxmi",
    name: "Varamahalaxmi Emerald Brocade",
    category: "Bridal Kanjivaram",
    description:
      "Forest emerald green silk with antique gold floral jaal work across body, double-warp construction, and heavy bridal border.",
    price: "Rs 56,000",
    badge: "Bridal Heirloom",
    weave: "Double Warp Kanjivaram",
    zari: "Authentic Antique Gold Zari",
    colorTone: "Forest Emerald & Antique Gold",
    gradient: "from-[#0d3322] via-[#091b13] to-[#0d0d12]",
    whatsappMsg:
      "Hello Vastra Silks, I am interested in Varamahalaxmi Emerald Brocade (Rs 56,000)",
  },
  {
    id: "padmashri",
    name: "Padmashri Banarasi Katan Silk",
    category: "Banarasi Brocade",
    description:
      "Handwoven midnight indigo with pure silver and gold zari kadwa floral motifs, celebrating five centuries of Varanasi heritage.",
    price: "Rs 42,000",
    badge: "Pure Katan",
    weave: "Varanasi Kadwa Handloom",
    zari: "Ganga-Jamuna Dual Zari",
    colorTone: "Midnight Indigo & Silver",
    gradient: "from-[#111e38] via-[#0a1224] to-[#0d0d12]",
    whatsappMsg:
      "Hello Vastra Silks, I am interested in Padmashri Banarasi Katan Silk (Rs 42,000)",
  },
  {
    id: "samudrika",
    name: "Samudrika Sunset Organza Silk",
    category: "Soft Silk and Organza",
    description:
      "Pastel peach hand-painted sheer organza with scalloped golden zari threadwork and lightweight feather-soft drape.",
    price: "Rs 24,500",
    badge: "Contemporary",
    weave: "Organza Sheer Weave",
    zari: "Delicate Rose Gold Threadwork",
    colorTone: "Pastel Peach & Rose Gold",
    gradient: "from-[#44231b] via-[#241310] to-[#0d0d12]",
    whatsappMsg:
      "Hello Vastra Silks, I am interested in Samudrika Sunset Organza Silk (Rs 24,500)",
  },
  {
    id: "ganga-jamuna",
    name: "Ganga-Jamuna Men Silk Kurta & Dhoti",
    category: "Men Heritage Kurtas",
    description:
      "Pure raw silk ensemble with gold tissue borders crafted for groom wedding rituals, paired with matching angavastram.",
    price: "Rs 18,900",
    badge: "Groom Collection",
    weave: "Raw Mulberry Matka Silk",
    zari: "Tissue Zari Border",
    colorTone: "Raw Ivory & Gold Tissue",
    gradient: "from-[#332a14] via-[#1c170b] to-[#0d0d12]",
    whatsappMsg:
      "Hello Vastra Silks, I am interested in Ganga-Jamuna Men Silk Ensemble (Rs 18,900)",
  },
];

const CATEGORIES = [
  "All Collections",
  "Bridal Kanjivaram",
  "Banarasi Brocade",
  "Soft Silk and Organza",
  "Men Heritage Kurtas",
] as const;

export default function VastraSilksPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Collections");
  const [selectedSlot, setSelectedSlot] = useState<string>("Morning (10:30 AM)");
  const [selectedOccasion, setSelectedOccasion] = useState<string>("Muhurtham Wedding");
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  const filteredProducts =
    activeCategory === "All Collections"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const toggleLike = (id: string) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const consultationWhatsappUrl = `https://wa.me/919840012345?text=${encodeURIComponent(
    `Hello Vastra Silks, I would like to book a bridal consultation for ${selectedOccasion} during the ${selectedSlot} slot.`
  )}`;

  return (
    <div className="relative min-h-screen bg-[#050506] text-white">
      {/* Top Announcement Bar */}
      <div className="border-b border-[#d4af37]/20 bg-[#0d0d12]/90 backdrop-blur-md px-4 py-2 text-center text-xs tracking-wide text-[#d4af37] flex items-center justify-center gap-2">
        <Sparkles className="size-3.5 text-[#d4af37]" />
        <span>Auspicous Muhurtham Season: Book personalized bridal draping appointments in T. Nagar</span>
        <span className="hidden sm:inline text-white/30">|</span>
        <span className="hidden sm:inline text-white/70">Silk Mark Govt. Certified Guarantee</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050506]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-full border border-[#d4af37]/50 bg-gradient-to-br from-[#241a08] to-[#0d0d12] flex items-center justify-center shadow-lg shadow-[#d4af37]/10">
              <span className="font-serif text-lg font-bold text-[#d4af37]">VS</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold tracking-wider uppercase text-white font-serif">
                  Vastra Silks
                </span>
                <span className="rounded bg-[#d4af37]/15 px-1.5 py-0.5 text-[10px] font-semibold text-[#d4af37] border border-[#d4af37]/30">
                  ESTD 1984
                </span>
              </div>
              <p className="text-[11px] text-white/60 tracking-tight">
                Pure Mulberry Silks &middot; Kanchipuram &amp; Varanasi
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider text-white/70">
            <a href="#catalogue" className="hover:text-[#d4af37] transition-colors">
              Catalogue
            </a>
            <a href="#craftsmanship" className="hover:text-[#d4af37] transition-colors">
              Craftsmanship
            </a>
            <a href="#concierge" className="hover:text-[#d4af37] transition-colors">
              Lounge &amp; Video Call
            </a>
            <a href="#contact" className="hover:text-[#d4af37] transition-colors">
              Boutique Stores
            </a>
          </nav>

          {/* Quick Contact & WhatsApp CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden lg:flex flex-col text-right text-xs">
              <span className="text-white/50 text-[10px]">T. Nagar &middot; Cathedral Road</span>
              <a href="tel:+919840012345" className="text-white font-semibold hover:text-[#d4af37]">
                +91 98400 12345
              </a>
            </div>

            <a
              href="https://wa.me/919840012345?text=Hello%20Vastra%20Silks,%20I%20would%20like%20to%20inquire%20about%20your%20Bridal%20Collection"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-black font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg shadow-[#25d366]/20"
            >
              <MessageCircle className="size-4 fill-black text-black" />
              <span>WhatsApp Inquire</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(212,175,55,0.18),rgba(225,29,72,0.08),rgba(5,5,6,0))]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-medium mb-6">
            <Award className="size-3.5" />
            <span>Pure Handloom Silk Mark Certified</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto font-serif leading-tight">
            Pure Handloom Silks Spun for Once-in-a-Lifetime Celebrations
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Curated bridal Kanjivarams with certified 2-gram gold zari, authentic hand-knotted borders, and lightweight tussar selections woven by master artisans.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#catalogue"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#e11d48] text-white font-semibold text-sm hover:opacity-95 transition-all shadow-lg shadow-[#d4af37]/20"
            >
              <span>View Wedding Catalogue</span>
              <ChevronRight className="size-4" />
            </a>

            <a
              href="https://wa.me/919840012345?text=Hello%20Vastra%20Silks,%20I%20would%20like%20to%20book%20a%20bridal%20consultation"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0d0d12] border border-[#d4af37]/40 hover:border-[#d4af37] text-white font-semibold text-sm transition-all"
            >
              <MessageCircle className="size-4 text-[#25d366]" />
              <span>WhatsApp Bridal Stylist</span>
            </a>
          </div>

          {/* Trust Highlights Grid */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-[#0d0d12]/80 border border-white/10 backdrop-blur-sm text-left">
              <div className="flex items-center gap-2 text-[#d4af37] font-semibold text-sm mb-1">
                <CheckCircle2 className="size-4" />
                <span>100% Pure Mulberry Silk</span>
              </div>
              <p className="text-xs text-white/60">
                Rigorous purity testing under Silk Mark standards with official hallmark tags.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0d0d12]/80 border border-white/10 backdrop-blur-sm text-left">
              <div className="flex items-center gap-2 text-[#d4af37] font-semibold text-sm mb-1">
                <Layers className="size-4" />
                <span>3,500+ Sarees in Stock</span>
              </div>
              <p className="text-xs text-white/60">
                Exclusive handpicked weaves ranging from classic vintage crimson to contemporary pastels.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0d0d12]/80 border border-white/10 backdrop-blur-sm text-left">
              <div className="flex items-center gap-2 text-[#d4af37] font-semibold text-sm mb-1">
                <ShieldCheck className="size-4" />
                <span>Worldwide Insured Delivery</span>
              </div>
              <p className="text-xs text-white/60">
                Secure door-to-door courier service across India, USA, UK, Singapore, and UAE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue & Interactive Filter Section */}
      <section id="catalogue" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-2">
              <Gem className="size-3.5" />
              <span>Curated Bridal &amp; Festive Collection</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white">
              Handcrafted Masterpieces Ready for Dispatch
            </h2>
            <p className="text-sm text-white/60 mt-1 max-w-xl">
              Each saree is a singular work of art requiring 14 to 30 days of meticulous pit-loom weaving.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#d4af37] text-black font-semibold shadow-md shadow-[#d4af37]/20"
                    : "bg-[#0d0d12] text-white/70 border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const isLiked = likedItems[product.id];
            const whatsappLink = `https://wa.me/919840012345?text=${encodeURIComponent(
              product.whatsappMsg
            )}`;

            return (
              <div
                key={product.id}
                className="group rounded-2xl bg-[#0d0d12] border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/10"
              >
                <div>
                  {/* Visual Artwork Banner */}
                  <div
                    className={`relative h-56 bg-gradient-to-br ${product.gradient} p-6 flex flex-col justify-between border-b border-white/10 overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:16px_16px]" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-[#d4af37] border border-[#d4af37]/30">
                        {product.badge}
                      </span>
                      <button
                        onClick={() => toggleLike(product.id)}
                        className={`size-8 rounded-full flex items-center justify-center backdrop-blur-md transition-colors ${
                          isLiked
                            ? "bg-[#e11d48] text-white"
                            : "bg-black/50 text-white/70 hover:text-white border border-white/10"
                        }`}
                        aria-label="Save to favorites"
                      >
                        <Heart className={`size-4 ${isLiked ? "fill-white" : ""}`} />
                      </button>
                    </div>

                    <div className="relative z-10">
                      <span className="text-[11px] uppercase tracking-wider text-white/60">
                        {product.colorTone}
                      </span>
                      <h3 className="text-xl font-bold font-serif text-white mt-1 group-hover:text-[#d4af37] transition-colors">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <p className="text-xs text-white/70 leading-relaxed min-h-[48px]">
                      {product.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-white/5 text-[11px]">
                      <div className="flex items-center justify-between text-white/60">
                        <span>Weave Type</span>
                        <span className="text-white font-medium">{product.weave}</span>
                      </div>
                      <div className="flex items-center justify-between text-white/60">
                        <span>Zari Purity</span>
                        <span className="text-[#d4af37] font-medium">{product.zari}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer with Price and WhatsApp CTA */}
                <div className="p-5 sm:p-6 pt-0">
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <span className="text-[10px] text-white/50 uppercase tracking-wider block">
                        Price (Taxes Incl.)
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-white font-serif">
                        {product.price}
                      </span>
                    </div>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-black font-bold text-xs transition-all shadow-md"
                    >
                      <MessageCircle className="size-3.5 fill-black text-black" />
                      <span>WhatsApp Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Craftsmanship & Trust Pillars Section */}
      <section id="craftsmanship" className="py-16 sm:py-20 border-y border-white/10 bg-[#0d0d12]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
              Four Decades of Purity &amp; Trust
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white mt-2">
              The Vastra Silks Craftsmanship Promise
            </h2>
            <p className="text-sm text-white/60 mt-3">
              We eliminate middlemen to bring authentic handloom creations directly from loom master families to your family wedding trousseau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#050506] border border-[#d4af37]/20 flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-4">
                  <Award className="size-5" />
                </div>
                <h3 className="text-base font-bold text-white font-serif mb-2">
                  Silk Mark Certified Purity
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Every warp and weft tested and labeled under the Silk Mark Organization of India, certifying 100 percent natural silk filament yarn.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#d4af37]">
                Official Hallmark Guarantee
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#050506] border border-[#d4af37]/20 flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-4">
                  <Layers className="size-5" />
                </div>
                <h3 className="text-base font-bold text-white font-serif mb-2">
                  Direct From Weavers Guild
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Sourced directly from over 240 master weaver families in Kanchipuram, Arani, and Varanasi with transparent fair-trade compensation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#d4af37]">
                Fair Trade Handloom Guild
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#050506] border border-[#d4af37]/20 flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-4">
                  <Scissors className="size-5" />
                </div>
                <h3 className="text-base font-bold text-white font-serif mb-2">
                  Custom Blouse Styling
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  On-site master zardosi artisans and aari embroidery experts customize matching designer blouses tailored to your wedding ceremony palette.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#d4af37]">
                In-House Master Tailors
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#050506] border border-[#d4af37]/20 flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-4">
                  <Video className="size-5" />
                </div>
                <h3 className="text-base font-bold text-white font-serif mb-2">
                  Live Video Shopping
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Private virtual draping consultation with 4K color accuracy cameras, enabling families worldwide to inspect zari sheen and pallu drape.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#d4af37]">
                Global Video Appointments
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge & Video Shopping Booking Section */}
      <section id="concierge" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#161208] via-[#0d0d12] to-[#050506] border border-[#d4af37]/30 p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="absolute right-0 top-0 size-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold mb-4">
                <Video className="size-3.5" />
                <span>Private Bridal Lounge &amp; Video Styling</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white leading-tight">
                Experience Personalized Trousseau Selection
              </h2>

              <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                Whether visiting our private bridal lounge in T. Nagar or scheduling a virtual video shopping session from across the world, our senior silk curators provide dedicated attention.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-white">One-on-One Draper Assistance</span>
                    <p className="text-xs text-white/60">
                      Senior stylists drape sarees on life-size mannequins under true daylight spectrum lighting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-white">Family Video Conference Link</span>
                    <p className="text-xs text-white/60">
                      Connect grandparents, parents, and friends across multiple cities on a single interactive video stream.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-white">Complimentary Color Palette Matching</span>
                    <p className="text-xs text-white/60">
                      Coordinate groom sherwani, bridesmaid sarees, and stage decor fabric swatches in real time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive WhatsApp Booking Card */}
            <div className="rounded-2xl bg-[#050506]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-md">
              <h3 className="text-lg font-bold font-serif text-white mb-2">
                Book Your Video Shopping Session
              </h3>
              <p className="text-xs text-white/60 mb-6">
                Choose your ceremony and preferred time slot to generate instant WhatsApp appointment confirmation.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-white/80 block mb-2">
                    Select Ceremony
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Muhurtham Wedding",
                      "Reception Evening",
                      "Sangeet & Cocktail",
                      "Engagement / Roka",
                    ].map((occ) => (
                      <button
                        key={occ}
                        onClick={() => setSelectedOccasion(occ)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${
                          selectedOccasion === occ
                            ? "bg-[#d4af37]/20 border border-[#d4af37] text-white"
                            : "bg-[#0d0d12] border border-white/10 text-white/60 hover:text-white"
                        }`}
                      >
                        {occ}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-white/80 block mb-2">
                    Preferred Time Slot
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Morning (10:30 AM)",
                      "Noon (01:00 PM)",
                      "Afternoon (04:30 PM)",
                      "Evening (07:00 PM)",
                    ].map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${
                          selectedSlot === slot
                            ? "bg-[#d4af37]/20 border border-[#d4af37] text-white"
                            : "bg-[#0d0d12] border border-white/10 text-white/60 hover:text-white"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href={consultationWhatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-black font-bold text-sm transition-all shadow-lg shadow-[#25d366]/20"
                  >
                    <MessageCircle className="size-4 fill-black text-black" />
                    <span>Confirm Slot on WhatsApp</span>
                  </a>
                  <p className="text-[11px] text-center text-white/40 mt-2">
                    No booking fee &middot; Direct chat with Senior Bridal Curator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Boutique Stores Section */}
      <section id="contact" className="py-16 sm:py-20 border-t border-white/10 bg-[#0d0d12]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Store 1 */}
            <div className="p-6 rounded-2xl bg-[#050506] border border-white/10">
              <div className="flex items-center gap-2 text-[#d4af37] font-semibold text-sm mb-3">
                <MapPin className="size-4" />
                <span>Flagship Bridal Lounge</span>
              </div>
              <h3 className="text-lg font-bold text-white font-serif">T. Nagar Boutique</h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                42 Usman Road, Opposite Panagal Park, T. Nagar, Chennai 600017
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-white/50">Mon to Sun: 10 AM to 9 PM</span>
                <a href="tel:+919840012345" className="text-[#d4af37] font-medium hover:underline">
                  +91 98400 12345
                </a>
              </div>
            </div>

            {/* Store 2 */}
            <div className="p-6 rounded-2xl bg-[#050506] border border-white/10">
              <div className="flex items-center gap-2 text-[#d4af37] font-semibold text-sm mb-3">
                <MapPin className="size-4" />
                <span>Heritage Gallery Store</span>
              </div>
              <h3 className="text-lg font-bold text-white font-serif">Cathedral Road</h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                114 Cathedral Road, Near Chola Sheraton Junction, Chennai 600086
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-white/50">Mon to Sun: 10 AM to 9 PM</span>
                <a href="tel:+919840012346" className="text-[#d4af37] font-medium hover:underline">
                  +91 98400 12346
                </a>
              </div>
            </div>

            {/* Quick Inquiries Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1308] to-[#050506] border border-[#d4af37]/30 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
                  Express Assistance
                </span>
                <h3 className="text-lg font-bold text-white font-serif mt-1">
                  Connect on WhatsApp Now
                </h3>
                <p className="text-xs text-white/70 mt-2 leading-relaxed">
                  Have an urgent question about saree availability, fabric swatches, or express overseas courier dispatch?
                </p>
              </div>

              <div className="mt-6">
                <a
                  href="https://wa.me/919840012345?text=Hello%20Vastra%20Silks,%20I%20have%20an%20inquiry%20regarding%20saree%20availability"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-black font-bold text-xs transition-all shadow-md"
                >
                  <MessageCircle className="size-4 fill-black text-black" />
                  <span>Start Live Chat</span>
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
            <span className="font-bold text-white font-serif">Vastra Silks &amp; Weaves</span>
            <span className="mx-2 text-white/30">&middot;</span>
            <span>T. Nagar &amp; Cathedral Road, Chennai</span>
            <p className="mt-1 text-[11px] text-white/40">
              Handcrafted pure mulberry silks and heritage bridal weaves.
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
