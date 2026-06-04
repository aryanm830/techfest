"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 175000, suffix: "+", label: "Participants", sub: "Across four days" },
  { value: 2500, suffix: "+", label: "Colleges", sub: "From every state" },
  { value: 500, suffix: "+", label: "Global Institutions", sub: "Six continents" },
  { value: 30, suffix: "", label: "Years of Innovation", sub: "Since 1998" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className="font-display text-5xl font-medium tracking-[-0.04em] text-gradient sm:text-7xl">
      {n.toLocaleString()}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative border-t border-border/60 bg-surface-0 py-32">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-mono text-[10px] uppercase tracking-[0.3em] text-secondary">/ 04 · By the numbers</p>
        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-3 border-l border-border/60 pl-6">
              <Counter to={s.value} suffix={s.suffix} />
              <div>
                <div className="text-sm text-foreground/90">{s.label}</div>
                <div className="text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
