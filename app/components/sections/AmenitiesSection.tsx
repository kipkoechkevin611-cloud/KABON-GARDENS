'use client'

import { motion } from 'framer-motion'
import { Waves, Wifi, UtensilsCrossed, Laptop, ShieldCheck, Car } from 'lucide-react'

export default function AmenitiesSection() {
  const amenities = [
    {
      icon: Waves,
      title: 'Swimming Pool',
      description: 'Exclusive swimming pool for relaxation and recreation',
    },
    {
      icon: Wifi,
      title: 'High-Speed Wi-Fi',
      description: 'Stay connected with reliable high-speed internet',
    },
    {
      icon: UtensilsCrossed,
      title: 'Fully Equipped Kitchen',
      description: 'Modern kitchen with all appliances and cookware',
    },
    {
      icon: Laptop,
      title: 'Dedicated Workspace',
      description: 'Quiet, comfortable area for remote work',
    },
    {
      icon: Car,
      title: 'Secure Parking',
      description: 'Safe, gated parking for your vehicles',
    },
    {
      icon: ShieldCheck,
      title: 'Safety & Security',
      description: '24/7 security and gated compound',
    },
  ]

  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium <span className="gradient-text">Amenities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for a comfortable and memorable stay
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="glass-card p-8 h-full luxury-shadow hover:border-coral-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-coral-500/10 to-coral-600/10 rounded-2xl flex items-center justify-center mb-6">
                  <amenity.icon className="w-8 h-8 text-coral-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{amenity.title}</h3>
                <p className="text-gray-500 leading-relaxed">{amenity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
