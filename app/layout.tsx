import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Lexway Law Associates | Trusted Legal Solutions',
  description:
    'Lexway Law Associates provides expert legal counsel across corporate law, litigation, property law, family law, and arbitration in Nepal.',
  keywords: 'law firm Nepal, legal services, corporate law, litigation, property law',
  openGraph: {
    title: 'Lexway Law Associates',
    description: 'Trusted Legal Solutions — Expert counsel with integrity.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
