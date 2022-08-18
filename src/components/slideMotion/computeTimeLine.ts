import { gsap } from "gsap";
import { upcomingSlideFigures } from "./upcomingSlideFigures";
export const computeTimeLine = (
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
  const tl = gsap
    .timeline({
      onStart: () => {
        currentSlide[0].parentElement.parentNode.style.zIndex = 100;
        upcomingSlide[0].parentElement.parentNode.style.zIndex = 101;
      },
      onComplete: () => {
        Completed();
      },
    })
    .add("begin");

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

  upcomingSlideFigures(upcomingSlide, dir, animationSettings, tl);

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
