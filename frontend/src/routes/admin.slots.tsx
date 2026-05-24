import { createFileRoute } from "@tanstack/react-router";
import { AdminTopbar } from "@/components/layout/AdminTopbar";
import { Button } from "@/components/ui/button";
import { slots } from "@/lib/sample-data";
import { Calendar, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { badgeFor } from "./admin.dashboard";

export const Route = createFileRoute("/admin/slots")({
  head: () => ({
    meta: [
      { title: "Slots · Bookora" },
      { name: "description", content: "Realtime slot inventory." },
    ],
  }),
  component: SlotsPage,
});

const HOURS = Array.from({ length: 16 }, (_, i) => `${(i + 6).toString().padStart(2, "0")}:00`);
const DAYS = ["Mon 12", "Tue 13", "Wed 14", "Thu 15", "Fri 16", "Sat 17", "Sun 18"];

function SlotsPage() {
  return (
    <>
      <AdminTopbar
        title="Slot inventory"
        subtitle="Peak Hour Training · Thu, 14 May"
        action={
          <Button className="rounded-full">
            <Plus className="h-4 w-4" /> New slot
          </Button>
        }
      />
      <div className="space-y-6 p-6 lg:p-10">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            ["Today's slots", "8", "of 12 active"],
            ["Booked seats", "99", "of 132 capacity"],
            ["Avg fill rate", "75%", "+8 pp WoW"],
            ["Waitlist", "12", "across 2 slots"],
          ].map(([l, v, s]) => (
            <div key={l} className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs text-muted-foreground">{l}</div>
              <div className="mt-1 font-display text-3xl">{v}</div>
              <div className="text-[11px] text-muted-foreground">{s}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-border bg-card">
            <header className="flex items-center justify-between border-b border-border p-5">
              <div className="flex items-center gap-3">
                <button className="rounded-md p-1.5 hover:bg-muted">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div>
                  <div className="font-display text-lg">Week of 12 May</div>
                  <div className="text-xs text-muted-foreground inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> May 2026
                  </div>
                </div>
                <button className="rounded-md p-1.5 hover:bg-muted">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <div className="flex gap-1 rounded-full border border-border bg-canvas p-0.5 text-xs">
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
            <div className="overflow-x-auto p-5">
              <div
                className="grid min-w-[700px]"
                style={{ gridTemplateColumns: "60px repeat(7, 1fr)" }}
              >
                <div />
                {DAYS.map((d, i) => (
                  <div
                    key={d}
                    className={`pb-3 text-center text-xs ${i === 3 ? "font-semibold text-foreground" : "text-muted-foreground"}`}
                  >
                    {d}
                  </div>
                ))}
                {HOURS.map((h) => (
                  <div key={h} className="contents">
                    <div className="border-t border-border pr-2 pt-2 text-right font-mono text-[10px] text-muted-foreground">
                      {h}
                    </div>
                    {DAYS.map((d, di) => {
                      const slot =
                        di === 3 &&
                        ["06:00", "07:00", "10:00", "12:00", "17:00", "18:00", "20:00"].includes(h);
                      const hourIdx = parseInt(h);
                      const fill = slot
                        ? hourIdx === 7 || hourIdx === 20
                          ? 100
                          : 65 + (hourIdx % 4) * 8
                        : 0;
                      return (
                        <div
                          key={d + h}
                          className="relative h-14 border-t border-l border-border first:border-l-0"
                        >
                          {slot && (
                            <div
                              className={`absolute inset-1 rounded-md p-1.5 text-[10px] ${fill === 100 ? "bg-foreground text-background" : "bg-lime/40 text-foreground"}`}
                            >
                              <div className="font-medium">{h}</div>
                              <div className="opacity-70">{fill}%</div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card">
            <header className="flex items-center justify-between border-b border-border p-5">
              <div>
                <h2 className="font-display text-xl">Today's slots</h2>
                <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
                  <span className="pulse-dot inline-flex h-1.5 w-1.5 rounded-full bg-success" />{" "}
                  Realtime
                </p>
              </div>
            </header>
            <ul className="divide-y divide-border">
              {slots.map((s) => {
                const pct = (s.booked / s.capacity) * 100;
                return (
                  <li key={s.time} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="font-mono text-sm">{s.time}</div>
                        <div>
                          <div className="text-sm font-medium">{s.label}</div>
                          <div className="text-xs text-muted-foreground">
                            {s.booked}/{s.capacity} booked
                          </div>
                        </div>
                      </div>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] ${badgeFor(s.status)}`}
                      >
                        {s.status}
                      </span>
                    </div>
                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-muted">
                      <div
                        className={`h-full ${pct === 100 ? "bg-foreground" : s.status === "Closed" ? "bg-muted-foreground/40" : "bg-lime"}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
