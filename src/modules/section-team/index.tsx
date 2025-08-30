const SectionTeam = () => {
  return (
    <>
      <section className="w-full min-h-screen  py-8" id="team">
        <div className="w-full h-max flex flex-col justify-center items-center  px-6 px-6 lg:px-60">
          <h3 className="text-[#d3b44e] font-semibold text-lg">Our Team</h3>
          <h1 className="text-slate-700 font-bold text-4xl text-center">
            Professionals committed <br /> to exceptional care
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row px-6  lg:px-60 py-16 justify-between">
          <div className="w-full lg:max-w-[30%] rounded-xl overflow-hidden flex flex-col ">
            <img
              className="w-full aspect-square object-cover"
              src="/images/team/img-1.avif"
              alt="team experts image"
            />
            <h1 className="text-slate-700 font-bold text-xl mt-[16px]">
              Sophia Hayes
            </h1>
            <p className="text-[#d3b44e] font-semibold text-md">
              Cosmetic Dentist
            </p>
          </div>
          <div className="w-full lg:max-w-[30%] rounded-xl overflow-hidden flex flex-col ">
            <img
              className="w-full aspect-square object-cover"
              src="/images/team/img-2.avif"
              alt="team experts image"
            />
            <h1 className="text-slate-700 font-bold text-xl mt-[16px]">
              Noah Bennett
            </h1>
            <p className="text-[#d3b44e] font-semibold text-md">Endodontist</p>
          </div>
          <div className="w-full lg:max-w-[30%] rounded-xl overflow-hidden flex flex-col ">
            <img
              className="w-full aspect-square object-cover"
              src="/images/team/img-3.avif"
              alt="team experts image"
            />
            <h1 className="text-slate-700 font-bold text-xl mt-[16px]">
              Liam Brooks
            </h1>
            <p className="text-[#d3b44e] font-semibold text-md">Periodontist</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTeam;
