import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SkipLink } from "@/components/SkipLink";
import { PROFILE } from "@/lib/content";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Georgia", "ui-serif", "serif"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const title = `${PROFILE.name} · Software, dados e IA aplicada`;
const description =
  "Construo aplicações que conectam dados, APIs e modelos de linguagem a problemas reais de negócio. Três sistemas em produção no Grupo Shoulder: um copiloto de IA sobre dados de CRM, uma plataforma de análise operacional omnichannel e uma plataforma de inteligência de mercado.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s" },
  description,
  authors: [{ name: PROFILE.name, url: PROFILE.github }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${instrument.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-void font-sans">
        <Script id="lang-init" strategy="beforeInteractive">
          {`(function(){document.documentElement.classList.add("js");try{var l=localStorage.getItem("lang");if(l==="en"||l==="pt"){document.documentElement.lang=l==="pt"?"pt-BR":"en";document.documentElement.dataset.lang=l}}catch(e){}})();`}
        </Script>
        <LanguageProvider>
          <SkipLink />
          <Nav />
          <main id="content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
