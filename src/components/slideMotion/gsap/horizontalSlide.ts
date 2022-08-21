import { animationSettings, sortedslide, shuffleArray } from "../../../utils";

export const horizontalSlide = (
  currentSlide: any,
  upcomingSlide: any,
  tl: any,
  dir: string
) => {
  const upcomingSlideFigures = sortedslide(upcomingSlide.figures, dir);
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
          animationSettings.staggerFactor * (3 - 1) +
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
          animationSettings.staggerFactor * (3 - 1) +
            pos * animationSettings.staggerFactor
        )
    );
  });

  tl.to(
    upcomingSlide.DOM.text,
    {
      duration: animationSettings.duration,
      ease: "easeOut",
      opacity: 1,
    },
    "begin+=" + animationSettings.staggerFactor * (4 - 1)
  );
  tl.staggerTo(
    shuffleArray(upcomingSlide.innerTitleMainLetters),
    0.05,
    {
      ease: "easeOut",
      opacity: 1,
    },
    0.04,
    "begin+=" + animationSettings.staggerFactor * (4 - 1)
  );
  [...upcomingSlide.DOM.innerTitle]
    .filter((_: any, pos: any) => pos < upcomingSlide.innerTitleTotal - 1)
    .forEach((inner: any) => {
      tl.to(
        inner,
        0.5,
        {
          ease: "easeOut",
          opacity: 1,
        },
        "begin+=" +
          Number(
            0.05 +
              0.04 * (upcomingSlide.titleLettersTotal - 1) +
              animationSettings.staggerFactor * (4 - 1)
          )
      );
    });

  const currentSlideFigures = sortedslide(currentSlide.figures, dir);
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
  tl.staggerTo(
    shuffleArray(currentSlide.innerTitleMainLetters),
    0.05,
    {
      ease: "easeOut",
      opacity: 0,
    },
    0.04,
    "begin+=" + animationSettings.duration * animationSettings.staggerFactor
  );

  [...currentSlide.DOM.innerTitle]
    .filter((_: any, pos: any) => pos < currentSlide.innerTitleTotal - 1)
    .forEach((inner: any) => {
      tl.to(
        inner,
        0.1,
        {
          ease: "easeOut",
          opacity: 0,
        },
        "begin+=" + animationSettings.duration * animationSettings.staggerFactor
      );
    });
};
