import { Button } from "@/components/ui/button";
import Centerer from "@/modules/commons/centerer";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <Centerer>
        <section className="w-full min-h-screen flex flex-col lg:flex-row gap-y-10 py">
          <div className="flex-1 flex flex-col justify-center items-start gap-4 py-34 pr-8">
            <div>
              <p className="text-slate-400 text-lg font-semibold">
                Healthy smiles, happy lives.
              </p>
            </div>
            <div>
              <h1 className="text-slate-700 text-4xl font-bold">
                Bringing brighter <br /> smiles to your family
              </h1>
            </div>
            <div>
              <p className="text-slate-400 text-lg font-semibold">
                Experience personalized dental care designed to meet your unique
                needs. From preventive checkups to advanced oral health and
                confidence are always at their best.
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
          <div className="min-h-full flex-1  py-0 md:py-34 flex justify-center">
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
      </Centerer>
    </>
  );
};

export default Hero;
