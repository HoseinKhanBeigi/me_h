import { useEffect, useState, useRef } from "react";

export const useResizeWindowRef = () => {
  const winsize: any = useRef({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const setFromEvent = () => {
      winsize.current.height = window.innerHeight;
      winsize.current.width = window.innerWidth;
      return {
        h: winsize.current.height,
        w: winsize.current.width,
      };
    };

    window.addEventListener("resize", setFromEvent);
    return () => {
      window.removeEventListener("resize", setFromEvent);
    };
  }, [winsize.current.height, winsize.current.width]);

  return winsize.current;
};

interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const getWindowSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    getWindowSize();
    window.addEventListener("resize", getWindowSize);
    return () => window.removeEventListener("resize", getWindowSize);
  }, []);

  return windowSize;
};

export default useWindowSize;
