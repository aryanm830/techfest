"use client";

import type { ComponentType, SVGProps } from "react";
import { motion } from "motion/react";
import { DYChandrachud, NitinGadkari, NarayanMurthy, VNarayan, GenAnilChauhan, VivekRamChaudhari } from "./assets";

type Speaker = {
  name: string;
  role: string;
  org: string;
  Svg: ComponentType<SVGProps<SVGSVGElement>>;
};

const speakers: Speaker[] = [
  { name: "DY Chandrachud", role: "Former Chief Justice", org: "Supreme Court of India", Svg: DYChandrachud },
  { name: "Nitin Gadkari", role: "Minister of Road Transport and Highways", org: "Government of India", Svg: NitinGadkari },
  { name: "Narayan Murthy", role: "Founder", org: "Infosys", Svg: NarayanMurthy },
  { name: "Dr. V Narayan", role: "Chairman", org: "Indian Space Research Organisation (ISRO)", Svg: VNarayan },
  { name: "General Anil Chauhan", role: "Chief of Defence Staff", org: "Indian Armed Forces", Svg: GenAnilChauhan},
  { name: "Air Cheif Marshal Vivek Ram Chaudhari", role: "Cheif of Air Staff", org: "Indian Air Force", Svg: VivekRamChaudhari },  
];

export function Speakers() {
  return (
    <section id="speakers" className="relative border-t border-border/60 bg-background py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-mono text-[10px] uppercase tracking-[0.3em] text-secondary">/ 05 · Voices</p>
            <h2 className="font-display mt-3 text-balance text-4xl font-medium tracking-[-0.04em] sm:text-6xl text-gradient">
              Speakers shaping<br />the next decade.
            </h2>
          </div>
          <div className="hidden md:block text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Scroll →
          </div>
        </div>
      </div>

      <div className="relative mt-16 overflow-x-auto overflow-y-hidden pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto flex w-max max-w-none gap-5 px-6">
          {speakers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative w-[300px] shrink-0 overflow-hidden rounded-xl border border-border bg-surface-1 transition-colors hover:border-secondary/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0" style={{
                  background:
                    "radial-gradient(circle at 30% 20%, oklch(0.68 0.20 245 / 0.35), transparent 60%), radial-gradient(circle at 70% 80%, oklch(0.88 0.16 200 / 0.25), transparent 60%), oklch(0.13 0.025 252)",
                }} />
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute inset-y-0 flex items-center justify-center">
                  <s.Svg className={`h-full w-full object-cover object-center opacity-60 ${s.name === "Narayan Murthy" ? "-ml-12" : ""}`} />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute left-3 top-3 text-mono text-[10px] uppercase tracking-[0.25em] text-secondary">
                  /S-{String(i + 1).padStart(2, "0")}
                </div>
                <div className="absolute right-3 top-3 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-secondary" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-medium tracking-tight">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.role}</p>
                <p className="mt-3 text-mono text-[10px] uppercase tracking-[0.25em] text-secondary">{s.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
