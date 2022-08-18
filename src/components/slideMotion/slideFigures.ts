export const slideFigures = (
  upcomingSlide: any,
  currentSlide: any,
  dir: string,
  animationSettings: any,
  tl: any
) => {
  const upcomingSlideFigures =
    dir === "right"
      ? upcomingSlide.sort(
          (a: any, b: any) =>
            a.parentElement.dataset.sort - b.parentElement.dataset.sort
        )
      : upcomingSlide
          .slice()
          .sort(
            (a: any, b: any) =>
              a.parentElement.dataset.sort - b.parentElement.dataset.sort
          )
          .reverse();
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

  const currentSlideFigures =
    dir === "right"
      ? currentSlide.sort(
          (a: any, b: any) =>
            a.parentElement.dataset.sort - b.parentElement.dataset.sort
        )
      : currentSlide
          .slice()
          .sort(
            (a: any, b: any) =>
              a.parentElement.dataset.sort - b.parentElement.dataset.sort
          )
          .reverse();
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
