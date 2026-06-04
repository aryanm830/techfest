import { siteAssets } from "@/components/site/assets";
import { Wordmark } from "./Wordmark";

const cols = [
  { title: "Festival", links: ["About", "Theme", "Schedule", "Venue"] },
  { title: "Compete", links: ["Events", "Workshops", "Olympiad", "Lectures"] },
  { title: "Engage", links: ["Speakers", "Sponsors", "Media", "Press"] },
  { title: "Connect",  links: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/techfest_iitbombay/"
    },
    {
      label: "X / Twitter",
      href: "https://x.com/Techfest_IITB"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/techfest/"
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@techfestiitbombay_youtube"
    }
  ]},
];

export function Footer() {
  const Logo = siteAssets.logo.Svg;

  return (
    <footer className="relative border-t border-border/60 bg-surface-0">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              {Logo ? (
                <Logo className="h-8 w-auto" width={48} height={32} />
              ) : (
                <img src={siteAssets.logo.src} alt={siteAssets.logo.alt} width={48} height={32} className="h-8 w-auto" />
              )}
              <div className="text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                IIT Bombay
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm text-muted-foreground">
              Techfest 2026 — Asia&apos;s largest science and technology festival.
              30th edition · Cyborg Renaissance.
            </p>
            <div className="mt-8 flex items-center gap-2 text-mono text-[10px] uppercase tracking-[0.25em]">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_12px_oklch(0.88_0.16_200/0.9)]" />
              <span className="text-secondary">Systems online</span>
              <span className="text-muted-foreground/60">· Powai, Mumbai · 19.13°N 72.91°E</span>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-mono text-[10px] uppercase tracking-[0.3em] text-secondary">{c.title}</div>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => {
                  const label = typeof l === "string" ? l : l.label;
                  const href = typeof l === "string" ? "#" : l.href;
                  return (
                    <li key={label}>
                      <a href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{label}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 md:flex-row md:items-center">
          <p className="text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            © 1998-2026 Techfest · Indian Institute of Technology Bombay
          </p>
          <p className="text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70">
            v1 · build//cyborg.renaissance
          </p>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden className="relative overflow-hidden border-t border-border/60">
        <div className="px-6 py-10">
          <Wordmark />
        </div>
      </div>
    </footer>
  );
}
