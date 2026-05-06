'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden pb-8 pt-24 sm:pb-10 sm:pt-16 md:pb-14 md:pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#052656] via-[#083070] to-[#052656]" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#FFFFFF]/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#FFFFFF]/40 to-transparent" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-4 flex items-center justify-center gap-2 sm:mb-5 sm:gap-3">
            <span className="h-px w-6 bg-white/70 sm:w-8" />
            <span className="text-[10px] font-light uppercase tracking-[0.24em] text-white/80 sm:text-xs sm:tracking-[0.3em]">
              Take the First Step
            </span>
            <span className="h-px w-6 bg-white/70 sm:w-8" />
          </div>

          <h2
            className="mb-4 font-serif text-[2.35rem] leading-[1.08] text-white sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            <span className="block">Your Legal Matter Deserves</span>
            <em className="text-gradient not-italic">Expert Attention</em>
          </h2>

          <p className="mx-auto mb-6 max-w-[34rem] text-[15px] leading-relaxed text-white/65 sm:mb-8 sm:text-lg">
            Schedule a confidential consultation with our attorneys today. We'll assess your situation and chart the clearest path forward.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/contact" className="btn-primary !w-auto min-w-[15rem] px-5 sm:w-auto">
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </Link>
            <a href="tel:+97714XXXXXX" className="btn-outline !w-auto min-w-[15rem] px-5 sm:w-auto">
              <Phone className="w-4 h-4" />
              <span>Call Us Now</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
