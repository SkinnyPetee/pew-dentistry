"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function CustomVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        setIsPlaying(false); // If autoplay blocked
      });
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full mx-auto h-full">
      {/* Video */}
      <video
        ref={videoRef}
        src="/videos/dentistry.mp4" // replace with your video file
        loop
        muted
        playsInline
        className="w-full rounded-xl"
      />

      {/* Custom Play Button */}
      <button
        onClick={togglePlay}
        className="m-8 absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 shadow-lg"
      >
        {isPlaying ? (
          <Pause className="h-6 w-6 text-white" />
        ) : (
          <Play className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
}
