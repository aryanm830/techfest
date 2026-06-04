"use client";

import { motion } from "motion/react";
import { siteAssets } from "@/components/site/assets";

const links = [
  { label: "Events", href: "#events" },
  { label: "Evolution", href: "#evolution" },
  { label: "Experiences", href: "#experiences" },
  { label: "Speakers", href: "#speakers" },
  { label: "Sponsors", href: "#sponsors" },
];

export function Nav() {
  const Logo = siteAssets.logo.Svg;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 w-[min(1180px,calc(100%-2rem))] -translate-x-1/2"
    >
      <div className="glass-strong flex items-center justify-between gap-4 rounded-xl px-4 py-2.5">
        <a href="#top" className="flex items-center gap-3">
          {Logo ? (
            <Logo className="h-6 w-auto" width={36} height={24} />
          ) : (
            <img src={siteAssets.logo.src} alt={siteAssets.logo.alt} width={36} height={24} className="h-6 w-auto" />
          )}
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">IIT Bombay</span>
            <span className="text-mono text-[10px] uppercase tracking-[0.25em] text-secondary">Techfest 2026</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#register"
          className="group relative inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-mono text-[11px] uppercase tracking-[0.2em] text-background transition-all hover:bg-primary-glow"
        >
          Register
          <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </motion.header>
  );
}
