import Link from 'next/link'
import { Scale, Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/team', label: 'Our Team' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

const practiceAreas = [
  'Corporate Law',
  'Litigation',
  'Property Law',
  'Family Law',
  'Arbitration',
]

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#060110]">
      {/* Main footer */}
      <div className="container-custom pt-12 pb-14 md:pt-14 md:pb-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="flex h-9 w-9 items-center justify-center border border-white/35">
                <Scale className="h-4 w-4 text-[#DCE7FA]" strokeWidth={1.5} />
              </div>
              <div>
                <div
                  className="text-white font-serif text-lg leading-none"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  Lexway
                </div>
                <div className="mt-0.5 text-[10px] uppercase leading-none tracking-[0.25em] text-white/55">
                  Law Associates
                </div>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Providing trusted legal solutions with integrity, precision, and unwavering dedication to our clients since 2010.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#FFFFFF] hover:border-[#FFFFFF]/40 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-sm tracking-[0.2em] uppercase font-medium mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-[#FFFFFF] text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-[#FFFFFF]/30 group-hover:w-6 group-hover:bg-[#FFFFFF] transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice areas */}
          <div>
            <h4 className="text-white text-sm tracking-[0.2em] uppercase font-medium mb-6">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <Link
                    href="/practice-areas"
                    className="text-white/40 hover:text-[#FFFFFF] text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-[#FFFFFF]/30 group-hover:w-6 group-hover:bg-[#FFFFFF] transition-all duration-300" />
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm tracking-[0.2em] uppercase font-medium mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFFFFF] mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-white/40 text-sm leading-relaxed">
                  Kantipath, Kathmandu<br />44600, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FFFFFF] shrink-0" strokeWidth={1.5} />
                <a href="tel:+97714XXXXXX" className="text-white/40 hover:text-[#FFFFFF] text-sm transition-colors">
                  +977-1-XXXXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FFFFFF] shrink-0" strokeWidth={1.5} />
                <a href="mailto:info@lexway.com.np" className="text-white/40 hover:text-[#FFFFFF] text-sm transition-colors">
                  info@lexway.com.np
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs tracking-widest">
            © {new Date().getFullYear()} Lexway Law Associates. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/25 hover:text-[#FFFFFF]/70 text-xs tracking-wider transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/25 hover:text-[#FFFFFF]/70 text-xs tracking-wider transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
