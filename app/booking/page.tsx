'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, Phone, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    roomType: '',
    numberOfRooms: 1,
    checkIn: '',
    checkOut: '',
    guests: 1,
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

    if (!formData.roomType) {
      newErrors.roomType = 'Room type is required'
    }

    if (!formData.numberOfRooms || formData.numberOfRooms < 1) {
      newErrors.numberOfRooms = 'Number of rooms is required'
    }

    if (!formData.checkIn) {
      newErrors.checkIn = 'Check-in date is required'
    }

    if (!formData.checkOut) {
      newErrors.checkOut = 'Check-out date is required'
    }

    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn)
      const checkOutDate = new Date(formData.checkOut)
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      if (checkInDate < today) {
        newErrors.checkIn = 'Check-in date cannot be in the past'
      }

      if (checkOutDate <= checkInDate) {
        newErrors.checkOut = 'Check-out date must be after check-in date'
      }

      const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))
      if (nights < 1) {
        newErrors.checkOut = 'Minimum 1-night stay required'
      }
    }

    if (formData.guests < 1 || formData.guests > 4) {
      newErrors.guests = 'Number of guests must be between 1 and 4'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    const checkInDate = new Date(formData.checkIn)
    const checkOutDate = new Date(formData.checkOut)
    const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))

    const message = encodeURIComponent(
      `🏨 *New Booking Request - Kabon Gardens*\n\n` +
      `👤 *Name:* ${formData.fullName}\n` +
      `📱 *Phone:* ${formData.phoneNumber}\n` +
      `🏠 *Room Type:* ${formData.roomType}\n` +
      `🚪 *Number of Rooms:* ${formData.numberOfRooms}\n` +
      `📅 *Check-in:* ${checkInDate.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}\n` +
      `📅 *Check-out:* ${checkOutDate.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}\n` +
      `🌙 *Nights:* ${nights}\n` +
      `👥 *Guests:* ${formData.guests}\n` +
      `${formData.specialRequests ? `📝 *Special Requests:* ${formData.specialRequests}` : ''}\n\n` +
      `Please confirm availability and total cost.`
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
            <span className="text-gray-900">Book Your</span> <span className="text-gray-900">Stay</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Reserve your luxury apartment in Kabarnet
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8 md:p-12 luxury-shadow">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coral-500 transition-all ${errors.fullName ? 'border-red-500' : 'border-gray-200'
                      }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Room Type */}
                <div>
                  <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">
                    Room Type *
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-coral-500 transition-all appearance-none cursor-pointer ${errors.roomType ? 'border-red-500' : 'border-gray-200'
                      }`}
                  >
                    <option value="">Select room type</option>
                    <option value="Studio Apartment">Studio Apartment - KES 2,000/night</option>
                    <option value="Two Bedroom Apartment">Two Bedroom Apartment - KES 4,000/night</option>
                  </select>
                  {errors.roomType && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.roomType}
                    </p>
                  )}
                </div>

                {/* Number of Rooms */}
                <div>
                  <label htmlFor="numberOfRooms" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Rooms *
                  </label>
                  <select
                    id="numberOfRooms"
                    name="numberOfRooms"
                    value={formData.numberOfRooms}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-coral-500 transition-all appearance-none cursor-pointer ${errors.numberOfRooms ? 'border-red-500' : 'border-gray-200'
                      }`}
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                  {errors.numberOfRooms && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.numberOfRooms}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 bg-white border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coral-500 transition-all ${errors.phoneNumber ? 'border-red-500' : 'border-gray-200'
                        }`}
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* Dates Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
                      Check-in Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full pl-12 pr-4 py-3 bg-white border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coral-500 transition-all ${errors.checkIn ? 'border-red-500' : 'border-gray-200'
                          }`}
                      />
                    </div>
                    {errors.checkIn && (
                      <p className="mt-2 text-sm text-red-400 flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.checkIn}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">
                      Check-out Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        min={formData.checkIn || new Date().toISOString().split('T')[0]}
                        className={`w-full pl-12 pr-4 py-3 bg-white border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coral-500 transition-all ${errors.checkOut ? 'border-red-500' : 'border-gray-200'
                          }`}
                      />
                    </div>
                    {errors.checkOut && (
                      <p className="mt-2 text-sm text-red-400 flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.checkOut}
                      </p>
                    )}
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests *
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 bg-white border rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-coral-500 transition-all appearance-none cursor-pointer ${errors.guests ? 'border-red-500' : 'border-gray-200'
                        }`}
                    >
                      {[1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                  {errors.guests && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.guests}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">Maximum 4 guests allowed</p>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coral-500 transition-all resize-none"
                    placeholder="Any special requests or additional information..."
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
                    Your booking request will be sent directly to our team via WhatsApp. We'll confirm availability and provide payment details within 24 hours.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center"
            >
              <Calendar className="w-12 h-12 text-coral-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Dates</h3>
              <p className="text-gray-500">Choose your preferred check-in and check-out dates</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 text-center"
            >
              <MessageSquare className="w-12 h-12 text-coral-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Response</h3>
              <p className="text-gray-500">Get quick confirmation via WhatsApp</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 text-center"
            >
              <CheckCircle2 className="w-12 h-12 text-coral-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Booking</h3>
              <p className="text-gray-500">Your information is safe and secure</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
