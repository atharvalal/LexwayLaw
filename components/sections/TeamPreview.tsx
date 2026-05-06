'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Linkedin } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const team = [
  {
    name: 'Adv. Rohan Sharma',
    title: 'Founding Partner',
    specialization: 'Corporate & Commercial Law',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Adv. Priya Adhikari',
    title: 'Senior Partner',
    specialization: 'Litigation & Arbitration',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Adv. Vikram Thapa',
    title: 'Associate Partner',
    specialization: 'Property & Real Estate',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Adv. Sujata Rana',
    title: 'Senior Associate',
    specialization: 'Family & Personal Law',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face',
    linkedin: '#',
  },
]

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Image container */}
              <div className="relative overflow-hidden mb-5 aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B011C] via-[#0B011C]/20 to-transparent" />
                {/* Gold border on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#FFFFFF]/30 transition-all duration-500" />

                {/* LinkedIn */}
                <a
                  href={member.linkedin}
                  className="absolute top-4 right-4 w-8 h-8 bg-[#0B011C]/80 border border-[#FFFFFF]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#FFFFFF]/20"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#FFFFFF]" />
                </a>
              </div>

              {/* Info */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-4 h-px bg-[#FFFFFF]/50" />
                  <span className="text-[#FFFFFF]/60 text-[10px] tracking-[0.25em] uppercase">
                    {member.title}
                  </span>
                </div>
                <h3
                  className="text-white text-lg font-serif mb-1 group-hover:text-[#FFFFFF] transition-colors"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  {member.name}
                </h3>
                <p className="text-white/35 text-xs">{member.specialization}</p>
              </div>
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
