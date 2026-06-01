import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events Ground Booking - Kabon Gardens',
  description: 'Book our events ground for weddings, parties, corporate events, and family gatherings. Spacious venue accommodating up to 500 guests.',
  keywords: ['Kabon Gardens', 'Events Ground', 'Booking', 'Wedding Venue', 'Party Venue', 'Corporate Events', 'Kabarnet'],
}

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
