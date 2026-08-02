"use client";

import { useRef, useState } from "react";
import { VIDEO_TESTIMONIALS } from "@/lib/data";
import { ChevronLeftIcon } from "@/components/icons/chevron-left";
import { ChevronRightIcon } from "@/components/icons/chevron-right";

export function VideoTestimonials() {
  const [videoIdx, setVideoIdx] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videos = VIDEO_TESTIMONIALS.items;

  const goToVideo = (i: number) => {
    setVideoIdx((i + videos.length) % videos.length);
    setVideoPlaying(false);
    setVideoEnded(false);
  };

  const toggleVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setVideoPlaying(true);
      setVideoEnded(false);
    } else {
      v.pause();
      setVideoPlaying(false);
    }
  };

  return (
    <section className="bg-kucho-700 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-kucho-200 uppercase tracking-widest mb-2">
            {VIDEO_TESTIMONIALS.label}
          </p>
          <h2 className="font-extrabold text-4xl md:text-5xl text-white mb-4">
            {VIDEO_TESTIMONIALS.title}
          </h2>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden bg-kucho-950/60 shadow-2xl">
            <video
              key={videoIdx}
              ref={videoRef}
              src={videos[videoIdx].src}
              title={videos[videoIdx].title}
              className="w-full aspect-video object-contain bg-black"
              playsInline
              preload="metadata"
              controls={videoPlaying}
              aria-label={`Video testimonial from ${videos[videoIdx].title}`}
              onEnded={() => {
                setVideoPlaying(false);
                setVideoEnded(true);
              }}
              onClick={toggleVideo}
            />
            {!videoPlaying && (
              <button
                onClick={toggleVideo}
                className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-amber-300 text-black flex items-center justify-center hover:bg-amber-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl"
                aria-label={`Play video testimonial from ${videos[videoIdx].title}`}
              >
                {videoEnded ? (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m1 4 8 8-8 8" />
                    <path d="m11 4 8 8-8 8" />
                  </svg>
                ) : (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            )}
          </div>
          <button
            onClick={() => goToVideo(videoIdx - 1)}
            className="absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-kucho-800 flex items-center justify-center shadow-lg hover:bg-kucho-200 transition-colors"
            aria-label="Previous video testimonial"
          >
            <ChevronLeftIcon size={22} />
          </button>
          <button
            onClick={() => goToVideo(videoIdx + 1)}
            className="absolute right-0 sm:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-kucho-800 flex items-center justify-center shadow-lg hover:bg-kucho-200 transition-colors"
            aria-label="Next video testimonial"
          >
            <ChevronRightIcon size={22} />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {videos.map((v, i) => (
            <button
              key={v.src}
              onClick={() => goToVideo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === videoIdx ? "bg-amber-300" : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to video testimonial ${i + 1}`}
            />
          ))}
        </div>
        <div className="text-center mt-4">
          <h4 className="font-bold text-white">{videos[videoIdx].title}</h4>
          <p className="text-sm text-kucho-200">{videos[videoIdx].subtitle}</p>
        </div>
      </div>
    </section>
  );
}