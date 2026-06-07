import AdminSectionCard from '@/components/admin/AdminSectionCard'
import PageManagementTable from '@/components/admin/PageManagementTable'
import { pages } from '@/components/admin/data'

export default function PagesAdminPage() {
  return (
    <AdminSectionCard
      title="Website Pages"
      eyebrow="Page Directory"
      description="Each website page now opens in its own focused workspace. Choose a page to manage its sections individually."
    >
      <PageManagementTable pages={pages} />
    </AdminSectionCard>
  )
}
