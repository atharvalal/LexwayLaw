import { notFound, redirect } from 'next/navigation'
import { pageWorkspaces, PageSlug } from '@/components/admin/data'

export default function PageWorkspaceIndex({
  params,
}: {
  params: { pageSlug: string }
}) {
  if (!(params.pageSlug in pageWorkspaces)) notFound()

  const page = pageWorkspaces[params.pageSlug as PageSlug]
  redirect(`/admin/pages/${params.pageSlug}/${page.sections[0]}`)
}
