import React, { useEffect, useState, useRef, useMemo, ReactNode } from "react";
import { CursorFx } from "./mouseCursor";
import { ImageComponent } from "./slideFigure";
import { toggleSlide } from "./toggleSlide";
import { items } from "../../utils/items";
import { computeIndex } from "../../types"
import { useTileFx } from "../../hooks/useTileFx";
import "../../app.scss";
const charming = require('charming');



function SlideMotion() {
    const slideshow: React.MutableRefObject<HTMLDivElement | any> = useRef();
    const [isAnimating, setIsAnimating] = useState<boolean>();
    const Index: React.MutableRefObject<computeIndex> = useRef({ previousIndex: 0, currentIndex: 0 });
    const layouts: React.MutableRefObject<HTMLDivElement | any> = useRef([]);
    const [count, setCount] = useState(0);
    const prevCountRef: any = useRef();
    useEffect(() => {
        slideshow.current
            .querySelectorAll(".slide")[0]
            .classList.add("slide--current");
        [...slideshow.current.querySelectorAll(".slide")].forEach((el) => {
            layouts.current.push(el);
            const innerTitle = el.querySelector(".slide__title").children;
            [...innerTitle].forEach((inner: any) => charming(inner));
        });
    }, []);

    useEffect(() => {
        prevCountRef.current = count
    }, [count])


    const computeSlides = React.useCallback((index: any) => {
        let figures: any = [];
        let slides = {};

        [...layouts.current[index].querySelectorAll(".slide__figure")].forEach((fig) => {
            figures.push({
                parentElement: fig,
                slideElement: fig.children[0],
            })
        })

        const title = layouts.current[index].querySelector(".slide__title");
        const content = layouts.current[index].querySelector(".slide__content");
        const contentcolor = layouts.current[index].dataset.contentcolor;
        const innerTitle = layouts.current[index].querySelector(".slide__title").children;
        const text = layouts.current[index].querySelector(".slide__text");
        const innerTitleTotal = innerTitle.length;
        const innerTitleMainLetters = [
            ...innerTitle[innerTitleTotal - 1].querySelectorAll(
                "span"
            ),
        ];
        const titleLettersTotal = innerTitleMainLetters.length;
        slides = {
            DOM: {
                el: slideshow.current.children[index],
                content,
                innerTitle,
                title,
                text,
            },
            figures,
            contentcolor,
            innerTitleMainLetters,
            innerTitleTotal,
            titleLettersTotal,
        }
        return slides;
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
                setCount((count) => count + 1)
            } else {
                Index.current.currentIndex = 0;
            }
        } else {
            Index.current.currentIndex = Index.current.currentIndex - 1;
        }
        const currentSlide = computeSlides(Index.current.previousIndex);
        const upcomingSlide = computeSlides(Index.current.currentIndex);
        const completedAnimation = () => {
            setIsAnimating(false);
        };

        toggleSlide(
            upcomingSlide,
            currentSlide,
            completedAnimation,
            slideshow.current,
            Index.current.previousIndex,
            Index.current.currentIndex,
            dir,

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
                            <SlideLayout key={i} numberOfLayout={item.numberOfLayout}>
                                <FigureMain
                                    url={item.FigureMainImg.url}
                                    dataSort={item.FigureMainImg.dataSort}
                                    previousIndex={prevCountRef.current}
                                    currentIndex={count}
                                    numberOfLayout={item.numberOfLayout}
                                />
                                <FigureBox url={item.imageBoxes.url} dataSort={item.imageBoxes.dataSort} />
                                <SlideTitle slideTitle={item.slideTitle} textMeta={item.textMeta} textDescription={item.textDescription} />
                            </SlideLayout>
                        );
                    })}
                </div>
                <CursorFx />
            </main>
        </>
    );
}

export default React.memo(SlideMotion);

interface props {
    children: ReactNode,
    numberOfLayout: string
}

const SlideLayout: React.FC<props> = ({ children, numberOfLayout }) => {
    return <div className={`slide slide--layout-${numberOfLayout}`}>{children}</div>
}


interface FigureMainProps {
    dataSort: any,
    url: string,
    previousIndex: number,
    currentIndex: number,
    numberOfLayout: number
}

const FigureMain: React.FC<FigureMainProps> = ({ dataSort, url, previousIndex, currentIndex, numberOfLayout }) => {
    const tileFX = useTileFx();
    return (
        <div className={`slide__figure slide__figure--main`} data-sort={dataSort}>
            <div className="slide__figure-inner" ref={tileFX.figure}>
                <div
                    className="slide__figure-img"
                    style={{ backgroundImage: `url(${url})` }}
                ></div>
                <div
                    className="slide__figure-img"
                    style={{ backgroundImage: `url(${url})` }}
                ></div>
                <div
                    className="slide__figure-img"
                    style={{ backgroundImage: `url(${url})` }}
                ></div>
                <div
                    className="slide__figure-img"
                    style={{ backgroundImage: `url(${url})` }}
                ></div>
            </div>
        </div>
    )
}
interface FigurBoxProps {
    dataSort: any,
    url: string
}

const FigureBox: React.FC<FigurBoxProps> = ({ url, dataSort }) => {
    return (
        <>
            <div className="slide__figure slide__figure--box" data-sort={dataSort}>
                <div className="slide__figure-img" style={{ backgroundImage: `url(${url})` }}></div>
            </div>
            <div className="slide__figure slide__figure--box" data-sort={dataSort}>
                <div className="slide__figure-img" style={{ backgroundImage: `url(${url})` }}></div>
            </div>
            <div className="slide__figure slide__figure--box" data-sort={dataSort}>
                <div className="slide__figure-img" style={{ backgroundImage: `url(${url})` }}></div>
            </div>
        </>
    )
}

interface SlideTitleProps {
    slideTitle: string,
    textMeta: string,
    textDescription: string
}

const SlideTitle: React.FC<SlideTitleProps> = ({ slideTitle, textMeta, textDescription }) => {
    return (
        <>
            <h2 className="slide__title">
                <span className="slide__title-inner">{slideTitle}</span>
                <span className="slide__title-inner">{slideTitle}</span>
                <span className="slide__title-inner">{slideTitle}</span>
            </h2>
            <div className="slide__text slide__text--right">
                <p className="slide__text-meta">{textMeta}</p>
                <p className="slide__text-description">{textDescription}</p>
                <a className="slide__text-link" data-hover href="#">+</a>
            </div>
        </>
    )
}



{/* <ImageComponent
    key={i}
    slideTitle={item.slideTitle}
    textMeta={item.textMeta}
    textDescription={item.textDescription}
    imageBoxes={item.imageBoxes}
    FigureMainImg={item.FigureMainImg}
    numberOfLayout={item.numberOfLayout}
    content={item.content}
/> */}