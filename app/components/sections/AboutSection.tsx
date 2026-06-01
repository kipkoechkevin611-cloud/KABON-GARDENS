'use client'

import { motion } from 'framer-motion'
import { Bed, Sofa, Utensils, Laptop } from 'lucide-react'

export default function AboutSection() {
  const features = [
    { icon: Bed, title: 'Luxurious Bedrooms', desc: 'Spacious 2-bedroom suites with premium bedding' },
    { icon: Sofa, title: 'Elegant Living Room', desc: 'Comfortable seating for relaxation and entertainment' },
    { icon: Utensils, title: 'Modern Kitchen', desc: 'Fully equipped for all your culinary needs' },
    { icon: Laptop, title: 'Dedicated Workspace', desc: 'Perfect for remote work and productivity' },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your <span className="text-coral-500">Home</span> in Kabarnet
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Escape the heat and noise of everyday life at Kabon Gardens. Our serviced apartments
              offer the perfect blend of luxury comfort, privacy, and modern convenience.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you're a family seeking a memorable staycation, a corporate traveler needing
              a productive workspace, or a tourist exploring the beauty of Lake Baringo and Lake Bogoria,
              Kabon Gardens is your ideal home away from home.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-1 bg-gradient-to-r from-coral-500 to-coral-600 rounded-full" />
              <span className="text-coral-500 font-semibold">Experience True Hospitality</span>
            </div>
          </motion.div>

          {/* Right Column - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card p-6 hover:border-coral-500/30 transition-all duration-300 group"
              >
                <feature.icon className="w-8 h-8 text-coral-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-gray-900 font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
