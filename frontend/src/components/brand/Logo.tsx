import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background">
        <span className="font-display text-lg leading-none">B</span>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-lime ring-2 ring-canvas" />
      </span>
      <span className="font-display text-xl tracking-tight">Bookora</span>
    </Link>
  );
}
