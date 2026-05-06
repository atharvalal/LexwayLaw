import { ImagePlus, Save } from 'lucide-react'

export default function PageEditorPanel() {
  return (
    <div className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
      <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
        <div className="mb-5 text-sm font-medium text-slate-900">Content Editor</div>
        <div className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Title
            </span>
            <input
              defaultValue="Trusted Legal Solutions"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Subtitle
            </span>
            <input
              defaultValue="Grounded in integrity, precision, and results."
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Body Content
            </span>
            <textarea
              rows={8}
              defaultValue="Lexway Law Associates delivers expert legal counsel for corporate, family, property, and dispute matters. This area is ready for future CMS or API binding."
              className="w-full rounded-[1.5rem] border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-colors focus:border-slate-400"
            />
          </label>
        </div>
      </div>

      <div className="space-y-5">
        <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white p-5">
          <div className="flex h-56 flex-col items-center justify-center rounded-[1.5rem] bg-slate-50 text-center">
            <ImagePlus className="h-8 w-8 text-slate-400" strokeWidth={1.5} />
            <div className="mt-4 text-sm font-medium text-slate-900">
              Image Upload Placeholder
            </div>
            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              Drop hero artwork here once media upload is wired to storage.
            </p>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-[#08152f] p-5 text-white">
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/40">
            Mock Action
          </div>
          <button className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-950 transition-transform hover:-translate-y-0.5">
            <Save className="h-4 w-4" strokeWidth={1.8} />
            Save Changes
          </button>
          <p className="mt-4 text-sm leading-6 text-white/60">
            Replace with API mutation or form action when backend integration starts.
          </p>
        </div>
      </div>
    </div>
  )
}
