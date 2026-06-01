import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photo Gallery | Kabon Gardens',
  description: 'Explore our luxury apartments through photos. View our swimming pool, bedrooms, living areas, kitchen, and property exterior.',
  keywords: 'Kabon Gardens photos, apartment gallery Kabarnet, serviced apartment images, pool pictures Baringo',
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
