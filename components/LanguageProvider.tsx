"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { UI, type Lang } from "@/lib/content";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (typeof UI)["pt"];
}

const Ctx = createContext<LangCtx | null>(null);

function readInitialLang(): Lang {
  if (typeof document === "undefined") return "pt";
  const fromDom = document.documentElement.dataset.lang;
  if (fromDom === "en" || fromDom === "pt") return fromDom;
  try {
    const saved = window.localStorage.getItem("lang");
    if (saved === "en" || saved === "pt") return saved;
  } catch {
    /* ignore */
  }
  return "pt";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.documentElement.dataset.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((p) => (p === "pt" ? "en" : "pt"));

  return (
    <Ctx.Provider value={{ lang, setLang, toggle, t: UI[lang] }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
