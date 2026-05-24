import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PublicNav } from "@/components/layout/PublicNav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { offers } from "@/lib/sample-data";
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  MapPin,
  Share2,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/offers/$offerId")({
  loader: ({ params }) => {
    const offer = offers.find((o) => o.id === params.offerId);
    if (!offer) throw notFound();
    return { offer };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.offer.title ?? "Offer"} · Bookora` },
      {
        name: "description",
        content: `${loaderData?.offer.title} at ${loaderData?.offer.business} — book a live slot.`,
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center">Offer not found.</div>
  ),
  errorComponent: () => (
    <div className="grid min-h-screen place-items-center">Something went wrong.</div>
  ),
  component: OfferDetail,
});

const SLOTS = [
  { time: "06:00 AM", label: "Early", left: 4, total: 16 },
  { time: "07:30 AM", label: "Morning", left: 0, total: 20 },
  { time: "10:00 AM", label: "Mid-morning", left: 6, total: 12 },
  { time: "06:30 PM", label: "Evening", left: 5, total: 24 },
  { time: "08:00 PM", label: "Night", left: 0, total: 18 },
];

function OfferDetail() {
  const { offer } = Route.useLoaderData();
  const pct = (offer.booked / offer.total) * 100;
  return (
    <div className="bg-canvas">
      <PublicNav />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/offers" className="hover:text-foreground">
              Offers
            </Link>
            <span>/</span>
            <span>{offer.category}</span>
            <span>/</span>
            <span className="text-foreground">{offer.business}</span>
          </div>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-amber-200 via-rose-200 to-orange-300" />
              <div className="mt-6 flex items-center gap-3 text-xs">
                <span className="rounded-full bg-foreground px-2.5 py-0.5 text-background">
                  -{offer.discount}% off
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-0.5">
                  <span className="pulse-dot inline-flex h-1.5 w-1.5 rounded-full bg-success" />{" "}
                  Live · ends in {offer.endsIn}
                </span>
                <span className="inline-flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {offer.city}
                </span>
              </div>
              <h1 className="mt-4 font-display text-5xl leading-tight">{offer.title}</h1>
              <p className="mt-2 text-muted-foreground">
                by <span className="text-foreground">{offer.business}</span>
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { label: "Rating", value: "4.9", sub: "318 reviews", icon: Star },
                  { label: "Duration", value: "60 min", sub: "per session", icon: Clock },
                  { label: "Group", value: "1–4", sub: "people per booking", icon: Users },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-card p-4">
                    <s.icon className="h-4 w-4 text-muted-foreground" />
                    <div className="mt-3 font-display text-2xl">{s.value}</div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {s.sub}
                    </div>
                  </div>
                ))}
              </div>

              <div className="prose mt-10 max-w-none">
                <h2 className="font-display text-2xl">About this offer</h2>
                <p className="text-muted-foreground">
                  A guided session crafted by experienced instructors at {offer.business}. Built for
                  all levels, with a curated atmosphere, premium equipment, and a small-group format
                  designed to feel personal.
                </p>
                <h3 className="mt-8 font-display text-xl">What's included</h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {[
                    "60-minute curated session",
                    "Equipment & mat included",
                    "Complimentary refreshments",
                    "Locker & towel service",
                    "Trained, certified host",
                    "Free reschedule up to 2h prior",
                  ].map((x) => (
                    <li key={x} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-success" /> {x}
                    </li>
                  ))}
                </ul>
                <h3 className="mt-8 font-display text-xl">Terms & conditions</h3>
                <p className="text-sm text-muted-foreground">
                  Booking is non-transferable. Cancellations within 2 hours of the slot are
                  non-refundable. Please arrive 10 minutes early. Subject to availability.
                </p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl">₹{offer.price.toLocaleString()}</span>
                  {offer.original > offer.price && (
                    <span className="text-muted-foreground line-through">
                      ₹{offer.original.toLocaleString()}
                    </span>
                  )}
                  <span className="ml-auto rounded-full bg-lime px-2 py-0.5 text-xs font-medium">
                    Save ₹{(offer.original - offer.price).toLocaleString()}
                  </span>
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Realtime availability</span>
                    <span className="font-mono">
                      {offer.booked}/{offer.total}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div className="h-full bg-foreground" style={{ width: `${pct}%` }} />
                  </div>
                </div>

                <div className="mt-6 space-y-1.5">
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Select slot · Today
                  </div>
                  <div className="grid gap-2">
                    {SLOTS.map((s, i) => {
                      const full = s.left === 0;
                      return (
                        <button
                          key={s.time}
                          disabled={full}
                          className={`flex items-center justify-between rounded-lg border p-3 text-left transition-colors disabled:cursor-not-allowed ${
                            i === 3
                              ? "border-foreground bg-foreground/5"
                              : "border-border bg-card hover:border-foreground/30 disabled:opacity-60"
                          }`}
                        >
                          <div>
                            <div className="text-sm font-medium">{s.time}</div>
                            <div className="text-[11px] text-muted-foreground">{s.label}</div>
                          </div>
                          <div className="text-right text-xs">
                            {full ? (
                              <span className="inline-flex items-center gap-1 text-muted-foreground">
                                Full · Join waitlist
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-success">
                                <span className="h-1.5 w-1.5 rounded-full bg-success" /> {s.left}{" "}
                                left
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <Button asChild className="mt-6 w-full rounded-full" size="lg">
                  <Link to="/book/$offerId" params={{ offerId: offer.id }}>
                    Continue to book <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" /> Free reschedule
                  </span>
                  <button className="inline-flex items-center gap-1 hover:text-foreground">
                    <Share2 className="h-3 w-3" /> Share
                  </button>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-border bg-card p-5">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Location
                </div>
                <div className="mt-2 font-medium">{offer.business}</div>
                <div className="text-sm text-muted-foreground">{offer.city} · 2.4 km from you</div>
                <div className="mt-3 aspect-[16/9] rounded-lg bg-gradient-to-br from-stone-200 via-canvas to-stone-100" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <Calendar className="h-3 w-3" /> Similar offers
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {offers
              .filter((o) => o.id !== offer.id)
              .slice(0, 3)
              .map((o) => (
                <Link
                  key={o.id}
                  to="/offers/$offerId"
                  params={{ offerId: o.id }}
                  className="rounded-2xl border border-border bg-card p-4 hover:border-foreground/30"
                >
                  <div className="text-xs text-muted-foreground">{o.business}</div>
                  <div className="mt-1 font-display text-lg">{o.title}</div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-xl">₹{o.price}</span>
                    <span className="text-xs text-muted-foreground line-through">
                      ₹{o.original}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
