'use client'

import { motion } from 'framer-motion'
import { Award, Landmark, Scale, ShieldCheck, Star } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const recognitions = [
  {
    icon: Award,
    title: 'Commercial Law Excellence',
    detail: 'Recognized for strategic counsel in complex business matters.',
  },
  {
    icon: Scale,
    title: 'Dispute Resolution Leaders',
    detail: 'Trusted advocacy across litigation, arbitration, and settlement.',
  },
  {
    icon: Landmark,
    title: 'Corporate Advisory Practice',
    detail: 'Known for practical governance and compliance guidance.',
  },
  {
    icon: ShieldCheck,
    title: 'Client Trust Recognition',
    detail: 'Built on confidentiality, responsiveness, and clear counsel.',
  },
  {
    icon: Star,
    title: 'Emerging Legal Innovation',
    detail: 'Modern legal service delivery with disciplined execution.',
  },
]

const carouselItems = [...recognitions, ...recognitions]

export default function AwardsRecognition() {
  return (
    <section className="relative overflow-hidden bg-[#060110] py-16 sm:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom relative z-10">
        <SectionHeader
          eyebrow="Awards & Recognition"
          title="Recognized for"
          titleHighlight="Legal Excellence"
          subtitle="A record of trusted counsel, careful advocacy, and practical legal outcomes for clients across Nepal."
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="awards-carousel relative"
      >
        <div className="awards-carousel__fade awards-carousel__fade--left" />
        <div className="awards-carousel__fade awards-carousel__fade--right" />

        <div className="awards-carousel__track">
          {carouselItems.map((item, index) => (
            <div key={`${item.title}-${index}`} className="awards-carousel__item bg-glass-blue">
              <div className="mb-5 flex h-12 w-12 items-center justify-center border border-white/15 bg-white/[0.03]">
                <item.icon className="h-5 w-5 text-white/75" strokeWidth={1.5} />
              </div>
              <h3
                className="mb-3 font-serif text-xl leading-tight text-white"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/45">{item.detail}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
