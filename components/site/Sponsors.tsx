const sponsors = [
  "Jio Finance", "NPCI", "MarshMcLennan", "IDFC Bank", "L & T Group",
  "Canara Bank", "SBI", "Indian Oil", "Blix", "PVR INOX",
];

export function Sponsors() {
  const row = [...sponsors, ...sponsors];
  return (
    <section id="sponsors" className="relative border-t border-border/60 bg-background py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex items-end justify-between">
          <p className="text-mono text-[10px] uppercase tracking-[0.3em] text-secondary">/ 07 · Powered by</p>
          <a href="#" className="text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
            Become a partner →
          </a>
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-[marquee_40s_linear_infinite] items-center gap-16 px-8">
          {row.map((s, i) => (
            <div key={i} className="text-mono text-lg uppercase tracking-[0.3em] text-foreground/40 transition-colors hover:text-foreground">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
