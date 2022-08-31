import { gsap } from "gsap";
import { timeLine } from "../gsap/timeLine";
import { animationSettings, sortedslide, shuffleArray } from "../../../utils";

export const upComingSlide = (currentSlide: any, dir: string) => {
  const start = () => {
    currentSlide.DOM.el.style.zIndex = 101;
  };

  const complete = () => {};

  const tl: any = timeLine({ start, complete });

  const onStartUpcoming = () => {
    currentSlide.figures.forEach((figure: any) => {
      gsap.set(figure.slideElement, {
        x: dir === "right" ? "-101%" : "101%",
      });
    });
    gsap.set(currentSlide.DOM.text, { opacity: 0 });
    [...currentSlide.DOM.innerTitle].forEach((inner: any, pos: number) => {
      if (pos === currentSlide.innerTitleTotal - 1) {
        gsap.set([...inner.querySelectorAll("span")], { opacity: 0 });
      } else {
        gsap.set(inner, { opacity: 0 });
      }
    });
  };
  tl.add(onStartUpcoming);

  const upcomingSlideFigures = sortedslide(currentSlide.figures, dir, "right");
  upcomingSlideFigures.forEach((figure: any, pos: any) => {
    tl.to(
      figure.parentElement,
      {
        ease: "easeOut",
        duration: animationSettings.duration,
        startAt: { x: dir === "right" ? "101%" : "-101%" },
        x: "0%",
      },
      "begin+=" +
        Number(
          animationSettings.staggerFactor * (10 - 1) +
            pos * animationSettings.staggerFactor
        )
    ).to(
      figure.slideElement,
      {
        duration: animationSettings.duration,
        ease: "easeOut",
        x: "0%",
      },
      "begin+=" +
        Number(
          animationSettings.staggerFactor * (10 - 1) +
            pos * animationSettings.staggerFactor
        )
    );
  });

  tl.to(
    currentSlide.DOM.text,
    {
      duration: animationSettings.duration,
      ease: "easeOut",
      opacity: 1,
    },
    "begin+=" + animationSettings.staggerFactor * (10 - 1)
  );

  tl.to(
    shuffleArray([...currentSlide.innerTitleMainLetters]),
    {
      stagger: 0.07,
      duration: 0.1,
      ease: "easeOut",
      opacity: 1,
    },
    "begin+=" + animationSettings.staggerFactor * (5 - 1)
  );
  [...currentSlide.DOM.innerTitle]
    .filter((_, pos) => pos < currentSlide.innerTitleTotal - 1)
    .forEach((inner: any) => {
      tl.to(
        inner,
        {
          duration: 0.5,
          ease: "easeOut",
          opacity: 1,
        },
        "begin+=" +
          Number(
            0.05 +
              0.04 * (currentSlide.titleLettersTotal - 1) +
              animationSettings.staggerFactor * (4 - 1)
          )
      );
    });
};
