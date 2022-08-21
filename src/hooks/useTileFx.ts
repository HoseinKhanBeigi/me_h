import { useEffect, useState, useRef } from "react";
import { useMousePositionRef } from "../hooks/useMousePosition";
import useResizeWindowRef from "../hooks/useResize";
import { lineEq, lerp } from "../utils";

export const useTileFx = () => {
  const [lenghtOfElement, setLenghtOfElement] = useState(4);
  const figure: any = useRef<HTMLDivElement>();
  const requestRef: any = useRef(null);
  const windowSizeref = useResizeWindowRef();
  const mousePosRef = useMousePositionRef();
  let mousePos = { x: windowSizeref.width / 2, y: windowSizeref.height / 2 };
  const options = {
    valuesFromTo: [20, -20],
    lerpFactorOuter: 0.1,
    lerpFactor: (pos: any) => 0.02 * pos + 0.02,
  };
  useEffect(() => {
    const moving = [...figure.current.children];
    setLenghtOfElement(moving.length);
  }, []);

  // useEffect(() => {
  //   requestRef.current = window.requestAnimationFrame(() => render());
  //   return () => {
  //     window.cancelAnimationFrame(requestRef.current);
  //   };
  // }, [windowSizeref]);
  let translations = [...new Array(lenghtOfElement)].map(() => ({
    x: 0,
    y: 0,
  }));

  const render = () => {
    const moving: any = [...figure.current.children];

    const movingTotal = moving.length;
    mousePos = mousePosRef.current;
    for (let i = 0; i <= movingTotal - 1; ++i) {
      let lerpFactor =
        i < movingTotal - 1 ? options.lerpFactor(i) : options.lerpFactorOuter;
      translations[i].x = lerp(
        translations[i].x,
        lineEq(
          options.valuesFromTo[1],
          options.valuesFromTo[0],
          windowSizeref.width,
          0,
          mousePos.x
        ),
        lerpFactor
      );
      translations[i].y = lerp(
        translations[i].y,
        lineEq(
          options.valuesFromTo[1],
          options.valuesFromTo[0],
          windowSizeref.height,
          0,
          mousePos.y
        ),
        lerpFactor
      );
      moving[
        i
      ].style.transform = `translateX(${translations[i].x}px) translateY(${translations[i].y}px)`;
    }

    requestRef.current = requestAnimationFrame(() => render());
  };
  const start = () => {
    requestRef.current = window.requestAnimationFrame(() => render());
  };

  const stop = () => {
    const moving: any = [...figure.current.children];
    window.cancelAnimationFrame(requestRef.current);
    for (let i = 0; i <= lenghtOfElement - 1; ++i) {
      translations[i].x = 0;
      translations[i].y = 0;
      moving[i].style.transform = `translateX(0px) translateY(0px)`;
    }
  };

  return {
    stop,
    start,
    figure,
  };
};
