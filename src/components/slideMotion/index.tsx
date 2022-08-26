import React, { useEffect, useState, useRef, useMemo, ReactNode } from "react";
import { CursorFx } from "./mouseCursor";
import { gsap } from "gsap";
import { currentSlide } from "./currentSlide";
import { upComingSlide } from "./upComingSlide"
import { toggleContent } from "./toggleContent";
import { computeIndex } from "../../types";
import { FigureMain } from "./FigureMain";
import { FigureBox } from "./FigureBox";
import { Content } from "./content";
import { Header } from "./header";
import { SlideTitle } from "./SlideTitle";
import { slide } from "./hook/slide";
import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../hooks/useDispatch";
import { items2 } from "../../utils/items";
import "../../app.scss";

function SlideMotion() {
    const dispatch = useAppDispatch();
    const [stateItem, setStateItem] = useState(0);
    const { PaginationSlide, Slides } = useSelector((state: any) => state);
    const slideshow: React.MutableRefObject<HTMLDivElement | any> = useRef();
    const [isContentOpen, setIsContentOpen] = useState<boolean>(false);
    const slides: React.MutableRefObject<HTMLDivElement | any> = useRef();
    const Index: React.MutableRefObject<computeIndex> = useRef({
        previousIndex: 0,
        currentIndex: 0,
    });

    const root: React.MutableRefObject<HTMLDivElement | any> = useRef()

    const { entities, status, error, clone } = useAppSelector(
        (state) => state.photoSlice
    );

    useEffect(() => {
        // dispatch(fetchPhotos(1));
        [...slideshow.current.querySelectorAll(".slide")].forEach((el, i) => {
            slides.current = slide(el);
        });
    }, []);


    const completedAnimationContent = (action: string) => {
        if (action === "hide") {
            setIsContentOpen(false);
        }
    };
    const handleContent = (action: string) => {
        if (action === "show") {
            setIsContentOpen(true);
        }
        const currentSlide = slides.current;
        toggleContent(action, currentSlide, completedAnimationContent);
    };

    const navigation = (dir: string) => {
        if (dir === "right") {
            if (Index.current.currentIndex < items2.length - 1) {
                Index.current.currentIndex = Index.current.currentIndex + 1;
            } else {
                Index.current.currentIndex = 0;
            }
        } else {
            Index.current.currentIndex = Index.current.currentIndex - 1;
        }
        computeSlide(dir, Index.current.currentIndex).then(() => upComingSlide(slides.current, dir));
    };

    useEffect(() => {
        upComingSlide(slides.current, "right")
    }, []);

    const computeSlide = (dir: string, index: number) => {
        return new Promise<void>((resolve) => {
            currentSlide(slides.current, dir, resolve, setStateItem, index)
        })
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
                <Header
                    navigate={navigation}
                    currentIndex={PaginationSlide.currentIndex}
                    length={1}
                    isContentOpen={isContentOpen}
                />
                <div className="slideshow" ref={slideshow}>
                    <div
                        className={`slide slide--layout-${items2[stateItem].numberOfLayout}`}
                        data-contentcolor={items2[stateItem].dataContentcolor}
                        ref={root}
                    >
                        <FigureMain
                            url={items2[stateItem].FigureMainImg.url}
                            dataSort={items2[stateItem].FigureMainImg.dataSort}
                        />
                        <FigureBox imageBoxes={items2[stateItem].imageBoxes} />
                        <SlideTitle
                            slideTitle={items2[stateItem].slideTitle}
                            textMeta={items2[stateItem].textMeta}
                            textDescription={items2[stateItem].textDescription}
                            showContent={handleContent}
                        />
                        <Content
                            p1={items2[stateItem].content.p1}
                            p2={items2[stateItem].content.p2}
                            p3={items2[stateItem].content.p3}
                            hideContent={handleContent}
                        />
                    </div>
                </div>
                <CursorFx />
            </main>
        </>
    );
}

export default React.memo(SlideMotion);
