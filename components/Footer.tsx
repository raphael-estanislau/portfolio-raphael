"use client";

import { useLang } from "@/components/LanguageProvider";
import { Label } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { PROFILE } from "@/lib/content";

export function Footer() {
  const { t } = useLang();

  return (
    <footer
      id="contato"
      className="scroll-mt-24 border-t border-line px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-content">
        <Reveal className="flex flex-col items-center text-center">
          <Label align="center">{t.sections.contact.kicker}</Label>

          <h2 className="mt-8 text-[2rem] text-text sm:text-[2.8rem]">
            <span className="display">{t.sections.contact.titleLead}</span>{" "}
            <span className="serif-em">{t.sections.contact.titleEm}</span>
          </h2>

          <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-text3">
            {t.sections.contact.body}
          </p>

          <a
            href={`mailto:${PROFILE.email}`}
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-line2 px-7 py-4 transition-colors hover:border-text3"
          >
            <span className="font-display text-[1.25rem] italic text-text sm:text-[1.6rem]">
              {PROFILE.email}
            </span>
            <span
              aria-hidden
              className="text-text3 transition-transform group-hover:translate-x-0.5 group-hover:text-text"
            >
              ↗
            </span>
          </a>
        </Reveal>

        <div className="mt-16 flex flex-col items-center gap-5 border-t border-line pt-8 sm:flex-row sm:justify-between">
          <p className="font-mono text-2xs text-text4">{t.footer.built}</p>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line2 px-4 py-1.5 font-mono text-2xs text-text3 transition-colors hover:border-text3 hover:text-text"
            >
              GitHub
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-full border border-line2 px-4 py-1.5 font-mono text-2xs text-text3 transition-colors hover:border-text3 hover:text-text"
            >
              E-mail
            </a>
          </div>

          <p className="font-mono text-2xs text-text4">
            © {new Date().getFullYear()} {PROFILE.name} · {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
