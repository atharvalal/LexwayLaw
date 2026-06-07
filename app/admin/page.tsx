import Link from 'next/link'
import { ArrowRight, FilePenLine, PanelBottom, Plus } from 'lucide-react'
import AdminSectionCard from '@/components/admin/AdminSectionCard'
import OverviewMetrics from '@/components/admin/OverviewMetrics'
import { metrics, pages } from '@/components/admin/data'

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <OverviewMetrics items={metrics} />

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <AdminSectionCard
          title="Continue Editing"
          eyebrow="Recent Pages"
          description="Jump directly into the sections that were edited most recently."
        >
          <div className="space-y-3">
            {pages.slice(0, 4).map((page) => (
              <Link
                key={page.slug}
                href={`/admin/pages/${page.slug}`}
                className="group flex items-center justify-between rounded-[1.4rem] border border-slate-200 bg-slate-50 p-4 transition-all hover:border-slate-300 hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500">
                    <FilePenLine className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <div>
                    <div className="text-sm font-medium text-slate-950">{page.name} Page</div>
                    <div className="mt-1 text-xs text-slate-500">Updated {page.updatedAt}</div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </AdminSectionCard>

        <AdminSectionCard
          title="Quick Actions"
          eyebrow="Console"
          description="Common content tasks kept within easy reach."
        >
          <div className="grid gap-3">
            <Link
              href="/admin/pages"
              className="rounded-[1.5rem] bg-[#08152f] p-5 text-white transition-transform hover:-translate-y-0.5"
            >
              <Plus className="h-5 w-5 text-white/70" strokeWidth={1.7} />
              <div className="mt-6 text-base font-medium">Manage all pages</div>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Open the page directory and choose an individual editing workspace.
              </p>
            </Link>
            <Link
              href="/admin/footer"
              className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition-colors hover:bg-white"
            >
              <PanelBottom className="h-5 w-5 text-slate-500" strokeWidth={1.7} />
              <div className="mt-6 text-base font-medium text-slate-950">Update footer</div>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Edit footer columns, contact details, and legal links.
              </p>
            </Link>
          </div>
        </AdminSectionCard>
      </div>
    </div>
  )
}
