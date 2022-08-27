import { figure } from "./figure";

export function slide(el: HTMLDivElement | any) {
  let figures: any = [];
  [...el.querySelectorAll(".slide__figure")].forEach((fig) => {
    figures.push(figure(fig));
  });

  const title = el.querySelector(".slide__title");
  const content = el.querySelector(".slide__content");
  const contentcolor = el.dataset.contentcolor;
  const innerTitle = el.querySelector(".slide__title").children;

  const text = el.querySelector(".slide__text");
  const innerTitleTotal = innerTitle.length;
  const innerTitleMainLetters = [...innerTitle[innerTitleTotal - 1].children];
  const titleLettersTotal = innerTitleMainLetters.length;

  const backFromContentCtrl = el.querySelector(".slide__back");

  return {
    DOM: {
      el,
      content,
      innerTitle,
      backFromContentCtrl,
      title,
      text,
    },
    figures,
    contentcolor,
    innerTitleMainLetters,
    innerTitleTotal,
    titleLettersTotal,
  };
}
