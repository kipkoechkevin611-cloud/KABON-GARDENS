'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: '/images/WhatsApp Image 2026-05-20 at 7.23.48 PM.jpeg',
      alt: 'Property View 1',
      category: 'Property',
      size: 'large',
    },
    {
      src: '/images/WhatsApp Image 2026-05-20 at 7.23.49 PM.jpeg',
      alt: 'Property View 2',
      category: 'Property',
      size: 'medium',
    },
    {
      src: '/images/WhatsApp Image 2026-05-20 at 7.23.50 PM.jpeg',
      alt: 'Property View 3',
      category: 'Property',
      size: 'large',
    },
    {
      src: '/images/WhatsApp Image 2026-05-20 at 7.23.50 PM.jpegfc.jpeg',
      alt: 'Property View 4',
      category: 'Property',
      size: 'medium',
    },
    {
      src: '/images/WhatsApp Image 2026-05-20 at 7.23.50 PM.jpeghvh.jpeg',
      alt: 'Property View 5',
      category: 'Property',
      size: 'medium',
    },
    {
      src: '/images/gtvgfyhb.jpeg',
      alt: 'Property View 6',
      category: 'Property',
      size: 'large',
    },
    {
      src: '/images/rrcc.jpeg',
      alt: 'Property View 7',
      category: 'Property',
      size: 'medium',
    },
    {
      src: '/images/uify.jpeg',
      alt: 'Property View 8',
      category: 'Property',
      size: 'large',
    },
    {
      src: '/images/WhatsApp Image 2026-06-01 at 6.37.23 PM.jpeg',
      alt: 'Property View 9',
      category: 'Property',
      size: 'large',
    },
    {
      src: '/images/WhatsApp Image 2026-06-01 at 6.38.06 PM.jpeg',
      alt: 'Property View 10',
      category: 'Property',
      size: 'medium',
    },
    {
      src: '/images/WhatsApp Image 2026-06-01 at 6.38.07 PGM.jpeg',
      alt: 'Property View 11',
      category: 'Property',
      size: 'medium',
    },
    {
      src: '/images/WhatsApp Image 2026-06-01 at 6.38.07 PM.jpeg',
      alt: 'Property View 12',
      category: 'Property',
      size: 'large',
    },
    {
      src: '/images/WhatsApp Image 2026-06-01 at 6.38.07 PN M.jpeg',
      alt: 'Property View 13',
      category: 'Property',
      size: 'medium',
    },
    {
      src: '/images/WhatsApp Image 2026-06-01 at 6.38.08 PMH.jpeg',
      alt: 'Property View 14',
      category: 'Property',
      size: 'large',
    },
    {
      src: '/images/WhatsApp Image 2026-06-01 at 6.38.113 PM.jpeg',
      alt: 'Property View 15',
      category: 'Property',
      size: 'medium',
    },
    {
      src: '/images/WhatsApp Image 2026-06-01 at 6.38.13 PM.jpeg',
      alt: 'Property View 16',
      category: 'Property',
      size: 'large',
    },
    {
      src: '/images/WhatsApp Image 2026-06-01 at 6.38.14 PM.jpeg',
      alt: 'Property View 17',
      category: 'Property',
      size: 'medium',
    },
    {
      src: '/images/WhatsApp Image 2026-06-01 at 6.38.154 PM.jpeg',
      alt: 'Property View 18',
      category: 'Property',
      size: 'large',
    },
    {
      src: '/images/WhatsApp Image 2026-06-01 at 6.38.171 PM.jpeg',
      alt: 'Property View 19',
      category: 'Property',
      size: 'medium',
    },
    {
      src: '/images/WhatsApp Image 2026-06-01 at 6.38.414 PM.jpeg',
      alt: 'Property View 20',
      category: 'Property',
      size: 'large',
    },
  ]

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2'
      case 'medium':
        return 'md:col-span-1 md:row-span-1'
      default:
        return 'md:col-span-1 md:row-span-1'
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
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Photo <span className="gradient-text">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Explore the beauty and comfort of Kabon Gardens
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${getSizeClass(image.size)}`}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
                    <p className="text-coral-500 text-sm">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery image"
              width={1920}
              height={1080}
              className="rounded-2xl object-contain max-h-[90vh]"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Gallery Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Experience <span className="gradient-text">Luxury</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our gallery showcases the attention to detail and premium quality that defines Kabon Gardens.
                From our sparkling swimming pool to our elegantly furnished bedrooms, every space is designed
                for your comfort and relaxation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're lounging by the pool, working in our dedicated workspace, or enjoying a family
                meal in the dining area, you'll find that every corner of Kabon Gardens reflects our commitment
                to excellence.
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
                <div className="text-3xl font-bold gradient-text mb-2">1</div>
                <div className="text-gray-500">Swimming Pool</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-500">Security</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
