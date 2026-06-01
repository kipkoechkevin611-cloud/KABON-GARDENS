import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Kabon Gardens',
  description: 'Learn about Kabon Gardens, the best serviced apartments in Kabarnet with luxury rooms, swimming pool, and great hospitality.',
  keywords: ['Kabon Gardens', 'About', 'Kabarnet', 'Serviced Apartments', 'Luxury Accommodation', 'Baringo County'],
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
