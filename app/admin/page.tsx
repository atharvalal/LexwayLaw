import {
  Cog,
  FileStack,
  Image as ImageIcon,
  LayoutDashboard,
} from 'lucide-react'
import AdminShell from '@/components/admin/AdminShell'
import AdminSectionCard from '@/components/admin/AdminSectionCard'
import DynamicSectionsEditor from '@/components/admin/DynamicSectionsEditor'
import MediaManagerGrid from '@/components/admin/MediaManagerGrid'
import OverviewMetrics from '@/components/admin/OverviewMetrics'
import PageEditorPanel from '@/components/admin/PageEditorPanel'
import PageManagementTable from '@/components/admin/PageManagementTable'
import SettingsPanel from '@/components/admin/SettingsPanel'
import {
  AdminMetric,
  AdminNavItem,
  EditableItem,
  ManagedPage,
  MediaItem,
  SocialLinkItem,
} from '@/components/admin/types'

const navItems: AdminNavItem[] = [
  { label: 'Dashboard', href: '#dashboard', icon: LayoutDashboard, count: '06' },
  { label: 'Pages', href: '#pages', icon: FileStack, count: '07' },
  { label: 'Media', href: '#media', icon: ImageIcon, count: '24' },
  { label: 'Settings', href: '#settings', icon: Cog },
]

const metrics: AdminMetric[] = [
  {
    label: 'Pages Managed',
    value: '07',
    detail: 'Core marketing and trust-building pages in a single editing workspace.',
  },
  {
    label: 'Media Assets',
    value: '24',
    detail: 'Logos, attorney portraits, and campaign visuals prepared for replacement.',
  },
  {
    label: 'Sections Ready',
    value: '11',
    detail: 'Hero, services, testimonials, and global settings ready for API binding.',
  },
]

const pages: ManagedPage[] = [
  { name: 'Home', slug: '', status: 'Published', updatedAt: 'Today, 10:45 AM' },
  { name: 'About', slug: 'about', status: 'Published', updatedAt: 'Yesterday' },
  {
    name: 'Practice Areas',
    slug: 'practice-areas',
    status: 'Published',
    updatedAt: '2 days ago',
  },
  { name: 'Team', slug: 'team', status: 'Published', updatedAt: '3 days ago' },
  { name: 'Blog', slug: 'blog', status: 'Draft Ready', updatedAt: 'Today, 8:10 AM' },
  { name: 'Contact', slug: 'contact', status: 'Published', updatedAt: '4 days ago' },
]

const services: EditableItem[] = [
  {
    title: 'Corporate Law',
    description: 'Entity formation, governance, compliance, and transaction advisory.',
  },
  {
    title: 'Litigation',
    description: 'Civil and commercial dispute strategy for complex, high-stakes matters.',
  },
  {
    title: 'Property Law',
    description: 'Real estate structuring, due diligence, and title dispute support.',
  },
]

const testimonials: EditableItem[] = [
  {
    title: 'Chairman, Himalayan Holdings',
    description: '“Lexway gave us sharp commercial guidance with total clarity throughout.”',
  },
  {
    title: 'Private Client, Kathmandu',
    description: '“Measured, discreet, and highly effective support during a family matter.”',
  },
]

const mediaItems: MediaItem[] = [
  { title: 'Hero Boardroom', type: 'Hero' },
  { title: 'Attorney Portrait A', type: 'Team' },
  { title: 'Office Exterior', type: 'Brand' },
  { title: 'Consultation Room', type: 'Service' },
]

const socials: SocialLinkItem[] = [
  { label: 'LinkedIn', value: 'https://linkedin.com/company/lexway-law' },
  { label: 'Facebook', value: 'https://facebook.com/lexwaylaw' },
  { label: 'X / Twitter', value: 'https://x.com/lexwaylaw' },
]

export default function AdminPage() {
  return (
    <AdminShell navItems={navItems}>
      <div id="dashboard" className="space-y-6">
        <OverviewMetrics items={metrics} />

        <AdminSectionCard
          title="Pages Management"
          eyebrow="Content Control"
          description="Website page inventory with clear edit and preview affordances. Replace button actions with real routing or API hooks later."
          className="scroll-mt-8"
        >
          <div id="pages" className="space-y-6">
            <PageManagementTable pages={pages} />
            <PageEditorPanel />
          </div>
        </AdminSectionCard>

        <AdminSectionCard
          title="Dynamic Sections"
          eyebrow="Reusable Blocks"
          description="Structured editing surfaces for the homepage hero, service modules, and testimonial content."
        >
          <DynamicSectionsEditor services={services} testimonials={testimonials} />
        </AdminSectionCard>

        <AdminSectionCard
          title="Media Manager"
          eyebrow="Asset Library"
          description="A clean UI-only media overview with upload and delete affordances for later storage integration."
        >
          <div id="media">
            <MediaManagerGrid items={mediaItems} />
          </div>
        </AdminSectionCard>

        <AdminSectionCard
          title="Settings"
          eyebrow="Global Configuration"
          description="Firm details, contact points, and social destinations in one central panel."
        >
          <div id="settings">
            <SettingsPanel socials={socials} />
          </div>
        </AdminSectionCard>
      </div>
    </AdminShell>
  )
}
