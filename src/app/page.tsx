import Navbar from '@/components/Navigation/Navbar'
import HeroSection from '@/components/Hero/HeroSection'
import ProblemSection from '@/components/Problem/ProblemSection'
import LeadGenerationSection from '@/components/LeadGeneration/LeadGenerationSection'
import ServicesSection from '@/components/Services/ServicesSection'
import WhyUsSection from '@/components/WhyUs/WhyUsSection'
import TestimonialsSection from '@/components/Testimonials/TestimonialsSection'
import FounderSection from '@/components/Founder/FounderSection'
import FAQSection from '@/components/FAQ/FAQSection'
import CTASection from '@/components/CTA/CTASection'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <LeadGenerationSection />
        <ServicesSection />
        <WhyUsSection />
        <FounderSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
