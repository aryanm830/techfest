"use client";

import { motion } from "motion/react";

const items = [
  { tag: "Combat", title: "International Robowars", line: "32 nations · 64 machines · one arena", size: "lg" , img:"/assets/robowars.png"},
  { tag: "Keynote", title: "Space Symposium", line: "From low orbit to interstellar ambition", size: "sm", img:"/assets/space.png"},
  { tag: "Showcase", title: "Innovation Expo", line: "200 startups · live demos", size: "sm", img:"/assets/innovationexpo.png" },
  { tag: "Builds", title: "Drone Build Competition", line: "Engineer your own aerial vehicle", size: "sm", img:"/assets/drone.png" },
  { tag: "Talks", title: "Global Lecture Series", line: "Nobel laureates, founders, scientists", size: "sm",img:"/assets/globallec.png" },
  { tag: "Lab", title: "Future Labs", line: "Hands-on with quantum, bio, neuro, ai", size: "sm", img:"/assets/future.png" },
];

export function Experiences() {
  return (
    <section id="experiences" className="relative border-t border-border/60 bg-background py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-mono text-[10px] uppercase tracking-[0.3em] text-secondary">/ 03 · Featured</p>
            <h2 className="font-display mt-3 text-balance text-4xl font-medium tracking-[-0.04em] sm:text-6xl text-gradient">
              Flagship<br />experiences.
            </h2>
          </div>
        </div>

        <div className="mt-16 grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[280px]">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className={`group relative overflow-hidden rounded-xl border border-border bg-surface-1 p-7 transition-colors hover:border-secondary/40 ${
                it.size === "lg" ? "md:col-span-2 md:row-span-2" : it.size === "md" ? "md:col-span-1 md:row-span-2" : ""
              }`}
            >
              <img src={it.img} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              <div className="relative flex h-full flex-col justify-between">
                <span className="text-mono text-[10px] uppercase tracking-[0.3em] text-secondary">{it.tag}</span>
                <div>
                  <h3 className="font-display text-3xl font-medium tracking-tight md:text-4xl">{it.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{it.line}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-mono text-[11px] uppercase tracking-[0.2em] text-foreground/80">
                    Detail <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
