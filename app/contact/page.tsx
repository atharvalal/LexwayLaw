'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

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
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#FFFFFF] sm:text-xs sm:tracking-[0.3em]">Get In Touch</span>
              <span className="w-8 h-px bg-[#FFFFFF]" />
            </div>
            <h1 className="page-title font-serif text-white" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Contact <em className="text-gradient not-italic">Us</em>
            </h1>
            <p className="page-subtitle max-w-xl text-white/50">
              Schedule a consultation or reach out with any legal query. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Info column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Office info cards */}
              {[
                {
                  icon: MapPin,
                  title: 'Office Address',
                  lines: ['Kantipath, Kathmandu', 'Bagmati Province, 44600', 'Nepal'],
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  lines: ['+977-1-XXXXXXX', '+977-98XXXXXXXX'],
                },
                {
                  icon: Mail,
                  title: 'Email',
                  lines: ['info@lexway.com.np', 'consult@lexway.com.np'],
                },
                {
                  icon: Clock,
                  title: 'Office Hours',
                  lines: ['Sunday – Friday', '9:00 AM – 6:00 PM', 'Appointments Preferred'],
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-glass-blue p-5 sm:gap-5 sm:p-7">
                  <div className="w-10 h-10 border border-[#FFFFFF]/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-[#FFFFFF]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[#FFFFFF]/60 text-[10px] tracking-[0.3em] uppercase mb-2">{item.title}</div>
                    {item.lines.map((line) => (
                      <p key={line} className="text-white/50 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <div className="bg-glass p-6 sm:p-8 md:p-12">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-6 h-px bg-[#FFFFFF]" />
                    <span className="text-[#FFFFFF] text-xs tracking-[0.3em] uppercase">Send a Message</span>
                  </div>
                  <h2 className="font-serif text-3xl text-white" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                    Request a Consultation
                  </h2>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <CheckCircle className="w-14 h-14 text-[#FFFFFF] mb-5" strokeWidth={1} />
                    <h3 className="font-serif text-2xl text-white mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                      Message Received
                    </h3>
                    <p className="text-white/50 text-sm max-w-sm">
                      Thank you for reaching out. One of our attorneys will be in touch within 24 hours to discuss your matter.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 focus:border-[#FFFFFF]/50 text-white text-sm px-4 py-3.5 outline-none transition-colors placeholder:text-white/20"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 focus:border-[#FFFFFF]/50 text-white text-sm px-4 py-3.5 outline-none transition-colors placeholder:text-white/20"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">Subject / Practice Area</label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full bg-[#0B011C] border border-white/10 focus:border-[#FFFFFF]/50 text-white/70 text-sm px-4 py-3.5 outline-none transition-colors"
                      >
                        <option value="">Select a practice area</option>
                        <option value="corporate">Corporate Law</option>
                        <option value="litigation">Litigation</option>
                        <option value="property">Property Law</option>
                        <option value="family">Family Law</option>
                        <option value="arbitration">Arbitration</option>
                        <option value="criminal">Criminal Defense</option>
                        <option value="other">Other / General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">Your Message *</label>
                      <textarea
                        required
                        rows={6}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 focus:border-[#FFFFFF]/50 text-white text-sm px-4 py-3.5 outline-none transition-colors placeholder:text-white/20 resize-none"
                        placeholder="Please briefly describe your legal matter..."
                      />
                    </div>

                    <p className="text-white/25 text-xs leading-relaxed">
                      All communications are strictly confidential and protected by attorney-client privilege. This form does not create an attorney-client relationship.
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="relative z-10">Sending...</span>
                      ) : (
                        <>
                          <span className="relative z-10">Send Message</span>
                          <Send className="w-4 h-4 relative z-10" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
