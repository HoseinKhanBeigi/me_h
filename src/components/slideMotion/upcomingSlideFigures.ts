export const upcomingSlideFigures = (
  upcomingSlide: any,
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
            1 * animationSettings.staggerFactor
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
            1 * animationSettings.staggerFactor
        )
    );
  });
};
