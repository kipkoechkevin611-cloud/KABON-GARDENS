'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  const phoneNumber = '254740272542'

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-coral-500 to-coral-600 text-white p-4 rounded-full shadow-2xl shadow-coral-500/30 hover:shadow-coral-500/50 transition-all duration-300"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  )
}
