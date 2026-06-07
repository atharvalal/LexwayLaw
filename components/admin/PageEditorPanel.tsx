import { ImagePlus, Monitor, Save, Smartphone } from 'lucide-react'

export default function PageEditorPanel({
  pageName,
  sectionName,
}: {
  pageName: string
  sectionName: string
}) {
  return (
    <div className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
      <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="text-sm font-medium text-slate-900">Content Editor</div>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
            {pageName} / {sectionName}
          </span>
        </div>
        <div className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Title
            </span>
            <input
              defaultValue={sectionName}
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
              defaultValue={`Add the main ${sectionName.toLowerCase()} content for the ${pageName} page here. This editing surface is ready for future CMS or API binding.`}
              className="w-full rounded-[1.5rem] border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-colors focus:border-slate-400"
            />
          </label>
        </div>
      </div>

      <div className="space-y-5">
        <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm font-medium text-slate-900">Section Media</div>
            <div className="flex gap-2 text-slate-400">
              <Monitor className="h-4 w-4" strokeWidth={1.7} />
              <Smartphone className="h-4 w-4" strokeWidth={1.7} />
            </div>
          </div>
          <div className="flex h-56 flex-col items-center justify-center rounded-[1.5rem] bg-slate-50 text-center">
            <ImagePlus className="h-8 w-8 text-slate-400" strokeWidth={1.5} />
            <div className="mt-4 text-sm font-medium text-slate-900">
              Image Upload Placeholder
            </div>
            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              Add or replace artwork for this section.
            </p>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-[#08152f] p-5 text-white">
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/40">
            Publish Controls
          </div>
          <button className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-950 transition-transform hover:-translate-y-0.5">
            <Save className="h-4 w-4" strokeWidth={1.8} />
            Save Changes
          </button>
          <p className="mt-4 text-sm leading-6 text-white/60">
            Save the current section before moving to another editing screen.
          </p>
        </div>
      </div>
    </div>
  )
}
