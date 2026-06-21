import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { PROFILE } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PROFILE.name} · Data Science & AI`,
  description:
    "Raphael Estanislau. Data Science e IA no Grupo Shoulder. Três sistemas de dados em produção: dashboard de CRM multi-marca, inteligência competitiva com BigQuery e Meta API, e Visual Merchandising orientado a dados.",
  openGraph: {
    title: `${PROFILE.name} · Data Science & AI`,
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
    <html lang="pt-BR" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
