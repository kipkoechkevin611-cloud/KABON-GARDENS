import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import AmenitiesSection from './components/sections/AmenitiesSection'
import WhyChooseUsSection from './components/sections/WhyChooseUsSection'
import EventsGroundSection from './components/sections/EventsGroundSection'
import PhotoGallerySection from './components/sections/PhotoGallerySection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AmenitiesSection />
      <PhotoGallerySection />
      <EventsGroundSection />
      <WhyChooseUsSection />
    </>
  )
}
