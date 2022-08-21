import { TiltFx } from "../TileFx";
export function figure(el: HTMLDivElement | any) {
  const img = el.querySelector(".slide__figure-img");
  const parentElement = el;
  let slideElement = img;
  let isMain = false;
  let inner = "";
  let tilt = {};
  if (el.classList.contains("slide__figure--main")) {
    isMain = true;
    inner = el.querySelector(".slide__figure-inner");
    slideElement = inner;
    tilt = new TiltFx(inner, {
      valuesFromTo: [20, -20],
      lerpFactorOuter: 0.1,
      lerpFactor: (pos: number) => 0.02 * pos + 0.02,
    });
  }

  return inner
    ? {
        parentElement,
        isMain,
        slideElement,
        inner,
        tilt,
      }
    : { parentElement, isMain, slideElement };
}
