'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Scale } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/team', label: 'Our Team' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B011C]/92 backdrop-blur-xl border-b border-white/10 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center border border-white/30 transition-colors group-hover:border-white/65 group-hover:bg-[#052656]/30">
            <Scale className="h-4 w-4 text-[#DCE7FA]" strokeWidth={1.5} />
          </div>
          <div>
            <div
              className="text-white font-serif text-lg leading-none tracking-wide"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Lexway
            </div>
            <div className="mt-0.5 text-[10px] uppercase leading-none tracking-[0.25em] text-white/55 font-light">
              Law Associates
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm uppercase tracking-[0.22em] text-white/70 transition-colors duration-300 hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#8EA9D4] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href="/contact" className="hidden lg:block btn-primary text-xs">
          <span>Consult Now</span>
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white/80 transition-colors hover:text-white"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4 border-t border-white/10 bg-[#0B011C]/98 px-6 py-6 backdrop-blur-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-white/5 py-2 text-sm uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary text-xs mt-2 justify-center"
          >
            <span>Consult Now</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
