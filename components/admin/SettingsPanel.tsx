import { Save } from 'lucide-react'
import { SocialLinkItem } from '@/components/admin/types'

export default function SettingsPanel({
  socials,
}: {
  socials: SocialLinkItem[]
}) {
  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_0.9fr]">
      <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Website Name
            </span>
            <input
              defaultValue="Lexway Law Associates"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Contact Email
            </span>
            <input
              defaultValue="info@lexway.com.np"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Phone Number
            </span>
            <input
              defaultValue="+977-1-XXXXXXX"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400"
            />
          </label>
        </div>

        <div className="mt-5">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Social Links
          </div>
          <div className="space-y-3">
            {socials.map((social) => (
              <label key={social.label} className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  {social.label}
                </span>
                <input
                  defaultValue={social.value}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400"
                />
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[1.75rem] border border-slate-200 bg-[#08152f] p-5 text-white">
        <div className="text-[11px] uppercase tracking-[0.28em] text-white/40">
          Settings Sync
        </div>
        <h3
          className="mt-3 font-serif text-3xl leading-none text-white"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          Brand Controls
        </h3>
        <p className="mt-4 text-sm leading-6 text-white/60">
          This pane is ready for future connection to site-wide configuration, notifications,
          and deployment previews.
        </p>
        <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-950 transition-transform hover:-translate-y-0.5">
          <Save className="h-4 w-4" strokeWidth={1.8} />
          Save Settings
        </button>
      </div>
    </div>
  )
}
