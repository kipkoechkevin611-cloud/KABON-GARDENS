import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Your Stay | Kabon Gardens',
  description: 'Book your luxury serviced apartment in Kabarnet directly and save 15%. Easy WhatsApp booking with instant confirmation.',
  keywords: 'book apartment Kabarnet, reserve accommodation Baringo, direct booking Kabon Gardens, WhatsApp booking',
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
