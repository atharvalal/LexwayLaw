'use client'

import { motion } from 'framer-motion'
import { Building2, Gavel, Home, Users, Scale, Shield } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'

const areas = [
  {
    icon: Building2,
    title: 'Corporate Law',
    description:
      'We counsel businesses at every stage — from entity formation and shareholder agreements to complex mergers, acquisitions, and corporate restructuring. Our corporate team understands both the legal and commercial dimensions of every transaction.',
    services: ['Company Formation & Incorporation', 'Shareholder & Partnership Agreements', 'Mergers & Acquisitions', 'Corporate Governance', 'Regulatory Compliance', 'Contract Drafting & Review'],
  },
  {
    icon: Gavel,
    title: 'Litigation',
    description:
      'Our litigators combine sharp analytical skills with courtroom experience to represent clients in civil, commercial, and appellate proceedings. We prepare every case as if it will go to trial — because preparation is the foundation of victory.',
    services: ['Civil Disputes', 'Commercial Litigation', 'Appellate Advocacy', 'Injunctions & Emergency Relief', 'Enforcement of Judgments', 'Cross-border Disputes'],
  },
  {
    icon: Home,
    title: 'Property Law',
    description:
      'From title due diligence to complex development agreements, our property team provides comprehensive legal support across the full spectrum of real estate and land matters in Nepal.',
    services: ['Title Investigation & Due Diligence', 'Sale/Purchase Agreements', 'Land Acquisition', 'Lease Agreements', 'Property Disputes & Partition', 'Development & Construction Contracts'],
  },
  {
    icon: Users,
    title: 'Family Law',
    description:
      'We approach sensitive family matters with the empathy and discretion they demand. Our attorneys guide clients through some of life\'s most challenging transitions with clarity and compassion.',
    services: ['Divorce & Separation', 'Child Custody & Guardianship', 'Alimony & Maintenance', 'Adoption Proceedings', 'Inheritance & Succession', 'Domestic Violence Protection'],
  },
  {
    icon: Scale,
    title: 'Arbitration',
    description:
      'As alternative dispute resolution becomes increasingly preferred, our arbitration practice offers parties a faster, more confidential path to resolution — with all the strategic sophistication of courtroom litigation.',
    services: ['Domestic Arbitration', 'International Commercial Arbitration', 'Mediation Services', 'Arbitral Award Enforcement', 'Expert Determination', 'Dispute Board Services'],
  },
  {
    icon: Shield,
    title: 'Criminal Defense',
    description:
      'Facing criminal charges requires immediate, experienced legal intervention. Our defense attorneys protect your rights from the moment of investigation through to final disposition.',
    services: ['Criminal Investigation Defense', 'Bail & Remand Applications', 'Trial Defense', 'Economic Crime', 'White-Collar Crime', 'Appeals & Revision'],
  },
]

export default function PracticeAreasPage() {
  return (
    <>
      {/* Header */}
      <section className="page-header relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#052656]/40 to-[#0B011C]" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="page-eyebrow">
              <span className="w-8 h-px bg-[#FFFFFF]" />
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#FFFFFF] sm:text-xs sm:tracking-[0.3em]">Legal Services</span>
              <span className="w-8 h-px bg-[#FFFFFF]" />
            </div>
            <h1 className="page-title font-serif text-white" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Practice <em className="text-gradient not-italic">Areas</em>
            </h1>
            <p className="page-subtitle text-white/50">
              Deep expertise across the legal disciplines that matter most to individuals, families, and businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Areas */}
      <section className="pb-20 md:pb-24">
        <div className="container-custom">
          <div className="space-y-px bg-[#FFFFFF]/10">
            {areas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#0B011C] hover:bg-[#0d0330] transition-colors duration-300 group"
              >
                <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-5 md:gap-10 md:p-12 lg:p-14">
                  {/* Icon + title */}
                  <div className="md:col-span-2">
                    <div className="w-14 h-14 border border-[#FFFFFF]/20 group-hover:border-[#FFFFFF]/60 flex items-center justify-center mb-6 transition-all duration-300">
                      <area.icon className="w-6 h-6 text-[#FFFFFF]/60 group-hover:text-[#FFFFFF] transition-colors" strokeWidth={1.5} />
                    </div>
                    <h2 className="mb-4 font-serif text-2xl text-white transition-colors group-hover:text-[#FFFFFF] sm:text-3xl" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                      {area.title}
                    </h2>
                    <p className="text-white/40 text-sm leading-relaxed">{area.description}</p>
                  </div>

                  {/* Services */}
                  <div className="md:col-span-3">
                    <div className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#FFFFFF]/60">Services Include</div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {area.services.map((service) => (
                        <div key={service} className="flex items-start gap-3 text-sm text-white/50">
                          <span className="w-1.5 h-1.5 bg-[#FFFFFF]/50 rounded-full shrink-0" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
