import React, { useEffect, useState, useRef } from "react";
import { CursorFx } from "./mouseCursor";
import { ImageComponent } from "./slideFigure";
import { computeTimeLine } from "./computeTimeLine";
import { items } from "./items";
import { computeIndex } from "../../types"
import "../../app.scss";



function SlideMotion() {
    const slideshow: React.MutableRefObject<HTMLDivElement | any> = useRef();
    const [isAnimating, setIsAnimating] = useState<boolean>();
    const Index: React.MutableRefObject<computeIndex> = useRef({ previousIndex: 0, currentIndex: 0 });
    const slides: React.MutableRefObject<HTMLDivElement | any> = useRef([]);

    useEffect(() => {
        slideshow.current
            .querySelectorAll(".slide")[0]
            .classList.add("slide--current");
        [...slideshow.current.querySelectorAll(".slide")].forEach((el) => {
            slides.current.push(el);
        });
    }, []);

    const computeSlides = (index: number) => {
        const s: any = [];
        [...slides.current[index].children].map((el: HTMLDivElement) => {
            return s.push({
                parentElement: el,
                slideElement: el.children[0],
            });
        });
        return s;
    };

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

        const currentSlide = computeSlides(Index.current.previousIndex);
        const upcomingSlide = computeSlides(Index.current.currentIndex);
        const Completed = () => {
            setIsAnimating(false);
        };

        computeTimeLine(
            upcomingSlide,
            currentSlide,
            Completed,
            slideshow.current,
            Index.current.previousIndex,
            Index.current.currentIndex,
            dir
        );
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
                                {/* <span>{prewIndex.current}</span>/<span>{currentIndex}</span> */}
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
                            <ImageComponent
                                key={i}
                                slideTitle={item.slideTitle}
                                textMeta={item.textMeta}
                                textDescription={item.textDescription}
                                imageBoxes={item.imageBoxes}
                                FigureMainImg={item.FigureMainImg}
                                numberOfLayout={item.numberOfLayout}
                            />
                        );
                    })}
                </div>
                <CursorFx />
            </main>
        </>
    );
}

export default SlideMotion;
