import Navbar from "@/modules/commons/navbar";
import Hero from "@/modules/section-1/hero";
import FeaturesSection from "@/modules/section-2/features";
import ServicesSection from "@/modules/section-3/services";
import SectionVideo from "@/modules/section-video";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <SectionVideo />
        <ServicesSection />
      </main>
    </>
  );
}
