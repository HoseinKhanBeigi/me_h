import React, { useEffect, useState, useRef, useMemo, ReactNode } from "react";
import { CursorFx } from "./mouseCursor";
import { toggleSlide } from "./toggleSilde";
import { toggleContent } from "./toggleContent"
import { computeIndex } from "../../types";
import { FigureMain } from "./FigureMain";
import { FigureBox } from "./FigureBox";
import { Content } from "./content"
import { Header } from "./header"
import { SlideTitle } from "./SlideTitle";
import { slide } from "./hook/slide";
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentIndex } from '../../features/PaginationSlide';
import { slideList } from '../../features/figures'
import "../../app.scss";

function SlideMotion() {
    const dispatch = useDispatch();
    const { PaginationSlide, Slides } = useSelector((state: any) => state);
    const slideshow: React.MutableRefObject<HTMLDivElement | any> = useRef();
    const [isAnimating, setIsAnimating] = useState<boolean>();
    const slides: React.MutableRefObject<HTMLDivElement | any> = useRef([]);
    const Index: React.MutableRefObject<computeIndex> = useRef({
        previousIndex: 0,
        currentIndex: 0,
    });

    const items = useMemo(() => {
        return Slides.items;
    }, [Slides.items])


    useEffect(() => {
        dispatch(slideList());
        [...slideshow.current.querySelectorAll(".slide")].forEach((el, i) => {
            slides.current.push(slide(el));
        });
        slides.current[0].setCurrent();
    }, []);

    const navigate = (dir: string) => {
        if (isAnimating) {
            return;
        }
        setIsAnimating(true);
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
        const currentSlide = slides.current[Index.current.previousIndex];
        const upcomingSlide = slides.current[Index.current.currentIndex];
        dispatch(setCurrentIndex(Index.current.currentIndex + 1))
        const completedAnimation = () => {
            setIsAnimating(false);
        };
        toggleSlide(upcomingSlide, currentSlide, completedAnimation, dir);
    };
    const completedAnimation = () => {
        setIsAnimating(false);
    };
    const handleContent = (state: string) => {
        if (isAnimating) {
            return;
        }
        setIsAnimating(true);
        const currentSlide = slides.current[Index.current.currentIndex];
        toggleContent(state, currentSlide, completedAnimation)
    }

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
                <Header navigate={navigate} currentIndex={PaginationSlide.currentIndex} length={items.length} />
                <div className="slideshow" ref={slideshow}>
                    {items.map((item: any, i: number) => {
                        return (
                            <div
                                className={`slide slide--layout-${item.numberOfLayout}`}
                                key={i}
                                data-contentcolor={item.dataContentcolor}
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
                                    showContent={handleContent}
                                />
                                <Content p1={item.content.p1} p2={item.content.p2} p3={item.content.p3} hideContent={handleContent} />
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
