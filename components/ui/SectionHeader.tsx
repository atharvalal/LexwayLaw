'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`mb-10 md:mb-14 ${centered ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-2 sm:gap-3 ${centered ? 'justify-center' : ''}`}>
          <span className={`w-8 h-px ${light ? 'bg-[#052656]' : 'bg-[#8EA9D4]'}`} />
          <span
            className={`text-[10px] uppercase tracking-[0.24em] font-light sm:text-xs sm:tracking-[0.3em] ${
              light ? 'text-[#052656]/75' : 'text-white/70'
            }`}
          >
            {eyebrow}
          </span>
          <span className={`w-8 h-px ${light ? 'bg-[#052656]' : 'bg-[#8EA9D4]'}`} />
        </div>
      )}
      <h2
        className={`font-serif text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl ${
          light ? 'text-[#0B011C]' : 'text-white'
        }`}
        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
      >
        {title}
        {titleHighlight && (
          <>
            {' '}
            <em className="text-gradient not-italic">{titleHighlight}</em>
          </>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-[#0B011C]/65' : 'text-white/55'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
