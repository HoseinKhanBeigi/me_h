import { gsap } from "gsap";
import { timeLine } from "../gsap/timeLine";
import { animationSettings, sortedslide, shuffleArray } from "../../../utils";
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
  console.log(body);

  const start = () => {};
  const tl = timeLine({ start, complete });
  verticalMotion(action, currentSlide, tl, body, bodyColor);
};
