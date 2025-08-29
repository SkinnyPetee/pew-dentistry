import CustomVideoPlayer from "@/modules/section-2/video-player";

const SectionVideo = () => {
  return (
    <>
      <section className="w-full min-h-screen  py-8">
        <div className="w-full px-6 px-6 lg:px-60 h-full">
          <CustomVideoPlayer />
        </div>
        <div className="flex gap-8 px-6 px-6 lg:px-60 my-16 justify-between flex-wrap lg:flex-nowrap">
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

export default SectionVideo;
