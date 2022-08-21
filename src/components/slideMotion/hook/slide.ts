import { TiltFx } from "../TileFx";
import { figure } from "./figure";
const charming = require("charming");

export function slide(el: HTMLDivElement | any) {
  let figures: any = [];
  [...el.querySelectorAll(".slide__figure")].forEach((fig) => {
    figures.push(figure(fig));
  });

  const title = el.querySelector(".slide__title");
  const content = el.querySelector(".slide__content");
  const contentcolor = el.dataset.contentcolor;
  const innerTitle = el.querySelector(".slide__title").children;
  [...innerTitle].forEach((inner: any) => charming(inner));
  const text = el.querySelector(".slide__text");
  const innerTitleTotal = innerTitle.length;
  const innerTitleMainLetters = [...innerTitle[innerTitleTotal - 1].children];
  const titleLettersTotal = innerTitleMainLetters.length;
  const textTilt = new TiltFx(title);

  const setCurrent = () => {
    toggleCurrent(true);
  };

  const unsetCurrent = () => {
    toggleCurrent(false);
  };

  const toggleCurrent = (isCurrent: boolean) => {
    el.classList[isCurrent ? "add" : "remove"]("slide--current");
    figures
      .find((figure: any) => figure.isMain)
      .tilt[isCurrent ? "start" : "stop"]();
    textTilt[isCurrent ? "start" : "stop"]();
  };
  return {
    DOM: {
      el,
      content,
      innerTitle,
      title,
      text,
    },
    setCurrent,
    unsetCurrent,
    figures,
    textTilt,
    contentcolor,
    innerTitleMainLetters,
    innerTitleTotal,
    titleLettersTotal,
  };
}
