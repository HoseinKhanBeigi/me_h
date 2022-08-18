import React, { forwardRef, useEffect, useRef, useState } from "react";
import { ImageComponentProps, layouts } from "../../../types";

export const ImageComponent = ({ FigureMainImg, textMeta, textDescription, slideTitle, numberOfLayout }: layouts) => {
    return (
        <div className={`slide slide--layout-${numberOfLayout}`}>
            <div className={`slide__figure slide__figure--main`} data-sort={FigureMainImg.dataSort}>
                <div className="slide__figure-inner">
                    <div
                        className="slide__figure-img"
                        style={{ backgroundImage: `url(${FigureMainImg.url})` }}
                    ></div>
                    <div
                        className="slide__figure-img"
                        style={{ backgroundImage: `url(${FigureMainImg.url})` }}
                    ></div>
                    <div
                        className="slide__figure-img"
                        style={{ backgroundImage: `url(${FigureMainImg.url})` }}
                    ></div>
                    <div
                        className="slide__figure-img"
                        style={{ backgroundImage: `url(${FigureMainImg.url})` }}
                    ></div>
                </div>
            </div>
            <div className="slide__figure slide__figure--box" data-sort="2">
                <div className="slide__figure-img"></div>
            </div>
            <div className="slide__figure slide__figure--box" data-sort="3">
                <div className="slide__figure-img"></div>
            </div>
            <div className="slide__figure slide__figure--box" data-sort="4">
                <div className="slide__figure-img"></div>
            </div>

        </div>
    );
};

export default React.memo(ImageComponent);
