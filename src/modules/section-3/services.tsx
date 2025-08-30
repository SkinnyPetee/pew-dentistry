import { Star } from "lucide-react";

const ServicesSection = () => {
  return (
    <>
      <section className="w-full min-h-screen h-max py-8" id="services">
        <div className="w-full h-max flex flex-col justify-center items-center  px-6 lg:px-60">
          <h3 className="text-[#d3b44e] font-semibold text-lg">Services</h3>
          <h1 className="text-slate-700 font-bold text-4xl text-center">
            Personalized solutions for <br /> better oral health
          </h1>
        </div>

        <div className="flex flex-wrap justify-between px-6 px-6 lg:px-60 gap-6 py-10">
          <div className="flex-1 flex-col min-w-full md:min-w-[33.33%]">
            <img
              className="w-full aspect-video rounded-md object-cover"
              src="/images/services/services-img-1.webp"
              alt="dental care services image"
            />
            <div className="w-full  flex flex-col gap-3 my-4">
              <div className="flex gap-1">
                <Star fill="yellow" stroke="yellow" />
                <p className="font-bold text-slate-700 text-xl">4.5</p>
              </div>
              <h1 className="text-2xl font-semibold text-slate-700">
                Pediatric Dentistry
              </h1>
              <p className="text-slate-400 font-medium text-md max-w-[75%]">
                Gentle and specialized dental care for growing smiles with all.
              </p>
            </div>
          </div>
          <div className="flex-1 flex-col min-w-full md:min-w-[33.33%]">
            <img
              className="w-full aspect-video rounded-md object-cover"
              src="/images/services/services-img-2.avif"
              alt="dental care services image"
            />
            <div className="w-full  flex flex-col gap-3 my-4">
              <div className="flex gap-1">
                <Star fill="yellow" stroke="yellow" />
                <p className="font-bold text-slate-700 text-xl">4.7</p>
              </div>
              <h1 className="text-2xl font-semibold text-slate-700">
                Emergency Care
              </h1>
              <p className="text-slate-400 font-medium text-md max-w-[75%]">
                Quick and reliable dental care for unexpected emergencies.
              </p>
            </div>
          </div>
          <div className="flex-1 flex-col min-w-full md:min-w-[33.33%]">
            <img
              className="w-full aspect-video rounded-md object-cover"
              src="/images/services/services-img-3.webp"
              alt="dental care services image"
            />
            <div className="w-full flex flex-col gap-3 my-4">
              <div className="flex gap-1">
                <Star fill="yellow" stroke="yellow" />
                <p className="font-bold text-slate-700 text-xl">4.6</p>
              </div>
              <h1 className="text-2xl font-semibold text-slate-700">
                Orthodontic Solutions
              </h1>
              <p className="text-slate-400 font-medium text-md max-w-[75%]">
                Achieve a straighter, healthier smile with modern orthodontic
                treatments.
              </p>
            </div>
          </div>
          <div className="flex-1 flex-col min-w-full md:min-w-[33.33%]">
            <img
              className="w-full aspect-video rounded-md object-cover"
              src="/images/services/services-img-4.webp"
              alt="dental care services image"
            />
            <div className="w-full flex flex-col gap-3 my-4">
              <div className="flex gap-1">
                <Star fill="yellow" stroke="yellow" />
                <p className="font-bold text-slate-700 text-xl">4.9</p>
              </div>
              <h1 className="text-2xl font-semibold text-slate-700">
                Cosmetic Enhancements
              </h1>
              <p className="text-slate-400 font-medium text-md max-w-[75%]">
                Enhance your smile’s appearance with personalized cosmetic
                dental treatments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
