import { gsap } from "gsap";
import { slideFigures } from "./slideFigures";
import { timeLine } from "./computeTimeLine";
export const toggleSlide = (
  upcomingSlide: any,
  currentSlide: any,
  Completed: () => void,
  parenSlide: any,
  currentIndex: number,
  upcomingIndex: number,
  dir: any
) => {
  const animationSettings = {
    duration: 0.8,
    staggerFactor: 0.13,
  };

  const start = () => {
    currentSlide[0].parentElement.parentNode.style.zIndex = 100;
    upcomingSlide[0].parentElement.parentNode.style.zIndex = 101;
  };

  const complete = () => {
    Completed();
  };

  const tl = timeLine({ start, complete });
  const onCompleteCurrentCallback = () =>
    parenSlide
      .querySelectorAll(".slide")
      [currentIndex].classList.remove("slide--current");
  tl.add(
    onCompleteCurrentCallback,
    animationSettings.duration + animationSettings.staggerFactor * (4 - 1)
  );

  const onStartUpcomingCallback = () => {
    upcomingSlide.forEach((figure: any) => {
      gsap.set(figure.slideElement, {
        x: dir === "right" ? "-101%" : "101%",
      });
    });
    parenSlide
      .querySelectorAll(".slide")
      [upcomingIndex].classList.add("slide--current");
  };
  tl.add(onStartUpcomingCallback, animationSettings.staggerFactor * (3 - 1));

  slideFigures(upcomingSlide, currentSlide, dir, animationSettings, tl);
};
