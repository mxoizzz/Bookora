import { AdminSidebar } from "./AdminSidebar";

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-canvas">
      <AdminSidebar />
      <main className="flex min-h-screen flex-1 flex-col">{children}</main>
    </div>
  );
}
