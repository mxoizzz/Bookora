import { createFileRoute } from "@tanstack/react-router";
import { AdminTopbar } from "@/components/layout/AdminTopbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Download, Filter, MoreHorizontal, Search } from "lucide-react";
import { bookings } from "@/lib/sample-data";
import { badgeFor } from "./admin.dashboard";

export const Route = createFileRoute("/admin/bookings")({
  head: () => ({
    meta: [
      { title: "Bookings · Bookora" },
      { name: "description", content: "Manage all customer bookings." },
    ],
  }),
  component: BookingsPage,
});

const TABS = [
  "All · 1,284",
  "Pending · 28",
  "Confirmed · 1,184",
  "Completed · 62",
  "Cancelled · 8",
  "No Show · 2",
];

function BookingsPage() {
  return (
    <>
      <AdminTopbar
        title="Bookings"
        subtitle="All customer reservations · live"
        action={
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-full bg-card">
              <Download className="h-4 w-4" /> Export CSV
            </Button>
          </div>
        }
      />
      <div className="space-y-6 p-6 lg:p-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center gap-2 rounded-full border border-border bg-card px-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, phone, ref…"
              className="h-10 border-0 bg-transparent shadow-none focus-visible:ring-0"
            />
          </div>
          <Button variant="outline" className="rounded-full bg-card">
            <Filter className="h-4 w-4" /> Filters · 2
          </Button>
        </div>

        <div className="-mx-2 flex flex-wrap items-center gap-2 overflow-x-auto px-2 text-xs">
          {TABS.map((t, i) => (
            <button
              key={t}
              className={`whitespace-nowrap rounded-full border px-3 py-1.5 ${i === 0 ? "border-foreground bg-foreground text-background" : "border-border bg-card hover:border-foreground/30"}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="text-xs text-muted-foreground">
              <tr className="border-b border-border">
                {[
                  "",
                  "Ref",
                  "Customer",
                  "Offer",
                  "Slot",
                  "People",
                  "Total",
                  "Status",
                  "Booked",
                  "",
                ].map((h, i) => (
                  <th key={i} className="px-3 py-3 text-left font-medium first:pl-5">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.ref} className="border-b border-border last:border-0 hover:bg-muted/40">
                  <td className="px-3 py-4 pl-5">
                    <input type="checkbox" className="h-3.5 w-3.5 accent-foreground" />
                  </td>
                  <td className="px-3 py-4 font-mono text-xs">{b.ref}</td>
                  <td className="px-3 py-4">
                    <div className="flex items-center gap-2">
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-muted text-[10px]">
                        {b.customer
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                      <div>
                        <div className="font-medium">{b.customer}</div>
                        <div className="text-xs text-muted-foreground">{b.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4">{b.offer}</td>
                  <td className="px-3 py-4 text-muted-foreground">{b.slot}</td>
                  <td className="px-3 py-4">{b.people}</td>
                  <td className="px-3 py-4 font-mono">₹{b.total.toLocaleString()}</td>
                  <td className="px-3 py-4">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] ${badgeFor(b.status)}`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-muted-foreground">{b.bookedAt}</td>
                  <td className="px-3 py-4 text-right">
                    <button className="rounded-md p-1.5 hover:bg-muted">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
