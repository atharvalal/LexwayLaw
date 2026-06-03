import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, GraduationCap, Linkedin, Mail, Scale } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'
import { attorneys, getAttorneyBySlug } from '@/data/team'

type TeamMemberPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return attorneys.map((attorney) => ({
    slug: attorney.slug,
  }))
}

export function generateMetadata({ params }: TeamMemberPageProps): Metadata {
  const attorney = getAttorneyBySlug(params.slug)

  if (!attorney) {
    return {
      title: 'Attorney Not Found | Lexway Law Associates',
    }
  }

  return {
    title: `${attorney.name} | ${attorney.title} | Lexway Law Associates`,
    description: `${attorney.name} is a ${attorney.title} at Lexway Law Associates focusing on ${attorney.specialization}.`,
  }
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const attorney = getAttorneyBySlug(params.slug)

  if (!attorney) {
    notFound()
  }

  return (
    <>
      <section className="page-header relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#052656]/40 to-[#0B011C]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container-custom relative z-10">
          <Link
            href="/team"
            className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/48 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Team</span>
          </Link>

          <div className="grid items-end gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
            <div className="relative max-w-md overflow-hidden lg:max-w-none">
              <img
                src={attorney.image}
                alt={attorney.name}
                className="aspect-[4/5] w-full object-cover object-[center_20%] grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B011C] via-transparent to-transparent" />
              <div className="absolute inset-0 border border-white/12" />
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#FFFFFF]" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#FFFFFF] sm:text-xs">
                  {attorney.title}
                </span>
              </div>
              <h1
                className="mb-5 font-serif text-[2.8rem] leading-none text-white sm:text-5xl lg:text-6xl"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                {attorney.name}
              </h1>
              <p className="mb-6 max-w-2xl text-lg leading-relaxed text-white/62">
                {attorney.specialization}
              </p>
              <p className="max-w-2xl text-sm leading-7 text-white/46 sm:text-base">
                {attorney.profile}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={`mailto:${attorney.email}`} className="btn-primary !w-auto px-5 text-xs">
                  <Mail className="relative z-10 h-4 w-4" />
                  <span>Email Attorney</span>
                </a>
                <a href={attorney.linkedin} className="btn-outline !w-auto px-5 text-xs">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
            <aside className="bg-glass-blue p-6 sm:p-7">
              <h2 className="mb-6 text-sm uppercase tracking-[0.22em] text-white">Profile</h2>
              <div className="space-y-5">
                <div className="flex gap-3">
                  <Scale className="mt-0.5 h-4 w-4 shrink-0 text-[#DCE7FA]" strokeWidth={1.5} />
                  <div>
                    <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/35">Practice</div>
                    <div className="text-sm leading-relaxed text-white/70">{attorney.specialization}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-[#DCE7FA]" strokeWidth={1.5} />
                  <div>
                    <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/35">Education</div>
                    <div className="text-sm leading-relaxed text-white/70">{attorney.education}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-[#DCE7FA]" strokeWidth={1.5} />
                  <div>
                    <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/35">Experience</div>
                    <div className="text-sm leading-relaxed text-white/70">{attorney.experience}</div>
                  </div>
                </div>
              </div>
            </aside>

            <div>
              <div className="mb-9">
                <h2
                  className="mb-4 font-serif text-3xl text-white"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  About {attorney.name.replace('Adv. ', '')}
                </h2>
                <p className="text-sm leading-7 text-white/48 sm:text-base">{attorney.bio}</p>
              </div>

              <div>
                <h2
                  className="mb-5 font-serif text-3xl text-white"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  Key Focus
                </h2>
                <div className="grid gap-3 sm:grid-cols-3">
                  {attorney.focus.map((item) => (
                    <div key={item} className="border border-white/10 bg-[#060110] p-4 text-sm leading-relaxed text-white/62">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
