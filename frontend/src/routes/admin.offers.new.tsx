import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminTopbar } from "@/components/layout/AdminTopbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/admin/offers/new")({
  head: () => ({
    meta: [
      { title: "Create offer · Bookora" },
      { name: "description", content: "Compose a new limited-time offer." },
    ],
  }),
  component: NewOffer,
});

function NewOffer() {
  return (
    <>
      <AdminTopbar
        title="New offer"
        subtitle="Compose, preview, and publish in seconds"
        action={
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-full bg-card">
              Save draft
            </Button>
            <Button className="rounded-full">Publish offer</Button>
          </div>
        }
      />
      <div className="p-6 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <Section title="Basics" desc="Name your offer and describe what's included.">
              <Field label="Offer title">
                <Input placeholder="Peak Hour Training · 60 min" className="bg-card" />
              </Field>
              <Field label="Description">
                <Textarea placeholder="A guided session…" rows={4} className="bg-card" />
              </Field>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Category">
                  <Select>
                    <SelectTrigger className="bg-card">
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "Gym",
                        "Salon",
                        "Cafe",
                        "Restaurant",
                        "Clinic",
                        "Coaching",
                        "Turf",
                        "Spa",
                        "Other",
                      ].map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Status">
                  <Select defaultValue="Draft">
                    <SelectTrigger className="bg-card">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {["Draft", "Active", "Paused", "Expired", "Cancelled"].map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>
            </Section>

            <Section title="Pricing" desc="Set your original and offer pricing.">
              <div className="grid gap-4 md:grid-cols-3">
                <Field label="Original price">
                  <Input placeholder="₹1200" className="bg-card" />
                </Field>
                <Field label="Offer price">
                  <Input placeholder="₹599" className="bg-card" />
                </Field>
                <Field label="Discount %">
                  <Input placeholder="50" className="bg-card" />
                </Field>
              </div>
            </Section>

            <Section title="Schedule" desc="When customers can book this offer.">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Start date">
                  <Input type="date" className="bg-card" />
                </Field>
                <Field label="End date">
                  <Input type="date" className="bg-card" />
                </Field>
                <Field label="Start time">
                  <Input type="time" className="bg-card" />
                </Field>
                <Field label="End time">
                  <Input type="time" className="bg-card" />
                </Field>
              </div>
            </Section>

            <Section title="Capacity & rules" desc="Manage availability and per-customer limits.">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Total capacity">
                  <Input placeholder="24" className="bg-card" />
                </Field>
                <Field label="Max booking per customer">
                  <Input placeholder="4" className="bg-card" />
                </Field>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Enable waitlist</div>
                    <div className="text-xs text-muted-foreground">
                      Auto-promote when seats free up.
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Section>

            <Section title="Legal" desc="Terms shown at checkout & on confirmation.">
              <Field label="Terms & conditions">
                <Textarea
                  rows={3}
                  placeholder="Non-transferable. Cancellations within 2 hours are non-refundable…"
                  className="bg-card"
                />
              </Field>
            </Section>

            <div className="flex items-center justify-between border-t border-border pt-6">
              <Link
                to="/admin/offers"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                ← Back to offers
              </Link>
              <div className="flex gap-2">
                <Button variant="outline" className="rounded-full bg-card">
                  Save draft
                </Button>
                <Button className="rounded-full">Publish offer</Button>
              </div>
            </div>
          </form>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Live preview
            </div>
            <div className="mt-3 overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[16/10] bg-gradient-to-br from-amber-200 via-rose-200 to-orange-300" />
              <div className="p-4">
                <div className="text-xs text-muted-foreground">Northside Fitness · Bengaluru</div>
                <div className="mt-1 font-display text-xl">Peak Hour Training · 60 min</div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-2xl">₹599</span>
                  <span className="text-sm text-muted-foreground line-through">₹1,200</span>
                  <span className="ml-auto rounded-full bg-lime px-2 py-0.5 text-[10px]">-50%</span>
                </div>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-foreground" style={{ width: "62%" }} />
                </div>
                <div className="mt-2 text-[11px] text-muted-foreground">15/24 booked</div>
                <Button className="mt-4 w-full rounded-full">Book now</Button>
              </div>
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
              This preview updates as you edit the form.
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

function Section({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-5 border-b border-border pb-8 md:grid-cols-[220px_1fr]">
      <div>
        <h2 className="font-display text-xl">{title}</h2>
        <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      {children}
    </div>
  );
}
