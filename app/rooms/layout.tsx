import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rooms & Rates | Kabon Gardens',
  description: 'View our competitive rates for 2-bedroom serviced apartments in Kabarnet. Weekday, weekend, and weekly pricing available with direct booking discounts.',
  keywords: 'rooms rates Kabarnet, apartment pricing Baringo, serviced apartment cost, accommodation rates Kabarnet',
}

export default function RoomsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
