'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const articles = [
  {
    tag: 'Corporate Law',
    title: 'Key Changes to Nepal\'s Company Act: What Businesses Must Know',
    excerpt:
      'Recent amendments to the Company Act 2006 introduce significant obligations for private limited companies. Here\'s a concise breakdown for business owners.',
    date: 'Jan 15, 2025',
    readTime: '6 min read',
    slug: 'company-act-changes',
  },
  {
    tag: 'Property Law',
    title: 'Land Registration Reforms: Implications for Property Buyers',
    excerpt:
      'The Department of Land Management has introduced digital reforms that streamline property registration — but also introduce new compliance requirements.',
    date: 'Dec 28, 2024',
    readTime: '5 min read',
    slug: 'land-registration-reforms',
  },
  {
    tag: 'Arbitration',
    title: 'Why More Businesses Are Choosing Arbitration Over Litigation',
    excerpt:
      'With courts facing significant backlogs, arbitration offers a faster, more confidential route to resolution. We examine the key advantages.',
    date: 'Dec 10, 2024',
    readTime: '7 min read',
    slug: 'arbitration-vs-litigation',
  },
]

export default function BlogPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Legal Insights"
          title="From Our"
          titleHighlight="Counsel"
          subtitle="Staying ahead of legal developments so you can focus on what matters most."
        />

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer bg-glass-blue p-6 transition-all duration-400 hover:border-[#FFFFFF]/30 card-hover sm:p-7"
            >
              <Link href={`/blog/${article.slug}`}>
                {/* Tag */}
                <div className="inline-block px-3 py-1 bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 text-[#FFFFFF] text-[10px] tracking-[0.25em] uppercase mb-5">
                  {article.tag}
                </div>

                <h3
                  className="text-white text-xl font-serif leading-tight mb-4 group-hover:text-[#FFFFFF] transition-colors duration-300"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  {article.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{article.excerpt}</p>

                <div className="flex flex-col gap-4 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#FFFFFF]/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#FFFFFF]" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog" className="btn-outline">
            <span>All Insights</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
