import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";

export function PublicNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-canvas/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <Link to="/offers" className="hover:text-foreground transition-colors">
              Offers
            </Link>
            <a href="/#features" className="hover:text-foreground transition-colors">
              Platform
            </a>
            <a href="/#categories" className="hover:text-foreground transition-colors">
              For business
            </a>
            <a href="/#pricing" className="hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="/#docs" className="hover:text-foreground transition-colors">
              Docs
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/signin"
            className="hidden text-sm text-muted-foreground hover:text-foreground md:inline-flex px-3 py-2"
          >
            Sign in
          </Link>
          <Button asChild size="sm" className="rounded-full">
            <Link to="/signup">Start free</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
