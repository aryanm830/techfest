"use client";

import { motion } from "motion/react";
import { GridBackdrop } from "./Background";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-surface-0">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <GridBackdrop />

      {/* Hero image - centered, fades into the page */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 bottom-0 top-[12vh] flex items-end justify-center"
      >
        <img
          src="/assets/cyborg-hero.jpg"
          alt="Cyborg Renaissance hero visual"
          width={1536}
          height={1536}
          className="h-[88svh] w-auto max-w-none object-contain [mask-image:linear-gradient(180deg,transparent_0%,black_18%,black_78%,transparent_100%)]"
          fetchPriority="high"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </motion.div>

      {/* HUD corners */}
      <HudCorners />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col justify-between px-6 pb-12 pt-28 sm:pt-32">
        <div className="flex flex-1 items-center">
          <div className="grid w-full gap-10 md:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.72fr)] md:items-center">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55 }}
              className="text-mono text-[10px] uppercase tracking-[0.35em] text-secondary/90"
            >
              Techfest 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display mt-4 text-[clamp(3rem,11vw,9.5rem)] font-medium leading-[0.92] tracking-[-0.05em] text-gradient"
            >
              TECHFEST
              <span className="mt-3 block text-mono text-[clamp(0.7rem,1.4vw,1rem)] font-light tracking-[0.6em] text-secondary">
                MMXXVI · CYBORG RENAISSANCE
              </span>
            </motion.h1>
            </div>

            <div className="flex w-full flex-col gap-4 md:justify-self-end">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.65 }}
                className="glass-strong rounded-[var(--radius-xl)] border border-border/60 p-5 shadow-[var(--shadow-elevated)] sm:p-6"
              >
                <div className="flex flex-wrap items-center gap-3 text-left">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-70" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
                  </span>
                  <span className="text-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    30th Edition · Dec 28, 2026
                  </span>
                </div>

                <p className="mt-4 max-w-md text-balance text-sm leading-6 text-muted-foreground sm:text-base">
                  Thirty years of engineering the future. Asia&apos;s largest science and technology
                  festival returns to IIT Bombay — where intelligence becomes a craft.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.62, duration: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-3 md:justify-start"
              >
                <a
                  href="#register"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-foreground px-6 py-3 text-mono text-xs uppercase tracking-[0.22em] text-background transition-all hover:shadow-[0_0_40px_-8px_oklch(0.88_0.16_200/0.7)]"
                >
                  <span>Register Now</span>
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
                <a
                  href="#events"
                  className="glass group inline-flex items-center gap-2 rounded-md px-6 py-3 text-mono text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-surface-2/60"
                >
                  Explore Events
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom HUD strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="hidden md:grid w-full grid-cols-4 items-end gap-6 text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
        >
          <Stat label="Theme" value="Cyborg Renaissance" />
          <Stat label="Venue" value="IIT Bombay · Powai" />
          <Stat label="Participants" value="175K+ Global" />
          <div className="flex flex-col items-end gap-2">
            <span>Scroll</span>
            <div className="relative h-10 w-px overflow-hidden bg-border">
              <span className="absolute inset-x-0 top-0 h-3 bg-secondary animate-[scan_2.4s_ease-in-out_infinite]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2 border-l border-border/60 pl-4">
      <span className="opacity-60">{label}</span>
      <span className="text-foreground/90 text-xs tracking-[0.15em]">{value}</span>
    </div>
  );
}

function HudCorners() {
  const corner = "absolute h-6 w-6 border-secondary/70";

  const cornerStyle = (delay: number) => ({
    animation: `corner-blink 1.8s ease-out ${delay}s 1 both`,
  });

  return (
    <div className="pointer-events-none absolute inset-6 hidden md:block">
      <span className={`${corner} top-0 left-0 border-l border-t`} style={cornerStyle(0)} />
      <span className={`${corner} top-0 right-0 border-r border-t`} style={cornerStyle(0.12)} />
      <span className={`${corner} bottom-0 left-0 border-l border-b`} style={cornerStyle(0.24)} />
      <span className={`${corner} bottom-0 right-0 border-r border-b`} style={cornerStyle(0.36)} />
    </div>
  );
}
