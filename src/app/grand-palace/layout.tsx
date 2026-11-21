import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grand Palace Conventions | Luxury Marriage Hall and Banquets, ECR Chennai",
  description:
    "Chennai premier 8-acre luxury wedding destination on ECR. Pillar-less royal hall with 28-foot ceilings, lush open lawns, and 24 deluxe guest suites for up to 3,500 guests.",
};

export default function GrandPalaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050506] text-white selection:bg-[#10b981]/30 selection:text-white font-sans antialiased">
      {children}
    </div>
  );
}
