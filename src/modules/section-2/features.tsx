import { Activity, Cpu, Heart, School, ShieldPlus } from "lucide-react";

const FeaturesSection = () => {
  return (
    <>
      <section className="w-full min-h-screen  py-8" id="about">
        <div className="w-full h-max flex flex-col justify-center items-center  px-6 lg:px-60">
          <h3 className="text-[#d3b44e] font-semibold text-lg">Introduction</h3>
          <h1 className="text-slate-700 font-bold text-4xl text-center">
            A commitment to healthier, <br /> brighter smiles
          </h1>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row  px-6 px-6 lg:px-60 py-16 gap-2 gap-y-16 justify-between">
          <div className="w-full md:max-w-[45%] lg:max-w-[30%] flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex justify-center items-center">
              <Activity className="text-teal-500" />
            </div>
            <div className="w-full gap-2 flex flex-col">
              <h1 className="text-2xl font-semibold text-slate-700">
                Personalized care
              </h1>
              <p className="text-slate-400 font-medium text-md">
                Every smile is unique, and our treatments are tailored to meet
                your specific needs. From preventive carefully
              </p>
            </div>
          </div>
          <div className="w-full md:max-w-[45%] lg:max-w-[30%] flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex justify-center items-center">
              <Activity className="text-teal-500" />
            </div>
            <div className="w-full gap-2 flex flex-col">
              <h1 className="text-2xl font-semibold text-slate-700">
                World class treatments
              </h1>
              <p className="text-slate-400 font-medium text-md">
                Every service is tailored to meet your unique dental needs,
                ensuring the best possible noted outcomes.
              </p>
            </div>
          </div>
          <div className="w-full md:max-w-[45%] lg:max-w-[30%] flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex justify-center items-center">
              <Cpu className="text-teal-500" />
            </div>
            <div className="w-full gap-2 flex flex-col">
              <h1 className="text-2xl font-semibold text-slate-700">
                Advanced technology
              </h1>
              <p className="text-slate-400 font-medium text-md">
                We use state-of-the-art tools and techniques to deliver precise,
                efficient, and effective treatments.
              </p>
            </div>
          </div>
          <div className="w-full md:max-w-[45%] lg:max-w-[30%] flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex justify-center items-center">
              <School className="text-teal-500" />
            </div>
            <div className="w-full gap-2 flex flex-col">
              <h1 className="text-2xl font-semibold text-slate-700">
                Family-friendly services
              </h1>
              <p className="text-slate-400 font-medium text-md">
                We provide comprehensive care for patients of all ages, making
                us the perfect choice for your family.
              </p>
            </div>
          </div>
          <div className="w-full md:max-w-[45%] lg:max-w-[30%] flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex justify-center items-center">
              <ShieldPlus className="text-teal-500" />
            </div>
            <div className="w-full gap-2 flex flex-col">
              <h1 className="text-2xl font-semibold text-slate-700">
                Emergency care
              </h1>
              <p className="text-slate-400 font-medium text-md">
                Immediate assistance for dental emergencies, ensuring your
                comfort and quick resolution of urgent issues.
              </p>
            </div>
          </div>
          <div className="w-full md:max-w-[45%] lg:max-w-[30%] flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex justify-center items-center">
              <Heart className="text-teal-500" />
            </div>
            <div className="w-full gap-2 flex flex-col">
              <h1 className="text-2xl font-semibold text-slate-700">
                Team that cares
              </h1>
              <p className="text-slate-400 font-medium text-md">
                Our dedicated team combines expertise with compassion, ensuring
                you feel supported at every step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
