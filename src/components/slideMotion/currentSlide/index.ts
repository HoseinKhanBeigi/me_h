import { timeLine } from "../gsap/timeLine";
import { animationSettings, sortedslide, shuffleArray } from "../../../utils";

export const currentSlide = (
  currentSlide: any,
  dir: string,
  resolve: (value: void | PromiseLike<void>) => void,
  setStateItem: React.Dispatch<React.SetStateAction<number>>,
  index: number
) => {
  const start = () => {
    currentSlide.DOM.el.style.zIndex = 100;
  };

  const complete = () => {
    resolve();
    setStateItem(index);
  };

  const tl = timeLine({ start, complete });
  const currentSlideFigures = sortedslide(currentSlide.figures, dir, "right");
  currentSlideFigures.forEach((figure: any, pos: any) => {
    tl.to(
      figure.parentElement,
      {
        duration: 0.8,
        ease: "easeOut",
        x: dir === "right" ? "-101%" : "101%",
      },
      "begin+=" + pos * 0.13
    ).to(
      figure.slideElement,
      {
        duration: 0.8,
        ease: "easeOut",
        startAt: { transformOrigin: "0% 50% 0px" },
        x: dir === "right" ? "101%" : "-101%",
      },
      "begin+=" + pos * 0.13
    );
  });
  tl.to(
    currentSlide.DOM.text,
    {
      duration: 0.8,
      ease: "easeOut",
      opacity: 0,
    },
    "begin+=" + animationSettings.duration * animationSettings.staggerFactor
  );

  tl.to(
    shuffleArray(currentSlide.innerTitleMainLetters),
    {
      stagger: {
        each: 0.05,
      },
      duration: 0.04,
      ease: "easeOut",
      opacity: 0,
    },
    0.04
  );

  [...currentSlide.DOM.innerTitle]
    .filter((_: any, pos: any) => pos < currentSlide.innerTitleTotal - 1)
    .forEach((inner: any) => {
      tl.to(
        inner,
        {
          duration: 0.1,
          ease: "easeOut",
          opacity: 0,
        },
        "begin+=" + animationSettings.duration * animationSettings.staggerFactor
      );
    });
};
