import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminTopbar } from "@/components/layout/AdminTopbar";
import { bookings, offers } from "@/lib/sample-data";
import { ArrowDown, ArrowUp, ArrowUpRight, Calendar, Clock, Tag, Users } from "lucide-react";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard · Bookora" },
      { name: "description", content: "Realtime operator dashboard." },
    ],
  }),
  component: Dashboard,
});

const STATS = [
  { label: "Total offers", value: "24", delta: "+3", up: true, icon: Tag, sub: "since last week" },
  {
    label: "Active offers",
    value: "12",
    delta: "+2",
    up: true,
    icon: Calendar,
    sub: "3 expiring today",
  },
  {
    label: "Total bookings",
    value: "1,284",
    delta: "+18.2%",
    up: true,
    icon: Users,
    sub: "vs. last month",
  },
  {
    label: "Today's bookings",
    value: "218",
    delta: "+14",
    up: true,
    icon: Clock,
    sub: "live · last hour: 23",
  },
];

function Dashboard() {
  return (
    <>
      <AdminTopbar title="Overview" subtitle="Thursday, 14 May · 218 bookings today" />
      <div className="space-y-8 p-6 lg:p-10">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-start justify-between">
                <s.icon className="h-4 w-4 text-muted-foreground" />
                <span
                  className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] ${s.up ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}
                >
                  {s.up ? (
                    <ArrowUp className="h-2.5 w-2.5" />
                  ) : (
                    <ArrowDown className="h-2.5 w-2.5" />
                  )}{" "}
                  {s.delta}
                </span>
              </div>
              <div className="mt-4 font-display text-4xl tracking-tight">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">
                {s.label} · <span className="text-foreground/60">{s.sub}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <section className="rounded-2xl border border-border bg-card">
            <header className="flex items-center justify-between border-b border-border p-5">
              <div>
                <h2 className="font-display text-xl">Bookings · last 14 days</h2>
                <p className="text-xs text-muted-foreground">Hourly · realtime</p>
              </div>
              <div className="flex items-center gap-1 rounded-full border border-border bg-canvas p-0.5 text-xs">
                {["Day", "Week", "Month"].map((t, i) => (
                  <button
                    key={t}
                    className={`rounded-full px-3 py-1 ${i === 1 ? "bg-foreground text-background" : "text-muted-foreground"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </header>
            <div className="p-5">
              <div className="flex h-56 items-end gap-1.5">
                {[
                  30, 42, 38, 55, 48, 65, 72, 62, 80, 72, 88, 74, 92, 85, 90, 72, 68, 80, 95, 108,
                  98, 114, 128, 118, 132,
                ].map((h, i) => (
                  <div key={i} className="group relative flex-1">
                    <div
                      className="rounded-t-sm bg-foreground/80 group-hover:bg-foreground"
                      style={{ height: `${h * 1.4}px` }}
                    />
                    {i === 14 && (
                      <div className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[10px] text-background">
                        Today · 218
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between text-[10px] text-muted-foreground">
                {[
                  "May 1",
                  "",
                  "",
                  "",
                  "",
                  "May 6",
                  "",
                  "",
                  "",
                  "",
                  "May 11",
                  "",
                  "",
                  "",
                  "Today",
                ].map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>
            </div>
            <footer className="grid grid-cols-3 border-t border-border text-sm">
              <Mini label="Booked seats" value="3,420" sub="of 4,800" />
              <Mini label="Available seats" value="1,380" sub="across 12 offers" border />
              <Mini label="Conversion" value="37.2%" sub="+8.8 pp" />
            </footer>
          </section>

          <section className="rounded-2xl border border-border bg-card">
            <header className="flex items-center justify-between border-b border-border p-5">
              <div>
                <h2 className="font-display text-xl">Live activity</h2>
                <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
                  <span className="pulse-dot inline-flex h-1.5 w-1.5 rounded-full bg-success" />{" "}
                  Realtime stream
                </p>
              </div>
              <button className="text-xs text-muted-foreground hover:text-foreground">
                View all
              </button>
            </header>
            <ul className="divide-y divide-border">
              {bookings.slice(0, 6).map((b) => (
                <li key={b.ref} className="flex items-center gap-3 p-4">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-muted text-xs">
                    {b.customer
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm">
                      <span className="font-medium">{b.customer}</span> · {b.offer}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {b.slot} · {b.people} {b.people === 1 ? "person" : "people"}
                    </div>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] ${badgeFor(b.status)}`}>
                    {b.status}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="rounded-2xl border border-border bg-card">
          <header className="flex items-center justify-between border-b border-border p-5">
            <div>
              <h2 className="font-display text-xl">Recent bookings</h2>
              <p className="text-xs text-muted-foreground">Most recent · all offers</p>
            </div>
            <Link
              to="/admin/bookings"
              className="inline-flex items-center gap-1 text-xs font-medium"
            >
              All bookings <ArrowUpRight className="h-3 w-3" />
            </Link>
          </header>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs text-muted-foreground">
                <tr className="border-b border-border">
                  <Th>Ref</Th>
                  <Th>Customer</Th>
                  <Th>Offer</Th>
                  <Th>Slot</Th>
                  <Th>People</Th>
                  <Th>Total</Th>
                  <Th>Status</Th>
                </tr>
              </thead>
              <tbody>
                {bookings.slice(0, 6).map((b) => (
                  <tr
                    key={b.ref}
                    className="border-b border-border last:border-0 hover:bg-muted/40"
                  >
                    <Td className="font-mono text-xs">{b.ref}</Td>
                    <Td>
                      {b.customer}
                      <div className="text-xs text-muted-foreground">{b.phone}</div>
                    </Td>
                    <Td>{b.offer}</Td>
                    <Td className="text-muted-foreground">{b.slot}</Td>
                    <Td>{b.people}</Td>
                    <Td>₹{b.total.toLocaleString()}</Td>
                    <Td>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] ${badgeFor(b.status)}`}
                      >
                        {b.status}
                      </span>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="text-xs text-muted-foreground">Slot utilization · today</div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-display text-4xl">71%</span>
              <span className="text-xs text-success">+6 pp</span>
            </div>
            <div className="mt-4 space-y-2">
              {[
                ["Morning", 84],
                ["Afternoon", 62],
                ["Evening", 89],
                ["Late night", 31],
              ].map(([l, v]) => (
                <div key={l as string}>
                  <div className="flex justify-between text-xs">
                    <span>{l}</span>
                    <span className="font-mono text-muted-foreground">{v}%</span>
                  </div>
                  <div className="mt-1 h-1 overflow-hidden rounded-full bg-muted">
                    <div className="h-full bg-foreground" style={{ width: `${v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="text-xs text-muted-foreground">Top offers · 7 days</div>
            <div className="mt-3 space-y-3">
              {offers.slice(0, 4).map((o) => (
                <div key={o.id} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-amber-200 to-rose-200 text-[10px] font-mono">
                    {o.id.slice(-2)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium">{o.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {o.booked} booked · {o.total - o.booked} left
                    </div>
                  </div>
                  <span className="font-mono text-xs">
                    ₹{(o.price * o.booked).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-foreground p-5 text-background">
            <div className="text-xs text-background/60">Realtime engine</div>
            <div className="mt-2 font-display text-4xl">
              42<span className="text-lg text-background/60">ms</span>
            </div>
            <div className="text-xs text-background/60">Avg booking latency, last 60s</div>
            <div className="mt-4 flex h-16 items-end gap-1">
              {[
                40, 42, 38, 55, 48, 45, 52, 42, 38, 46, 50, 42, 44, 40, 42, 44, 38, 42, 40, 42, 38,
                40,
              ].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-lime/70" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1">
                <span className="pulse-dot inline-flex h-1.5 w-1.5 rounded-full bg-lime" /> Healthy
              </span>
              <span className="text-background/60">99.99% uptime</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function Mini({
  label,
  value,
  sub,
  border,
}: {
  label: string;
  value: string;
  sub: string;
  border?: boolean;
}) {
  return (
    <div className={`p-5 ${border ? "border-x border-border" : ""}`}>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 font-display text-2xl">{value}</div>
      <div className="text-[11px] text-muted-foreground">{sub}</div>
    </div>
  );
}
const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="px-5 py-3 text-left font-medium">{children}</th>
);
const Td = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <td className={`px-5 py-3 align-top ${className}`}>{children}</td>
);

export function badgeFor(s: string) {
  switch (s) {
    case "Confirmed":
    case "Active":
    case "Available":
      return "bg-success/10 text-success";
    case "Pending":
    case "Draft":
      return "bg-warning/10 text-warning";
    case "Cancelled":
    case "Expired":
      return "bg-destructive/10 text-destructive";
    case "Completed":
      return "bg-info/10 text-info";
    case "Paused":
    case "Closed":
      return "bg-muted text-muted-foreground";
    case "No Show":
    case "Full":
      return "bg-foreground/10 text-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
}
