'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Mail, Menu, Phone, Scale, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/practice-areas', label: 'Our Services' },
  { href: '/team', label: 'Our Team' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-[#0B011C]/92 backdrop-blur-xl'
          : 'bg-[#0B011C]/20 backdrop-blur-[2px]'
      }`}
    >
      <div className="border-b border-white/10 bg-[#060110]/86">
        <div className="container-custom flex items-center justify-between gap-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-white/58 sm:py-2 sm:text-[11px] sm:tracking-[0.16em]">
          <a
            href="mailto:info@lexway.com.np"
            className="inline-flex min-w-0 flex-1 items-center gap-1.5 transition-colors hover:text-white sm:gap-2"
          >
            <Mail className="h-3 w-3 shrink-0 text-[#DCE7FA] sm:h-3.5 sm:w-3.5" strokeWidth={1.5} />
            <span className="truncate">info@lexway.com.np</span>
            <span className="hidden text-white/28 md:inline">/</span>
            <span className="hidden truncate md:inline">consult@lexway.com.np</span>
          </a>
          <a
            href="tel:+97714XXXXXX"
            className="inline-flex shrink-0 items-center gap-1.5 transition-colors hover:text-white sm:gap-2"
          >
            <Phone className="h-3 w-3 shrink-0 text-[#DCE7FA] sm:h-3.5 sm:w-3.5" strokeWidth={1.5} />
            <span className="whitespace-nowrap">+977-1-XXXXXXX</span>
          </a>
        </div>
      </div>

      <div
        className={`container-custom flex items-center justify-between transition-[padding] duration-500 ${
          scrolled ? 'py-2.5 sm:py-3.5' : 'py-3 sm:py-5'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-8 w-8 items-center justify-center border border-white/30 transition-colors group-hover:border-white/65 group-hover:bg-[#052656]/30 sm:h-9 sm:w-9">
            <Scale className="h-3.5 w-3.5 text-[#DCE7FA] sm:h-4 sm:w-4" strokeWidth={1.5} />
          </div>
          <div>
            <div
              className="text-base font-serif leading-none tracking-wide text-white sm:text-lg"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Lexway
            </div>
            <div className="mt-0.5 text-[8px] uppercase leading-none tracking-[0.2em] text-white/55 font-light sm:text-[10px] sm:tracking-[0.25em]">
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
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          className="rounded-full border border-white/10 p-1.5 text-white/80 transition-colors hover:text-white sm:p-2 lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-h-[calc(100svh-7rem)] overflow-y-auto border-t border-white/10 bg-[#0B011C]/98 px-5 py-4 backdrop-blur-xl sm:px-6 sm:py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-white/5 py-3 text-sm uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-4 !w-auto self-start px-4 text-[11px] sm:text-xs"
          >
            <span>Consult Now</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
