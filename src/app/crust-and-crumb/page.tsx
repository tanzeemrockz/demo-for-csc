"use client";

import { useState } from "react";
import {
  Flame,
  Clock,
  Sparkles,
  ShoppingBag,
  MessageCircle,
  Wheat,
  UtensilsCrossed,
  Truck,
  Heart,
  ChevronRight,
  ShieldCheck,
  MapPin,
  Coffee,
  CheckCircle2,
} from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  category: "Artisan Sourdough" | "French Viennoiserie" | "Celebration Cakes" | "Savory Bakes";
  description: string;
  price: string;
  badge: string;
  fermentation: string;
  ingredients: string;
  dietary: "Vegetarian" | "Egg-Free Available" | "Classic Recipe";
  gradient: string;
  whatsappMsg: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: "sf-sourdough",
    name: "San Francisco Country Sourdough Batard",
    category: "Artisan Sourdough",
    description:
      "48-hour cold fermented loaf with blistering mahogany crust, custard-like open crumb, and subtle tang from our 8-year starter.",
    price: "Rs 280",
    badge: "Signature Loaf",
    fermentation: "48-Hour Cold Fermentation",
    ingredients: "Stoneground Wholewheat, Organic Rye, Sea Salt",
    dietary: "Vegetarian",
    gradient: "from-[#38200b] via-[#211206] to-[#0d0c0a]",
    whatsappMsg:
      "Hello Crust and Crumb, I want to order San Francisco Country Sourdough (Rs 280)",
  },
  {
    id: "pain-au-chocolat",
    name: "Pain Au Chocolat Double Pure Beurre",
    category: "French Viennoiserie",
    description:
      "Flaky laminated French pastry folded with 54 percent dark Valrhona chocolate batons and cultured Normandy AOP butter.",
    price: "Rs 220",
    badge: "Fresh from Oven",
    fermentation: "72-Layer Lamination",
    ingredients: "Normandy Cultured Butter, Valrhona 54% Dark Chocolate",
    dietary: "Classic Recipe",
    gradient: "from-[#3d1c0e] via-[#240e06] to-[#0d0c0a]",
    whatsappMsg:
      "Hello Crust and Crumb, I want to order Pain Au Chocolat (Rs 220)",
  },
  {
    id: "belgian-truffle",
    name: "Belgian Dark Truffle and Raspberry Entremet",
    category: "Celebration Cakes",
    description:
      "Glossy dark chocolate mirror glaze cake with hazelnut praline crunch and fresh tart raspberry coulis center.",
    price: "Rs 1,450 (1 kg)",
    badge: "Chef Special",
    fermentation: "Triple-Layer Mousse Build",
    ingredients: "70% Callebaut Dark Truffle, Organic Raspberries",
    dietary: "Egg-Free Available",
    gradient: "from-[#290d16] via-[#1a080e] to-[#0d0c0a]",
    whatsappMsg:
      "Hello Crust and Crumb, I want to order Belgian Truffle Cake (Rs 1,450)",
  },
  {
    id: "pistachio-cruffin",
    name: "Caramelized Pistachio Cruffin",
    category: "French Viennoiserie",
    description:
      "Hybrid croissant muffin rolled in vanilla bean sugar and filled with roasted Sicilian pistachio praline cream.",
    price: "Rs 260",
    badge: "Crowd Favorite",
    fermentation: "Hand-Rolled 36-Hour Proof",
    ingredients: "Bronte Pistachio Praline, Bourbon Vanilla Sugar",
    dietary: "Classic Recipe",
    gradient: "from-[#282a0e] via-[#161707] to-[#0d0c0a]",
    whatsappMsg:
      "Hello Crust and Crumb, I want to order Pistachio Cruffin (Rs 260)",
  },
  {
    id: "rosemary-focaccia",
    name: "Rosemary and Roasted Garlic Focaccia Slab",
    category: "Savory Bakes",
    description:
      "Extra virgin olive oil focaccia baked with roasted confit garlic cloves, flaky sea salt crystals, and freshly plucked rosemary.",
    price: "Rs 340",
    badge: "Savory Pick",
    fermentation: "24-Hour Hydration Dough",
    ingredients: "Cold-Pressed EVOO, Confit Garlic, Fresh Rosemary",
    dietary: "Vegetarian",
    gradient: "from-[#2b220c] via-[#191406] to-[#0d0c0a]",
    whatsappMsg:
      "Hello Crust and Crumb, I want to order Rosemary Focaccia (Rs 340)",
  },
  {
    id: "basque-cheesecake",
    name: "Madagascan Vanilla Bean Basque Cheesecake",
    category: "Celebration Cakes",
    description:
      "Caramelized burnt exterior with an ultra-creamy molten interior infused with real Madagascan bourbon vanilla beans.",
    price: "Rs 1,200 (600g)",
    badge: "Award Winner",
    fermentation: "Slow Water-Bath Baked",
    ingredients: "Philadelphia Cream Cheese, Madagascan Vanilla Pods",
    dietary: "Classic Recipe",
    gradient: "from-[#3d270c] via-[#241706] to-[#0d0c0a]",
    whatsappMsg:
      "Hello Crust and Crumb, I want to order Basque Cheesecake (Rs 1,200)",
  },
];

const CATEGORIES = [
  "All Bakes",
  "Artisan Sourdough",
  "French Viennoiserie",
  "Celebration Cakes",
  "Savory Bakes",
] as const;

export default function CrustAndCrumbPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Bakes");
  const [selectedCakeWeight, setSelectedCakeWeight] = useState<string>("1 kg (Serves 6-8)");
  const [selectedCakeFlavor, setSelectedCakeFlavor] = useState<string>("Belgian Dark Truffle");
  const [customPlaqueMessage, setCustomPlaqueMessage] = useState<string>("");
  const [savedFavorites, setSavedFavorites] = useState<Record<string, boolean>>({});

  const filteredItems =
    activeCategory === "All Bakes"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const toggleFavorite = (id: string) => {
    setSavedFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const cakeInquiryUrl = `https://wa.me/919845012345?text=${encodeURIComponent(
    `Hello Crust and Crumb, I would like to order a custom cake: ${selectedCakeFlavor}, Size: ${selectedCakeWeight}${
      customPlaqueMessage ? `, Plaque Message: "${customPlaqueMessage}"` : ""
    }.`
  )}`;

  return (
    <div className="relative min-h-screen bg-[#050506] text-white">
      {/* Top Fresh Batch Status Bar */}
      <div className="border-b border-[#f59e0b]/20 bg-[#0d0c0a]/90 backdrop-blur-md px-4 py-2 text-center text-xs tracking-wide text-[#f59e0b] flex items-center justify-center gap-2">
        <Flame className="size-3.5 text-[#f97316] animate-pulse" />
        <span>Afternoon Oven Batch Ready: Warm croissants and crusty country batards now on the counter</span>
        <span className="hidden sm:inline text-white/30">|</span>
        <span className="hidden sm:inline text-white/70">Pickups at Indiranagar &amp; Koramangala</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050506]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-full border border-[#f59e0b]/50 bg-gradient-to-br from-[#38200b] to-[#0d0c0a] flex items-center justify-center shadow-lg shadow-[#f59e0b]/10">
              <Wheat className="size-5 text-[#f59e0b]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold tracking-tight uppercase text-white font-serif">
                  Crust &amp; Crumb
                </span>
                <span className="rounded bg-[#f59e0b]/15 px-1.5 py-0.5 text-[10px] font-semibold text-[#f59e0b] border border-[#f59e0b]/30">
                  BAKEHOUSE
                </span>
              </div>
              <p className="text-[11px] text-white/60 tracking-tight">
                Slow Fermented Sourdough &middot; French Viennoiserie &middot; Bengaluru
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider text-white/70">
            <a href="#menu" className="hover:text-[#f59e0b] transition-colors">
              Daily Menu
            </a>
            <a href="#fermentation" className="hover:text-[#f59e0b] transition-colors">
              Our Craft
            </a>
            <a href="#celebration-cakes" className="hover:text-[#f59e0b] transition-colors">
              Celebration Cakes
            </a>
            <a href="#outlets" className="hover:text-[#f59e0b] transition-colors">
              Bakehouses
            </a>
          </nav>

          {/* Quick Contact & WhatsApp Order CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden lg:flex flex-col text-right text-xs">
              <span className="text-white/50 text-[10px]">Indiranagar: 100ft Rd</span>
              <a href="tel:+919845012345" className="text-white font-semibold hover:text-[#f59e0b]">
                +91 98450 12345
              </a>
            </div>

            <a
              href="https://wa.me/919845012345?text=Hello%20Crust%20and%20Crumb,%20I%20would%20like%20to%20order%20fresh%20bakes"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-black font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg shadow-[#25d366]/20"
            >
              <MessageCircle className="size-4 fill-black text-black" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(245,158,11,0.18),rgba(249,115,22,0.08),rgba(5,5,6,0))]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-medium mb-6">
            <Wheat className="size-3.5" />
            <span>Stone-Baked Daily with Wild Yeast Starter</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto font-serif leading-tight">
            Freshly Baked Daily with Wild Yeast and Pure Cultured Butter
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Crafted through 48-hour slow cold fermentation. From crackling crusty sourdough batards to flaky 72-layer butter croissants and bespoke multi-tier celebration cakes.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-black font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-[#f59e0b]/20"
            >
              <span>Browse Fresh Menu</span>
              <ChevronRight className="size-4" />
            </a>

            <a
              href="https://wa.me/919845012345?text=Hello%20Crust%20and%20Crumb,%20please%20send%20today%20fresh%20bake%20menu"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0d0c0a] border border-[#f59e0b]/40 hover:border-[#f59e0b] text-white font-semibold text-sm transition-all"
            >
              <MessageCircle className="size-4 text-[#25d366]" />
              <span>Today Fresh Bake List</span>
            </a>
          </div>

          {/* Trust Highlights Grid */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-[#0d0c0a]/80 border border-white/10 backdrop-blur-sm text-left">
              <div className="flex items-center gap-2 text-[#f59e0b] font-semibold text-sm mb-1">
                <CheckCircle2 className="size-4" />
                <span>100% Preservative Free</span>
              </div>
              <p className="text-xs text-white/60">
                Only flour, filtered water, sea salt, and living wild sourdough cultures. Zero commercial yeast additives.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0d0c0a]/80 border border-white/10 backdrop-blur-sm text-left">
              <div className="flex items-center gap-2 text-[#f59e0b] font-semibold text-sm mb-1">
                <Sparkles className="size-4" />
                <span>Normandy AOP Butter</span>
              </div>
              <p className="text-xs text-white/60">
                84 percent high-fat French butter ensuring shatteringly crisp, honey-combed lamination layers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0d0c0a]/80 border border-white/10 backdrop-blur-sm text-left">
              <div className="flex items-center gap-2 text-[#f59e0b] font-semibold text-sm mb-1">
                <Truck className="size-4" />
                <span>Same-Day Citywide Delivery</span>
              </div>
              <p className="text-xs text-white/60">
                Dispatched in insulated cake and bakery boxes across Bengaluru via hyper-local courier dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu & Category Filter Section */}
      <section id="menu" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#f59e0b] uppercase tracking-wider mb-2">
              <UtensilsCrossed className="size-3.5" />
              <span>Artisan Bakehouse Counter</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white">
              Today Fresh Oven Selection
            </h2>
            <p className="text-sm text-white/60 mt-1 max-w-xl">
              Stone-baked in small batches each morning and afternoon. Click any item to place an instant WhatsApp reservation.
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
                    ? "bg-[#f59e0b] text-black font-semibold shadow-md shadow-[#f59e0b]/20"
                    : "bg-[#0d0c0a] text-white/70 border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const isFav = savedFavorites[item.id];
            const whatsappLink = `https://wa.me/919845012345?text=${encodeURIComponent(
              item.whatsappMsg
            )}`;

            return (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#0d0c0a] border border-[#f59e0b]/20 hover:border-[#f59e0b]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-xl hover:shadow-[#f59e0b]/10"
              >
                <div>
                  {/* Visual Artwork Banner */}
                  <div
                    className={`relative h-52 bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between border-b border-white/10 overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:16px_16px]" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-[#f59e0b] border border-[#f59e0b]/30">
                        {item.badge}
                      </span>
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className={`size-8 rounded-full flex items-center justify-center backdrop-blur-md transition-colors ${
                          isFav
                            ? "bg-[#f97316] text-white"
                            : "bg-black/50 text-white/70 hover:text-white border border-white/10"
                        }`}
                        aria-label="Add to favorites"
                      >
                        <Heart className={`size-4 ${isFav ? "fill-white" : ""}`} />
                      </button>
                    </div>

                    <div className="relative z-10">
                      <span className="text-[11px] uppercase tracking-wider text-[#f59e0b]/80 font-medium">
                        {item.dietary}
                      </span>
                      <h3 className="text-xl font-bold font-serif text-white mt-1 group-hover:text-[#f59e0b] transition-colors">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <p className="text-xs text-white/70 leading-relaxed min-h-[48px]">
                      {item.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-white/5 text-[11px]">
                      <div className="flex items-center justify-between text-white/60">
                        <span>Fermentation</span>
                        <span className="text-white font-medium">{item.fermentation}</span>
                      </div>
                      <div className="flex items-center justify-between text-white/60">
                        <span>Key Ingredients</span>
                        <span className="text-[#f59e0b] font-medium truncate max-w-[170px] text-right">
                          {item.ingredients}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer with Price and WhatsApp Order CTA */}
                <div className="p-5 sm:p-6 pt-0">
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <span className="text-[10px] text-white/50 uppercase tracking-wider block">
                        Fresh Price
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-white font-serif">
                        {item.price}
                      </span>
                    </div>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-black font-bold text-xs transition-all shadow-md"
                    >
                      <MessageCircle className="size-3.5 fill-black text-black" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Fermentation & Bakery Craft Section */}
      <section id="fermentation" className="py-16 sm:py-20 border-y border-white/10 bg-[#0d0c0a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold text-[#f59e0b] uppercase tracking-wider">
              The Science of Slow Baking
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white mt-2">
              Why 48-Hour Cold Fermentation Matters
            </h2>
            <p className="text-sm text-white/60 mt-3">
              We never rush fermentation. Long cold proofing breaks down starches and gluten naturally, resulting in complex caramel notes and easy digestion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#050506] border border-[#f59e0b]/20 flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-xl bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] mb-4">
                  <Clock className="size-5" />
                </div>
                <h3 className="text-base font-bold text-white font-serif mb-2">
                  48-Hour Cold Retardation
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Dough rests at 4 degrees Celsius for two full days, allowing lactobacilli to generate deep sourdough aromatics and crisp blistered crust.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#f59e0b]">
                Maximum Flavor Development
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#050506] border border-[#f59e0b]/20 flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-xl bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] mb-4">
                  <Flame className="size-5" />
                </div>
                <h3 className="text-base font-bold text-white font-serif mb-2">
                  Refractory Stone Hearth
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Baked directly on volcanic refractory stone hearths injected with high-pressure steam for explosive oven spring and golden gelatinization.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#f59e0b]">
                260 Degree Deck Oven
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#050506] border border-[#f59e0b]/20 flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-xl bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] mb-4">
                  <Sparkles className="size-5" />
                </div>
                <h3 className="text-base font-bold text-white font-serif mb-2">
                  Heritage French Flour
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Sourced from certified stone mills in Chartres, France. Non-GMO, unbleached, and free from synthetic amylase enzymes or bromates.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#f59e0b]">
                Label Rouge Certified Flour
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#050506] border border-[#f59e0b]/20 flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-xl bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] mb-4">
                  <Coffee className="size-5" />
                </div>
                <h3 className="text-base font-bold text-white font-serif mb-2">
                  Specialty Coffee Bar
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Pair your warm croissant with freshly extracted espresso crafted from single-origin Arabica beans roasted in Chikmagalur.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#f59e0b]">
                Single-Origin Espresso
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Celebration Cakes Section */}
      <section id="celebration-cakes" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#241507] via-[#0d0c0a] to-[#050506] border border-[#f59e0b]/30 p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="absolute right-0 top-0 size-96 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-semibold mb-4">
                <Sparkles className="size-3.5" />
                <span>Bespoke Pastry Kitchen</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white leading-tight">
                Handcrafted Celebration Cakes for Memorable Milestones
              </h2>

              <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                From minimalist textured buttercream wedding tiers to rich Belgian chocolate entremets with custom gold foil plaques. Every cake is crafted strictly to order.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-white">24-Hour Advance Custom Notice</span>
                    <p className="text-xs text-white/60">
                      Allows proper setting of layered mousses, ganache, and delicate sponge structures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-white">Custom Hand-Piped Chocolate Plaque</span>
                    <p className="text-xs text-white/60">
                      Personalized name or message crafted in edible Valrhona dark chocolate calligraphy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-white">Temperature-Controlled Delivery</span>
                    <p className="text-xs text-white/60">
                      Dispatched with gel-ice cooling bags to guarantee pristine condition upon arrival.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive WhatsApp Cake Builder Card */}
            <div className="rounded-2xl bg-[#050506]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-md">
              <h3 className="text-lg font-bold font-serif text-white mb-2">
                Configure Your Celebration Cake
              </h3>
              <p className="text-xs text-white/60 mb-6">
                Select your flavor, weight, and plaque greeting to send directly to our Head Pastry Chef on WhatsApp.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-white/80 block mb-2">
                    Select Cake Profile
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Belgian Dark Truffle",
                      "Madagascan Basque",
                      "Pistachio Raspberry",
                      "Tiramisu Mascarpone",
                    ].map((flavor) => (
                      <button
                        key={flavor}
                        onClick={() => setSelectedCakeFlavor(flavor)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${
                          selectedCakeFlavor === flavor
                            ? "bg-[#f59e0b]/20 border border-[#f59e0b] text-white"
                            : "bg-[#0d0c0a] border border-white/10 text-white/60 hover:text-white"
                        }`}
                      >
                        {flavor}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-white/80 block mb-2">
                    Weight &amp; Portion Size
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "600g (Serves 4)",
                      "1 kg (Serves 6-8)",
                      "2 kg (Serves 12-16)",
                      "3 kg Tiered (Gala)",
                    ].map((weight) => (
                      <button
                        key={weight}
                        onClick={() => setSelectedCakeWeight(weight)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${
                          selectedCakeWeight === weight
                            ? "bg-[#f59e0b]/20 border border-[#f59e0b] text-white"
                            : "bg-[#0d0c0a] border border-white/10 text-white/60 hover:text-white"
                        }`}
                      >
                        {weight}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-white/80 block mb-2">
                    Custom Plaque Message (Optional)
                  </label>
                  <input
                    type="text"
                    value={customPlaqueMessage}
                    onChange={(e) => setCustomPlaqueMessage(e.target.value)}
                    placeholder="e.g. Happy 30th Birthday Priya!"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d0c0a] border border-white/10 text-xs text-white placeholder-white/40 focus:border-[#f59e0b] focus:outline-none"
                  />
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href={cakeInquiryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-black font-bold text-sm transition-all shadow-lg shadow-[#25d366]/20"
                  >
                    <MessageCircle className="size-4 fill-black text-black" />
                    <span>Inquire Cake on WhatsApp</span>
                  </a>
                  <p className="text-[11px] text-center text-white/40 mt-2">
                    Chef consultation &middot; Immediate confirmation on order feasibility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bakehouse Outlets Section */}
      <section id="outlets" className="py-16 sm:py-20 border-t border-white/10 bg-[#0d0c0a]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Outlet 1 */}
            <div className="p-6 rounded-2xl bg-[#050506] border border-white/10">
              <div className="flex items-center gap-2 text-[#f59e0b] font-semibold text-sm mb-3">
                <MapPin className="size-4" />
                <span>Flagship Bakehouse</span>
              </div>
              <h3 className="text-lg font-bold text-white font-serif">Indiranagar Outlet</h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                772, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru 560038
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-white/50">Tue to Sun: 7:30 AM to 10 PM</span>
                <a href="tel:+919845012345" className="text-[#f59e0b] font-medium hover:underline">
                  +91 98450 12345
                </a>
              </div>
            </div>

            {/* Outlet 2 */}
            <div className="p-6 rounded-2xl bg-[#050506] border border-white/10">
              <div className="flex items-center gap-2 text-[#f59e0b] font-semibold text-sm mb-3">
                <MapPin className="size-4" />
                <span>Espresso &amp; Pastry Bar</span>
              </div>
              <h3 className="text-lg font-bold text-white font-serif">Koramangala 4th Block</h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                48, 80 Feet Road, Near Sony World Signal, Koramangala, Bengaluru 560034
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-white/50">Tue to Sun: 8:00 AM to 10:30 PM</span>
                <a href="tel:+919845012346" className="text-[#f59e0b] font-medium hover:underline">
                  +91 98450 12346
                </a>
              </div>
            </div>

            {/* Instant Delivery Order Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#241507] to-[#050506] border border-[#f59e0b]/30 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#f59e0b] uppercase tracking-wider">
                  Pickup &amp; Hyper-Local Delivery
                </span>
                <h3 className="text-lg font-bold text-white font-serif mt-1">
                  Ready to Savor Fresh Bakes?
                </h3>
                <p className="text-xs text-white/70 mt-2 leading-relaxed">
                  Message our bakehouse counter on WhatsApp to reserve hot loaves before morning and evening batches sell out.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href="https://wa.me/919845012345?text=Hello%20Crust%20and%20Crumb,%20I%20want%20to%20place%20an%20order%20for%20pickup"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-black font-bold text-xs transition-all shadow-md"
                >
                  <MessageCircle className="size-4 fill-black text-black" />
                  <span>Instant WhatsApp Order</span>
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
            <span className="font-bold text-white font-serif">Crust &amp; Crumb Artisan Bakehouse</span>
            <span className="mx-2 text-white/30">&middot;</span>
            <span>Indiranagar &amp; Koramangala, Bengaluru</span>
            <p className="mt-1 text-[11px] text-white/40">
              Stone-baked European sourdough, pure butter viennoiserie, and handcrafted celebration cakes.
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
