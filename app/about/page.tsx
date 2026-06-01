'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Star, Shield, Wifi, Car, Coffee, Utensils, Droplets, Sun } from 'lucide-react'

export default function AboutPage() {
  const amenities = [
    { icon: Wifi, name: 'Free WiFi', desc: 'High-speed internet throughout the property' },
    { icon: Car, name: 'Free Parking', desc: 'Secure parking for all guests' },
    { icon: Shield, name: '24/7 Security', desc: 'Round-the-clock security personnel' },
    { icon: Droplets, name: 'Swimming Pool', desc: 'Exclusive private swimming pool' },
    { icon: Coffee, name: 'Kitchen', desc: 'Fully equipped modern kitchen' },
    { icon: Utensils, name: 'Dining Area', desc: 'Spacious dining for family meals' },
    { icon: Sun, name: 'Garden', desc: 'Beautiful landscaped gardens' },
    { icon: Star, name: 'Premium Service', desc: 'Dedicated hospitality team' },
  ]

  const features = [
    {
      title: 'Spacious 2-Bedroom Apartments',
      desc: 'Our serviced apartments feature two comfortable bedrooms, perfect for families, groups, or extended stays.',
    },
    {
      title: 'Exclusive Swimming Pool',
      desc: 'Enjoy private access to our sparkling swimming pool, perfect for relaxation and leisure.',
    },
    {
      title: 'Events Ground',
      desc: 'Host weddings, parties, corporate events, and family gatherings in our spacious events ground.',
    },
    {
      title: 'Modern Amenities',
      desc: 'Experience comfort with modern appliances, high-speed WiFi, and premium furnishings.',
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            About <span className="gradient-text">Kabon Gardens</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            The best serviced apartments in Kabarnet with luxury rooms, swimming pool,
            and great hospitality in Baringo County.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kabon Gardens was established with a vision to provide premium accommodation experiences
                in Kabarnet. We understand that travelers seek more than just a place to stay – they
                want comfort, convenience, and a home away from home.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our serviced apartments are designed to offer the perfect blend of luxury and functionality.
                Whether you're visiting for business, leisure, or a special occasion, our property provides
                the ideal setting for your stay.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With our exclusive swimming pool, spacious events ground, and modern amenities, Kabon Gardens
                is the perfect choice for families, groups, and event hosts looking for exceptional hospitality
                in Baringo County.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">2</div>
                <div className="text-gray-500">Bedrooms</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">4</div>
                <div className="text-gray-500">Max Guests</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-500">Event Capacity</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-500">Support</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium amenities designed for your comfort and convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 luxury-shadow hover:border-coral-500/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Amenities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for a comfortable stay
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center luxury-shadow hover:border-coral-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-coral-500/10 to-coral-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-8 h-8 text-coral-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{amenity.name}</h3>
                <p className="text-gray-500 text-sm">{amenity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Location</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conveniently located in Kabarnet, Baringo County
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 luxury-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-coral-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-900 font-medium">Address</p>
                      <p className="text-gray-500">Kabarnet, Baringo County, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-coral-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-900 font-medium">Phone</p>
                      <a href="tel:+254740272542" className="text-coral-500 hover:text-coral-600 transition-colors">
                        +254 740 272 542
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-coral-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-900 font-medium">Email</p>
                      <a href="mailto:info@kabongardens.com" className="text-coral-500 hover:text-coral-600 transition-colors">
                        info@kabongardens.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-coral-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-900 font-medium">Reception</p>
                      <p className="text-gray-500">24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 luxury-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Check-in & Check-out</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl">
                  <div>
                    <p className="text-gray-500 text-sm">Check-in Time</p>
                    <p className="text-gray-900 font-bold text-xl">2:00 PM</p>
                  </div>
                  <Sun className="w-8 h-8 text-coral-500" />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl">
                  <div>
                    <p className="text-gray-500 text-sm">Check-out Time</p>
                    <p className="text-gray-900 font-bold text-xl">11:00 AM</p>
                  </div>
                  <Clock className="w-8 h-8 text-coral-500" />
                </div>
                <p className="text-gray-500 text-sm">
                  Early check-in and late check-out may be available upon request.
                  Please contact us in advance to arrange.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
