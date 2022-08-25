import { createSlice } from "@reduxjs/toolkit";
import { fetchPhotos } from "../actions";
import { photosState } from "../../types"



const initialState: photosState = {
    entities: [] as any,
    status: "idle",
    currentRequestId: "",
    photos: [] as any,
    error: null,
    clone: {}
};


const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchPhotos.pending.type]: (state, action) => {
            if (state.status === "idle") {
                state.status = "pending";
                state.currentRequestId = action.meta.requestId;
            }
        },
        [fetchPhotos.fulfilled.type]: (state, action) => {
            const { requestId } = action.meta;
            if (state.status === "pending" && state.currentRequestId === requestId) {
                state.status = "succeeded";
                state.entities = [...state.entities, ...action.payload];

                const imageBoxes: any = []
                state.entities.map((e, number) => {
                    imageBoxes.push({ url: e.urls, dataSort: state.entities.length - number });
                });
                state.clone = [{
                    imageBoxes,
                }];
                state.currentRequestId = null;
            }
        },
        [fetchPhotos.rejected.type]: (state, action) => {
            const { requestId } = action.meta;
            if (state.status === "pending" && state.currentRequestId === requestId) {
                state.status = "failed";
                state.error = action.error;
                state.currentRequestId = null;
            }
        },
    },
});

export default photosSlice.reducer;
