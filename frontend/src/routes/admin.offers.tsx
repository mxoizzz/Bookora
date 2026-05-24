import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminTopbar } from "@/components/layout/AdminTopbar";
import { offers } from "@/lib/sample-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, MoreHorizontal, Plus, Search } from "lucide-react";
import { badgeFor } from "./admin.dashboard";

export const Route = createFileRoute("/admin/offers")({
  head: () => ({
    meta: [{ title: "Offers · Bookora" }, { name: "description", content: "Manage your offers." }],
  }),
  component: ManageOffers,
});

function ManageOffers() {
  return (
    <>
      <AdminTopbar title="Offers" subtitle={`${offers.length} total · 12 active`} />
      <div className="space-y-6 p-6 lg:p-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center gap-2 rounded-full border border-border bg-card px-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search offers, categories, businesses…"
              className="h-10 border-0 bg-transparent shadow-none focus-visible:ring-0"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-full bg-card">
              <Filter className="h-4 w-4" /> Filters
            </Button>
            <Button asChild className="rounded-full">
              <Link to="/admin/offers/new">
                <Plus className="h-4 w-4" /> New offer
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          {["All · 24", "Active · 12", "Paused · 4", "Draft · 5", "Expired · 3"].map((t, i) => (
            <button
              key={t}
              className={`rounded-full border px-3 py-1.5 ${i === 0 ? "border-foreground bg-foreground text-background" : "border-border bg-card hover:border-foreground/30"}`}
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
                  "Offer",
                  "Category",
                  "Price",
                  "Capacity",
                  "Realtime",
                  "Status",
                  "Ends in",
                  "",
                ].map((h, i) => (
                  <th key={i} className="px-5 py-3 text-left font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {offers.map((o) => {
                const pct = (o.booked / o.total) * 100;
                return (
                  <tr key={o.id} className="border-b border-border last:border-0 hover:bg-muted/40">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className="h-9 w-9 rounded-md bg-gradient-to-br from-amber-200 via-rose-200 to-orange-300" />
                        <div>
                          <div className="font-medium leading-tight">{o.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {o.id} · {o.business}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">{o.category}</td>
                    <td className="px-5 py-4">
                      <div>₹{o.price.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground line-through">
                        ₹{o.original.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="font-mono text-xs">
                        {o.booked}/{o.total}
                      </div>
                    </td>
                    <td className="w-48 px-5 py-4">
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className={`h-full ${pct === 100 ? "bg-foreground" : "bg-lime"}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <div className="mt-1 text-[10px] text-muted-foreground">
                        {Math.round(pct)}% capacity
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] ${badgeFor(o.status)}`}
                      >
                        {o.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-mono text-xs text-muted-foreground">
                      {o.endsIn}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button className="rounded-md p-1.5 hover:bg-muted">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div>Showing 1–8 of 24</div>
          <div className="flex gap-1">
            <button className="rounded-md border border-border bg-card px-2 py-1">Prev</button>
            <button className="rounded-md border border-border bg-card px-2 py-1">Next</button>
          </div>
        </div>
      </div>
    </>
  );
}
