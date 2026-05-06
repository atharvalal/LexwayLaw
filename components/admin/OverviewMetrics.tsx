import { AdminMetric } from '@/components/admin/types'

export default function OverviewMetrics({
  items,
}: {
  items: AdminMetric[]
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-[1.75rem] border border-slate-200/80 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
        >
          <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            {item.label}
          </div>
          <div
            className="mt-4 font-serif text-4xl leading-none text-slate-950"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            {item.value}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-500">{item.detail}</p>
        </div>
      ))}
    </div>
  )
}
