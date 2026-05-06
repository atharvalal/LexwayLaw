import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminTopbar from '@/components/admin/AdminTopbar'
import { AdminNavItem } from '@/components/admin/types'

export default function AdminShell({
  navItems,
  children,
}: {
  navItems: AdminNavItem[]
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f5f7fb_0%,#eef2f8_100%)] text-slate-900">
      <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <AdminSidebar items={navItems} />
          <div className="space-y-6">
            <AdminTopbar />
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
