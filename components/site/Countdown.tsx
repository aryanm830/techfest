"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-12-28T09:00:00+05:30").getTime();

function diff() {
  const ms = Math.max(0, TARGET - Date.now());
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms / 3600000) % 24);
  const m = Math.floor((ms / 60000) % 60);
  const s = Math.floor((ms / 1000) % 60);
  return { d, h, m, s };
}

export function Countdown() {
  const [t, setT] = useState(diff());
  useEffect(() => {
    const i = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(i);
  }, []);

  const cells: [string, number][] = [
    ["Days", t.d], ["Hours", t.h], ["Minutes", t.m], ["Seconds", t.s],
  ];

  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-surface-0 py-32">
      <div className="absolute left-1/2 top-1/2 -z-0 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-40">
          <img
            src="/assets/core-reactor.jpg"
            alt="Core reactor energy visual"
          width={1280}
          height={1280}
          loading="lazy"
          className="h-full w-full rounded-full object-cover [mask-image:radial-gradient(circle,black_30%,transparent_70%)]"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 -z-0 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 animate-[pulse-ring_4s_ease-in-out_infinite]" />
      <div className="absolute left-1/2 top-1/2 -z-0 h-[920px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />

      <div className="relative mx-auto max-w-[1200px] px-6 text-center">
        <p className="text-mono text-[10px] uppercase tracking-[0.3em] text-secondary">/ 06 · Ignition</p>
        <h2 className="font-display mt-3 text-balance text-4xl font-medium tracking-[-0.04em] sm:text-6xl text-gradient">
          The reactor is warming up.
        </h2>
        <p className="mt-4 text-muted-foreground">December 28, 2026 · 09:00 IST · IIT Bombay</p>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {cells.map(([label, value]) => (
            <div key={label} className="glass-strong relative overflow-hidden rounded-lg p-6">
              <div className="font-display text-5xl font-medium tracking-tight text-gradient tabular-nums sm:text-6xl">
                {String(value).padStart(2, "0")}
              </div>
              <div className="mt-2 text-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
