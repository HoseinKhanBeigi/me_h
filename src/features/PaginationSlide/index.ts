import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

interface initialState {
  currentIndex: number;
  previousIndex: number;
}

const initialState: initialState = {
  currentIndex: 1,
  previousIndex: 1,
};

export const PaginationSlide = createSlice({
  name: "PaginationSlide",
  initialState,
  reducers: {
    setCurrentIndex: (state, action: PayloadAction<any>) => {
      state.currentIndex = action.payload;
    },
    setPreviousIndex: (state, action: PayloadAction<any>) => {
      state.previousIndex = action.payload;
    },
  },
});

export const { setCurrentIndex, setPreviousIndex } = PaginationSlide.actions;
export const selectCount = (state: RootState) => state.PaginationSlide;
export default PaginationSlide.reducer;
