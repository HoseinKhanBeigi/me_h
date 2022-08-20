import { gsap } from "gsap";
import { timeLine } from "./gsap/timeLine";
import { animationSettings } from "../../utils";
import { horizontalSlide } from "./gsap/horizontalSlide";

export const toggleSlide = (
  upcomingSlide: any,
  currentSlide: any,
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
    currentSlide.DOM.el.style.zIndex = 100;
    upcomingSlide.DOM.el.style.zIndex = 101;
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
    upcomingSlide.figures.forEach((figure: any) => {
      gsap.set(figure.slideElement, {
        x: dir === "right" ? "-101%" : "101%",
      });
    });
    gsap.set(upcomingSlide.DOM.text, { opacity: 0 });
    [...upcomingSlide.DOM.innerTitle].forEach((inner: any, pos: number) => {
      if (pos === upcomingSlide.innerTitleTotal - 1) {
        gsap.set([...inner.querySelectorAll("span")], { opacity: 0 });
      } else {
        gsap.set(inner, { opacity: 0 });
      }
    });
    setCurrent();
  };
  tl.add(onStartUpcoming, animationSettings.staggerFactor * (3 - 1));
  horizontalSlide(currentSlide, upcomingSlide, tl, dir);
};
