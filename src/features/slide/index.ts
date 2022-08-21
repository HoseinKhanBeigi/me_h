import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

const slides = [];

interface slideShow {
  DOM: { el: any };
  slides: any[];
  current: number;
  slidesTotal: number;
}

interface slide {
  DOM: { el: any };
  figures: [];
  figuresTotal: number;
  setCurrent: () => void;
  unsetCurrent: () => void;
  toggleCurrent: (isCurrent: boolean) => void;
  getSlide: (value: any) => void;
}

type Figure = {
  DOM: { el: any; img: ""; slideEl: ""; isMain: boolean };
};

interface initialState {
  current: {};
  prev: {};
  layouts: any[];
}

const initialState: initialState = {
  current: {},
  prev: {},
  layouts: [],
};

export const SlideMotion = createSlice({
  name: "slideMotion",
  initialState,
  reducers: {
    getSlides: (state, action: PayloadAction<any>) => {
      state.layouts.push(action.payload);
    },
    getCurrentSlide: (state, action: PayloadAction<any>) => {
      const { type, data } = action.payload;
      const Figures: any = [];
      state.layouts.forEach((el, i) => {
        // const figure = (el: HTMLDivElement | any) => {
        //   const img = el.querySelector(".slide__figure-img");
        //   const parentElement = el;
        //   let slideElement = img;
        //   let isMain = false;
        //   let inner = "";
        //   let tilt = {};
        //   if (el.classList.contains("slide__figure--main")) {
        //     isMain = true;
        //     inner = el.querySelector(".slide__figure-inner");
        //     slideElement = inner;
        //   }

        //   return inner
        //     ? {
        //         parentElement,
        //         isMain,
        //         slideElement,
        //         inner,
        //         tilt,
        //       }
        //     : { parentElement, isMain, slideElement };
        // };
        // Figures.push(figure(el));
        if (data === i) {
          const title = el.querySelector(".slide__title");
          const content = el.querySelector(".slide__content");
          const contentcolor = el.dataset.contentcolor;
          const innerTitle = el.querySelector(".slide__title").children;
          // [...innerTitle].forEach((inner: any) => charming(inner));
          const text = el.querySelector(".slide__text");
          const innerTitleTotal = innerTitle.length;
          const innerTitleMainLetters = [
            ...innerTitle[innerTitleTotal - 1].children,
          ];
          const titleLettersTotal = innerTitleMainLetters.length;
          if (type === "current") {
            state.current = {
              el,
              title,
              content,
              contentcolor,
              text,
              innerTitleMainLetters,
              innerTitleTotal,
              titleLettersTotal,
            };
          } else if (type === "prev") {
            state.prev = {
              el,
              title,
              content,
              contentcolor,
              text,
              innerTitleMainLetters,
              innerTitleTotal,
              titleLettersTotal,
            };
          }
        }
      });
    },
  },
});

export const { getSlides, getCurrentSlide } = SlideMotion.actions;
export const selectCount = (state: RootState) => state.slideMotion;
export default SlideMotion.reducer;
