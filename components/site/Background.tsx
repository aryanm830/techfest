export function GridBackdrop({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    </div>
  );
}

export function ScanLine() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"
        style={{ animation: "scan 6s ease-in-out infinite" }}
      />
    </div>
  );
}
