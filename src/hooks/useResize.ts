import { useEffect, useState, useRef } from "react";

export const useResizeWindowRef = () => {
  const winsize: React.MutableRefObject<{
    width: number;
    height: number;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  }> = useRef({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth <= 568,
    isTablet: window.innerWidth <= 1024,
    isDesktop: window.innerWidth > 1024,
  });

  useEffect(() => {
    const setFromEvent = () => {
      winsize.current.height = window.innerHeight;
      winsize.current.width = window.innerWidth;
      winsize.current.isMobile = window.innerWidth <= 568;
      winsize.current.isTablet = window.innerWidth <= 1024;
      winsize.current.isDesktop = window.innerWidth > 1024;
      return {
        h: winsize.current.height,
        w: winsize.current.width,
        isMobile: winsize.current.isMobile,
        isTablet: winsize.current.isTablet,
        isDesktop: winsize.current.isDesktop,
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
