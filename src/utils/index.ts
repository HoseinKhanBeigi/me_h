export const lineEq = (y2: any, y1: any, x2: any, x1: any, currentVal: any) => {
  let m = (y2 - y1) / (x2 - x1);
  let b = y1 - m * x1;
  return m * currentVal + b;
};

export function getRandom(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

export const lerp = (a: any, b: any, n: any) => {
  return (1 - n) * a + n * b;
};

export function random(min: any, max: any) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const shuffleArray = (arr: any) => arr.sort(() => Math.random() - 0.5);

export const animationSettings = {
  duration: 1,
  staggerFactor: 0.13,
};

export const sortedslide = (slide: any, dir: string, dirction: string) => {
  dir === dirction
    ? slide.sort(
        (a: any, b: any) =>
          a.parentElement.dataset.sort - b.parentElement.dataset.sort
      )
    : slide
        .slice()
        .sort(
          (a: any, b: any) =>
            a.parentElement.dataset.sort - b.parentElement.dataset.sort
        )
        .reverse();

  return slide;
};

export const getMousePos = (e: any) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;
    posy =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  return { x: posx, y: posy };
};

export let winsize = { width: window.innerWidth, height: window.innerHeight };
const calcWinsize = () =>
  (winsize = { width: window.innerWidth, height: window.innerHeight });
calcWinsize();

// Recalculate window sizes on resize.
window.addEventListener("resize", calcWinsize);

export function camelCase(str: any) {
  return str
    .toLowerCase()
    .replace(/([-_\s][a-z])/g, (group: any) =>
      group.toUpperCase().replace(/[-_\s]/g, "")
    );
}

export const DOM = {
  get: (selector: any) => document.querySelector(selector),

  getAll: (selector: any) => [...document.querySelectorAll(selector)],
};

export function getNodes(parentSelector: any) {
  const el = DOM.get(parentSelector);

  if (!el) return {};

  const allowedNodes = ["div", "span", "svg", "g", "ellipse", "path"].map(
    (node) => `${parentSelector} ${node}`
  );

  const children = DOM.getAll(allowedNodes.join(","));

  children.forEach((child) => {
    if (child.classList[0]) {
      const childClass = child.classList[0].trim();
      el[camelCase(childClass)] = child || `.${childClass}`;
    }
  });

  return el;
}
