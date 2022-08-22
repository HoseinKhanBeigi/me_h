import { timeLine } from "../gsap/timeLine";
import { verticalMotion } from "./verticalMotion";

export const toggleContent = (
  action: string,
  currentSlide: any,
  completedAnimation: (val: string) => void
) => {
  const complete = () => {
    completedAnimation(action);
  };
  const body = document.body;
  const bodyColor =
    getComputedStyle(body).getPropertyValue("  background-color");

  const start = () => {};
  const tl = timeLine({ start, complete });
  verticalMotion(action, currentSlide, tl, body, bodyColor);
};
