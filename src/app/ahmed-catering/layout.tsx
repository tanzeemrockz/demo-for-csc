import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Ahmed Catering | Grand Wedding Feasts & Wood-Fire Dum Biryani, Chennai",
  description:
    "Ahmed Catering — 30 years of authentic mango-wood slow-cooked dum biryani in Chennai. Grand banquet packages from ₹260/plate for 100 to 5,000+ guests. Palavakkam & Taramani kitchens.",
};

export default function AhmedCateringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,wght@0,400..700;1,400..700&family=Google+Sans+Flex:wght@100..900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, background: "#050506", color: "#f5f0e8" }}>
        {children}
      </body>
    </html>
  );
}
