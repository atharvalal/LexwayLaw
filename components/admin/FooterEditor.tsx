import {
  Facebook,
  GripVertical,
  Linkedin,
  Mail,
  MapPin,
  PanelBottom,
  Phone,
  Plus,
  Save,
  Scale,
  Trash2,
  Twitter,
} from 'lucide-react'

const quickLinks = ['Home', 'About Us', 'Practice Areas', 'Our Team', 'Insights', 'Contact']
const practiceAreas = ['Corporate Law', 'Litigation', 'Property Law', 'Family Law']

function Field({
  label,
  defaultValue,
  wide = false,
}: {
  label: string
  defaultValue: string
  wide?: boolean
}) {
  return (
    <label className={wide ? 'block md:col-span-2' : 'block'}>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
        {label}
      </span>
      <input
        defaultValue={defaultValue}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400"
      />
    </label>
  )
}

function LinkGroup({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-sm font-medium text-slate-950">{title}</div>
          <div className="mt-1 text-xs text-slate-500">{links.length} visible links</div>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300">
          <Plus className="h-4 w-4" strokeWidth={1.8} />
          Add Link
        </button>
      </div>
      <div className="space-y-2">
        {links.map((link) => (
          <div
            key={link}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3"
          >
            <GripVertical className="h-4 w-4 text-slate-300" strokeWidth={1.8} />
            <input
              defaultValue={link}
              aria-label={`${title} link`}
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none"
            />
            <button
              aria-label={`Delete ${link}`}
              className="rounded-xl border border-slate-200 p-2 text-slate-400 transition-colors hover:text-slate-700"
            >
              <Trash2 className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FooterEditor() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <div className="space-y-6">
          <section className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="mb-6">
              <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                Footer Identity
              </div>
              <h2
                className="mt-2 font-serif text-3xl leading-none text-slate-950"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Brand & Contact
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Control the footer message and essential contact information.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Brand Name" defaultValue="Lexway Law Associates" />
              <Field label="Phone Number" defaultValue="+977-1-XXXXXXX" />
              <Field label="Contact Email" defaultValue="info@lexway.com.np" />
              <Field label="Office Address" defaultValue="Kantipath, Kathmandu 44600, Nepal" />
              <Field
                label="Brand Description"
                defaultValue="Providing trusted legal solutions with integrity, precision, and unwavering dedication to our clients since 2010."
                wide
              />
              <Field
                label="Copyright Text"
                defaultValue="Lexway Law Associates. All rights reserved."
                wide
              />
            </div>
          </section>

          <div className="grid gap-6 md:grid-cols-2">
            <LinkGroup title="Quick Links" links={quickLinks} />
            <LinkGroup title="Practice Areas" links={practiceAreas} />
          </div>

          <section className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                  Connected Channels
                </div>
                <h2
                  className="mt-2 font-serif text-3xl leading-none text-slate-950"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  Social & Legal
                </h2>
              </div>
              <button className="inline-flex items-center gap-2 rounded-2xl bg-[#08152f] px-4 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">
                <Save className="h-4 w-4" strokeWidth={1.8} />
                Save Footer
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="LinkedIn URL" defaultValue="linkedin.com/company/lexway-law" />
              <Field label="Facebook URL" defaultValue="facebook.com/lexwaylaw" />
              <Field label="Privacy Policy URL" defaultValue="/privacy-policy" />
              <Field label="Terms URL" defaultValue="/terms-of-service" />
            </div>
          </section>
        </div>

        <aside className="xl:sticky xl:top-8 xl:self-start">
          <div className="mb-3 flex items-center justify-between px-1">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <PanelBottom className="h-4 w-4 text-slate-400" strokeWidth={1.8} />
              Footer Preview
            </div>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              Preview Mode
            </span>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#060110] text-white shadow-[0_28px_80px_rgba(3,12,28,0.35)]">
            <div className="p-6 md:p-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center border border-white/25">
                      <Scale className="h-4 w-4 text-white/80" strokeWidth={1.5} />
                    </span>
                    <div>
                      <div
                        className="font-serif text-lg leading-none"
                        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                      >
                        Lexway
                      </div>
                      <div className="mt-1 text-[9px] uppercase tracking-[0.23em] text-white/40">
                        Law Associates
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 text-xs leading-6 text-white/40">
                    Providing trusted legal solutions with integrity, precision, and unwavering
                    dedication.
                  </p>
                  <div className="mt-5 flex gap-2">
                    {[Linkedin, Facebook, Twitter].map((Icon, index) => (
                      <span
                        key={index}
                        className="flex h-8 w-8 items-center justify-center border border-white/10 text-white/40"
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                      Quick Links
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-white/40">
                      {quickLinks.map((link) => (
                        <span key={link}>{link}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                      Contact
                    </div>
                    <div className="mt-3 space-y-3 text-xs text-white/40">
                      <span className="flex items-start gap-2">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/70" />
                        Kantipath, Kathmandu
                      </span>
                      <span className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-white/70" />
                        +977-1-XXXXXXX
                      </span>
                      <span className="flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 text-white/70" />
                        info@lexway.com.np
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 px-6 py-4 text-[10px] tracking-wider text-white/25">
              © 2026 Lexway Law Associates. All rights reserved.
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
