import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { items } from "../../utils/items";

const initialState = {
  items,
};

export const Slides = createSlice({
  name: "figure",
  initialState,
  reducers: {
    slideList: (state) => {
      state.items.map((e) => e);
    },
  },
});

export const { slideList } = Slides.actions;
export const selectCount = (state: RootState) => state.Slides;
export default Slides.reducer;
