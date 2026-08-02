"use client";

import { useRef } from "react";

type IconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

export function useGroupHover(count: number) {
  const refs = useRef<(IconHandle | null)[]>(new Array(count).fill(null));
  const setRef = (i: number) => (el: IconHandle | null) => {
    refs.current[i] = el;
  };
  const onEnter = () => refs.current.forEach((r) => r?.startAnimation());
  const onLeave = () => refs.current.forEach((r) => r?.stopAnimation());
  return { setRef, onEnter, onLeave };
}