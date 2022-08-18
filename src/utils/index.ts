export const lineEq = (y2: any, y1: any, x2: any, x1: any, currentVal: any) => {
  let m = (y2 - y1) / (x2 - x1);
  let b = y1 - m * x1;
  return m * currentVal + b;
};
export const lerp = (a: any, b: any, n: any) => {
  return (1 - n) * a + n * b;
};
