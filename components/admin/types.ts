import { LucideIcon } from 'lucide-react'

export interface AdminNavItem {
  label: string
  href: string
  icon: LucideIcon
  count?: string
}

export interface AdminMetric {
  label: string
  value: string
  detail: string
}

export interface ManagedPage {
  name: string
  slug: string
  status: string
  updatedAt: string
}

export interface EditableItem {
  title: string
  description: string
}

export interface MediaItem {
  title: string
  type: string
}

export interface SocialLinkItem {
  label: string
  value: string
}
