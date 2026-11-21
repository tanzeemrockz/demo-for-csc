import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vastra Silks | Handwoven Pure Kanjivaram and Bridal Silks, Chennai",
  description:
    "Handcrafted pure mulberry Kanjivaram sarees with certified gold zari, Banarasi brocades, and bespoke bridal drape styling. Visit our T. Nagar and Cathedral Road stores.",
};

export default function VastraSilksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050506] text-white selection:bg-[#d4af37]/30 selection:text-white font-sans antialiased">
      {children}
    </div>
  );
}
