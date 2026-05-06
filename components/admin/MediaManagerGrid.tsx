import { ImagePlus, Trash2 } from 'lucide-react'
import { MediaItem } from '@/components/admin/types'

export default function MediaManagerGrid({
  items,
}: {
  items: MediaItem[]
}) {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-500">
          Media cards are placeholders for future cloud storage or CMS asset integration.
        </p>
        <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:text-slate-950">
          <ImagePlus className="h-4 w-4" strokeWidth={1.8} />
          Upload Media
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white"
          >
            <div
              className={`flex aspect-[4/3] items-end p-4 ${
                index % 4 === 0
                  ? 'bg-gradient-to-br from-[#0f2f63] to-[#3264ae]'
                  : index % 4 === 1
                    ? 'bg-gradient-to-br from-slate-200 to-slate-50'
                    : index % 4 === 2
                      ? 'bg-gradient-to-br from-[#091934] to-[#103f83]'
                      : 'bg-gradient-to-br from-slate-100 to-slate-300'
              }`}
            >
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white">
                {item.type}
              </span>
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <div className="text-sm font-medium text-slate-900">{item.title}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                  Mock Asset
                </div>
              </div>
              <button className="rounded-xl border border-slate-200 p-2 text-slate-400 transition-colors hover:text-slate-700">
                <Trash2 className="h-4 w-4" strokeWidth={1.8} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
