import type { Metadata } from "next";
import { Fraunces, Newsreader, Inter } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { PROFILE } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PROFILE.name} — Data Science & AI`,
  description:
    "Raphael Estanislau — Data Science e IA no Grupo Shoulder. Três sistemas de dados em produção: dashboard de CRM multi-marca, inteligência competitiva com BigQuery e Meta API, e Visual Merchandising orientado a dados.",
  openGraph: {
    title: `${PROFILE.name} — Data Science & AI`,
    description:
      "Sistemas de dados, CRM e inteligência competitiva em produção no Grupo Shoulder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${newsreader.variable} ${inter.variable}`}
    >
      <body className="font-serif">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
