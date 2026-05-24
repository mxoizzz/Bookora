import { createFileRoute } from "@tanstack/react-router";
import { AdminTopbar } from "@/components/layout/AdminTopbar";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Bell, CreditCard, Globe, Key, Shield, Users, Webhook, Zap } from "lucide-react";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({
    meta: [
      { title: "Settings · Bookora" },
      { name: "description", content: "Workspace settings." },
    ],
  }),
  component: Settings,
});

function Settings() {
  return (
    <>
      <AdminTopbar
        title="Settings"
        subtitle="Workspace, notifications, integrations"
        action={<Button className="rounded-full">Save changes</Button>}
      />
      <div className="grid gap-8 p-6 lg:grid-cols-[200px_1fr] lg:p-10">
        <aside className="space-y-1 text-sm">
          {[
            ["General", Globe, true],
            ["Notifications", Bell],
            ["Team", Users],
            ["Billing", CreditCard],
            ["Integrations", Zap],
            ["Webhooks", Webhook],
            ["API keys", Key],
            ["Security", Shield],
          ].map(([l, Icon, active]) => (
            <a
              key={l as string}
              href="#"
              className={`flex items-center gap-2 rounded-md px-2.5 py-2 ${active ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted"}`}
            >
              {/* @ts-expect-error - dynamic icon */}
              <Icon className="h-4 w-4" /> {l}
            </a>
          ))}
        </aside>

        <div className="space-y-8">
          <Section title="Notifications" desc="Operator alerts via email and push.">
            {[
              ["New bookings", "Notify when a customer reserves a slot", true],
              ["Waitlist movements", "When someone joins or gets promoted", true],
              ["Capacity thresholds", "Alert when an offer reaches 80% full", true],
              ["Weekly digest", "A Monday morning rollup of last week", false],
            ].map(([l, d, on]) => (
              <Row label={l as string} desc={d as string}>
                <Switch defaultChecked={on as boolean} />
              </Row>
            ))}
          </Section>

          <Section title="Integrations" desc="Connect Bookora to the tools you already use.">
            {[
              { name: "Google Calendar", desc: "Two-way slot sync", connected: true },
              {
                name: "WhatsApp Business",
                desc: "Send reminders & confirmations",
                connected: true,
              },
              { name: "Razorpay", desc: "Accept payments at checkout", connected: false },
              { name: "Zapier", desc: "5,000+ no-code automations", connected: false },
              { name: "Slack", desc: "Realtime alerts in #ops", connected: false },
            ].map((i) => (
              <Row key={i.name} label={i.name} desc={i.desc}>
                {i.connected ? (
                  <Button variant="outline" className="bg-card">
                    Connected
                  </Button>
                ) : (
                  <Button>Connect</Button>
                )}
              </Row>
            ))}
          </Section>

          <Section title="Preferences" desc="Defaults for new offers.">
            <Row label="Currency" desc="Used across offers and analytics">
              <span className="text-sm">₹ INR</span>
            </Row>
            <Row label="Timezone" desc="Asia/Kolkata · auto-detected">
              <span className="text-sm">GMT +5:30</span>
            </Row>
            <Row label="Operator mode" desc="Compact tables and dense layouts">
              <Switch />
            </Row>
          </Section>

          <Section title="Danger zone" desc="Irreversible workspace actions.">
            <Row label="Transfer workspace" desc="Move ownership to another operator">
              <Button variant="outline" className="bg-card">
                Transfer
              </Button>
            </Row>
            <Row label="Delete workspace" desc="Permanently delete all data">
              <Button
                variant="outline"
                className="border-destructive text-destructive hover:bg-destructive/5"
              >
                Delete
              </Button>
            </Row>
          </Section>
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
    <div>
      <h2 className="font-display text-2xl">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-card">
        {children}
      </div>
    </div>
  );
}
function Row({
  label,
  desc,
  children,
}: {
  label: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 p-4">
      <div>
        <div className="text-sm font-medium">{label}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
      <div>{children}</div>
    </div>
  );
}
