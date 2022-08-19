import { gsap } from "gsap";
import { timeLine } from "./gsap/timeLine";
import { animationSettings } from "../../utils";
import { horizontalSlide } from "./gsap/horizontalSlide";
export const toggleSlide = (
  upcomingSlide: Array<any>,
  currentSlide: Array<any>,
  completedAnimation: () => void,
  slideShow: any,
  currentIndex: number,
  upcomingIndex: number,
  dir: string
) => {
  const setCurrent = () => {
    toggleCurrent(true, upcomingIndex);
  };
  const unsetCurrent = () => {
    toggleCurrent(false, currentIndex);
  };
  const toggleCurrent = (isCurrent: boolean, index: number) => {
    slideShow
      .querySelectorAll(".slide")
      [index].classList[isCurrent ? "add" : "remove"]("slide--current");
  };

  const start = () => {
    slideShow.querySelectorAll(".slide")[currentIndex].style.zIndex = 100;
    slideShow.querySelectorAll(".slide")[upcomingIndex].style.zIndex = 101;
  };

  const complete = () => {
    completedAnimation();
  };

  const tl = timeLine({ start, complete });
  const onCompleteCurrent = () => unsetCurrent();
  tl.add(
    onCompleteCurrent,
    animationSettings.duration + animationSettings.staggerFactor * (4 - 1)
  );

  const onStartUpcoming = () => {
    upcomingSlide.forEach((figure: any) => {
      gsap.set(figure.slideElement, {
        x: dir === "right" ? "-101%" : "101%",
      });
    });
    setCurrent();
  };
  tl.add(onStartUpcoming, animationSettings.staggerFactor * (3 - 1));
  horizontalSlide(currentSlide, upcomingSlide, tl, dir);
};
