import { useEffect, useRef } from "react";
import { SlideTitleProps } from "../../../types";
import { useTileFx } from "../../../hooks/useTileFx";
import { gsap } from "gsap";
import { timeLine } from "../gsap/timeLine";
import { animationSettings, sortedslide, shuffleArray } from "../../../utils";
import { Charming } from "../hook/charming"
// const charming = require("charming");

export const SlideTitle: React.FC<SlideTitleProps> = ({
    slideTitle,
    textMeta,
    textDescription,
    showContent,
}) => {
    const options = {
        valuesFromTo: [-50, 50],
        lerpFactorOuter: 0.1,
        lerpFactor: (pos: any) => 0.02 * pos + 0.02,
    };
    const root = useTileFx(options);
    return (
        <>
            <h2 className="slide__title" ref={root.figure}>
                <span className="slide__title-inner"><Charming letters={slideTitle} /></span>
                <span className="slide__title-inner"><Charming letters={slideTitle} /></span>
                <span className="slide__title-inner"><Charming letters={slideTitle} /></span>
            </h2>
            <div className="slide__text slide__text--right">
                <p className="slide__text-meta">{textMeta}</p>
                <p className="slide__text-description">{textDescription}</p>
                <a
                    className="slide__text-link"
                    data-hover
                    onClick={() => showContent("show")}
                >
                    +
                </a>
            </div>
        </>
    );
};
