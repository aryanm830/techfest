"use client";

import { motion } from "motion/react";
import {
  Bot, BrainCircuit, Rocket, ShieldCheck, Lightbulb, Trophy,
} from "lucide-react";

const events = [
  { icon: Bot, code: "R-01", name: "Robotics Arena", desc: "Autonomous machines compete across terrain, combat, and rescue missions.", count: "24 tracks" },
  { icon: BrainCircuit, code: "AI-02", name: "Artificial Intelligence", desc: "Foundation models, agentic systems, and applied reasoning challenges.", count: "12 challenges" },
  { icon: Rocket, code: "SP-03", name: "Space Technology", desc: "CubeSats, propulsion, planetary exploration and orbital simulations.", count: "9 missions" },
  { icon: ShieldCheck, code: "CY-04", name: "Cybersecurity", desc: "Capture the flag, adversarial defense, and zero-knowledge cryptography.", count: "48 hours" },
  { icon: Lightbulb, code: "IN-05", name: "Innovation Challenge", desc: "From concept to working prototype in front of a global panel of judges.", count: "₹50L pool" },
  { icon: Trophy, code: "TO-06", name: "Tech Olympiad", desc: "A multi-discipline gauntlet for the sharpest minds across institutions.", count: "6 rounds" },
];

export function Events() {
  return (
    <section id="events" className="relative border-t border-border/60 bg-background py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-mono text-[10px] uppercase tracking-[0.3em] text-secondary">/ 02 · Event Universe</p>
            <h2 className="font-display mt-3 text-balance text-4xl font-medium tracking-[-0.04em] sm:text-6xl text-gradient">
              Six disciplines.<br />One operating system.
            </h2>
          </div>
          <a href="#" className="hidden md:inline-flex text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
            View all 60+ →
          </a>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.article
                key={e.code}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 3) * 0.06, duration: 0.55 }}
                className="group relative flex flex-col gap-6 bg-surface-1 p-8 transition-colors duration-500 hover:bg-surface-2"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at 50% 0%, oklch(0.68 0.20 245 / 0.18), transparent 70%)" }} />
                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border/80 bg-background text-secondary transition-colors group-hover:border-secondary/60 group-hover:text-secondary group-hover:shadow-[var(--shadow-glow-cyan)]">
                    <Icon className="h-5 w-5" strokeWidth={1.4} />
                  </div>
                  <span className="text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{e.code}</span>
                </div>
                <div className="relative">
                  <h3 className="font-display text-2xl font-medium tracking-tight">{e.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{e.desc}</p>
                </div>
                <div className="relative mt-auto flex items-center justify-between border-t border-border/60 pt-5">
                  <span className="text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{e.count}</span>
                  <span className="text-mono text-xs text-secondary transition-transform group-hover:translate-x-1">→</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
