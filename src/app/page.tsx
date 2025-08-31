import Navbar from "@/modules/commons/navbar";
import Hero from "@/modules/section-1/hero";
import FeaturesSection from "@/modules/section-2/features";
import ServicesSection from "@/modules/section-3/services";
import SectionVideo from "@/modules/section-video";
import HowItWorksSection from "@/modules/section-4/how-it-works";
import TestimonialSection from "@/modules/section-5/testimonial";
import Contact from "@/modules/section-6/contact";
import Footer from "@/modules/footer";
import SectionTeam from "@/modules/section-team";
import { PricingSection } from "@/modules/section-pricing";
import ComplaintsSection from "@/modules/section-complaints";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <SectionVideo />
        <ServicesSection />
        <SectionTeam />
        <HowItWorksSection />
        <TestimonialSection />
        <PricingSection />
        <Contact />
        <ComplaintsSection />
      </main>
      <Footer />
    </>
  );
}
