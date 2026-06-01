'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PhotoGallerySection() {
  const photos = [
    {
      src: '/images/WhatsApp Image 2026-06-01 at 6.38.06 PM.jpeg',
      alt: 'Kabon Gardens Property View'
    },
    {
      src: '/images/WhatsApp Image 2026-06-01 at 6.38.07 PM.jpeg',
      alt: 'Luxury Apartment Interior'
    },
    {
      src: '/images/WhatsApp Image 2026-06-01 at 6.38.13 PM.jpeg',
      alt: 'Swimming Pool Area'
    },
    {
      src: '/images/WhatsApp Image 2026-06-01 at 6.38.14 PM.jpeg',
      alt: 'Events Ground'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Photo <span className="text-gray-900">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of our beautiful property
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/gallery"
            className="btn-primary inline-flex items-center justify-center space-x-2"
          >
            <span className="text-gray-900 font-semibold">View Full Gallery</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
