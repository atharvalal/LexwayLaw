'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Linkedin, Mail } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'
import { attorneys } from '@/data/team'

export default function TeamPage() {
  return (
    <>
      {/* Header */}
      <section className="page-header relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#052656]/40 to-[#0B011C]" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="page-eyebrow">
              <span className="w-8 h-px bg-[#FFFFFF]" />
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#FFFFFF] sm:text-xs sm:tracking-[0.3em]">Our Counsel</span>
              <span className="w-8 h-px bg-[#FFFFFF]" />
            </div>
            <h1 className="page-title font-serif text-white" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Our <em className="text-gradient not-italic">Attorneys</em>
            </h1>
            <p className="page-subtitle max-w-xl text-white/50">
              Each of our attorneys brings specialized expertise, academic distinction, and a genuine commitment to client outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team grid */}
      <section className="pb-20 md:pb-24">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {attorneys.map((attorney, i) => (
              <motion.article
                key={attorney.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                {/* Image */}
                <div className="relative mb-5 aspect-[4/3] overflow-hidden sm:mb-6 sm:aspect-[3/4]">
                  <Link href={`/team/${attorney.slug}`} className="block h-full">
                    <img
                      src={attorney.image}
                      alt={attorney.name}
                      className="h-full w-full object-cover object-[center_20%] grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B011C] via-transparent to-transparent" />
                    <div className="absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-[#FFFFFF]/20" />
                  </Link>

                  {/* Social links */}
                  <div className="absolute bottom-4 left-4 right-4 flex translate-y-0 gap-2 opacity-100 transition-all duration-300 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                    <a href={attorney.linkedin} aria-label={`${attorney.name} on LinkedIn`} className="flex h-9 w-9 items-center justify-center border border-[#FFFFFF]/30 bg-[#0B011C]/90 transition-colors hover:bg-[#FFFFFF]/20">
                      <Linkedin className="w-3.5 h-3.5 text-[#FFFFFF]" />
                    </a>
                    <a href={`mailto:${attorney.email}`} aria-label={`Email ${attorney.name}`} className="flex h-9 w-9 items-center justify-center border border-[#FFFFFF]/30 bg-[#0B011C]/90 transition-colors hover:bg-[#FFFFFF]/20">
                      <Mail className="w-3.5 h-3.5 text-[#FFFFFF]" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <Link href={`/team/${attorney.slug}`} className="block">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-4 h-px bg-[#FFFFFF]/50" />
                    <span className="text-[#FFFFFF]/60 text-[10px] tracking-[0.25em] uppercase">{attorney.title}</span>
                  </div>
                  <h3 className="font-serif text-xl text-white mb-1 group-hover:text-[#FFFFFF] transition-colors" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                    {attorney.name}
                  </h3>
                  <p className="text-white/40 text-xs mb-4">{attorney.specialization}</p>
                  <p className="text-white/35 text-sm leading-relaxed mb-4">{attorney.bio}</p>
                  <div className="flex flex-col gap-1 text-xs text-white/30 sm:flex-row sm:gap-6">
                    <span>{attorney.education}</span>
                    <span className="text-[#FFFFFF]/50">{attorney.experience}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/50 transition-colors group-hover:text-white">
                    <span>View Profile</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
