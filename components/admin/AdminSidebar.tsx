'use client'

import Link from 'next/link'
import { ArrowUpRight, Scale } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { adminNavItems } from '@/components/admin/data'

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex flex-col rounded-[2rem] border border-white/10 bg-[#08152f] p-5 text-white shadow-[0_28px_80px_rgba(3,12,28,0.45)] lg:sticky lg:top-8 lg:min-h-[calc(100vh-4rem)] lg:p-6">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
          <Scale className="h-5 w-5 text-[#dce7fa]" strokeWidth={1.5} />
        </div>
        <div>
          <div
            className="font-serif text-2xl leading-none text-white"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Lexway
          </div>
          <div className="mt-1 text-[11px] uppercase tracking-[0.34em] text-white/45">
            Admin Console
          </div>
        </div>
      </div>

      <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-white/35">
        Workspace
      </div>

      <nav className="space-y-2">
        {adminNavItems.map((item) => {
          const Icon = item.icon
          const isActive =
            item.href === '/admin'
              ? pathname === '/admin'
              : pathname.startsWith(item.href)

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`group flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 ${
                isActive
                  ? 'border-[#3768b4] bg-gradient-to-r from-[#12366d] to-[#0c264f] shadow-[0_16px_32px_rgba(8,33,70,0.35)]'
                  : 'border-white/8 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]'
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                    isActive
                      ? 'border-white/15 bg-white/10'
                      : 'border-white/8 bg-transparent'
                  }`}
                >
                  <Icon className="h-4 w-4 text-white/80" strokeWidth={1.7} />
                </span>
                <span className="text-sm font-medium text-white/85">{item.label}</span>
              </span>
              {item.count && (
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/55">
                  {item.count}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      <Link
        href="/"
        target="_blank"
        className="mt-8 flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.08] lg:mt-auto"
      >
        <div>
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/40">
            Live Website
          </div>
          <p className="mt-2 text-sm text-white/70">Open public site</p>
        </div>
        <ArrowUpRight className="h-4 w-4 text-white/50" strokeWidth={1.8} />
      </Link>
    </aside>
  )
}
