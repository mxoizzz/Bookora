import { createFileRoute } from "@tanstack/react-router";
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
import { Upload } from "lucide-react";

export const Route = createFileRoute("/admin/profile")({
  head: () => ({
    meta: [
      { title: "Business profile · Bookora" },
      { name: "description", content: "Manage business profile." },
    ],
  }),
  component: Profile,
});

function Profile() {
  return (
    <>
      <AdminTopbar
        title="Business profile"
        subtitle="How your venue shows up in the marketplace"
        action={<Button className="rounded-full">Save changes</Button>}
      />
      <div className="p-6 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Logo</div>
              <div className="mt-4 grid place-items-center rounded-xl border border-dashed border-border bg-canvas p-6">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-foreground font-display text-3xl text-background">
                  N
                </div>
                <div className="mt-3 text-sm font-medium">Northside Fitness</div>
                <button className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                  <Upload className="h-3 w-3" /> Replace
                </button>
              </div>
              <div className="mt-3 text-[11px] text-muted-foreground">
                PNG / SVG · up to 2MB · square.
              </div>
            </div>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <Section title="Business" desc="Public info shown to customers.">
              <div className="grid gap-4 md:grid-cols-2">
                <F label="Business name">
                  <Input defaultValue="Northside Fitness" className="bg-card" />
                </F>
                <F label="Business type">
                  <Select defaultValue="Coaching">
                    <SelectTrigger className="bg-card">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {["Restaurant", "Gym", "Salon", "Clinic", "Coaching", "Turf", "Other"].map(
                        (c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                </F>
                <F label="Owner name">
                  <Input defaultValue="Jordan Park" className="bg-card" />
                </F>
                <F label="Phone">
                  <Input defaultValue="+91 98XXX 12XXX" className="bg-card" />
                </F>
                <F label="Email">
                  <Input defaultValue="hello@northsidefitness.com" className="bg-card" />
                </F>
                <F label="City">
                  <Input defaultValue="Bengaluru" className="bg-card" />
                </F>
              </div>
              <F label="Address">
                <Textarea
                  rows={2}
                  defaultValue="2nd Floor, 100 Ft Road, Indiranagar"
                  className="bg-card"
                />
              </F>
            </Section>

            <Section title="Hours" desc="Default opening hours · per-day overrides in Settings.">
              <div className="grid gap-4 md:grid-cols-2">
                <F label="Opening time">
                  <Input type="time" defaultValue="06:00" className="bg-card" />
                </F>
                <F label="Closing time">
                  <Input type="time" defaultValue="22:00" className="bg-card" />
                </F>
              </div>
            </Section>

            <Section title="About" desc="A short description shown on your public page.">
              <Textarea
                rows={4}
                className="bg-card"
                defaultValue="A modern fitness studio in Bengaluru — small-group sessions, premium equipment, and flexible booking through Bookora."
              />
            </Section>
          </form>
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
function F({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      {children}
    </div>
  );
}
