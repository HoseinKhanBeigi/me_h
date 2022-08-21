import React, { useEffect, useState, useRef, useMemo, ReactNode } from "react";
import { CursorFx } from "./mouseCursor";
import { toggleSlide } from "./toggleSilde";
import { items } from "../../utils/items";
import { computeIndex } from "../../types";
import { FigureMain } from "./FigureMain";
import { FigureBox } from "./FigureBox";
import { SlideTitle } from "./SlideTitle";
import { slide } from "./hook/slide";
import "../../app.scss";

function SlideMotion() {
    const slideshow: React.MutableRefObject<HTMLDivElement | any> = useRef();
    const [isAnimating, setIsAnimating] = useState<boolean>();
    const Index: React.MutableRefObject<computeIndex> = useRef({
        previousIndex: 0,
        currentIndex: 0,
    });
    const layouts: React.MutableRefObject<HTMLDivElement | any> = useRef([]);

    useEffect(() => {
        [...slideshow.current.querySelectorAll(".slide")].forEach((el, i) => {
            layouts.current.push(slide(el));
        });
        layouts.current[0].setCurrent();
    }, []);

    const navigate = (dir: string) => {
        if (isAnimating) {
            return;
        }
        setIsAnimating(false);
        Index.current.previousIndex = Index.current.currentIndex;
        if (dir === "right") {
            if (Index.current.currentIndex < items.length - 1) {
                Index.current.currentIndex = Index.current.currentIndex + 1;
            } else {
                Index.current.currentIndex = 0;
            }
        } else {
            Index.current.currentIndex = Index.current.currentIndex - 1;
        }

        const currentSlide = layouts.current[Index.current.previousIndex];
        const upcomingSlide = layouts.current[Index.current.currentIndex];
        const completedAnimation = () => {
            setIsAnimating(false);
        };
        toggleSlide(upcomingSlide, currentSlide, completedAnimation, dir);
    };

    return (
        <>
            <svg className="hidden">
                <symbol id="icon-arrow" viewBox="0 0 24 24">
                    <title>arrow</title>
                    <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />
                </symbol>
                <symbol id="icon-nav" viewBox="0 0 407 660">
                    <title>caret</title>
                    <path d="M77 0L0 77l253 253L0 583l77 77 330-330z" />
                </symbol>
            </svg>
            <main>
                <div className="frame">
                    <div className="frame__title-wrap">
                        <h1 className="frame__title">Layer Motion Slideshow</h1>
                        <div className="nav">
                            <div className="nav__counter">
                                {/* <span>{prevCountRef.current}</span>/<span>{count}</span> */}
                            </div>
                            <div className="nav__arrows">
                                <button
                                    className="nav__arrow nav__arrow--prev"
                                    data-hover
                                    onClick={() => navigate("left")}
                                >
                                    <svg className="icon icon--rotated icon--nav">
                                        <use xlinkHref="#icon-nav"></use>
                                    </svg>
                                </button>
                                <button
                                    className="nav__arrow nav__arrow--next"
                                    data-hover
                                    onClick={() => navigate("right")}
                                >
                                    <svg className="icon icon--nav">
                                        <use xlinkHref="#icon-nav"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slideshow" ref={slideshow}>
                    {items.map((item: any, i) => {
                        return (
                            <div
                                className={`slide slide--layout-${item.numberOfLayout}`}
                                key={i}
                            >
                                <FigureMain
                                    url={item.FigureMainImg.url}
                                    dataSort={item.FigureMainImg.dataSort}
                                />
                                <FigureBox
                                    url={item.imageBoxes.url}
                                    dataSort={item.imageBoxes.dataSort}
                                />
                                <SlideTitle
                                    slideTitle={item.slideTitle}
                                    textMeta={item.textMeta}
                                    textDescription={item.textDescription}
                                />
                            </div>
                        );
                    })}
                </div>
                <CursorFx />
            </main>
        </>
    );
}

export default React.memo(SlideMotion);
