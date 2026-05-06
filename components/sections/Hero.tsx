'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B011C] via-[#0d0328] to-[#052656]" />
        {/* Geometric accent */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-25">
          <svg viewBox="0 0 600 800" className="w-full h-full" preserveAspectRatio="none">
            <polygon points="200,0 600,0 600,800 400,800" fill="#052656" />
          </svg>
        </div>
        {/* Radial glow */}
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#052656]/30 blur-[120px]" />
        <div className="absolute right-1/4 top-1/4 h-[360px] w-[360px] rounded-full bg-white/10 blur-[90px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-12 bg-[#8EA9D4]" />
            <span className="text-xs uppercase tracking-[0.4em] text-white/70 font-light">
              Lexway Law Associates
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-serif leading-[1.05] mb-8"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            <span className="block text-white text-6xl md:text-7xl lg:text-8xl">
              Trusted
            </span>
            <span className="block text-6xl md:text-7xl lg:text-8xl">
              <em className="text-gradient not-italic">Legal</em>{' '}
              <span className="text-white">Solutions</span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl"
          >
            Lexway Law Associates delivers expert legal counsel grounded in integrity,
            precision, and a relentless commitment to your interests. From corporate
            transactions to civil disputes — we navigate complexity so you don't have to.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact" className="btn-primary">
              <span>Consult Now</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </Link>
            <Link href="/about" className="btn-outline">
              <span>About Our Firm</span>
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 flex flex-wrap gap-x-8 gap-y-6 md:gap-x-10"
          >
            {[
              { value: '15+', label: 'Years of Excellence' },
              { value: '500+', label: 'Cases Won' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '12', label: 'Expert Attorneys' },
            ].map((stat) => (
              <div key={stat.label} className="min-w-[140px]">
                <div
                  className="text-3xl md:text-4xl font-serif text-gradient"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  {stat.value}
                </div>
                <div className="text-white/35 text-xs tracking-widest uppercase mt-1 font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-4 h-4 text-white/45" />
        </motion.div>
      </motion.div>
    </section>
  )
}
