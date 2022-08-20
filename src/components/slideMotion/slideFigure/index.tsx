import React, { forwardRef, useEffect, useRef, useState } from "react";
import { ImageComponentProps, layouts } from "../../../types";
import { useTileFx } from "../../../hooks/useTileFx";
export const ImageComponent = ({ FigureMainImg, textMeta, textDescription, slideTitle, numberOfLayout, content }: layouts) => {
    const tileX = useTileFx();
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
            <h2 className="slide__title" ref={tileX.figure}>
                <span className="slide__title-inner">{slideTitle}</span>
                <span className="slide__title-inner">{slideTitle}</span>
                <span className="slide__title-inner">{slideTitle}</span>
            </h2>
            <div className="slide__text slide__text--right">
                <p className="slide__text-meta">{textMeta}</p>
                <p className="slide__text-description">{textDescription}</p>
                <a className="slide__text-link" data-hover href="#">+</a>
            </div>
            <button className="slide__back" data-hover>
                <svg className="icon icon--back"><use xlinkHref="#icon-arrow"></use></svg>
            </button>
            <div className="slide__content" >
                <p>{content.p1}</p>
                <p>{content.p2}</p>
                <p>{content.p3}</p>
            </div>
        </div>
    );
};

export default React.memo(ImageComponent);
