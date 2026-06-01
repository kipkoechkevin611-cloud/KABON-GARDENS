import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Kabon Gardens',
  description: 'Get in touch with Kabon Gardens for bookings and inquiries. Contact us via phone, email, WhatsApp, or visit our location in Kabarnet, Baringo County.',
  keywords: 'contact Kabon Gardens, phone number Kabarnet, email Baringo, location Kabarnet, WhatsApp booking',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
