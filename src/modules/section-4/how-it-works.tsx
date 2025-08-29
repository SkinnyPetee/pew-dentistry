import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  return (
    <>
      <section className="w-full min-h-screen  py-8">
        <div className="w-full h-max flex flex-col justify-center items-center  px-6 px-6 lg:px-60">
          <h3 className="text-slate-400 font-semibold text-lg">How it works</h3>
          <h1 className="text-slate-700 font-bold text-4xl text-center">
            The process of achieving <br /> dental excellence
          </h1>
        </div>
        <div className="px-6 px-6 lg:px-60 w-full h-max py-16 gap-16 flex flex-col md:flex-row">
          <img
            src="/images/how-it-works/how-it-works-img-1.avif"
            alt="how it works image 1"
            className="w-full md:max-w-[50%] aspect-video max-h-[300px] rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-3 justify-center">
            <div className="flex gap-6 items-center">
              <div className="w-[45px] h-[45px] flex justify-center items-center bg-blue-500 rounded-full text-lg text-white font-bold">
                01
              </div>
              <h2 className="text-shadow-slate-700 font-semibold text-3xl">
                Schedule your visit
              </h2>
            </div>
            <p className="font-semibold text-slate-400 text-xl">
              Book an appointment at your convenience through our easy
              scheduling system, and we’ll ensure a hassle-free experience from
              the start.
            </p>
            <Button
              size="lg"
              className="font-bold max-w-max bg-blue-500 hover:bg-blue-500/80 text-white"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
        <div className="px-6 px-6 lg:px-60 w-full h-max py-16 flex gap-16 flex-col md:flex-row">
          <div className="flex flex-col gap-3 justify-center">
            <div className="flex gap-6 items-center">
              <div className="w-[45px] h-[45px] flex justify-center items-center bg-blue-500 rounded-full text-lg text-white font-bold">
                02
              </div>
              <h2 className="text-shadow-slate-700 font-semibold text-3xl">
                Personalized consultation
              </h2>
            </div>
            <p className="font-semibold text-slate-400 text-xl">
              Meet with our expert dental team to discuss your needs, goals, and
              tailored treatment options designed just for you.
            </p>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-500/80 text-white font-bold max-w-max"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
          <img
            src="/images/how-it-works/how-it-works-img-2.webp"
            alt="how it works image 1"
            className="w-full md:max-w-[50%] aspect-video max-h-[300px] rounded-2xl object-cover"
          />
        </div>
        <div className="px-6 px-6 lg:px-60 w-full h-max py-16 flex gap-16 flex-col md:flex-row">
          <img
            src="/images/how-it-works/how-it-works-img-3.avif"
            alt="how it works image 1"
            className="w-full md:max-w-[50%] aspect-video max-h-[300px] rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-3 justify-center">
            <div className="flex gap-6 items-center">
              <div className="w-[45px] h-[45px] flex justify-center items-center bg-blue-500 rounded-full text-lg text-white font-bold">
                03
              </div>
              <h2 className="text-shadow-slate-700 font-semibold text-3xl">
                Begin your journey
              </h2>
            </div>
            <p className="font-semibold text-slate-400 text-xl">
              Medical knowledge and practices continually evolve perfectly match
              your goals of treatment complications with early intervention.
            </p>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-500/80 text-white font-bold max-w-max"
              asChild
            >
              <a href="#contact"> Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksSection;
