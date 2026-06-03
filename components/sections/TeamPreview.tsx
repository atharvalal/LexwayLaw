'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Linkedin } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { attorneys } from '@/data/team'

const team = attorneys.slice(0, 4)

export default function TeamPreview() {
  return (
    <section className="section-padding bg-[#060110]">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Our Counsel"
          title="Meet the"
          titleHighlight="Team"
          subtitle="A collective of accomplished legal minds, each bringing decades of specialized expertise to your cause."
        />

        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <Link href={`/team/${member.slug}`} className="block">
                {/* Image container */}
                <div className="relative mb-4 aspect-[4/3] overflow-hidden sm:mb-5 sm:aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-[center_20%] grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B011C] via-[#0B011C]/20 to-transparent" />
                  {/* Gold border on hover */}
                  <div className="absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-[#FFFFFF]/30" />
                </div>

                {/* Info */}
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <span className="h-px w-4 bg-[#FFFFFF]/50" />
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#FFFFFF]/60">
                      {member.title}
                    </span>
                  </div>
                  <h3
                    className="mb-1 font-serif text-lg text-white transition-colors group-hover:text-[#FFFFFF]"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-xs text-white/35">{member.specialization}</p>
                </div>
              </Link>

              <a
                href={member.linkedin}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center border border-[#FFFFFF]/20 bg-[#0B011C]/80 opacity-100 transition-all duration-300 hover:bg-[#FFFFFF]/20 sm:opacity-0 sm:group-hover:opacity-100"
                aria-label={`${member.name} on LinkedIn`}
              >
                <Linkedin className="h-3.5 w-3.5 text-[#FFFFFF]" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/team" className="btn-outline">
            <span>View Full Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
