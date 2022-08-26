import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../store/store";
import { items2 } from "../../../utils/items";

const initialState: any = {
  items: [],
  data: [],
};

export const Slides = createSlice({
  name: "figure",
  initialState,
  reducers: {
    slideList: (state, action: PayloadAction<any>) => {
      state.items = items2.map((e: any) => e);
    },
    getData: (state, action: PayloadAction<any>) => {
      state.data = items2.filter((e: any, i: number) => i === 1);
    },
  },
});

export const { slideList, getData } = Slides.actions;
export const selectCount = (state: RootState) => state.Slides;
export default Slides.reducer;
