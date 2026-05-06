'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden lg:min-h-screen lg:items-center">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B011C] via-[#0d0328] to-[#052656]" />
        {/* Geometric accent */}
        <div className="absolute right-0 top-0 hidden h-full w-1/2 opacity-25 md:block">
          <svg viewBox="0 0 600 800" className="w-full h-full" preserveAspectRatio="none">
            <polygon points="200,0 600,0 600,800 400,800" fill="#052656" />
          </svg>
        </div>
        {/* Radial glow */}
        <div className="absolute left-1/2 top-[44%] h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#052656]/35 blur-[90px] sm:h-[620px] sm:w-[620px] md:top-1/2 md:h-[800px] md:w-[800px] md:blur-[120px]" />
        <div className="absolute right-[5%] top-[14%] h-[220px] w-[220px] rounded-full bg-white/10 blur-[70px] sm:right-1/4 sm:top-1/4 sm:h-[360px] sm:w-[360px] sm:blur-[90px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-28 pb-16 sm:pb-20 md:pt-32 md:pb-24">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 flex items-center gap-2 sm:mb-8 sm:gap-3"
          >
            <span className="h-px w-8 bg-[#8EA9D4] sm:w-12" />
            <span className="text-[10px] font-light uppercase tracking-[0.26em] text-white/70 sm:text-xs sm:tracking-[0.4em]">
              Lexway Law Associates
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mb-6 font-serif leading-[0.98] sm:mb-8 sm:leading-[1.05]"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            <span className="block text-[3.25rem] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Trusted
            </span>
            <span className="block text-[3.25rem] sm:text-6xl md:text-7xl lg:text-8xl">
              <em className="text-gradient not-italic">Legal</em>{' '}
              <span className="text-white">Solutions</span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mb-8 max-w-2xl text-base leading-relaxed text-white/60 sm:mb-10 sm:text-lg md:text-xl"
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
            className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Link href="/contact" className="btn-primary !w-auto px-4 sm:w-auto sm:px-7">
              <span>Consult Now</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </Link>
            <Link href="/about" className="btn-outline sm:w-auto">
              <span>About Our Firm</span>
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 grid grid-cols-2 gap-x-4 gap-y-6 sm:mt-16 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-6 md:gap-x-10"
          >
            {[
              { value: '15+', label: 'Years of Excellence' },
              { value: '500+', label: 'Cases Won' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '12', label: 'Expert Attorneys' },
            ].map((stat) => (
              <div key={stat.label} className="min-w-0 sm:min-w-[140px]">
                <div
                  className="text-3xl font-serif text-gradient md:text-4xl"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] font-light uppercase tracking-[0.18em] text-white/35 sm:text-xs sm:tracking-widest">
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
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
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
