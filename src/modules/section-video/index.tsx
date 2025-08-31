"use client";

import CustomVideoPlayer from "@/modules/section-2/video-player";
import { useState } from "react";

const SectionVideo = () => {
  const [mainSrc, setMainSrc] = useState("/videos/dentistry.mp4");

  const videos = [
    "/videos/dentistry.mp4",
    "/videos/dentistry.mp4",
    "/videos/video-2.mp4",
    "/videos/video-3.mp4",
    "/videos/video-4.mp4",
  ];
  return (
    <>
      <section className="w-full min-h-screen  py-8">
        <div className="w-full lg:px-60 h-full flex flex-col gap-2">
          <div className="w-full px-2">
            <CustomVideoPlayer src={mainSrc} autoPlay playHidden={false} />
          </div>
          {/* <div className="flex gap-2 justify-between px-2">
            <CustomVideoPlayer />
            <CustomVideoPlayer />
            <CustomVideoPlayer />
            <CustomVideoPlayer />
          </div> */}
          <div className="flex gap-2 justify-between px-2">
            {videos.slice(1).map((v, i) => (
              <div
                key={i}
                className="cursor-pointer w-1/4"
                onClick={() => setMainSrc(v)}
              >
                <CustomVideoPlayer src={v} autoPlay={true} playHidden />
              </div>
            ))}
          </div>
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
