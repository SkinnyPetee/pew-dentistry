import Navbar from "@/modules/commons/navbar";
import Hero from "@/modules/section-1/hero";
import FeaturesSection from "@/modules/section-2/features";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
      </main>
    </>
  );
}
