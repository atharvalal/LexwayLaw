import AdminSectionCard from '@/components/admin/AdminSectionCard'
import SettingsPanel from '@/components/admin/SettingsPanel'
import { socials } from '@/components/admin/data'

export default function SettingsAdminPage() {
  return (
    <AdminSectionCard
      title="Global Settings"
      eyebrow="Site Configuration"
      description="Keep firm-wide details, contact points, and social destinations in one focused panel."
    >
      <SettingsPanel socials={socials} />
    </AdminSectionCard>
  )
}
