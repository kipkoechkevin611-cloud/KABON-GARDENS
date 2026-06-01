'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Navigation, MessageSquare, ArrowRight } from 'lucide-react'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kabarnet, Baringo County, Kenya',
      link: 'https://maps.google.com/?q=Kabarnet,Baringo+County,Kenya',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+254 740 272 542',
      link: 'tel:+254740272542',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@kabongardens.com',
      link: 'mailto:info@kabongardens.com',
    },
    {
      icon: Clock,
      title: 'Reception',
      value: '24/7 Available',
      link: null,
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
            Contact <span className="gradient-text">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Get in touch with us for bookings and inquiries
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link || '#'}
                target={info.link ? '_blank' : undefined}
                rel={info.link ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card p-6 luxury-shadow hover:border-coral-500/30 transition-all duration-300 group"
              >
                <info.icon className="w-8 h-8 text-coral-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-medium text-gray-500 mb-2">{info.title}</h3>
                <p className="text-gray-900 font-semibold">{info.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Map and Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 luxury-shadow overflow-hidden"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Us</h2>
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39890.123456789!2d35.95!3d0.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzAnMDAuMCJOIDM1wrA1JzAwLjAiRQ!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  title="Kabon Gardens Location Map"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl border-0"
                />
              </div>
              <a
                href="https://maps.google.com/?q=Kabarnet,Baringo+County,Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 btn-primary inline-flex items-center space-x-2"
              >
                <Navigation size={20} />
                <span>Get Directions</span>
              </a>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-card p-8 luxury-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>

                <a
                  href="/booking"
                  className="flex items-center justify-between p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors group mb-4"
                >
                  <div className="flex items-center space-x-4">
                    <MessageSquare className="w-6 h-6 text-coral-500" />
                    <span className="text-gray-900 font-medium">Book Now</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-coral-500 group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="tel:+254740272542"
                  className="flex items-center justify-between p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors group mb-4"
                >
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-coral-500" />
                    <span className="text-gray-900 font-medium">Call Us Now</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-coral-500 group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="mailto:info@kabongardens.com"
                  className="flex items-center justify-between p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors group"
                >
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-coral-500" />
                    <span className="text-gray-900 font-medium">Send Email</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-coral-500 group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              <div className="glass-card p-8 luxury-shadow border-coral-500/30">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time</h3>
                <p className="text-gray-600 mb-4">
                  We typically respond to inquiries within 24 hours. For urgent matters, please call us directly.
                </p>
                <div className="flex items-center space-x-2 text-coral-500">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">24/7 Support Available</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How to <span className="gradient-text">Find Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Easy access from major routes in Baringo County
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 luxury-shadow text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-coral-500/10 to-coral-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold gradient-text">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">From Nakuru</h3>
              <p className="text-gray-500">
                Take the Nakuru-Kabarnet road (approximately 2 hours drive). Follow signs to Kabarnet town center.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 luxury-shadow text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-coral-500/10 to-coral-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold gradient-text">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">From Eldoret</h3>
              <p className="text-gray-500">
                Drive via Iten-Kabarnet road (approximately 1.5 hours). The property is easily accessible with clear signage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 luxury-shadow text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-coral-500/10 to-coral-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold gradient-text">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Landmarks</h3>
              <p className="text-gray-500">
                Located near Kabarnet town center, close to government offices and major hotels in the area.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
