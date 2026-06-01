import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/ui/ScrollProgress'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'
import StickyBookingCTA from './components/ui/StickyBookingCTA'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Kabon Gardens | Premium Serviced Apartments in Kabarnet',
  description: 'Experience luxury comfort in Kabarnet. Spacious 2-bedroom serviced apartments featuring an exclusive swimming pool, modern amenities, and serene privacy. Perfect for families, corporate travelers, and tourists visiting Lake Baringo.',
  keywords: 'serviced apartments Kabarnet, Airbnb Kabarnet, hotels with swimming pool Baringo, luxury stay Kabarnet, family accommodation Baringo County',
  openGraph: {
    title: 'Kabon Gardens | Premium Serviced Apartments in Kabarnet',
    description: 'Experience luxury comfort in Kabarnet with our exclusive swimming pool and modern amenities.',
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
      <body className={inter.variable}>
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <StickyBookingCTA />
      </body>
    </html>
  )
}
