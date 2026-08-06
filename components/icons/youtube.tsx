"use client";

import { motion, useAnimation, type Variants } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface YoutubeIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface YoutubeIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const FRAME_VARIANTS: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.6,
      ease: "linear",
      opacity: { duration: 0.1 },
    },
  },
};

const PLAY_VARIANTS: Variants = {
  normal: {
    opacity: 1,
    scale: 1,
  },
  animate: {
    opacity: [0, 1],
    scale: [0.6, 1],
    transition: {
      duration: 0.6,
      ease: "easeOut",
      opacity: { duration: 0.1 },
    },
  },
};

const YoutubeIcon = forwardRef<YoutubeIconHandle, YoutubeIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const frameControls = useAnimation();
    const playControls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => {
          frameControls.start("animate");
          playControls.start("animate");
        },
        stopAnimation: () => {
          frameControls.start("normal");
          playControls.start("normal");
        },
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) {
          onMouseEnter?.(e);
        } else {
          frameControls.start("animate");
          playControls.start("animate");
        }
      },
      [frameControls, onMouseEnter, playControls]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) {
          onMouseLeave?.(e);
        } else {
          frameControls.start("normal");
          playControls.start("normal");
        }
      },
      [frameControls, onMouseLeave, playControls]
    );

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            animate={frameControls}
            d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
            initial="normal"
            variants={FRAME_VARIANTS}
          />
          <motion.path
            animate={playControls}
            d="m10 15 5-3-5-3z"
            initial="normal"
            variants={PLAY_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

YoutubeIcon.displayName = "YoutubeIcon";

export { YoutubeIcon };
