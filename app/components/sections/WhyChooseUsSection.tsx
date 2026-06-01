'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Percent, Sparkles, Users, Lock, Heart, Waves, Laptop } from 'lucide-react'

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Waves,
      title: 'Rare Swimming Pool Experience',
      description: 'One of the few properties in Kabarnet with a private swimming pool',
    },
    {
      icon: Laptop,
      title: 'Quiet Remote-Work Atmosphere',
      description: 'Peaceful environment perfect for productivity and focus',
    },
    {
      icon: Users,
      title: 'Family-Friendly Environment',
      description: 'Safe and welcoming space for families with children',
    },
    {
      icon: Lock,
      title: 'Secure Gated Compound',
      description: 'Your safety and peace of mind are our top priority',
    },
    {
      icon: Percent,
      title: 'Direct Booking Savings',
      description: 'Save up to 15% when you book directly with us',
    },
    {
      icon: Heart,
      title: 'Personalized Hospitality',
      description: 'Warm, attentive service tailored to your needs',
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="gradient-text">Kabon Gardens</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what sets us apart from the rest
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="glass-card p-8 h-full luxury-shadow hover:border-coral-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-coral-500/10 to-coral-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-7 h-7 text-coral-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-500 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct Booking Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 glass-card p-8 md:p-12 text-center luxury-shadow border-coral-500/30"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Percent className="w-8 h-8 text-coral-500" />
            <span className="text-3xl font-bold gradient-text">Save 15%</span>
          </div>
          <p className="text-xl text-gray-600 mb-6">
            Book directly through our website and save on platform fees
          </p>
        </motion.div>
      </div>
    </section>
  )
}
