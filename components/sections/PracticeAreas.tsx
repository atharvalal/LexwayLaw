'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Building2, Gavel, Home, Users, Scale, ArrowRight, Shield, BookOpen } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const areas = [
  {
    icon: Building2,
    title: 'Corporate Law',
    description:
      'Comprehensive legal support for businesses — from incorporation and governance to mergers, acquisitions, and regulatory compliance.',
    slug: 'corporate-law',
  },
  {
    icon: Gavel,
    title: 'Litigation',
    description:
      'Aggressive and strategic representation in civil and commercial disputes, protecting your rights at every stage of proceedings.',
    slug: 'litigation',
  },
  {
    icon: Home,
    title: 'Property Law',
    description:
      'Expert guidance on real estate transactions, land rights, title disputes, and property development agreements.',
    slug: 'property-law',
  },
  {
    icon: Users,
    title: 'Family Law',
    description:
      'Compassionate legal counsel on divorce, child custody, inheritance, adoption, and domestic relations matters.',
    slug: 'family-law',
  },
  {
    icon: Scale,
    title: 'Arbitration',
    description:
      'Efficient alternative dispute resolution services — helping parties reach binding resolutions outside the courtroom.',
    slug: 'arbitration',
  },
  {
    icon: Shield,
    title: 'Criminal Defense',
    description:
      'Skilled defense representation ensuring due process and protecting your legal rights at every stage of criminal proceedings.',
    slug: 'criminal-defense',
  },
]

export default function PracticeAreas() {
  return (
    <section className="section-padding bg-[#060110]">
      <div className="container-custom">
        <SectionHeader
          eyebrow="What We Do"
          title="Areas of"
          titleHighlight="Practice"
          subtitle="Our team of seasoned attorneys brings deep expertise across a comprehensive range of legal disciplines."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#FFFFFF]/10">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href="/practice-areas"
                className="group relative block h-full overflow-hidden bg-[#0B011C] p-7 transition-all duration-400 hover:bg-[#0d0330] md:p-8"
              >
                {/* Hover accent */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFFFFF] to-transparent group-hover:w-full transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-[#FFFFFF] to-transparent group-hover:w-full transition-all duration-500" />

                {/* Icon */}
                <div className="mb-6">
                  <div className="flex h-12 w-12 items-center justify-center border border-white/15 transition-all duration-300 group-hover:border-white/40 group-hover:bg-[#052656]/20">
                    <area.icon
                      className="w-5 h-5 text-[#FFFFFF]/60 group-hover:text-[#FFFFFF] transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <h3
                  className="text-white text-xl font-serif mb-3 group-hover:text-[#FFFFFF] transition-colors duration-300"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  {area.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{area.description}</p>

                <div className="flex items-center gap-2 text-[#FFFFFF]/50 group-hover:text-[#FFFFFF] text-xs tracking-widest uppercase transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
