"use client";

import { useState, useEffect, useRef } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────

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
    tagline: "Essential dum biryani menu for intimate prayers and gatherings",
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
        items: ["Hot Ghee Pineapple Kesari", "Packaged Mineral Water 500 ml"],
      },
    ],
  },
  {
    id: "superb",
    tier: "02",
    name: "Superb Banquet",
    tagline: "Our most requested wedding feast with starters and dual desserts",
    price: 380,
    badge: "Most Requested",
    color: "#d4af37",
    courses: [
      {
        label: "Welcome & Appetizers",
        items: ["Chilled Welcome Drink on Arrival", "Crisp Chennai-Style Chicken 65"],
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
          "Packaged Mineral Water 500 ml",
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
          "Packaged Mineral Water 500 ml",
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
          "Live Dessert Counters: Popcorn, Cotton Candy, Fruit Salad",
          "Premium Ice Cream, Sweet Beeda & Bottled Water",
        ],
      },
    ],
  },
];

const SPECIALTIES = [
  {
    emoji: "🔥",
    name: "Wood-Fire Dum Biryani",
    desc: "Slow-cooked over aged mango-wood logs and glowing charcoal. Infused with freshly ground spices and pure desi ghee. No gas shortcuts — ever.",
  },
  {
    emoji: "🐑",
    name: "Full Lamb Roast",
    desc: "Whole seasoned lamb marinated for twelve hours in traditional spice blends. Prepared as the centrepiece for milestone feasts and grand receptions.",
  },
  {
    emoji: "🐟",
    name: "Vanjaram Fish Fry",
    desc: "Fresh coastal seer fish slices marinated in stone-ground Chettinad masala and pan-fried to a crisp golden finish.",
  },
  {
    emoji: "🥘",
    name: "Authentic Haleem",
    desc: "Slow-simmered tender meat, broken wheat, and lentils pounded to a rich, velvety consistency and finished with pure ghee and fried onions.",
  },
  {
    emoji: "🍮",
    name: "Hyderabadi Sheer Khurma",
    desc: "Fine roasted vermicelli cooked in full-cream milk with Medjool dates, saffron strands, and hand-crushed pistachios.",
  },
  {
    emoji: "🎪",
    name: "Live Event Counters",
    desc: "Interactive live stalls for tandoor breads, hot seekh kebabs, chaat, and artisan sweet paan — a crowd favourite at every grand reception.",
  },
];

// ─── WhatsApp URL builder ────────────────────────────────────────────────────

function buildWhatsApp(pkg: Package, guests: number, eventType: string, eventDate: string) {
  const total = guests * pkg.price;
  const lines = [
    `Vanakkam Ahmed Catering,`,
    ``,
    `I'm planning an upcoming event and would like a formal quote:`,
    ``,
    `Package: ${pkg.name} (Rs. ${pkg.price} per plate)`,
    `Occasion: ${eventType}`,
    `Estimated guests: ${guests}`,
    eventDate ? `Tentative date: ${eventDate}` : null,
    `Estimated total: Rs. ${total.toLocaleString("en-IN")}`,
    ``,
    `Please confirm availability and share the final quote. Thank you.`,
  ]
    .filter((l) => l !== null)
    .join("\n");
  return `https://wa.me/919176868282?text=${encodeURIComponent(lines)}`;
}

// ─── Utility ─────────────────────────────────────────────────────────────────

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-px w-full", className)}
      style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)" }}
    />
  );
}

function GoldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "10px",
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "#d4af37",
        padding: "4px 12px",
        borderRadius: "9999px",
        border: "1px solid rgba(212,175,55,0.3)",
        background: "rgba(212,175,55,0.07)",
      }}
    >
      {children}
    </span>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function AhmedCateringPage() {
  const [activeTab, setActiveTab] = useState("superb");
  const [guests, setGuests] = useState(350);
  const [pkgId, setPkgId] = useState("superb");
  const [eventType, setEventType] = useState("Wedding Reception");
  const [eventDate, setEventDate] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activePkg = PACKAGES.find((p) => p.id === pkgId) || PACKAGES[1];
  const displayPkg = PACKAGES.find((p) => p.id === activeTab) || PACKAGES[1];
  const estimatedTotal = guests * activePkg.price;
  const waUrl = buildWhatsApp(activePkg, guests, eventType, eventDate);
  const waUrlHero = buildWhatsApp(PACKAGES[1], 350, "Wedding Reception", "");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050506",
        color: "#f0ece3",
        fontFamily: "'Google Sans', 'Google Sans Flex', system-ui, sans-serif",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* ── Sticky nav ── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
          background: scrolled ? "rgba(5,5,6,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          transition: "all 0.3s ease",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "rgba(212,175,55,0.12)",
                border: "1px solid rgba(212,175,55,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              🔥
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
                  Ahmed Catering
                </span>
                <span
                  style={{
                    fontSize: 9,
                    fontFamily: "monospace",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#d4af37",
                    padding: "2px 7px",
                    border: "1px solid rgba(212,175,55,0.3)",
                    borderRadius: 999,
                  }}
                >
                  Est. 1994
                </span>
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>
                Palavakkam & Taramani, Chennai
              </div>
            </div>
          </div>

          {/* Nav links — desktop */}
          <nav
            style={{
              display: "flex",
              gap: 32,
              listStyle: "none",
            }}
          >
            {[
              ["#packages", "Packages"],
              ["#specialties", "Specialties"],
              ["#calculator", "Calculator"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={waUrlHero}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "9px 20px",
              borderRadius: 999,
              background: "#25D366",
              color: "#000",
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Quote
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          paddingTop: 160,
          paddingBottom: 120,
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Background textures */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(212,175,55,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 900,
            height: 500,
            background: "radial-gradient(ellipse, rgba(212,175,55,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative" }}>
          <GoldLabel>Thirty Years of Authentic Wood-Fire Dum Biryani, Chennai</GoldLabel>

          <h1
            style={{
              marginTop: 28,
              fontSize: "clamp(44px, 8vw, 88px)",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
              color: "#fff",
            }}
          >
            Grand Wedding Feasts
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #c8a96e 0%, #f5d060 50%, #d4af37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              & Dum Biryani
            </span>
          </h1>

          <p
            style={{
              marginTop: 24,
              fontSize: 18,
              color: "rgba(240,236,227,0.65)",
              lineHeight: 1.7,
              maxWidth: 600,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Slow-cooked over mango-wood logs and glowing charcoal. Prepared fresh for weddings,
            receptions, and corporate banquets across Chennai for 100 to 5,000 guests.
          </p>

          <div
            style={{
              marginTop: 44,
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
            }}
          >
            <a
              href="#calculator"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 32px",
                borderRadius: 999,
                background: "#d4af37",
                color: "#050506",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              Calculate Event Cost
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={waUrlHero}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 32px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.04)",
                color: "rgba(255,255,255,0.85)",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <span style={{ color: "#25D366" }}>●</span>
              Direct WhatsApp Desk
            </a>
          </div>

          {/* Trust strips */}
          <div
            style={{
              marginTop: 72,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
              textAlign: "left",
            }}
          >
            {[
              { label: "Kitchen Heritage", value: "Since 1994", sub: "Palavakkam Head Office", accent: "#d4af37" },
              { label: "Event Capacity", value: "100 – 5,000+", sub: "Guests per ceremony", accent: "#d4af37" },
              { label: "Cooking Method", value: "Wood-Fire", sub: "No gas flame shortcuts", accent: "#f5d060" },
              { label: "Service Reach", value: "All Chennai", sub: "OMR, ECR & Central", accent: "#4ade80" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.02)",
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    fontFamily: "monospace",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                    marginBottom: 8,
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: item.accent, letterSpacing: "-0.02em" }}>
                  {item.value}
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section id="packages" style={{ padding: "100px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <GoldLabel>Curated Banquet Menus</GoldLabel>
            <h2
              style={{
                marginTop: 20,
                fontSize: "clamp(32px, 5vw, 54px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#fff",
              }}
            >
              Select Your Wedding Menu
            </h2>
            <p style={{ marginTop: 12, fontSize: 15, color: "rgba(240,236,227,0.55)", maxWidth: 480, margin: "12px auto 0" }}>
              Full multi-course packages prepared with farm-fresh meats, stone-ground masalas, and pure ghee.
            </p>
          </div>

          {/* Tab switcher */}
          <div
            style={{
              display: "flex",
              gap: 4,
              padding: 6,
              borderRadius: 16,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              marginBottom: 40,
              overflowX: "auto",
            }}
          >
            {PACKAGES.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setActiveTab(pkg.id)}
                style={{
                  flex: "1 1 auto",
                  padding: "10px 20px",
                  borderRadius: 11,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: 13,
                  fontWeight: activeTab === pkg.id ? 700 : 500,
                  color: activeTab === pkg.id ? "#050506" : "rgba(255,255,255,0.5)",
                  background: activeTab === pkg.id ? pkg.color : "transparent",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                  letterSpacing: "-0.01em",
                }}
              >
                {pkg.name}
                {pkg.badge && (
                  <span
                    style={{
                      marginLeft: 8,
                      fontSize: 9,
                      fontFamily: "monospace",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "1px 6px",
                      borderRadius: 999,
                      background: activeTab === pkg.id ? "rgba(0,0,0,0.2)" : "rgba(212,175,55,0.15)",
                      color: activeTab === pkg.id ? "rgba(0,0,0,0.7)" : "#d4af37",
                    }}
                  >
                    {pkg.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Package detail card */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.09)",
              background: "rgba(255,255,255,0.02)",
              padding: "40px 44px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Gold glow background */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: -100,
                right: -100,
                width: 400,
                height: 400,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${displayPkg.color}18 0%, transparent 70%)`,
                pointerEvents: "none",
              }}
            />

            {/* Left: info */}
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: "monospace",
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.1em",
                  }}
                >
                  TIER {displayPkg.tier}
                </span>
                {displayPkg.badge && (
                  <span
                    style={{
                      fontSize: 9,
                      fontFamily: "monospace",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: displayPkg.color,
                      padding: "3px 10px",
                      border: `1px solid ${displayPkg.color}50`,
                      borderRadius: 999,
                      background: `${displayPkg.color}10`,
                    }}
                  >
                    {displayPkg.badge}
                  </span>
                )}
              </div>

              <h3
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "#fff",
                  margin: "0 0 10px",
                }}
              >
                {displayPkg.name}
              </h3>
              <p style={{ fontSize: 14, color: "rgba(240,236,227,0.55)", lineHeight: 1.6, marginBottom: 28 }}>
                {displayPkg.tagline}
              </p>

              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 32 }}>
                <span style={{ fontSize: 52, fontWeight: 900, color: displayPkg.color, letterSpacing: "-0.04em" }}>
                  ₹{displayPkg.price}
                </span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>per guest plate</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <a
                  href="#calculator"
                  onClick={() => { setPkgId(displayPkg.id); setActiveTab(displayPkg.id); }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "13px 28px",
                    borderRadius: 999,
                    background: displayPkg.color,
                    color: "#050506",
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: "none",
                    cursor: "pointer",
                    border: "none",
                    fontFamily: "inherit",
                  }}
                >
                  Select This Package
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: courses */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {displayPkg.courses.map((course, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontSize: 10,
                      fontFamily: "monospace",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.3)",
                      marginBottom: 10,
                    }}
                  >
                    {course.label}
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                    {course.items.map((item, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13.5, color: "rgba(240,236,227,0.75)" }}>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={displayPkg.color}
                          strokeWidth="2.5"
                          style={{ marginTop: 2, flexShrink: 0 }}
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {i < displayPkg.courses.length - 1 && (
                    <Divider className="mt-5" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick compare row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
              marginTop: 20,
            }}
          >
            {PACKAGES.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => { setActiveTab(pkg.id); setPkgId(pkg.id); }}
                style={{
                  borderRadius: 14,
                  border: activeTab === pkg.id ? `1px solid ${pkg.color}` : "1px solid rgba(255,255,255,0.07)",
                  background: activeTab === pkg.id ? `${pkg.color}10` : "rgba(255,255,255,0.02)",
                  padding: "14px 16px",
                  textAlign: "left",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
                  Tier {pkg.tier}
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: activeTab === pkg.id ? pkg.color : "#fff", letterSpacing: "-0.01em", marginBottom: 2 }}>
                  ₹{pkg.price}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{pkg.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section
        id="calculator"
        style={{
          padding: "100px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <GoldLabel>Instant Budget Planner</GoldLabel>
            <h2
              style={{
                marginTop: 20,
                fontSize: "clamp(32px, 5vw, 54px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#fff",
              }}
            >
              Estimate Your Feast Cost
            </h2>
            <p style={{ marginTop: 12, fontSize: 15, color: "rgba(240,236,227,0.55)", maxWidth: 480, margin: "12px auto 0" }}>
              Adjust your guest count, pick a package, and get a live estimate. One tap sends the quote directly to our kitchen team.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: 28,
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.09)",
              background: "rgba(255,255,255,0.02)",
              padding: "44px 48px",
            }}
          >
            {/* Controls */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Package select */}
              <div>
                <label style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 8, letterSpacing: "0.02em" }}>
                  Banquet Package
                </label>
                <select
                  value={pkgId}
                  onChange={(e) => { setPkgId(e.target.value); setActiveTab(e.target.value); }}
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.04)",
                    color: "#fff",
                    fontSize: 14,
                    fontFamily: "inherit",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  {PACKAGES.map((p) => (
                    <option key={p.id} value={p.id} style={{ background: "#0a0a0b" }}>
                      {p.name} — ₹{p.price}/plate{p.badge ? ` (${p.badge})` : ""}
                    </option>
                  ))}
                </select>
              </div>

              {/* Event type */}
              <div>
                <label style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 8, letterSpacing: "0.02em" }}>
                  Occasion
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.04)",
                    color: "#fff",
                    fontSize: 14,
                    fontFamily: "inherit",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  {["Wedding Reception", "Wedding Feast", "Engagement Banquet", "Corporate Banquet", "Private Celebration"].map((t) => (
                    <option key={t} value={t} style={{ background: "#0a0a0b" }}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Event date */}
              <div>
                <label style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 8, letterSpacing: "0.02em" }}>
                  Tentative Date (optional)
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.04)",
                    color: "#fff",
                    fontSize: 14,
                    fontFamily: "inherit",
                    outline: "none",
                    colorScheme: "dark",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Guest slider */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <label style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.02em" }}>
                    Guest Count
                  </label>
                  <span style={{ fontSize: 20, fontWeight: 800, color: "#d4af37", letterSpacing: "-0.02em" }}>
                    {guests.toLocaleString()} guests
                  </span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={2000}
                  step={25}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  style={{
                    width: "100%",
                    accentColor: "#d4af37",
                    cursor: "pointer",
                    height: 4,
                  }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                  {["100", "500", "1,000", "2,000"].map((v) => (
                    <span key={v} style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.3)" }}>{v}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Live estimate */}
            <div
              style={{
                borderRadius: 18,
                border: "1px solid rgba(212,175,55,0.2)",
                background: "rgba(212,175,55,0.04)",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div>
                <div style={{ fontSize: 10, fontFamily: "monospace", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>
                  Live Estimate
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
                  {activePkg.name}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>
                  {eventType} · {guests.toLocaleString()} guests
                </div>
              </div>

              <Divider />

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["Rate per plate", `₹${activePkg.price}`, "#fff"],
                  ["Guest count", `${guests.toLocaleString()} pax`, "#fff"],
                  ["Cooking method", "Wood-Fire Dum", "#d4af37"],
                  ["Delivery & setup", "Included", "#4ade80"],
                ].map(([label, value, color]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{label}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color, fontFamily: "monospace" }}>{value}</span>
                  </div>
                ))}
              </div>

              <Divider />

              <div>
                <div style={{ fontSize: 10, fontFamily: "monospace", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>
                  Estimated Total
                </div>
                <div style={{ fontSize: 44, fontWeight: 900, color: "#d4af37", letterSpacing: "-0.04em", lineHeight: 1 }}>
                  ₹{estimatedTotal.toLocaleString("en-IN")}
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 6 }}>
                  Excludes applicable venue service taxes
                </div>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "15px 24px",
                  borderRadius: 999,
                  background: "#25D366",
                  color: "#000",
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  transition: "opacity 0.2s",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Reserve Date on WhatsApp
              </a>

              <a
                href="tel:+919176868282"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "12px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "transparent",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.68 19.79 19.79 0 01.12 1.1 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
                Call +91 91768 68282
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specialties ── */}
      <section id="specialties" style={{ padding: "100px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <GoldLabel>Beyond Conventional Menus</GoldLabel>
            <h2 style={{ marginTop: 20, fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff" }}>
              Signature Specialties
            </h2>
            <p style={{ marginTop: 12, fontSize: 15, color: "rgba(240,236,227,0.55)", maxWidth: 440, margin: "12px auto 0" }}>
              Dishes perfected through three decades of heritage culinary preparation.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {SPECIALTIES.map((spec, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.02)",
                  padding: "32px 28px",
                  transition: "all 0.25s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.3)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.04)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 18, lineHeight: 1 }}>{spec.emoji}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", margin: "0 0 10px" }}>
                  {spec.name}
                </h3>
                <p style={{ fontSize: 14, color: "rgba(240,236,227,0.55)", lineHeight: 1.7, margin: 0 }}>
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / Kitchens ── */}
      <section
        id="contact"
        style={{
          padding: "100px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 48, alignItems: "center" }}>
          <div>
            <GoldLabel>Direct Kitchen Access</GoldLabel>
            <h2 style={{ marginTop: 20, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.1 }}>
              Two Dedicated Kitchens Serving Greater Chennai
            </h2>
            <p style={{ marginTop: 16, fontSize: 15, color: "rgba(240,236,227,0.55)", lineHeight: 1.7, maxWidth: 500 }}>
              To guarantee hot, freshly dum-cooked meals for lunch banquets and evening wedding receptions,
              our cooking teams operate from two strategic Chennai hubs.
            </p>

            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  name: "Palavakkam Head Office & Central Kitchen",
                  address: "Palavakkam, Chennai 600041",
                  coverage: "ECR, Thiruvanmiyur, Adyar & South Chennai wedding halls",
                },
                {
                  name: "Taramani Event Production Facility",
                  address: "Taramani, Chennai 600113",
                  coverage: "OMR IT corridor, Velachery, Guindy & Central Chennai",
                },
              ].map((kitchen) => (
                <div
                  key={kitchen.name}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    padding: "20px 24px",
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <div style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>📍</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{kitchen.name}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>{kitchen.address}</div>
                    <div style={{ fontSize: 12, color: "rgba(212,175,55,0.7)" }}>{kitchen.coverage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact card */}
          <div
            style={{
              borderRadius: 24,
              border: "1px solid rgba(212,175,55,0.2)",
              background: "rgba(212,175,55,0.03)",
              padding: "44px 36px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 20 }}>📞</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", margin: "0 0 10px" }}>
              Talk to Our Chef Desk
            </h3>
            <p style={{ fontSize: 14, color: "rgba(240,236,227,0.5)", lineHeight: 1.6, marginBottom: 32 }}>
              Planning an event with specific dietary preferences or customized starters? Contact our kitchen leads directly.
            </p>

            <div style={{ marginBottom: 28 }}>
              <a
                href="tel:+919176868282"
                style={{
                  display: "block",
                  fontSize: 34,
                  fontWeight: 900,
                  color: "#d4af37",
                  textDecoration: "none",
                  letterSpacing: "-0.03em",
                  marginBottom: 8,
                }}
              >
                +91 91768 68282
              </a>
              <a
                href="tel:+919176968282"
                style={{
                  display: "block",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                +91 91769 68282
              </a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "14px 24px",
                  borderRadius: 999,
                  background: "#25D366",
                  color: "#000",
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Start WhatsApp Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          padding: "40px 24px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4, letterSpacing: "-0.01em" }}>
              Ahmed Catering
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
              Palavakkam & Taramani, Chennai &nbsp;·&nbsp; Est. 1994
            </div>
          </div>

          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", textAlign: "right" }}>
            <div>Demo platform by{" "}
              <a
                href="https://cyberslayercorpz.dev"
                target="_blank"
                rel="noreferrer"
                style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
              >
                CyberSlayerCorpz
              </a>
            </div>
            <div style={{ marginTop: 2 }}>
              © {new Date().getFullYear()} Ahmed Catering. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
