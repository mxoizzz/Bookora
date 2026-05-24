import { createFileRoute } from "@tanstack/react-router";
import { AdminTopbar } from "@/components/layout/AdminTopbar";
import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics · Bookora" },
      { name: "description", content: "Operator analytics." },
    ],
  }),
  component: Analytics,
});

function Analytics() {
  return (
    <>
      <AdminTopbar
        title="Analytics"
        subtitle="May 2026 · all venues"
        action={
          <div className="flex items-center gap-2">
            <div className="flex gap-1 rounded-full border border-border bg-card p-0.5 text-xs">
              {["7d", "30d", "90d", "12m"].map((t, i) => (
                <button
                  key={t}
                  className={`rounded-full px-3 py-1 ${i === 1 ? "bg-foreground text-background" : "text-muted-foreground"}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <Button variant="outline" className="rounded-full bg-card">
              <Download className="h-4 w-4" /> Export
            </Button>
          </div>
        }
      />
      <div className="space-y-6 p-6 lg:p-10">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["Revenue", "₹8.42L", "+22%", true],
            ["Bookings", "1,284", "+18%", true],
            ["Avg ticket", "₹655", "+4.1%", true],
            ["No-show rate", "2.1%", "-0.6pp", true],
          ].map(([l, v, d, up]) => (
            <div key={l as string} className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs text-muted-foreground">{l}</div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-3xl">{v}</span>
                <span className={`text-xs ${up ? "text-success" : "text-destructive"}`}>{d}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-5 xl:col-span-2">
            <header className="flex items-center justify-between pb-4">
              <div>
                <h2 className="font-display text-xl">Revenue trend</h2>
                <p className="text-xs text-muted-foreground">Daily · last 30 days</p>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 rounded-sm bg-foreground" /> This month
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 rounded-sm bg-lime" /> Last month
                </span>
              </div>
            </header>
            <div className="relative h-64">
              <svg viewBox="0 0 600 240" className="h-full w-full">
                <defs>
                  <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.21 0.04 264)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="oklch(0.21 0.04 264)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    x2="600"
                    y1={i * 60}
                    y2={i * 60}
                    stroke="oklch(0.92 0.008 95)"
                  />
                ))}
                <path
                  d="M0,180 C40,170 80,150 120,140 C160,130 200,160 240,130 C280,100 320,120 360,90 C400,60 440,100 480,80 C520,60 560,50 600,30 L600,240 L0,240 Z"
                  fill="url(#g1)"
                />
                <path
                  d="M0,180 C40,170 80,150 120,140 C160,130 200,160 240,130 C280,100 320,120 360,90 C400,60 440,100 480,80 C520,60 560,50 600,30"
                  stroke="oklch(0.21 0.04 264)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M0,200 C40,190 80,180 120,175 C160,170 200,180 240,160 C280,150 320,155 360,140 C400,130 440,140 480,125 C520,115 560,110 600,100"
                  stroke="oklch(0.92 0.18 122)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <h2 className="font-display text-xl">Conversion funnel</h2>
            <div className="mt-4 space-y-3">
              {[
                ["Offer views", 9420, 100],
                ["Slot picked", 4180, 44],
                ["Checkout started", 2980, 31],
                ["Booked", 1284, 14],
              ].map(([l, v, p]) => (
                <div key={l as string}>
                  <div className="flex justify-between text-xs">
                    <span>{l}</span>
                    <span className="font-mono text-muted-foreground">
                      {(v as number).toLocaleString()} · {p}%
                    </span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
                    <div className="h-full bg-foreground" style={{ width: `${p}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-5">
            <h2 className="font-display text-xl">Peak hours · heatmap</h2>
            <div className="mt-4 grid grid-cols-[40px_repeat(12,1fr)] gap-1">
              <div />
              {["6a", "8a", "10a", "12p", "2p", "4p", "6p", "7p", "8p", "9p", "10p", "11p"].map(
                (h) => (
                  <div key={h} className="text-center text-[10px] text-muted-foreground">
                    {h}
                  </div>
                ),
              )}
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <div key={d} className="contents">
                  <div className="pr-2 text-right text-[10px] text-muted-foreground">{d}</div>
                  {Array.from({ length: 12 }).map((_, i) => {
                    const intensity = Math.min(
                      1,
                      (Math.sin((i + d.charCodeAt(0)) * 0.7) + 1.2) / 2.2,
                    );
                    return (
                      <div
                        key={i}
                        className="aspect-square rounded-sm"
                        style={{ background: `oklch(0.21 0.04 264 / ${intensity})` }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <h2 className="font-display text-xl">Slot utilization</h2>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <Util value="84%" label="Morning" />
              <Util value="62%" label="Afternoon" />
              <Util value="89%" label="Evening" />
            </div>
            <div className="mt-6 space-y-2">
              {[
                ["Early Access Session", 92],
                ["Peak Hour Training", 88],
                ["Evening Block", 100],
                ["Midday Open Slot", 51],
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
            <h2 className="font-display text-xl">Operator insights</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "Peak hour slots sell out by 4 PM. Consider adding a 7:30 PM session.",
                "Tuesday mornings under-utilized. Try a -30% trial offer.",
                "Waitlist conversion is 71%. Open promotion 24h before slot.",
                "No-show rate dropped 0.6pp after reminders went on.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <ArrowUpRight className="mt-0.5 h-4 w-4 text-success" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
function Util({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-canvas p-3">
      <div className="font-display text-2xl">{value}</div>
      <div className="text-[11px] text-muted-foreground">{label}</div>
    </div>
  );
}
