import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicNav } from "@/components/layout/PublicNav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CalendarPlus, Check, Download, MapPin, MessageCircle, Share2 } from "lucide-react";

export const Route = createFileRoute("/booking-confirmed")({
  head: () => ({
    meta: [
      { title: "Booking confirmed · Bookora" },
      { name: "description", content: "Your Bookora reservation is confirmed." },
    ],
  }),
  component: Confirmed,
});

function Confirmed() {
  return (
    <div className="bg-canvas">
      <PublicNav />
      <section>
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="rounded-3xl border border-border bg-card p-10 shadow-elegant">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-lime">
                <Check className="h-6 w-6" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Confirmed
                </div>
                <h1 className="font-display text-3xl leading-tight">You're booked, Jordan.</h1>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">
              A confirmation has been sent to your phone. Show this code at the venue, or scan from
              your wallet.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-[1fr_220px]">
              <div className="space-y-4">
                <Detail label="Reference" value="BKR-9182" mono />
                <Detail label="Offer" value="Peak Hour Training · 60 min" />
                <Detail label="Business" value="Northside Fitness" />
                <Detail label="Slot" value="Today · Thu, 14 May · 6:30 PM" />
                <Detail label="Customer" value="Jordan Kim · 2 people" />
                <Detail
                  label="Status"
                  value={
                    <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-xs text-success">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" /> Confirmed
                    </span>
                  }
                />
              </div>
              <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-canvas p-4">
                <div className="grid h-44 w-44 grid-cols-12 gap-px overflow-hidden rounded-md bg-foreground p-1.5">
                  {Array.from({ length: 144 }).map((_, i) => {
                    const on = [
                      0, 1, 2, 3, 4, 5, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22, 25, 29, 30,
                      33, 35, 38, 40, 42, 45, 47, 50, 52, 55, 57, 60, 62, 65, 68, 70, 74, 77, 80,
                      82, 85, 88, 90, 93, 95, 98, 100, 103, 106, 108, 110, 112, 115, 118, 120, 123,
                      125, 128, 131, 133, 135, 138, 140, 143,
                    ].includes(i % 144);
                    return <span key={i} className={on ? "bg-canvas" : "bg-foreground"} />;
                  })}
                </div>
                <div className="font-mono text-xs">BKR-9182</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Button className="rounded-full">
                <CalendarPlus className="h-4 w-4" /> Add to calendar
              </Button>
              <Button variant="outline" className="rounded-full bg-card">
                <Download className="h-4 w-4" /> Download pass
              </Button>
              <Button variant="outline" className="rounded-full bg-card">
                <Share2 className="h-4 w-4" /> Share
              </Button>
              <Button variant="outline" className="rounded-full bg-card">
                <MessageCircle className="h-4 w-4" /> Contact venue
              </Button>
            </div>

            <div className="mt-8 grid gap-3 rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground sm:grid-cols-2">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> 2nd Floor, Indiranagar, Bengaluru
              </div>
              <div>Arrive 10 min before. Free reschedule up to 2h prior.</div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between text-sm">
            <Link to="/offers" className="text-muted-foreground hover:text-foreground">
              ← Browse more offers
            </Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Back to home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Detail({ label, value, mono }: { label: string; value: React.ReactNode; mono?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-border pb-2">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className={`text-right ${mono ? "font-mono" : ""}`}>{value}</span>
    </div>
  );
}
