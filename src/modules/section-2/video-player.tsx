"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function CustomVideoPlayer({
  src,
  autoPlay = true,
  playHidden = true,
}: {
  src: string;
  autoPlay?: boolean;
  playHidden: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    const video = videoRef.current;
    if (video && autoPlay) {
      video.play().catch(() => {
        setIsPlaying(false); // If autoplay blocked
      });
    }
  }, [src, autoPlay]);

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
        src={src}
        loop
        muted
        playsInline
        className="w-full rounded-xl"
      />

      {!playHidden && (
        <button
          onClick={togglePlay}
          className="m-2 absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 shadow-lg"
        >
          {isPlaying ? (
            <Pause className="h-6 w-6 text-white" />
          ) : (
            <Play className="h-6 w-6 text-white" />
          )}
        </button>
      )}
    </div>
  );
}
