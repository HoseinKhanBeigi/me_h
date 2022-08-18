import { useEffect, useState, useRef } from "react";

export const useChildren = () => {
  const figure: any = useRef<HTMLDivElement>();

  useEffect(() => {
    const s = figure.current;
  }, []);

  return figure;
};
