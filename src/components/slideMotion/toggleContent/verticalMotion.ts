import { animationSettings, sortedslide, shuffleArray } from "../../../utils";
import { Times } from "../../../types";
export const verticalMotion = (
  action: string,
  currentSlide: any,
  tl: any,
  body: any,
  bodyColor: string
) => {
  let dir = "down";
  if (action === "show") {
    dir = "up";
  }
  const times: Times = {
    switchtime: 0,
    slideFigures: function (val: number): number {
      throw new Error("Function not implemented.");
    },
    texts: 0,
    textsExtraTitles: 0,
    content: 0,
    contentExtraTitles: 0,
  };

  times.switchtime =
    action === "show"
      ? Number(
          animationSettings.staggerFactor * (4 - 1) + animationSettings.duration
        )
      : Number(
          Math.max(
            0.05 + 0.04 * (currentSlide.titleLettersTotal - 1),
            animationSettings.duration
          )
        );
  const onSwitch = () => {
    currentSlide.DOM.el.classList[action === "show" ? "add" : "remove"](
      "slide--open"
    );
    if (action === "hide") {
      dir = "down";
    }
  };
  tl.add(onSwitch, times.switchtime);
  tl.to(
    body,
    {
      duration: animationSettings.duration,
      ease: "easeOut",
      backgroundColor:
        action === "show" ? currentSlide.contentcolor : bodyColor,
    },
    "begin+=" + times.switchtime
  );
  const currentSlideFigures = sortedslide(currentSlide.figures, dir, "down");

  const figureMain = currentSlideFigures.find((figure: any) => figure.isMain);
  console.log(figureMain);

  const extraInnerTitleElems = [...currentSlide.DOM.innerTitle].filter(
    (_: any, pos: number) => pos < currentSlide.innerTitleTotal - 1
  );
  times.slideFigures =
    action === "show"
      ? (pos: number) => pos * animationSettings.staggerFactor
      : (pos: number) =>
          Number(times.switchtime + pos * animationSettings.staggerFactor);

  currentSlideFigures.forEach((figure: any, pos: number) => {
    tl.to(
      figure.parentElement,
      {
        duration: animationSettings.duration,
        ease: "easeOut",
        y: action === "show" ? (dir === "up" ? "-101%" : "101%") : "0%",
      },
      "begin+=" + times.slideFigures(pos)
    ).to(
      figure.slideElement,
      {
        duration: animationSettings.duration,
        ease: "easeOut",
        startAt: action === "show" ? { transformOrigin: "50% 0%" } : {},
        y: action === "show" ? (dir === "up" ? "101%" : "-101%") : "0%",
      },
      "begin+=" + times.slideFigures(pos)
    );
  });

  times.texts =
    action === "show"
      ? animationSettings.duration * animationSettings.staggerFactor
      : Number(times.switchtime + animationSettings.staggerFactor * (4 - 1));
  times.textsExtraTitles =
    action === "show"
      ? times.texts
      : Number(
          0.05 + 0.04 * (currentSlide.titleLettersTotal - 1) + times.texts
        );

  tl.to(
    currentSlide.DOM.text,
    {
      duration: animationSettings.duration,
      ease: "easeOut",
      opacity: action === "show" ? 0 : 1,
    },
    "begin+=" + times.texts
  );
  tl.staggerTo(
    shuffleArray(currentSlide.innerTitleMainLetters),
    0.05,
    {
      ease: "easeOut",
      opacity: action === "show" ? 0 : 1,
    },
    0.04,
    "begin+=" + times.texts
  );

  extraInnerTitleElems.forEach((inner: any) => {
    tl.to(
      inner,
      0.1,
      {
        ease: "easeOut",
        opacity: action === "show" ? 0 : 1,
      },
      "begin+=" + times.textsExtraTitles
    );
  });

  times.content =
    action === "show"
      ? Number(
          animationSettings.staggerFactor * (4 - 1) + animationSettings.duration
        )
      : 0;
  times.contentExtraTitles =
    action === "show"
      ? Number(
          0.05 + 0.04 * (currentSlide.titleLettersTotal - 1) + times.content
        )
      : times.content;

  tl.to(
    figureMain.parentElement,
    {
      duration: animationSettings.duration,
      ease: "easeOut",
      y: action === "show" ? "0%" : dir === "up" ? "-101%" : "101%",
    },
    "begin+=" + times.content
  )
    .to(
      figureMain.slideElement,
      {
        duration: animationSettings.duration,
        ease: "easeOut",
        y: action === "show" ? "0%" : dir === "up" ? "101%" : "-101%",
      },
      "begin+=" + times.content
    )
    .to(
      currentSlide.DOM.content,
      {
        duration: animationSettings.duration,
        ease: "easeOut",
        opacity: action === "show" ? 1 : 0,
        startAt: action === "show" ? { y: "5%" } : {},
        y: action === "show" ? "0%" : "5%",
      },
      "begin+=" + times.content
    )
    .to(
      currentSlide.DOM.backFromContentCtrl,
      {
        duration: animationSettings.duration,
        ease: "easeOut",
        opacity: action === "show" ? 1 : 0,
      },
      "begin+=" + times.content
    )
    .staggerTo(
      shuffleArray(currentSlide.innerTitleMainLetters),
      0.05,
      {
        ease: "easeOut",
        opacity: action === "show" ? 1 : 0,
      },
      0.04,
      "begin+=" + times.content
    );
  extraInnerTitleElems.forEach((inner: any) => {
    tl.to(
      inner,
      0.1,
      {
        ease: "easeOut",
        opacity: action === "show" ? 1 : 0,
      },
      "begin+=" + times.contentExtraTitles
    );
  });
};
