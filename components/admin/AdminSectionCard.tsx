export default function AdminSectionCard({
  title,
  eyebrow,
  description,
  children,
  className = '',
}: {
  title: string
  eyebrow?: string
  description?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={`rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] ${className}`}
    >
      <div className="mb-6">
        {eyebrow && (
          <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            {eyebrow}
          </div>
        )}
        <h2
          className="mt-2 font-serif text-3xl leading-none text-slate-950"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  )
}
