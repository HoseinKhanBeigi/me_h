import { createSlice } from "@reduxjs/toolkit";
import { fetchPhotos } from "../actions";
import { photosState } from "../../types"
import { getRandomInt } from "../../utils"



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
            state.status = "succeeded";
            state.entities = [...action.payload];
            state.clone = {
                imageBoxes: state.entities.map((e, number) => {
                    return {
                        url: e.urls.small,
                        dataSort: state.entities.length - number
                    }
                }),
                main: { url: state.entities[getRandomInt(10)].urls.regular, dataSort: "3" }
            };
            state.currentRequestId = null;

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
