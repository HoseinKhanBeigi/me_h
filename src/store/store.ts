import { configureStore, combineReducers } from "@reduxjs/toolkit";
import PaginationSlide from "../features/PaginationSlide";
import Slides from "../features/slice/figureSlice";
import photoSlice from "../features/photosSlice";

const rootReducer = combineReducers({
  PaginationSlide,
  Slides,
  photoSlice,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
