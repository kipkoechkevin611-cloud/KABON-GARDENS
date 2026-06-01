'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Calendar, X } from 'lucide-react'

export default function StickyBookingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true)
      } else if (window.scrollY < 300) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-auto z-40"
      >
        <div className="glass-card p-4 md:p-6 luxury-shadow border-coral-500/30 flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-coral-500/10 to-coral-600/10 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-coral-500" />
            </div>
            <div className="hidden md:block">
              <p className="text-gray-900 font-semibold">Ready to book?</p>
              <p className="text-gray-500 text-sm">Save 15% when booking direct</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="/booking" className="btn-primary text-sm px-4 py-2">
              Book Now
            </Link>
            <button
              onClick={() => setIsDismissed(true)}
              className="text-gray-500 hover:text-gray-900 transition-colors p-1"
              aria-label="Dismiss"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
