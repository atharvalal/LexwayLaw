'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const articles = [
  {
    tag: 'Corporate Law',
    title: "Key Changes to Nepal's Company Act: What Businesses Must Know",
    excerpt: "Recent amendments to the Company Act 2006 introduce significant obligations for private limited companies. Here's a concise breakdown for business owners and directors.",
    date: 'Jan 15, 2025',
    readTime: '6 min read',
    slug: 'company-act-changes',
    featured: true,
  },
  {
    tag: 'Property Law',
    title: 'Land Registration Reforms: Implications for Property Buyers',
    excerpt: "The Department of Land Management has introduced digital reforms that streamline property registration — but also introduce new compliance requirements.",
    date: 'Dec 28, 2024',
    readTime: '5 min read',
    slug: 'land-registration-reforms',
  },
  {
    tag: 'Arbitration',
    title: 'Why More Businesses Are Choosing Arbitration Over Litigation',
    excerpt: "With courts facing significant backlogs, arbitration offers a faster, more confidential route to resolution. We examine the key advantages for commercial disputes.",
    date: 'Dec 10, 2024',
    readTime: '7 min read',
    slug: 'arbitration-vs-litigation',
  },
  {
    tag: 'Family Law',
    title: "Understanding Nepal's Inheritance Laws: A Practical Guide",
    excerpt: "Succession and inheritance law in Nepal has evolved significantly. This guide covers the rights of spouses, children, and dependents under current legislation.",
    date: 'Nov 22, 2024',
    readTime: '8 min read',
    slug: 'nepal-inheritance-laws',
  },
  {
    tag: 'Corporate Law',
    title: 'Foreign Investment in Nepal: Legal Framework and Opportunities',
    excerpt: "Nepal's Foreign Investment and Technology Transfer Act creates pathways for international investors. Here's what foreign entities need to know before entering the market.",
    date: 'Nov 5, 2024',
    readTime: '9 min read',
    slug: 'foreign-investment-nepal',
  },
  {
    tag: 'Litigation',
    title: 'The Role of Evidence in Civil Proceedings: A Primer',
    excerpt: "Understanding evidentiary rules is critical whether you're pursuing or defending a civil claim. Our litigators break down the fundamentals in plain language.",
    date: 'Oct 18, 2024',
    readTime: '6 min read',
    slug: 'evidence-civil-proceedings',
  },
]

export default function BlogPage() {
  const featured = articles[0]
  const rest = articles.slice(1)

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#052656]/40 to-[#0B011C]" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#FFFFFF]" />
              <span className="text-[#FFFFFF] text-xs tracking-[0.3em] uppercase">Knowledge Hub</span>
              <span className="w-8 h-px bg-[#FFFFFF]" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Legal <em className="text-gradient not-italic">Insights</em>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Analysis, commentary, and practical guidance from our attorneys on the legal issues that matter.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container-custom">
          {/* Featured */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Link href={`/blog/${featured.slug}`} className="group block bg-glass-blue p-10 md:p-14 mb-8 hover:border-[#FFFFFF]/30 transition-all duration-400 card-hover">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-[#FFFFFF]/10 border border-[#FFFFFF]/30 text-[#FFFFFF] text-[10px] tracking-[0.3em] uppercase">
                  Featured · {featured.tag}
                </span>
                <span className="flex items-center gap-1.5 text-white/30 text-xs">
                  <Calendar className="w-3 h-3" />{featured.date}
                </span>
                <span className="flex items-center gap-1.5 text-white/30 text-xs">
                  <Clock className="w-3 h-3" />{featured.readTime}
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-white group-hover:text-[#FFFFFF] transition-colors mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                {featured.title}
              </h2>
              <p className="text-white/40 text-base leading-relaxed max-w-2xl mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-2 text-[#FFFFFF] text-xs tracking-widest uppercase">
                <span>Read Article</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link href={`/blog/${article.slug}`} className="group block bg-glass-blue p-7 h-full hover:border-[#FFFFFF]/30 transition-all duration-400 card-hover">
                  <div className="inline-block px-3 py-1 bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 text-[#FFFFFF] text-[10px] tracking-[0.25em] uppercase mb-5">
                    {article.tag}
                  </div>
                  <h3 className="font-serif text-xl text-white group-hover:text-[#FFFFFF] transition-colors mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                    {article.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-white/25 text-xs">
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{article.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{article.readTime}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#FFFFFF]/40 group-hover:text-[#FFFFFF] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
