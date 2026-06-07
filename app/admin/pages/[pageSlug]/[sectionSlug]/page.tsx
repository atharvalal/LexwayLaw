import { notFound } from 'next/navigation'
import PageWorkspace from '@/components/admin/PageWorkspace'
import { pageWorkspaces, PageSlug } from '@/components/admin/data'

export default function PageSectionEditor({
  params,
}: {
  params: { pageSlug: string; sectionSlug: string }
}) {
  if (!(params.pageSlug in pageWorkspaces)) notFound()

  const page = pageWorkspaces[params.pageSlug as PageSlug]
  const sections: readonly string[] = page.sections

  if (!sections.includes(params.sectionSlug)) notFound()

  return (
    <PageWorkspace
      pageSlug={params.pageSlug}
      pageName={page.name}
      pagePath={page.path}
      description={page.description}
      sections={sections}
      activeSection={params.sectionSlug}
    />
  )
}
