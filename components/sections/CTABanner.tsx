'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-14">
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
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/70" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/80 font-light">
              Take the First Step
            </span>
            <span className="h-px w-8 bg-white/70" />
          </div>

          <h2
            className="mb-5 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Your Legal Matter Deserves<br />
            <em className="text-gradient not-italic">Expert Attention</em>
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/65">
            Schedule a confidential consultation with our attorneys today. We'll assess your situation and chart the clearest path forward.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </Link>
            <a href="tel:+97714XXXXXX" className="btn-outline">
              <Phone className="w-4 h-4" />
              <span>Call Us Now</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
