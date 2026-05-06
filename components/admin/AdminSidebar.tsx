import Link from 'next/link'
import { Scale } from 'lucide-react'
import { AdminNavItem } from '@/components/admin/types'

export default function AdminSidebar({
  items,
}: {
  items: AdminNavItem[]
}) {
  return (
    <aside className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-[#08152f] p-5 text-white shadow-[0_28px_80px_rgba(3,12,28,0.45)] lg:p-6">
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
        {items.map((item, index) => {
          const Icon = item.icon
          const isActive = index === 0

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

      <div className="mt-auto rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4">
        <div className="text-[11px] uppercase tracking-[0.28em] text-white/40">
          Integration Ready
        </div>
        <p className="mt-3 text-sm leading-6 text-white/60">
          UI is structured for future CMS and API hooks without redesigning the panel.
        </p>
      </div>
    </aside>
  )
}
