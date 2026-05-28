import Navbar from '@/components/Navigation/Navbar'
import HeroSection from '@/components/Hero/HeroSection'
import LogoStrip from '@/components/ui/LogoStrip'
import FeaturesSection from '@/components/Features/FeaturesSection'
import ProductSection from '@/components/Product/ProductSection'
import ProcessSection from '@/components/Process/ProcessSection'
import StatsSection from '@/components/Stats/StatsSection'
import TestimonialsSection from '@/components/Testimonials/TestimonialsSection'
import FounderSection from '@/components/Founder/FounderSection'
import CTASection from '@/components/CTA/CTASection'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoStrip />
        <FeaturesSection />
        <ProductSection />
        <ProcessSection />
        <StatsSection />
        <TestimonialsSection />
        <FounderSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
