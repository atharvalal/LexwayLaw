import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminTopbar from '@/components/admin/AdminTopbar'

export default function AdminShell({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f5f7fb_0%,#eef2f8_100%)] text-slate-900">
      <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid items-start gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <AdminSidebar />
          <div className="space-y-6">
            <AdminTopbar />
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
