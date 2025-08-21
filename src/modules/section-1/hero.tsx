import { Button } from "@/components/ui/button";
import Centerer from "@/modules/commons/centerer";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <Centerer>
        <section className="w-full h-max min-h-[calc(100svh-80px)] flex flex-col lg:flex-row gap-y-10">
          <div className="flex-1  flex flex-col justify-center items-start gap-4 py-10 md:py-0">
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
              <Button size="lg" className="bg-blue-500 hover:bg-blue-500/80">
                Book Now
              </Button>
              <Button size="lg" variant="ghost">
                Contact us
              </Button>
            </div>
          </div>
          <div className="h-max flex-1  py-16">
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
