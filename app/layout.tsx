import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { PROFILE } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: `${PROFILE.name} — CRM Analytics & Dashboard Engineering`,
  description:
    "Portfólio de Raphael Estanislau — sistemas internos de dados, CRM e dashboards em produção na Oriba.",
  openGraph: {
    title: `${PROFILE.name} — Portfólio`,
    description:
      "Sistemas internos de dados, CRM e dashboards em produção na Oriba.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
