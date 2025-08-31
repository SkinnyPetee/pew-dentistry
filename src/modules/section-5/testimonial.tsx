import Centerer from "../commons/centerer";

const TestimonialSection = () => {
  return (
    <>
      <Centerer>
        <section className="w-full min-h-screen  py-8" id="testimonial">
          <div className="w-full h-max flex flex-col justify-center items-center">
            <h3 className="text-[#d3b44e] font-semibold text-lg">
              Testimonial
            </h3>
            <h1 className="text-slate-700 font-bold text-4xl text-center">
              What our customers say about <br /> Us & Service!!
            </h1>
          </div>
          {/* <div className="w-full flex justify-between py-16 gap-4 flex-wrap">
            <div className="h-[600px]  bg-teal-500/10 text-white w-full md:max-w-[45%] border-muted-foreground/10 border-[1px] overflow-hidden rounded-xl">
              <img
                src="/images/testimonial/testimonial-img-1.avif"
                alt="testimonial image"
                className="max-h-[250px] w-full object-cover"
              />
              <p className="text-slate-400 font-semibold text-xl p-12">
                Outstanding service and clear communication. Their solutions
                delivered results expectations.
              </p>
              <p className="text-slate-700 font-bold text-xl p-12">
                ~Daniel Smith
              </p>
            </div>
            <div className="h-[600px] bg-teal-500/10 text-white w-full md:max-w-[45%] border-muted-foreground/10 border-[1px] overflow-hidden rounded-xl">
              <img
                src="/images/testimonial/testimonial-img-2.avif"
                alt="testimonial image"
                className="max-h-[250px] w-full object-cover"
              />
              <p className="text-slate-400 font-semibold text-xl p-12">
                Professional, efficient, and result-driven. We couldn’t have
                asked for a better dental clinic.Good luck!
              </p>
              <p className="text-slate-700 font-bold text-xl p-12">
                ~Lisa Green
              </p>
            </div>
          </div> */}

          <div>
            <script src="https://elfsightcdn.com/platform.js" async></script>

            <div
              className="elfsight-app-b4c3d2cd-95cd-4374-bba0-706752634271"
              data-elfsight-app-lazy
            ></div>
          </div>
        </section>
      </Centerer>
    </>
  );
};

export default TestimonialSection;
