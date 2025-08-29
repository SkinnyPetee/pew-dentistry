import { Activity, Cpu, Heart } from "lucide-react";
import CustomVideoPlayer from "./video-player";

const FeaturesSection = () => {
  return (
    <>
      <section className="w-full min-h-screen h-max py-8">
        <div className="w-full h-max flex flex-col justify-center items-center  px-6 md:px-30 lg:px-60">
          <h3 className="text-slate-400 font-semibold text-lg">Introduction</h3>
          <h1 className="text-slate-700 font-bold text-4xl text-center">
            A commitment to healthier, <br /> brighter smiles
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 px-6 md:px-30 lg:px-60 py-16">
          <div className="flex-1 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex justify-center items-center">
              <Activity className="text-blue-500" />
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
          <div className="flex-1 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex justify-center items-center">
              <Cpu className="text-blue-500" />
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
          <div className="flex-1 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex justify-center items-center">
              <Heart className="text-blue-500" />
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
        <div className="w-full px-6 md:px-30 lg:px-60 h-full">
          <CustomVideoPlayer />
        </div>
        <div className="flex gap-8 px-6 md:px-30 lg:px-60 my-16 justify-between flex-wrap lg:flex-nowrap">
          <div className="flex flex-col gap-2">
            <p className="text-5xl font-bold text-slate-700">150+</p>
            <h3 className="text-xl font-semibold text-slate-400">
              Smiles Transformed
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-5xl font-bold text-slate-700">+10</p>
            <h3 className="text-xl font-semibold text-slate-400">
              Years of Experience
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-5xl font-bold text-slate-700">500+</p>
            <h3 className="text-xl font-semibold text-slate-400">
              Happy Customers
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-5xl font-bold text-slate-700">98%</p>
            <h3 className="text-xl font-semibold text-slate-400">
              Patient Satisfaction
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
