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
      className={`mb-12 md:mb-14 ${centered ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
          <span className={`w-8 h-px ${light ? 'bg-[#052656]' : 'bg-[#8EA9D4]'}`} />
          <span
            className={`text-xs tracking-[0.3em] uppercase font-light ${
              light ? 'text-[#052656]/75' : 'text-white/70'
            }`}
          >
            {eyebrow}
          </span>
          <span className={`w-8 h-px ${light ? 'bg-[#052656]' : 'bg-[#8EA9D4]'}`} />
        </div>
      )}
      <h2
        className={`font-serif text-4xl md:text-5xl lg:text-6xl leading-tight ${
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
          className={`mt-5 text-base md:text-lg leading-relaxed max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-[#0B011C]/65' : 'text-white/55'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
