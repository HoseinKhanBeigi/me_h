import { createAction, createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

interface DOM {
  el: any;
}

interface FigureState {
  DOM: DOM;
}

const initialState: FigureState = {
  DOM: {
    el: null,
  },
};

export const Figure = createSlice({
  name: "figure",
  initialState,
  reducers: {
    initialFigureConstructor: (state, action: PayloadAction<any>) => {
      console.log(action.payload);

      state.DOM.el = action.payload;
    },
    getFigures: (state) => {
      state.DOM.el = state.DOM.el;
    },
    decrement: (state) => {
      // state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<any>) => {},
  },
});

// export const { getFigures, decrement, initialFigureConstructor } =
//   Figure.actions;
// export const selectCount = (state: RootState) => state.figure.DOM;
// export default Figure.reducer;
