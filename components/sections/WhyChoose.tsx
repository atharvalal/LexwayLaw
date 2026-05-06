'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'

const pillars = [
  {
    number: '01',
    title: 'Decades of Expertise',
    desc: 'Over 15 years navigating Nepal\'s legal landscape with precision and deep institutional knowledge.',
  },
  {
    number: '02',
    title: 'Client-First Philosophy',
    desc: 'Every case is handled with the personal attention and strategic commitment it deserves.',
  },
  {
    number: '03',
    title: 'Proven Track Record',
    desc: 'Consistently achieving favorable outcomes in complex corporate, civil, and family matters.',
  },
  {
    number: '04',
    title: 'Confidentiality Guaranteed',
    desc: 'Absolute discretion and trust form the foundation of every client relationship we build.',
  },
]

export default function WhyChoose() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B011C] via-[#0d0228] to-[#0B011C]" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-3/4 bg-[#052656]/10 blur-[100px] rounded-full" />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-2 sm:gap-3">
              <span className="h-px w-8 bg-[#8EA9D4]" />
              <span className="text-[10px] font-light uppercase tracking-[0.24em] text-white/70 sm:text-xs sm:tracking-[0.3em]">
                Why Lexway
              </span>
            </div>
            <h2
              className="mb-6 font-serif text-4xl leading-tight text-white md:text-6xl"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Law Built on{' '}
              <em className="text-gradient not-italic">Integrity</em>
            </h2>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-white/55">
              At Lexway, we don't just practice law — we craft legal strategies that protect
              your future. Our multidisciplinary team combines analytical rigor with genuine
              advocacy, ensuring every client receives counsel worthy of their trust.
            </p>
            <Link href="/about" className="btn-primary">
              <span>Discover Our Story</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </Link>

            {/* Decorative quote */}
            <div className="mt-10 border-l-2 border-[#8EA9D4]/45 pl-5 sm:pl-6">
              <p
                className="text-base italic leading-relaxed text-white/60 sm:text-lg"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                "Justice delayed is justice denied. We ensure neither happens to our clients."
              </p>
              <p className="mt-3 text-xs uppercase tracking-widest text-white/45">
                — Founding Principle
              </p>
            </div>
          </motion.div>

          {/* Right: pillars */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-glass-blue p-5 transition-all duration-300 hover:border-white/20 sm:p-6"
              >
                <div
                  className="text-[#FFFFFF]/20 text-4xl font-serif mb-4 group-hover:text-[#FFFFFF]/40 transition-colors"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  {p.number}
                </div>
                <h4 className="text-white text-sm font-medium tracking-wide mb-2">{p.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
