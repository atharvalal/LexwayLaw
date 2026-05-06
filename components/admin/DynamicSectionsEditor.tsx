import { Plus, Trash2 } from 'lucide-react'
import { EditableItem } from '@/components/admin/types'

function ItemList({
  title,
  items,
}: {
  title: string
  items: EditableItem[]
}) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm font-medium text-slate-900">{title}</div>
        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
          <Plus className="h-4 w-4" strokeWidth={1.8} />
          Add
        </button>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-medium text-slate-900">{item.title}</div>
                <p className="mt-1 text-sm leading-6 text-slate-500">{item.description}</p>
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

export default function DynamicSectionsEditor({
  services,
  testimonials,
}: {
  services: EditableItem[]
  testimonials: EditableItem[]
}) {
  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_1fr]">
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-5 text-sm font-medium text-slate-900">Hero Section</div>
        <div className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Heading
            </span>
            <input
              defaultValue="Trusted Legal Solutions"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Subheading
            </span>
            <textarea
              rows={4}
              defaultValue="Expert legal counsel for modern businesses, families, and individuals navigating complex matters."
              className="w-full rounded-[1.5rem] border border-slate-200 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-colors focus:border-slate-400"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              CTA Text
            </span>
            <input
              defaultValue="Consult Now"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400"
            />
          </label>
        </div>
      </div>

      <div className="grid gap-5">
        <ItemList title="Services List" items={services} />
        <ItemList title="Testimonials" items={testimonials} />
      </div>
    </div>
  )
}
