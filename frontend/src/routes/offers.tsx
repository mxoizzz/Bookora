import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicNav } from "@/components/layout/PublicNav";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { offers, CATEGORIES } from "@/lib/sample-data";
import { Search, MapPin, Clock, Filter, ArrowRight, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Live offers · Bookora" },
      {
        name: "description",
        content: "Discover live, limited-time offers from venues near you. Book in seconds.",
      },
    ],
  }),
  component: OffersListing,
});

const COVER_GRADIENTS: Record<string, string> = {
  img1: "from-amber-200 via-rose-200 to-orange-300",
  img2: "from-stone-200 via-amber-100 to-rose-200",
  img3: "from-emerald-200 via-lime-200 to-teal-200",
  img4: "from-purple-200 via-pink-100 to-rose-200",
  img5: "from-neutral-300 via-stone-200 to-zinc-300",
  img6: "from-zinc-300 via-stone-300 to-amber-200",
  img7: "from-orange-200 via-red-200 to-rose-300",
  img8: "from-sky-200 via-blue-100 to-indigo-200",
};

function OffersListing() {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? offers : offers.filter((o) => o.category === active);

  return (
    <div className="bg-canvas">
      <PublicNav />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-14 pb-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Marketplace
              </div>
              <h1 className="mt-2 font-display text-5xl leading-tight md:text-6xl">
                Live offers near you.
              </h1>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Limited-time slots from {offers.length}+ venues. Updated in real-time.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="pulse-dot inline-flex h-1.5 w-1.5 rounded-full bg-success" />
              218 booked today
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-border bg-card p-2 shadow-card md:flex-row md:items-center">
            <div className="flex flex-1 items-center gap-2 px-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search offers, venues, categories…"
                className="border-0 bg-transparent shadow-none focus-visible:ring-0"
              />
            </div>
            <div className="hidden h-6 w-px bg-border md:block" />
            <div className="flex items-center gap-2 px-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Bengaluru</span>
            </div>
            <div className="hidden h-6 w-px bg-border md:block" />
            <div className="flex items-center gap-2 px-3 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" /> Today
            </div>
            <Button className="rounded-full">Find slots</Button>
          </div>

          <div className="mt-6 -mx-6 overflow-x-auto px-6">
            <div className="flex gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition-colors ${
                    active === c
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card hover:border-foreground/30"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-6 lg:flex-row">
            <aside className="hidden w-64 shrink-0 lg:block">
              <div className="sticky top-24 space-y-6 rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <SlidersHorizontal className="h-4 w-4" /> Filters
                  </div>
                  <button className="text-xs text-muted-foreground">Reset</button>
                </div>
                <FilterBlock title="Price range">
                  <div className="flex items-center gap-2">
                    <Input placeholder="₹0" className="h-8" />
                    <span className="text-muted-foreground">—</span>
                    <Input placeholder="₹5000" className="h-8" />
                  </div>
                </FilterBlock>
                <FilterBlock title="Discount">
                  <div className="space-y-2 text-sm">
                    {["30%+", "40%+", "50%+", "70%+"].map((x) => (
                      <label key={x} className="flex items-center gap-2">
                        <input type="checkbox" className="h-3.5 w-3.5 accent-foreground" /> {x}
                      </label>
                    ))}
                  </div>
                </FilterBlock>
                <FilterBlock title="Date">
                  <div className="grid grid-cols-3 gap-1.5 text-xs">
                    {["Today", "Tom.", "This wk", "Sat", "Sun", "Pick…"].map((d) => (
                      <button
                        key={d}
                        className="rounded-md border border-border px-2 py-1.5 hover:bg-muted"
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </FilterBlock>
                <FilterBlock title="Availability">
                  <div className="flex items-center justify-between text-sm">
                    <span>Show available only</span>
                    <Switch defaultChecked />
                  </div>
                </FilterBlock>
              </div>
            </aside>

            <div className="flex-1">
              <div className="mb-4 flex items-center justify-between text-sm">
                <div className="text-muted-foreground">
                  {filtered.length} offers · sorted by{" "}
                  <span className="text-foreground">Trending</span>
                </div>
                <button className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground lg:hidden">
                  <Filter className="h-4 w-4" /> Filters
                </button>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((o) => (
                  <OfferCard key={o.id} o={o} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FilterBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {title}
      </div>
      {children}
    </div>
  );
}

export function OfferCard({ o }: { o: (typeof offers)[number] }) {
  const remaining = o.total - o.booked;
  const pct = (o.booked / o.total) * 100;
  return (
    <Link
      to="/offers/$offerId"
      params={{ offerId: o.id }}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-pop"
    >
      <div
        className={`relative aspect-[16/10] bg-gradient-to-br ${COVER_GRADIENTS[o.cover] ?? "from-stone-200 to-amber-100"}`}
      >
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
          <span className="rounded-full bg-foreground/85 px-2 py-0.5 text-[10px] font-medium text-background backdrop-blur">
            -{o.discount}%
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-canvas/90 px-2 py-0.5 text-[10px] backdrop-blur">
            <Clock className="h-2.5 w-2.5" /> ends in {o.endsIn}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-canvas/90 px-2 py-0.5 text-[10px] backdrop-blur">
            <span
              className={`h-1.5 w-1.5 rounded-full ${remaining === 0 ? "bg-destructive" : "bg-success"}`}
            />
            {remaining === 0 ? "Waitlist" : `${remaining} slots left`}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{o.business}</span>
          <span>· {o.city}</span>
        </div>
        <h3 className="mt-1 font-display text-xl leading-snug">{o.title}</h3>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-display text-2xl">₹{o.price.toLocaleString()}</span>
          {o.original > o.price && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{o.original.toLocaleString()}
            </span>
          )}
        </div>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full bg-foreground" style={{ width: `${pct}%` }} />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[11px] text-muted-foreground">
            {o.booked}/{o.total} booked
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium group-hover:gap-1.5">
            Book now <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
