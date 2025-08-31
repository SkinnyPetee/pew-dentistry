const SectionTeam = () => {
  return (
    <>
      <section className="w-full min-h-screen  py-8 px-6 lg:px-30" id="team">
        <div className="w-full h-max flex flex-col justify-center items-center  px-6 lg:px-60">
          <h3 className="text-[#d3b44e] font-semibold text-lg">Our Team</h3>
          <h1 className="text-slate-700 font-bold text-4xl text-center">
            Professionals committed <br /> to exceptional care
          </h1>
        </div>
        <div className="flex flex-wrap gap-y-16 flex-col lg:flex-row py-16 justify-between">
          <div className="w-full lg:max-w-[30%] rounded-xl overflow-hidden flex flex-col ">
            <img
              className="w-full aspect-square object-cover"
              src="/images/team/img-1.jpeg"
              alt="team experts image"
            />
            <h1 className="text-slate-700 font-bold text-xl mt-[16px]">
              Dr.Priti Pramod
            </h1>
            <p className="text-[#d3b44e] font-semibold text-md">
              Principal Dentist
            </p>
          </div>
          <div className="w-full lg:max-w-[30%] rounded-xl overflow-hidden flex flex-col ">
            <img
              className="w-full aspect-square object-cover"
              src="/images/team/img-2.jpg"
              alt="team experts image"
            />
            <h1 className="text-slate-700 font-bold text-xl mt-[16px]">
              M Monsef
            </h1>
            <p className="text-[#d3b44e] font-semibold text-md">Dentist</p>
          </div>
          <div className="w-full lg:max-w-[30%] rounded-xl overflow-hidden flex flex-col ">
            <img
              className="w-full aspect-square object-cover"
              src="/images/team/img-3.jpg"
              alt="team experts image"
            />
            <h1 className="text-slate-700 font-bold text-xl mt-[16px]">
              Liam Brooks
            </h1>
            <p className="text-[#d3b44e] font-semibold text-md">
              Practice Manager
            </p>
          </div>
          <div className="w-full lg:max-w-[30%] rounded-xl overflow-hidden flex flex-col ">
            <img
              className="w-full aspect-square object-cover"
              src="/images/team/img-4.jpg"
              alt="team experts image"
            />
            <h1 className="text-slate-700 font-bold text-xl mt-[16px]">
              Amrita Gurung
            </h1>
            <p className="text-[#d3b44e] font-semibold text-md">Dental Nurse</p>
          </div>
          <div className="w-full lg:max-w-[30%] rounded-xl overflow-hidden flex flex-col ">
            <img
              className="w-full aspect-square object-cover"
              src="/images/team/img-5.jpg"
              alt="team experts image"
            />
            <h1 className="text-slate-700 font-bold text-xl mt-[16px]">
              E Davey
            </h1>
            <p className="text-[#d3b44e] font-semibold text-md">Dental Nurse</p>
          </div>
          <div className="w-full lg:max-w-[30%] rounded-xl overflow-hidden flex flex-col ">
            <img
              className="w-full aspect-square object-cover"
              src="/images/team/img-6.jpg"
              alt="team experts image"
            />
            <h1 className="text-slate-700 font-bold text-xl mt-[16px]">
              Halina Gentilcore
            </h1>
            <p className="text-[#d3b44e] font-semibold text-md">
              Hygienist & Therapist
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTeam;
