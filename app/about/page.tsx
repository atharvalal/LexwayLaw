'use client'

import { motion } from 'framer-motion'
import { Eye, Target, Award, Users, Scale, Globe } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'
import SectionHeader from '@/components/ui/SectionHeader'

const values = [
  { icon: Scale, title: 'Integrity', desc: 'We hold ourselves to the highest ethical standards, placing honesty and transparency above all else.' },
  { icon: Award, title: 'Excellence', desc: 'Every case receives the full force of our legal expertise, delivered with precision and care.' },
  { icon: Users, title: 'Client-Centric', desc: 'Your goals drive our strategy. We listen deeply before we advise.' },
  { icon: Globe, title: 'Accessibility', desc: 'World-class legal counsel should not be an exclusive privilege. We serve all who need us.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#052656]/40 to-[#0B011C]" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#FFFFFF]" />
              <span className="text-[#FFFFFF] text-xs tracking-[0.3em] uppercase">Our Firm</span>
              <span className="w-8 h-px bg-[#FFFFFF]" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              About <em className="text-gradient not-italic">Lexway</em>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              A legacy of trusted legal counsel, built on integrity and sustained by results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Firm intro */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-center gap-14 lg:grid-cols-2 xl:gap-16">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#FFFFFF]" />
                <span className="text-[#FFFFFF] text-xs tracking-[0.3em] uppercase font-light">Our Story</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Established with <em className="text-gradient not-italic">Purpose</em>
              </h2>
              <p className="text-white/50 leading-relaxed mb-5">
                Founded in 2010, Lexway Law Associates was established with a singular conviction: that every individual and organization deserves legal representation grounded in deep expertise, unwavering ethics, and genuine care.
              </p>
              <p className="text-white/50 leading-relaxed mb-5">
                What began as a two-attorney boutique has grown into one of Kathmandu's trusted legal partnerships — home to 12 attorneys across five practice disciplines, serving clients ranging from first-generation entrepreneurs to publicly listed corporations.
              </p>
              <p className="text-white/50 leading-relaxed">
                Through every legal evolution Nepal has undergone, Lexway has remained a constant — adapting, growing, and always advocating.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '2010', label: 'Year Founded' },
                  { value: '12', label: 'Expert Attorneys' },
                  { value: '500+', label: 'Cases Resolved' },
                  { value: '5', label: 'Practice Areas' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-glass-blue p-7 text-center">
                    <div className="text-4xl font-serif text-gradient mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                      {stat.value}
                    </div>
                    <div className="text-white/40 text-xs tracking-widest uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#060110]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                label: 'Our Mission',
                title: 'Deliver Justice, Protect Interests',
                body: 'To provide exceptional legal services that empower our clients to navigate complex legal challenges with confidence. We commit to thorough preparation, strategic advocacy, and transparent communication — every time.',
              },
              {
                icon: Eye,
                label: 'Our Vision',
                title: 'A Trusted Name Across Nepal',
                body: 'To be recognized as Nepal\'s most trusted law firm — not merely for winning cases, but for the integrity with which we practice, the relationships we cultivate, and the positive impact we create in our communities.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-glass p-10 border-t-2 border-[#FFFFFF]/40"
              >
                <item.icon className="w-8 h-8 text-[#FFFFFF] mb-6" strokeWidth={1.5} />
                <div className="text-[#FFFFFF]/60 text-xs tracking-[0.3em] uppercase mb-3">{item.label}</div>
                <h3 className="font-serif text-2xl text-white mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  {item.title}
                </h3>
                <p className="text-white/50 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Our Core"
            titleHighlight="Values"
            subtitle="These principles have guided every decision we have made since our founding."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-glass-blue p-7 text-center group hover:border-[#FFFFFF]/30 transition-all duration-300 card-hover"
              >
                <div className="w-12 h-12 border border-[#FFFFFF]/20 flex items-center justify-center mx-auto mb-5 group-hover:border-[#FFFFFF]/60 transition-colors">
                  <v.icon className="w-5 h-5 text-[#FFFFFF]/60 group-hover:text-[#FFFFFF] transition-colors" strokeWidth={1.5} />
                </div>
                <h4 className="font-serif text-lg text-white mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  {v.title}
                </h4>
                <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
