import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PublicNav } from "@/components/layout/PublicNav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { offers } from "@/lib/sample-data";
import { Check, Lock, ShieldCheck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/book/$offerId")({
  loader: ({ params }) => {
    const offer = offers.find((o) => o.id === params.offerId);
    if (!offer) throw notFound();
    return { offer };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `Book · ${loaderData?.offer.title ?? "Offer"} · Bookora` },
      { name: "description", content: "Complete your Bookora reservation." },
    ],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center">Offer not found.</div>
  ),
  errorComponent: () => (
    <div className="grid min-h-screen place-items-center">Something went wrong.</div>
  ),
  component: Book,
});

function Book() {
  const { offer } = Route.useLoaderData();
  return (
    <div className="bg-canvas">
      <PublicNav />
      <section>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-center gap-2 text-xs">
            {["Slot", "Your details", "Confirm"].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <span
                  className={`grid h-5 w-5 place-items-center rounded-full text-[10px] ${i <= 1 ? "bg-foreground text-background" : "bg-muted text-muted-foreground"}`}
                >
                  {i + 1}
                </span>
                <span className={i <= 1 ? "text-foreground" : "text-muted-foreground"}>{s}</span>
                {i < 2 && <span className="h-px w-8 bg-border" />}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h1 className="font-display text-4xl">Your details</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                We'll send your confirmation and a calendar invite to these contacts.
              </p>

              <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label>Customer name</Label>
                    <Input placeholder="Jordan Kim" className="bg-card" />
                    <div className="text-[11px] text-success inline-flex items-center gap-1">
                      <Check className="h-3 w-3" /> Looks good
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Phone number</Label>
                    <div className="flex">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-card px-3 text-sm text-muted-foreground">
                        +91
                      </span>
                      <Input placeholder="98765 43210" className="rounded-l-none bg-card" />
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label>
                    Email <span className="text-muted-foreground text-xs">· optional</span>
                  </Label>
                  <Input type="email" placeholder="you@email.com" className="bg-card" />
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label>Selected slot</Label>
                    <div className="flex items-center justify-between rounded-md border border-input bg-card px-3 py-2 text-sm">
                      <span>Today · 6:30 PM · Peak Hour Training</span>
                      <button className="text-xs text-muted-foreground hover:text-foreground">
                        Change
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Number of people</Label>
                    <div className="inline-flex items-center gap-3 rounded-md border border-input bg-card px-3 py-2">
                      <button className="grid h-6 w-6 place-items-center rounded-md hover:bg-muted">
                        −
                      </button>
                      <span className="font-mono text-sm">2</span>
                      <button className="grid h-6 w-6 place-items-center rounded-md hover:bg-muted">
                        +
                      </button>
                      <span className="ml-auto text-xs text-muted-foreground">Max 4</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label>
                    Special note <span className="text-muted-foreground text-xs">· optional</span>
                  </Label>
                  <Textarea
                    placeholder="Allergies, accessibility needs, special requests…"
                    className="bg-card"
                  />
                </div>

                <div className="rounded-xl border border-border bg-card p-4 text-xs text-muted-foreground">
                  <div className="inline-flex items-center gap-1 text-foreground">
                    <ShieldCheck className="h-3.5 w-3.5" /> Secure & private
                  </div>
                  <p className="mt-1">
                    Your details are encrypted and only shared with {offer.business} to manage your
                    booking.
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to="/offers/$offerId"
                    params={{ offerId: offer.id }}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    ← Back
                  </Link>
                  <Button asChild size="lg" className="rounded-full">
                    <Link to="/booking-confirmed">
                      Confirm booking <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </form>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Order summary
                </div>
                <div className="mt-4 flex gap-3">
                  <div className="aspect-square h-16 rounded-lg bg-gradient-to-br from-amber-200 via-rose-200 to-orange-300" />
                  <div>
                    <div className="text-sm font-medium leading-tight">{offer.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {offer.business} · {offer.city}
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
                  <Row label={`₹${offer.price} × 2`} value={`₹${offer.price * 2}`} />
                  <Row label="Platform fee" value="₹0" muted />
                  <Row label="Discount" value={`− ₹${(offer.original - offer.price) * 2}`} muted />
                </div>
                <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
                  <span className="text-sm text-muted-foreground">Total</span>
                  <span className="font-display text-3xl">₹{offer.price * 2}</span>
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-md bg-muted/60 p-2 text-[11px] text-muted-foreground">
                  <span className="pulse-dot inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                  Slot reserved for 04:38 while you complete checkout
                </div>
              </div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Lock className="h-3 w-3" /> Payments processed securely
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className={muted ? "text-muted-foreground" : ""}>{label}</span>
      <span className={muted ? "text-muted-foreground" : ""}>{value}</span>
    </div>
  );
}
