import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Shreyansh Dixit — Game Design Document",
  description:
    "The personal portfolio of Shreyansh Dixit, structured as a Game Design Document. Game Designer, System Builder, and Product Thinker.",
  keywords: [
    "game design",
    "portfolio",
    "Shreyansh Dixit",
    "system design",
    "UX design",
    "product design",
    "game design document",
  ],
  authors: [{ name: "Shreyansh Dixit" }],
  openGraph: {
    title: "Shreyansh Dixit — GDD Portfolio",
    description:
      "A personal portfolio designed as a Game Design Document. Systems, Mechanics, Build Logs.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-[100dvh] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
