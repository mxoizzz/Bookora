import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  const groups = [
    { title: "Product", links: ["Platform", "Realtime engine", "Slots", "Analytics", "Pricing"] },
    { title: "Solutions", links: ["Gyms", "Salons", "Cafes", "Clinics", "Turfs"] },
    { title: "Company", links: ["About", "Customers", "Careers", "Press", "Contact"] },
    { title: "Resources", links: ["Docs", "Changelog", "Status", "Security", "API"] },
  ];
  return (
    <footer className="border-t border-border bg-canvas">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-sm text-sm text-muted-foreground">
              Realtime booking infrastructure for modern businesses. From offer to occupied seat in
              seconds.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="relative inline-flex h-2 w-2">
                <span className="pulse-dot inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              All systems operational
            </div>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <div className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {g.title}
              </div>
              <ul className="space-y-2.5 text-sm">
                {g.links.map((l) => (
                  <li key={l}>
                    <Link to="/" className="text-foreground/80 hover:text-foreground">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© 2026 Bookora Labs, Inc. Crafted for operators.</div>
          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
            <a href="#">DPA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
