import { timeLine } from "../gsap/timeLine";
import { verticalMotion } from "./verticalMotion";

export const toggleContent = (
  action: string,
  currentSlide: any,
  completedAnimation: () => void
) => {
  const complete = () => {
    // if (action === "hide") {
    //   isContentOpen = false;
    //   showNavigationCtrls();
    // }
    completedAnimation();
  };
  const body = document.body;
  const bodyColor =
    getComputedStyle(body).getPropertyValue("  background-color");

  const start = () => {};
  const tl = timeLine({ start, complete });
  verticalMotion(action, currentSlide, tl, body, bodyColor);
};
