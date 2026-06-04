"use client";

import { motion } from "motion/react";

const timeline = [
  {
    year: "1998",
    label: "Genesis",
    note: "A student-led experiment begins at IIT Bombay.",
  },
  {
    year: "2004",
    label: "International",
    note: "The world enters the arena.",
  },
  {
    year: "2008",
    label: "Global Reach",
    note: "Techfest expands across continents.",
  },
  {
    year: "2011",
    label: "Visionaries",
    note: "Scientists, innovators and Nobel laureates take the stage.",
  },
  {
    year: "2018",
    label: "Scale",
    note: "175K+ visitors. Asia's largest science and technology festival.",
  },
  {
    year: "2026",
    label: "30 Years",
    note: "Three decades. One continuous pursuit of the future.",
  },
];

export function Legacy() {
  return (
    <section id="legacy" className="relative border-t border-border/60 bg-surface-0 py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-mono text-[10px] uppercase tracking-[0.3em] text-secondary">/ 01 · Legacy</p>
            <h2 className="font-display mt-3 text-balance text-4xl font-medium tracking-[-0.04em] sm:text-6xl text-gradient">
              Thirty years.<br />Of Building the Future.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Since 1998, Techfest has chronicled how engineering reshapes everyday life — from
            silicon to synthetic biology, from robots to reasoning machines.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-[28px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="relative flex flex-col items-start"
              >
                <div className="relative flex h-14 w-14 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-primary/40" />
                  <span className="absolute inset-2 rounded-full border border-secondary/50 animate-[pulse-ring_3s_ease-in-out_infinite]" />
                  <span className="relative h-2 w-2 rounded-full bg-secondary shadow-[0_0_20px_2px_oklch(0.88_0.16_200/0.8)]" />
                </div>
                <div className="mt-5">
                  <div className="text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {t.label}
                  </div>
                  <div className="font-display mt-1 text-2xl font-medium tracking-tight">{t.year}</div>
                  <div className="mt-2 max-w-[170px] text-sm text-muted-foreground/80">{t.note}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
