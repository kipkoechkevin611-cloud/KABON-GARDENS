'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Music, Sparkles } from 'lucide-react'

export default function EventsGroundSection() {
  const features = [
    {
      icon: Calendar,
      title: 'Perfect for Events',
      desc: 'Host weddings, parties, corporate events, and family gatherings in our spacious events ground.',
    },
    {
      icon: Users,
      title: 'Large Capacity',
      desc: 'Accommodate up to 500 guests with ample seating and space for various event setups.',
    },
    {
      icon: Music,
      title: 'Entertainment Ready',
      desc: 'Fully equipped for music, dancing, and entertainment with excellent acoustics.',
    },
    {
      icon: Sparkles,
      title: 'Premium Decor',
      desc: 'Beautifully landscaped grounds perfect for outdoor ceremonies and celebrations.',
    },
  ]

  return (
    <section id="events" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Events <span className="text-coral-500">Ground</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Host your special occasions at our beautiful events ground
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card p-6 luxury-shadow hover:border-coral-500/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-coral-500/10 to-coral-600/10 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-coral-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/events"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span className="text-gray-900 font-semibold">Book Events Ground</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
