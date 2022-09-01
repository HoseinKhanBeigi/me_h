import { createSlice } from "@reduxjs/toolkit";
import { fetchPhotos } from "../actions";
import { photosState } from "../../types";
import { getRandom } from "../../utils";

const initialState: photosState = {
    entities: [] as any,
    status: "idle",
    currentRequestId: "",
    photos: [] as any,
    error: null,
    clone: {},
};

const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPhotos.pending, (state, action) => {
                state.status = "pending";
                state.clone = {};
                state.entities = [];
            })
            .addCase(fetchPhotos.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.entities = [...action.payload];
                state.clone = {
                    imageBoxes: state.entities.map((e, number) => {
                        return {
                            url: e.urls.small,
                            dataSort: state.entities.length - number,
                        };
                    }),
                    layout: getRandom(5),
                    dataContentcolor: "#e4d0a2",
                    main: {
                        url: state.entities[5].urls.regular,
                        dataSort: "3",
                    },
                    slideTitle: "Mhopsis",
                    textMeta: "by Andrew Moore on 2/21",
                    textDescription:
                        "Thoughts in time and out of season. The Hitchhiker stood by the side of the road and leveled his thumb in the calm calculus of reason. Hi. How you doin’?",
                    content: {
                        p1: "They would all have been delighted to have little Elfie with them in these last hours, but the fond grandfather could not spare her, and one of the girls, who had a message to deliver to Mrs. Abbott in the parlor, reported that the child lay fast asleep in Mr. Bellamy’s arms, while he was trying, at great inconvenience to himself, to write letters at a table, and black Candace sat patiently in the hall waiting for the long-delayed summons to put her little missy to bed",
                        p2: "It was late when the day scholars went home, and the others went up-stairs to their rooms very quietly. They all had to pass the large corner room which was always given to visitors, and, although the light was turned very low, they could see through the half-closed door that Candace was trying to undress the little girl without waking her, and the senator, whose broad back was toward the door, was bending down to unbutton the little shoes, one of which he lifted and pressed to his lips just as the last pair of girls went by.",
                        p3: "The collector of old silver must have a pretty taste and a fine judgment. It is not an absolute law that age determines beauty. Hall-marks, though they denote date, do not guarantee excellence of design. Everything that bears the hall-mark of the Goldsmiths’ Hall of London is not beautiful, whether it be old or whether it be new. The connoisseur must digest the fact that the assay marks of the lion, the leopard’s head, the date-mark, and the rest, are so many official symbols, accurate as to date and sufficient guarantee as to the standard of the metal, but meaningless in regard to the art of the piece on which they stand. The assay offices are merely stamping machines. What Somerset House is to legal documents so the assay offices are to silver and gold plate, and nothing more. Hence the necessity of placing such mechanical control under Government supervision.",
                    },
                };
            })
            .addCase(fetchPhotos.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error;
            });
    },
});

// export const { reducePrevius } = photosSlice.actions

export default photosSlice.reducer;
