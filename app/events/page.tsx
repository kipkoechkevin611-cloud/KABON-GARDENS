'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, Clock, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react'

export default function EventsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    specialRequests: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required'
    } else if (!/^(\+254|0)?[7]\d{8}$/.test(formData.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid Kenyan phone number'
    }

    if (!formData.eventType.trim()) {
      newErrors.eventType = 'Event type is required'
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Event date is required'
    }

    if (!formData.guestCount.trim()) {
      newErrors.guestCount = 'Guest count is required'
    } else if (parseInt(formData.guestCount) < 1) {
      newErrors.guestCount = 'Guest count must be at least 1'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Format the message for WhatsApp
    const message = encodeURIComponent(
      `🎉 *EVENT BOOKING REQUEST*\n\n` +
      `📛 *Name:* ${formData.fullName}\n` +
      `📱 *Phone:* ${formData.phoneNumber}\n` +
      `🎊 *Event Type:* ${formData.eventType}\n` +
      `📅 *Event Date:* ${formData.eventDate}\n` +
      `👥 *Expected Guests:* ${formData.guestCount}\n` +
      `${formData.specialRequests ? `📝 *Special Requests:* ${formData.specialRequests}` : ''}\n\n` +
      `Please confirm availability and provide pricing details.`
    )

    // Replace with actual WhatsApp number
    const whatsappNumber = '254740272542'
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`

    window.open(whatsappUrl, '_blank')
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const eventTypes = [
    'Wedding',
    'Birthday Party',
    'Corporate Event',
    'Family Gathering',
    'Conference',
    'Concert',
    'Other',
  ]

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="text-gray-900">Book</span> <span className="text-gray-900">Events Ground</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Host your special occasions at our beautiful events ground
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 luxury-shadow"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Event Booking Request
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-gray-700 mb-2 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-100 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-gray-700 mb-2 font-medium">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-100 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all`}
                  placeholder="+254 7XX XXX XXX"
                />
                {errors.phoneNumber && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              {/* Event Type */}
              <div>
                <label htmlFor="eventType" className="block text-gray-700 mb-2 font-medium">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-100 border ${errors.eventType ? 'border-red-500' : 'border-gray-300'} rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all`}
                >
                  <option value="">Select event type</option>
                  {eventTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.eventType && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.eventType}
                  </p>
                )}
              </div>

              {/* Event Date */}
              <div>
                <label htmlFor="eventDate" className="block text-gray-700 mb-2 font-medium">
                  Event Date *
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 bg-gray-100 border ${errors.eventDate ? 'border-red-500' : 'border-gray-300'} rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all`}
                />
                {errors.eventDate && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.eventDate}
                  </p>
                )}
              </div>

              {/* Guest Count */}
              <div>
                <label htmlFor="guestCount" className="block text-gray-700 mb-2 font-medium">
                  Expected Guests *
                </label>
                <input
                  type="number"
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  min="1"
                  max="500"
                  className={`w-full px-4 py-3 bg-gray-100 border ${errors.guestCount ? 'border-red-500' : 'border-gray-300'} rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all`}
                  placeholder="Number of guests (max 500)"
                />
                {errors.guestCount && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.guestCount}
                  </p>
                )}
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="specialRequests" className="block text-gray-700 mb-2 font-medium">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all resize-none"
                  placeholder="Any special requirements or requests..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MessageSquare size={20} />
                <span>{isSubmitting ? 'Processing...' : 'Book Now'}</span>
              </button>

              {/* Info Note */}
              <div className="flex items-start space-x-3 p-4 bg-gray-100/50 rounded-xl border border-gray-300">
                <CheckCircle2 className="w-5 h-5 text-coral-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  Your event booking request will be sent directly to our team via WhatsApp. We'll confirm availability and provide pricing details within 24 hours.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Event Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Events Ground <span className="text-gray-900">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for a successful event
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 text-center luxury-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-coral-500/10 to-coral-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-coral-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Large Capacity</h3>
              <p className="text-gray-500">Accommodate up to 500 guests with ample space for various event setups</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 text-center luxury-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-coral-500/10 to-coral-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-coral-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Flexible Booking</h3>
              <p className="text-gray-500">Available for weddings, parties, corporate events, and family gatherings</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8 text-center luxury-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-coral-500/10 to-coral-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-coral-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Full Day Access</h3>
              <p className="text-gray-500">Full-day access to the events ground for your complete event setup</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
