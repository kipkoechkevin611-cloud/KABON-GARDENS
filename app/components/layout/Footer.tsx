import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/LOGO.jpeg"
                alt="Kabon Gardens Logo"
                width={50}
                height={50}
                className="rounded-xl"
              />
              <span className="text-2xl font-bold gradient-text">Kabon Gardens</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Experience premium comfort in Kabarnet with our exclusive swimming pool and modern amenities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-coral-500 transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/reel/DRO7iR7jpHh/?igsh=MWt5ODMxYml3cTR1Yw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-coral-500 transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-coral-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-coral-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-gray-400 hover:text-coral-500 transition-colors">
                  Rooms & Rates
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-coral-500 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-coral-500 transition-colors">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-coral-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-coral-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="text-coral-500 flex-shrink-0 mt-1" />
                <span>Kabarnet, Baringo County, Kenya</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} className="text-coral-500 flex-shrink-0" />
                <a href="tel:+254740272542" className="hover:text-coral-500 transition-colors">
                  +254 740 272 542
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} className="text-coral-500 flex-shrink-0" />
                <a href="mailto:info@kabongardens.com" className="hover:text-coral-500 transition-colors">
                  info@kabongardens.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Reception Hours</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-3">
                <Clock size={20} className="text-coral-500 flex-shrink-0" />
                <span>24/7 Available</span>
              </li>
              <li className="mt-4">
                <p className="text-sm">Check-in: 2:00 PM</p>
                <p className="text-sm">Check-out: 11:00 AM</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kabon Gardens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
