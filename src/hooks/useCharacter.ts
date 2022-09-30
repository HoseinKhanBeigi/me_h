import gsap from "gsap";
import { useEffect, useState, useRef } from "react";

export const useCharacter = (fn: () => void) => {
  const loop: React.MutableRefObject<any> = useRef(null);
  const svg: React.MutableRefObject<any> = useRef(null);

  useEffect(() => {
    loop.current = gsap.timeline();
    svg.current = document.querySelector("svg");
    fn();
  }, []);

  return {
    loop,
    svg,
  };
};
