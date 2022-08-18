import React, { useEffect, useRef, useState } from "react";
import {
    layouts,
    ImageComponentProps,
    smallImageComponentProps,
    ListOfFigureBoxProps,
    mainImageComponentProps,
} from "../../../types";
import { useTileFx } from "../../../hooks/useTileFx";

export const ImageComponent = ({
    dataSort,
    url,
    shape,
}: smallImageComponentProps) => {
    return (
        <div className={`slide__figure slide__figure--${shape}`} data-sort={dataSort}>
            <div
                className="slide__figure-img"
                style={{ backgroundImage: `url(${url})` }}
            ></div>
        </div>
    );
};

const SlideLayout = ({
    slideTitle,
    textMeta,
    textDescription,
    imageBoxes,
    FigureMainImg,
    numberOfLayout,
}: layouts) => {
    return (
        <div
            className={`slide slide--layout-${numberOfLayout}`}
            data-number={numberOfLayout}
        >
            <ImageComponent url={FigureMainImg.url} dataSort={FigureMainImg.dataSort} shape={FigureMainImg.shape} />
            <ImageComponent url={imageBoxes[0].url} dataSort={imageBoxes[0].dataSort} shape={imageBoxes[0].shape} />
            <ImageComponent url={imageBoxes[1].url} dataSort={imageBoxes[1].dataSort} shape={imageBoxes[1].shape} />
            <ImageComponent url={imageBoxes[2].url} dataSort={imageBoxes[2].dataSort} shape={imageBoxes[2].shape} />
            <h2 className="slide__title">{slideTitle}</h2>
            <div className="slide__text slide__text--right">
                <p className="slide__text-meta">{textMeta}</p>
                <p className="slide__text-description">{textDescription}</p>
                <a className="slide__text-link" data-hover href="#">
                    +
                </a>
            </div>
        </div>
    );
};

export default React.memo(SlideLayout);
