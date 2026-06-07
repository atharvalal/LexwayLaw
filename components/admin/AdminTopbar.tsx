'use client'

import { Bell, ChevronDown, LogOut, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { formatSectionName, pageWorkspaces, PageSlug } from '@/components/admin/data'

export default function AdminTopbar() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)
  const pageSlug = segments[2] as PageSlug | undefined
  const sectionSlug = segments[3]

  let title = 'Dashboard'
  let eyebrow = 'Admin Console'

  if (pathname === '/admin/pages') title = 'Website Pages'
  if (pathname === "/admin/sections") title = "Section Library";
  if (pathname === '/admin/media') title = 'Media Library'
  if (pathname === '/admin/footer') title = 'Footer Manager'
  if (pathname === '/admin/settings') title = 'Global Settings'
  if (pageSlug && pageWorkspaces[pageSlug]) {
    title = sectionSlug
      ? `${formatSectionName(sectionSlug)} Section`
      : `${pageWorkspaces[pageSlug].name} Page`
    eyebrow = `${pageWorkspaces[pageSlug].name} Workspace`
  }

  return (
    <header className="flex flex-col gap-4 rounded-[2rem] border border-slate-200/80 bg-white/90 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:flex-row md:items-center md:justify-between md:p-5">
      <div>
        <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
          {eyebrow}
        </div>
        <h1
          className="mt-2 font-serif text-3xl leading-none text-slate-950"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          {title}
        </h1>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-400">
          <Search className="h-4 w-4" strokeWidth={1.8} />
          <span className="text-sm">Search content, media, or settings</span>
        </div>

        <div className="flex items-center justify-between gap-3 sm:justify-end">
          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 transition-colors hover:text-slate-900">
            <Bell className="h-4 w-4" strokeWidth={1.8} />
          </button>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#12366d] to-[#0b1b35] text-sm font-semibold text-white">
              AL
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900">Admin User</div>
              <div className="text-xs text-slate-500">Managing Partner</div>
            </div>
            <ChevronDown className="h-4 w-4 text-slate-400" strokeWidth={1.8} />
          </div>

          <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:text-slate-950">
            <LogOut className="h-4 w-4" strokeWidth={1.8} />
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
