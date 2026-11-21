import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crust & Crumb | Artisanal Sourdough, Croissants and Patisserie, Bengaluru",
  description:
    "Freshly baked European sourdough, 72-layer French butter croissants, and handcrafted celebration cakes. Made fresh daily in Indiranagar and Koramangala.",
};

export default function CrustAndCrumbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050506] text-white selection:bg-[#f59e0b]/30 selection:text-white font-sans antialiased">
      {children}
    </div>
  );
}
