'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative flex min-h-[88svh] items-end overflow-hidden lg:min-h-[92vh] lg:items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/lexway-hero.png"
          alt="Refined legal office interior for Lexway Law Associates"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#05010d]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05010d] via-[#05010d]/82 to-[#05010d]/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#060110] to-transparent" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-12 sm:pt-36 sm:pb-14 md:pt-36 md:pb-16">
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
            <span className="block text-[3.25rem] text-white sm:text-6xl md:text-6xl lg:text-7xl">
              Trusted
            </span>
            <span className="block text-[3.25rem] sm:text-6xl md:text-6xl lg:text-7xl">
              <em className="text-gradient not-italic">Legal</em>{' '}
              <span className="text-white">Solutions</span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mb-8 max-w-2xl text-base leading-relaxed text-white/68 sm:mb-10 sm:text-lg md:text-xl font-serif"
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
            className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 sm:mt-10 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-5 md:gap-x-10"
          >
            {[
              { value: '15+', label: 'Years of Excellence' },
              { value: '500+', label: 'Cases Won' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '12', label: 'Expert Attorneys' },
            ].map((stat) => (
              <div key={stat.label} className="min-w-0 sm:min-w-[140px]">
                <div
                  className="text-2xl font-serif text-gradient md:text-3xl"
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
    </section>
  )
}
