import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Tag,
  CalendarRange,
  ClipboardList,
  BarChart3,
  Building2,
  Settings,
  PlusCircle,
  LifeBuoy,
  Search,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";

const nav = [
  { label: "Dashboard", to: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Offers", to: "/admin/offers", icon: Tag },
  { label: "Slots", to: "/admin/slots", icon: CalendarRange },
  { label: "Bookings", to: "/admin/bookings", icon: ClipboardList },
  { label: "Analytics", to: "/admin/analytics", icon: BarChart3 },
  { label: "Business", to: "/admin/profile", icon: Building2 },
  { label: "Settings", to: "/admin/settings", icon: Settings },
] as const;

export function AdminSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-sidebar lg:flex">
      <div className="flex h-16 items-center border-b border-border px-5">
        <Logo />
      </div>
      <div className="px-4 pt-4">
        <button className="flex w-full items-center gap-2 rounded-md border border-border bg-muted/40 px-3 py-2 text-left text-sm text-muted-foreground hover:bg-muted">
          <Search className="h-3.5 w-3.5" /> Search…
          <kbd className="ml-auto rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[10px]">
            ⌘K
          </kbd>
        </button>
      </div>
      <nav className="flex-1 space-y-0.5 px-3 py-4">
        <div className="px-2 pb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Workspace
        </div>
        {nav.map((item) => {
          const active =
            pathname === item.to ||
            (item.to !== "/admin/dashboard" && pathname.startsWith(item.to));
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`group flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors ${
                active
                  ? "bg-foreground text-background"
                  : "text-foreground/75 hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
              {item.label === "Bookings" && (
                <span
                  className={`ml-auto rounded-full px-1.5 py-0.5 text-[10px] ${active ? "bg-background/15 text-background" : "bg-lime text-lime-foreground"}`}
                >
                  12
                </span>
              )}
            </Link>
          );
        })}
        <div className="px-2 pb-2 pt-6 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Quick
        </div>
        <Link
          to="/admin/offers/new"
          className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-foreground/75 hover:bg-muted hover:text-foreground"
        >
          <PlusCircle className="h-4 w-4" /> New offer
        </Link>
        <a
          href="#"
          className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-foreground/75 hover:bg-muted hover:text-foreground"
        >
          <LifeBuoy className="h-4 w-4" /> Help & status
        </a>
      </nav>
      <div className="m-3 rounded-lg border border-border bg-muted/40 p-3 text-xs">
        <div className="mb-1 flex items-center gap-2 font-medium">
          <span className="pulse-dot inline-flex h-1.5 w-1.5 rounded-full bg-success" /> Realtime
          engine
        </div>
        <p className="text-muted-foreground">Latency 42ms · 99.99% uptime</p>
      </div>
    </aside>
  );
}
