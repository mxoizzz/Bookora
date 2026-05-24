import { Bell, ChevronDown, HelpCircle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export function AdminTopbar({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-canvas/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6 lg:px-10">
        <div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Northside Fitness</span>
            <ChevronDown className="h-3 w-3" />
            <span className="rounded-full bg-lime/40 px-2 py-0.5 text-[10px] font-medium text-foreground">
              Pro
            </span>
          </div>
          <h1 className="font-display text-2xl leading-tight">{title}</h1>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-2">
          {action ?? (
            <Button asChild size="sm" className="rounded-full">
              <Link to="/admin/offers/new">
                <Plus className="h-3.5 w-3.5" /> New offer
              </Link>
            </Button>
          )}
          <button className="rounded-md p-2 text-muted-foreground hover:bg-muted">
            <HelpCircle className="h-4 w-4" />
          </button>
          <button className="relative rounded-md p-2 text-muted-foreground hover:bg-muted">
            <Bell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-lime" />
          </button>
          <div className="ml-1 flex items-center gap-2 rounded-full border border-border bg-card p-0.5 pr-3">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground text-xs text-background">
              JP
            </span>
            <span className="hidden text-xs font-medium md:inline">Jordan P.</span>
          </div>
        </div>
      </div>
    </header>
  );
}
