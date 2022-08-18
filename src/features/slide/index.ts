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
  Figure: Figure;
  slideShow: slideShow;
  slide: slide;
}

const initialState: initialState = {
  Figure: {
    DOM: {
      el: "",
      img: "",
      slideEl: "",
      isMain: false,
    },
  },
  slide: {
    getSlide: (value: any) => {
      initialState.slide.DOM.el = value;
      return {
        DOM: initialState.slide.DOM,
        figures: [],
        figuresTotal: 0,
        setCurrent: () => {
          initialState.slide.toggleCurrent(true);
        },
        unsetCurrent: () => {
          initialState.slide.toggleCurrent(false);
        },
        toggleCurrent: (isCurrent: boolean) => {
          initialState.slide.DOM.el.classList[isCurrent ? "add" : "remove"](
            "slide--current"
          );
        },
      };
    },
    DOM: {
      el: "",
    },
    figures: [],
    figuresTotal: 0,
    setCurrent: () => {
      initialState.slide.toggleCurrent(true);
    },
    unsetCurrent: () => {
      initialState.slide.toggleCurrent(false);
    },
    toggleCurrent: (isCurrent: boolean) => {
      initialState.slide.DOM.el.classList[isCurrent ? "add" : "remove"](
        "slide--current"
      );
    },
  },
  slideShow: {
    DOM: {
      el: "",
    },
    slides: [],
    current: 0,
    slidesTotal: 0,
  },
};

export const SlideMotion = createSlice({
  name: "slideMotion",
  initialState,
  reducers: {
    getFigureDOM: (state, action) => {
      state.Figure.DOM.el = action.payload;
      state.Figure.DOM.img =
        state.Figure.DOM.el.querySelector(".slide__figure-img");
      state.Figure.DOM.slideEl = state.Figure.DOM.img;
      if (state.Figure.DOM.el.classList.contains("slide__figure--main")) {
        state.Figure.DOM.isMain = true;
        state.Figure.DOM.slideEl = state.Figure.DOM.el.querySelector(
          ".slide__figure-inner"
        );
      }
    },
    getSlideShow: (state, action) => {
      state.slideShow.DOM.el = action.payload;
      [...state.slideShow.DOM.el.querySelectorAll(".slide")].forEach(
        (slide, i) => {
          const el = state.slide.DOM.el;
          state.slideShow.slides.push(state.slide.getSlide(slide));
        }
      );
      console.log(state.slideShow.slides[0]);

      state.slideShow.slidesTotal = state.slideShow.slides.length;
      state.slideShow.current = 0;
      state.slideShow.slides[state.slideShow.current].setCurrent();
    },
  },
});

export const { getFigureDOM, getSlideShow } = SlideMotion.actions;
export const selectCount = (state: RootState) => state.slideMotion;
export default SlideMotion.reducer;
