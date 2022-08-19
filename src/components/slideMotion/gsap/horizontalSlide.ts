import { animationSettings, sortedslide } from "../../../utils";

export const horizontalSlide = (
  currentSlide: any,
  upcomingSlide: any,
  tl: any,
  dir: string
) => {
  const upcomingSlideFigures = sortedslide(upcomingSlide, dir);
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
  const currentSlideFigures = sortedslide(currentSlide, dir);
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
};

class x {
  constructor() {}
}
