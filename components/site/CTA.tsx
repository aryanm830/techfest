import { GridBackdrop } from "./Background";

export function CTA() {
  return (
    <section id="register" className="relative overflow-hidden border-t border-border/60 bg-surface-0 py-32">
      <GridBackdrop />
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[100px]"
        style={{ background: "var(--gradient-primary)" }} />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-mono text-[10px] uppercase tracking-[0.3em] text-secondary">/ 08 · Enlist</p>
        <h2 className="font-display mt-4 text-balance text-5xl font-medium tracking-[-0.04em] sm:text-7xl text-gradient">
          Join the future.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-muted-foreground">
          Stand alongside the next generation of engineers, scientists and storytellers
          who will write the cybernetic century.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="group inline-flex items-center gap-2 rounded-md bg-foreground px-7 py-3.5 text-mono text-xs uppercase tracking-[0.22em] text-background transition-shadow hover:shadow-[0_0_60px_-10px_oklch(0.88_0.16_200/0.8)]">
            Register Now <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a href="#" className="glass inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-mono text-xs uppercase tracking-[0.22em] text-foreground hover:bg-surface-2/60">
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
}
