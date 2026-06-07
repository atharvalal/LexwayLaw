import Link from 'next/link'
import { ArrowLeft, ExternalLink, Layers3 } from 'lucide-react'
import AdminSectionCard from '@/components/admin/AdminSectionCard'
import PageEditorPanel from '@/components/admin/PageEditorPanel'
import { formatSectionName } from '@/components/admin/data'

export default function PageWorkspace({
  pageSlug,
  pageName,
  pagePath,
  description,
  sections,
  activeSection,
}: {
  pageSlug: string
  pageName: string
  pagePath: string
  description: string
  sections: readonly string[]
  activeSection: string
}) {
  const activeSectionName = formatSectionName(activeSection)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/admin/pages"
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-950"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.8} />
          Back to Pages
        </Link>

        <Link
          href={pagePath}
          target="_blank"
          className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950"
        >
          <ExternalLink className="h-4 w-4" strokeWidth={1.8} />
          Preview Page
        </Link>
      </div>

      <AdminSectionCard
        title={`${pageName} Page`}
        eyebrow="Page Workspace"
        description={description}
      >
        <div className="grid gap-6 xl:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#08152f] text-white">
                <Layers3 className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <div>
                <div className="text-sm font-medium text-slate-950">Sections</div>
                <div className="mt-1 text-xs text-slate-500">{sections.length} editable blocks</div>
              </div>
            </div>

            <nav className="space-y-2">
              {sections.map((section) => {
                const isActive = section === activeSection

                return (
                  <Link
                    key={section}
                    href={`/admin/pages/${pageSlug}/${section}`}
                    className={`block rounded-2xl border px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'border-[#08152f] bg-[#08152f] text-white'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950'
                    }`}
                  >
                    {formatSectionName(section)}
                  </Link>
                )
              })}
            </nav>
          </aside>

          <PageEditorPanel pageName={pageName} sectionName={activeSectionName} />
        </div>
      </AdminSectionCard>
    </div>
  )
}
