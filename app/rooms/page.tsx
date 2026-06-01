'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Bed, Users, Wifi, Car, UtensilsCrossed, CheckCircle2, Star, ArrowRight } from 'lucide-react'

export default function RoomsPage() {
  const rooms = [
    {
      name: 'Studio Apartment',
      price: 'KES 2,000',
      period: '/night',
      features: [
        { icon: Bed, text: '1 Bedroom' },
        { icon: Users, text: 'Max 2 Guests' },
        { icon: UtensilsCrossed, text: 'Kitchenette' },
        { icon: Wifi, text: 'High-Speed Wi-Fi' },
        { icon: Car, text: 'Secure Parking' },
      ],
      popular: false,
    },
    {
      name: 'Two Bedroom Apartment',
      price: 'KES 4,000',
      period: '/night',
      features: [
        { icon: Bed, text: '2 Bedrooms' },
        { icon: Users, text: 'Max 4 Guests' },
        { icon: UtensilsCrossed, text: 'Fully Equipped Kitchen' },
        { icon: Wifi, text: 'High-Speed Wi-Fi' },
        { icon: Car, text: 'Secure Parking' },
      ],
      popular: true,
    },
  ]

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Rooms & <span className="gradient-text">Rates</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Choose your perfect stay at Kabon Gardens
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`glass-card p-8 luxury-shadow ${room.popular ? 'border-coral-500/50 relative overflow-hidden' : 'hover:border-coral-500/30'} transition-all duration-300`}
              >
                {room.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-coral-500 to-coral-600 text-white text-sm font-semibold px-4 py-2 rounded-bl-xl">
                    Best Value
                  </div>
                )}
                {room.popular && (
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-5 h-5 text-coral-500 fill-coral-500" />
                    <span className="text-coral-500 font-semibold">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold gradient-text">{room.price}</span>
                  <span className="text-gray-500">{room.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-600">
                      <feature.icon size={18} className="text-coral-500 flex-shrink-0" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/booking" className={room.popular ? 'btn-primary block text-center' : 'btn-secondary block text-center'}>
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Direct Booking Savings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 glass-card p-8 md:p-12 text-center luxury-shadow border-coral-500/30"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <CheckCircle2 className="w-8 h-8 text-coral-500" />
              <span className="text-3xl font-bold gradient-text">Best Rates Guaranteed</span>
            </div>
            <p className="text-xl text-gray-600 mb-6">
              Book directly through our website for the best prices
            </p>
            <Link href="/booking" className="btn-primary inline-flex items-center space-x-2">
              <span>Book Direct</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Room Details */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your <span className="gradient-text">Luxury Suite</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for a comfortable stay
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 luxury-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Studio Apartment</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 1 Bedroom with comfortable bed</li>
                <li>• Kitchenette with basic appliances</li>
                <li>• Premium bedding and linens</li>
                <li>• Wardrobe and storage space</li>
                <li>• Air conditioning</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 luxury-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Two Bedroom Apartment</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Master bedroom with queen-size bed</li>
                <li>• Second bedroom with twin beds</li>
                <li>• Fully equipped kitchen</li>
                <li>• Spacious living area</li>
                <li>• Dining area for 4 guests</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
