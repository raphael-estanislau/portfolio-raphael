import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { PROFILE } from "@/lib/content";
import { SITE_NAME, SITE_URL } from "@/lib/site";
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

const description =
  "Raphael Estanislau. Data Science e IA no Grupo Shoulder. Três sistemas de dados em produção: dashboard de CRM multi-marca, inteligência competitiva com BigQuery e Meta API, e Visual Merchandising orientado a dados.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${PROFILE.name} · Data Science & AI`,
  description,
  authors: [{ name: PROFILE.name, url: PROFILE.github }],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${PROFILE.name} · Data Science & AI`,
    description:
      "Sistemas de dados, CRM e inteligência competitiva em produção no Grupo Shoulder.",
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} · Data Science & AI`,
    description:
      "Sistemas de dados, CRM e inteligência competitiva em produção no Grupo Shoulder.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <Script id="lang-init" strategy="beforeInteractive">
          {`(function(){try{var l=localStorage.getItem("lang");if(l==="en"||l==="pt"){document.documentElement.lang=l==="pt"?"pt-BR":"en";document.documentElement.dataset.lang=l}}catch(e){}})();`}
        </Script>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
