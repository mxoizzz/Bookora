import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicNav } from "@/components/layout/PublicNav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Calendar,
  Check,
  Clock,
  Dumbbell,
  Scissors,
  Coffee,
  Stethoscope,
  GraduationCap,
  Trophy,
  Sparkles,
  Building,
  Users,
  Zap,
  Globe,
  ShieldCheck,
  Activity,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bookora — Realtime offer booking for modern businesses" },
      {
        name: "description",
        content:
          "Launch limited-time offers, manage live slots, and accept bookings in seconds. Bookora is the realtime booking infrastructure trusted by modern operators.",
      },
    ],
  }),
  component: Landing,
});

const categories = [
  { icon: Dumbbell, label: "Gyms" },
  { icon: Scissors, label: "Salons" },
  { icon: Coffee, label: "Cafes" },
  { icon: Building, label: "Restaurants" },
  { icon: Stethoscope, label: "Clinics" },
  { icon: GraduationCap, label: "Coaching" },
  { icon: Trophy, label: "Turfs" },
  { icon: Sparkles, label: "Spas" },
  { icon: Users, label: "Coworking" },
  { icon: Activity, label: "Activities" },
];

function Landing() {
  return (
    <div className="bg-canvas">
      <PublicNav />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 dot-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pt-20 pb-24 lg:grid-cols-[1.05fr_1fr] lg:pt-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <span className="pulse-dot inline-flex h-1.5 w-1.5 rounded-full bg-success" />
              Live · 12,481 slots booked this week
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-[80px]">
              Realtime booking <br className="hidden md:block" />
              <span className="italic text-muted-foreground">infrastructure</span> for{" "}
              <br className="hidden md:block" />
              modern businesses.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Launch limited-time offers, run live slot inventory, and turn walk-ins into
              reservations — all from one elegant operator console.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/signup">
                  Start free <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-card">
                <Link to="/offers">See live offers</Link>
              </Button>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                ["42ms", "Avg booking latency"],
                ["99.99%", "Engine uptime"],
                ["3,200+", "Operators live"],
              ].map(([k, v]) => (
                <div key={v}>
                  <div className="font-display text-2xl">{k}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-lime/30 via-transparent to-transparent blur-2xl" />
            <div className="relative rounded-2xl border border-border bg-card p-3 shadow-elegant">
              <div className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                </div>
                <div className="font-mono text-muted-foreground">app.bookora.io / today</div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <span className="pulse-dot inline-flex h-1.5 w-1.5 rounded-full bg-success" />{" "}
                  live
                </div>
              </div>
              <div className="grid gap-3 p-3 md:grid-cols-2">
                <div className="rounded-xl border border-border p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">Today's bookings</div>
                    <span className="rounded-full bg-lime/40 px-1.5 py-0.5 text-[10px]">+18%</span>
                  </div>
                  <div className="mt-1 font-display text-3xl">218</div>
                  <div className="mt-3 flex h-14 items-end gap-1">
                    {[30, 42, 28, 55, 40, 68, 72, 50, 80, 62, 90, 74].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-foreground/80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <div className="text-xs text-muted-foreground">Conversion</div>
                  <div className="mt-1 font-display text-3xl">37.2%</div>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="relative h-12 w-12">
                      <svg viewBox="0 0 36 36" className="h-12 w-12 -rotate-90">
                        <circle
                          cx="18"
                          cy="18"
                          r="15.9"
                          className="fill-none stroke-border"
                          strokeWidth="3"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="15.9"
                          className="fill-none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeDasharray="37 100"
                        />
                      </svg>
                    </div>
                    <div className="text-xs text-muted-foreground">vs. 28.4% last week</div>
                  </div>
                </div>
                <div className="rounded-xl border border-border p-4 md:col-span-2">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-medium">Peak Hour Training · 6:30 PM</div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-[10px] text-success">
                      <span className="pulse-dot inline-flex h-1 w-1 rounded-full bg-success" /> 5
                      seats left
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-foreground" style={{ width: "79%" }} />
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                    {[
                      ["Jordan K.", "2 seats", "Confirmed"],
                      ["Rohan M.", "1 seat", "Confirmed"],
                      ["Priya I.", "2 seats", "Pending"],
                    ].map(([n, s, st]) => (
                      <div key={n} className="rounded-md bg-muted/60 p-2">
                        <div className="font-medium">{n}</div>
                        <div className="text-muted-foreground">{s}</div>
                        <div
                          className={`mt-1 text-[10px] ${st === "Confirmed" ? "text-success" : "text-warning"}`}
                        >
                          {st}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 hidden w-64 rounded-xl border border-border bg-card p-3 shadow-pop md:block">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-lime">
                  <Check className="h-4 w-4" />
                </span>
                <div className="text-xs">
                  <div className="font-medium">New booking · BKR-9182</div>
                  <div className="text-muted-foreground">Jordan K. · Peak Hour Training</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border bg-card/40">
          <div className="mx-auto max-w-7xl overflow-hidden px-6 py-6">
            <div className="text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Trusted by 3,200+ local operators
            </div>
            <div className="mt-4 flex items-center justify-around gap-10 text-sm text-muted-foreground/80">
              {[
                "Northside Fitness",
                "Harbor Café",
                "Ironworks Gym",
                "Studio Linea",
                "City Turf Club",
                "Serene Wellness",
                "Ember Kitchen",
                "Clear Smile Clinic",
              ].map((n) => (
                <span key={n} className="whitespace-nowrap font-display text-lg">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                The platform
              </div>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl text-balance">
                Everything you need to run{" "}
                <em className="not-italic text-muted-foreground">operational</em> bookings.
              </h2>
            </div>
            <Link to="/signup" className="inline-flex items-center gap-1 text-sm font-medium">
              Explore platform <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {[
              {
                icon: Zap,
                t: "Realtime slot engine",
                d: "Inventory sync across web, QR, walk-in, and team in under 50ms. Conflict-free by design.",
              },
              {
                icon: Calendar,
                t: "Smart offer builder",
                d: "Compose limited-time offers with pricing, windows, capacity caps and per-customer limits.",
              },
              {
                icon: BarChart3,
                t: "Operator analytics",
                d: "Revenue, peak hours, slot utilization and conversion — the metrics that actually move the needle.",
              },
              {
                icon: ShieldCheck,
                t: "No-show protection",
                d: "Confirmation, reminders and one-tap cancellation links to keep your seats full.",
              },
              {
                icon: Globe,
                t: "Public marketplace",
                d: "Be discovered by nearby customers searching by category, price, and live availability.",
              },
              {
                icon: Activity,
                t: "Live waitlists",
                d: "Auto-promote waitlisted customers the moment a seat opens. No spreadsheet drama.",
              },
            ].map((f) => (
              <div key={f.t} className="group bg-card p-8">
                <f.icon className="h-5 w-5" />
                <h3 className="mt-6 font-display text-2xl">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground">
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-elegant">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div>
                  <div className="text-xs text-muted-foreground">Slot inventory · Today</div>
                  <div className="font-display text-lg">Northside Fitness</div>
                </div>
                <span className="rounded-full bg-success/10 px-2 py-0.5 text-[10px] text-success">
                  Live
                </span>
              </div>
              <div className="mt-4 space-y-2">
                {[
                  ["06:00", "Early Access Session", 14, 16, "available"],
                  ["07:30", "Morning Block", 20, 20, "full"],
                  ["10:00", "Midday Open Slot", 6, 12, "available"],
                  ["18:30", "Peak Hour Training", 19, 24, "available"],
                  ["20:00", "Evening Block", 18, 18, "full"],
                ].map(([t, n, b, c, st]) => {
                  const pct = (Number(b) / Number(c)) * 100;
                  return (
                    <div
                      key={t as string}
                      className="flex items-center gap-4 rounded-lg border border-border p-3"
                    >
                      <div className="font-mono text-xs text-muted-foreground">{t}</div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-medium">{n}</div>
                        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className={`h-full ${st === "full" ? "bg-foreground" : "bg-lime"}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-right text-xs">
                        <div className="font-mono">
                          {b as number}/{c as number}
                        </div>
                        <div
                          className={`text-[10px] uppercase tracking-wider ${st === "full" ? "text-muted-foreground" : "text-success"}`}
                        >
                          {st as string}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Realtime engine
            </div>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl text-balance">
              See every seat <em className="not-italic text-muted-foreground">fill</em>, the moment
              it does.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Bookora's realtime layer keeps your slot inventory honest across every channel. No
              double-bookings, no stale availability, no scrambling.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Instant cross-channel sync",
                "Per-customer booking caps",
                "Auto-close & expiry rules",
                "Webhook + API events",
              ].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-success" /> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="categories" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              For every venue
            </div>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              One platform. Every kind of seat.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-5">
            {categories.map((c) => (
              <div
                key={c.label}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/30"
              >
                <c.icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
                <div className="font-display text-xl">{c.label}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  View template →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "Free",
                desc: "For solo operators getting started.",
                features: ["Up to 50 bookings/mo", "1 offer at a time", "Public listing"],
              },
              {
                name: "Pro",
                price: "₹1,499",
                suffix: "/mo",
                featured: true,
                desc: "For growing venues with active offers.",
                features: [
                  "Unlimited bookings",
                  "Unlimited offers & slots",
                  "Waitlists & reminders",
                  "Operator analytics",
                ],
              },
              {
                name: "Scale",
                price: "Custom",
                desc: "Multi-location and franchise teams.",
                features: [
                  "Multi-venue control",
                  "Roles & SSO",
                  "API + webhooks",
                  "Priority support",
                ],
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl border p-7 ${p.featured ? "border-foreground bg-card shadow-elegant" : "border-border bg-card"}`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-display text-2xl">{p.name}</div>
                  {p.featured && (
                    <span className="rounded-full bg-lime px-2 py-0.5 text-[10px] font-medium">
                      Most loved
                    </span>
                  )}
                </div>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-5xl">{p.price}</span>
                  {p.suffix && <span className="text-sm text-muted-foreground">{p.suffix}</span>}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-8 w-full rounded-full"
                  variant={p.featured ? "default" : "outline"}
                >
                  <Link to="/signup">Get started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-12 text-background md:p-20">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-lime/30 blur-3xl" />
            <div className="relative max-w-3xl">
              <h2 className="font-display text-5xl leading-[1.04] md:text-6xl">
                Your next booking is <em className="not-italic">already</em> on the way.
              </h2>
              <p className="mt-5 max-w-lg text-background/70">
                Set up your business profile, launch your first offer, and accept your first
                realtime booking in under five minutes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-lime text-lime-foreground hover:bg-lime/90"
                >
                  <Link to="/signup">
                    Create your workspace <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-background/20 bg-transparent text-background hover:bg-background/10 hover:text-background"
                >
                  <Link to="/offers">Browse live offers</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs text-background/60">
                <Clock className="h-3 w-3" /> 4 min setup · No card required
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
