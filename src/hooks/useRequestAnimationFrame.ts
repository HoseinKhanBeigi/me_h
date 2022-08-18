import { useEffect, useState, useRef } from "react";

export const useRequestAnimationFrame = (callback: any) => {
  const requestRef: any = useRef();

  useEffect(() => {
    requestRef.current = requestAnimationFrame(callback);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
};
