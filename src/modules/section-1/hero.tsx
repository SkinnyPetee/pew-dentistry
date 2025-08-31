import { Button } from "@/components/ui/button";
import Centerer from "@/modules/commons/centerer";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        className="w-full min-h-screen flex flex-col-reverse lg:flex-row   px-6 lg:px-30"
        id="hero"
      >
        <div className="flex-1 flex flex-col justify-center items-start gap-4 mb-12  pr-8">
          <div>
            <p className="text-slate-400 text-lg font-semibold">
              <span className="text-[#d3b44e]">Healthy</span> smiles,{" "}
              <span className="text-[#d3b44e]">happy</span> lives.
            </p>
          </div>
          <div>
            <h1 className="text-slate-700 text-4xl font-bold">
              Bringing brighter <br /> smiles to your family
            </h1>
          </div>
          <div>
            <p className="text-slate-400 text-lg font-semibold">
              We pride ourselves in offering the best dental care possible,
              whether you are looking for a dentist to look after your teeth, or
              more complex treatment. Are you nervous or do you suffer from a
              dental phobia? Then this is your practice. Our ethos is Quality
              Care for all, Private and Denplan. Teeth whitening and emergency
              extractions are just a few of the services we offer. If you are
              uncomfortable or nervous when it comes to the dentist, then we are
              the practice for you.
            </p>
          </div>
          <div className="flex gap-3">
            {/* <Button size="lg" className="bg-teal-500 hover:bg-teal-500/80">
                Book Now
              </Button> */}
            <Button
              size="lg"
              variant="ghost"
              className="bg-teal-500 hover:bg-teal-500/80 text-white"
              asChild
            >
              <a href="#contact">Contact us</a>
            </Button>
          </div>
        </div>
        <div className="min-h-full flex-1  pt-34 mb-16   flex justify-center">
          <div className="relative rounded-2xl overflow-hidden w-full aspect-square">
            <Image
              src="/images/image-1.avif"
              alt="dentist image"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
