'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'

const attorneys = [
  {
    name: 'Adv. Rohan Sharma',
    title: 'Founding Partner',
    specialization: 'Corporate & Commercial Law',
    education: 'LL.M., Harvard Law School',
    experience: '20+ years',
    bio: 'Rohan founded Lexway with a vision to build a law firm defined by excellence and accessibility. He leads our corporate practice and has advised on some of Nepal\'s most significant M&A transactions.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Adv. Priya Adhikari',
    title: 'Senior Partner',
    specialization: 'Litigation & Arbitration',
    education: 'LL.B., Tribhuvan University',
    experience: '18 years',
    bio: 'Priya is one of Kathmandu\'s most respected litigators, with an impressive record across commercial disputes, arbitration proceedings, and appellate advocacy.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Adv. Vikram Thapa',
    title: 'Associate Partner',
    specialization: 'Property & Real Estate Law',
    education: 'LL.B., Kathmandu School of Law',
    experience: '14 years',
    bio: 'Vikram heads our property practice, advising clients on complex land transactions, development projects, and title disputes across Nepal.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Adv. Sujata Rana',
    title: 'Senior Associate',
    specialization: 'Family & Personal Law',
    education: 'LL.M., Delhi University',
    experience: '12 years',
    bio: 'With sensitivity and precision, Sujata guides clients through family law matters including divorce, custody, and succession planning.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Adv. Anil Bhandari',
    title: 'Associate',
    specialization: 'Criminal Defense',
    education: 'LL.B., Purbanchal University',
    experience: '9 years',
    bio: 'Anil brings tenacity and strategic thinking to our criminal defense practice, having represented clients across a wide spectrum of criminal matters.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Adv. Meena Karki',
    title: 'Associate',
    specialization: 'Corporate & Regulatory',
    education: 'LL.B., Tribhuvan University',
    experience: '7 years',
    bio: 'Meena advises clients on regulatory compliance and corporate governance, bringing meticulous attention to detail to every engagement.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&crop=face',
  },
]

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
              <motion.div
                key={attorney.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                {/* Image */}
                <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B011C] via-transparent to-transparent" />
                  <div className="absolute inset-0 border border-transparent group-hover:border-[#FFFFFF]/20 transition-all duration-500" />

                  {/* Social links */}
                  <div className="absolute bottom-4 left-4 right-4 flex translate-y-0 gap-2 opacity-100 transition-all duration-300 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                    <a href="#" className="flex h-9 w-9 items-center justify-center border border-[#FFFFFF]/30 bg-[#0B011C]/90 transition-colors hover:bg-[#FFFFFF]/20">
                      <Linkedin className="w-3.5 h-3.5 text-[#FFFFFF]" />
                    </a>
                    <a href="#" className="flex h-9 w-9 items-center justify-center border border-[#FFFFFF]/30 bg-[#0B011C]/90 transition-colors hover:bg-[#FFFFFF]/20">
                      <Mail className="w-3.5 h-3.5 text-[#FFFFFF]" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div>
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
