import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmed Catering | Grand Wedding Feasts & Wood-Fire Dum Biryani, Chennai",
  description:
    "Ahmed Catering, 30 years of authentic mango-wood slow-cooked dum biryani in Chennai. Grand banquet packages from ₹260/plate for 100 to 5,000+ guests. Palavakkam & Taramani kitchens.",
};

export default function AhmedCateringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-[#050506] text-[#f0ece3]">{children}</div>;
}
