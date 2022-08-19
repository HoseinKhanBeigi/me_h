import { gsap } from "gsap";
interface TimeLineProp {
  start: () => void;
  complete: () => void;
}

export const timeLine = ({ start, complete }: TimeLineProp) => {
  const tl = gsap
    .timeline({
      onStart: () => start(),
      onComplete: () => complete(),
    })
    .add("begin");

  return tl;
};
