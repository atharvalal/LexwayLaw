import { Eye, FilePenLine } from 'lucide-react'
import { ManagedPage } from '@/components/admin/types'

export default function PageManagementTable({
  pages,
}: {
  pages: ManagedPage[]
}) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-slate-200">
      <div className="hidden grid-cols-[1.4fr_1fr_1fr_1fr] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 md:grid">
        <div>Page</div>
        <div>Status</div>
        <div>Last Updated</div>
        <div>Actions</div>
      </div>

      <div className="divide-y divide-slate-200">
        {pages.map((page) => (
          <div
            key={page.slug}
            className="grid gap-4 px-5 py-5 transition-colors hover:bg-slate-50 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:items-center"
          >
            <div>
              <div className="text-base font-medium text-slate-950">{page.name}</div>
              <div className="mt-1 text-sm text-slate-500">/{page.slug}</div>
            </div>
            <div>
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                {page.status}
              </span>
            </div>
            <div className="text-sm text-slate-500">{page.updatedAt}</div>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:text-slate-950">
                <FilePenLine className="h-4 w-4" strokeWidth={1.8} />
                Edit
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:text-slate-950">
                <Eye className="h-4 w-4" strokeWidth={1.8} />
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
