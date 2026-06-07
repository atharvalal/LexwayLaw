import AdminSectionCard from '@/components/admin/AdminSectionCard'
import MediaManagerGrid from '@/components/admin/MediaManagerGrid'
import { mediaItems } from '@/components/admin/data'

export default function MediaAdminPage() {
  return (
    <AdminSectionCard
      title="Media Library"
      eyebrow="Asset Management"
      description="Manage website visuals in a dedicated library without mixing media controls into content editing."
    >
      <MediaManagerGrid items={mediaItems} />
    </AdminSectionCard>
  )
}
