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
