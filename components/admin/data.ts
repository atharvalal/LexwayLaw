import {
  Cog,
  FileStack,
  Image as ImageIcon,
  LayoutDashboard,
  // LayoutTemplate,
  PanelBottom,
} from 'lucide-react'
import {
  AdminMetric,
  AdminNavItem,
  EditableItem,
  ManagedPage,
  MediaItem,
  SocialLinkItem,
} from '@/components/admin/types'

export const adminNavItems: AdminNavItem[] = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Pages', href: '/admin/pages', icon: FileStack, count: '06' },
  // { label: 'Sections', href: '/admin/sections', icon: LayoutTemplate, count: '11' },
  { label: 'Media', href: '/admin/media', icon: ImageIcon, count: '24' },
  { label: 'Footer', href: '/admin/footer', icon: PanelBottom },
  { label: 'Settings', href: '/admin/settings', icon: Cog },
]

export const metrics: AdminMetric[] = [
  {
    label: 'Pages Managed',
    value: '06',
    detail: 'Every website page now has its own focused editing workspace.',
  },
  {
    label: 'Media Assets',
    value: '24',
    detail: 'Logos, portraits, and campaign visuals ready for future storage binding.',
  },
  {
    label: 'Sections Ready',
    value: '11',
    detail: 'Reusable content blocks organized into dedicated editing screens.',
  },
]

export const pages: ManagedPage[] = [
  { name: 'Home', slug: 'home', status: 'Published', updatedAt: 'Today, 10:45 AM' },
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

export const pageWorkspaces = {
  home: {
    name: 'Home',
    path: '/',
    description: 'Manage the main conversion journey and homepage content.',
    sections: ['hero', 'practice-areas', 'why-choose-us', 'team-preview', 'insights', 'cta'],
  },
  about: {
    name: 'About',
    path: '/about',
    description: 'Shape the firm story, principles, credentials, and leadership message.',
    sections: ['page-intro', 'firm-story', 'values', 'recognition', 'cta'],
  },
  'practice-areas': {
    name: 'Practice Areas',
    path: '/practice-areas',
    description: 'Organize services and detailed legal capability content.',
    sections: ['page-intro', 'service-grid', 'process', 'cta'],
  },
  team: {
    name: 'Team',
    path: '/team',
    description: 'Manage attorney profiles, expertise, and team presentation.',
    sections: ['page-intro', 'team-grid', 'credentials', 'cta'],
  },
  blog: {
    name: 'Blog',
    path: '/blog',
    description: 'Prepare insight categories, featured stories, and article listings.',
    sections: ['page-intro', 'featured-article', 'article-grid', 'newsletter'],
  },
  contact: {
    name: 'Contact',
    path: '/contact',
    description: 'Maintain inquiry messaging, office details, and contact actions.',
    sections: ['page-intro', 'contact-form', 'office-details', 'map'],
  },
} as const

export type PageSlug = keyof typeof pageWorkspaces

export const services: EditableItem[] = [
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

export const testimonials: EditableItem[] = [
  {
    title: 'Chairman, Himalayan Holdings',
    description: '“Lexway gave us sharp commercial guidance with total clarity throughout.”',
  },
  {
    title: 'Private Client, Kathmandu',
    description: '“Measured, discreet, and highly effective support during a family matter.”',
  },
]

export const mediaItems: MediaItem[] = [
  { title: 'Hero Boardroom', type: 'Hero' },
  { title: 'Attorney Portrait A', type: 'Team' },
  { title: 'Office Exterior', type: 'Brand' },
  { title: 'Consultation Room', type: 'Service' },
  { title: 'Legal Library', type: 'Editorial' },
  { title: 'Partner Meeting', type: 'Team' },
  { title: 'Kathmandu Skyline', type: 'Brand' },
  { title: 'Contract Detail', type: 'Editorial' },
]

export const socials: SocialLinkItem[] = [
  { label: 'LinkedIn', value: 'https://linkedin.com/company/lexway-law' },
  { label: 'Facebook', value: 'https://facebook.com/lexwaylaw' },
  { label: 'X / Twitter', value: 'https://x.com/lexwaylaw' },
]

export function formatSectionName(section: string) {
  return section
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
