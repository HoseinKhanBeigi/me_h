export const lineEq = (y2: any, y1: any, x2: any, x1: any, currentVal: any) => {
  let m = (y2 - y1) / (x2 - x1);
  let b = y1 - m * x1;
  return m * currentVal + b;
};
export const lerp = (a: any, b: any, n: any) => {
  return (1 - n) * a + n * b;
};

export const shuffleArray = (arr: any) => arr.sort(() => Math.random() - 0.5);

export const animationSettings = {
  duration: 0.8,
  staggerFactor: 0.13,
};

export const sortedslide = (slide: any, dir: string) => {
  dir === "right"
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
