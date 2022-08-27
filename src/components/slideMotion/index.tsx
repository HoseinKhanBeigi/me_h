import React, { useEffect, useState, useRef, useMemo, ReactNode } from "react";
import { CursorFx } from "./mouseCursor";
import { gsap } from "gsap";
import { currentSlide } from "./currentSlide";
import { upComingSlide } from "./upComingSlide";
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
import { fetchPhotos } from "../../features/actions";
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
        currentIndex: 1,
    });
    const root: React.MutableRefObject<HTMLDivElement | any> = useRef();
    const { entities, status, error, clone } = useAppSelector(
        (state) => state.photoSlice
    );

    useEffect(() => {
        [...slideshow.current.querySelectorAll(".slide")].forEach((el, i) => {
            slides.current = slide(el);
        });
    }, [Index.current.currentIndex, status]);

    const initialPhotos = () => {
        return new Promise<void>((resolve) => {
            dispatch(fetchPhotos({ page: 1 }));
            resolve();
        });
    };
    useEffect(() => {
        initialPhotos().then(() => {
            upComingSlide(slides.current, "right");
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
    const computeSlide = (dir: string, index: number) => {
        return new Promise((resolve) => {
            currentSlide(slides.current, dir, setStateItem, resolve, index);
        });
    };

    const navigation = (dir: string) => {
        Index.current.currentIndex =
            dir === "right"
                ? Index.current.currentIndex < 100 - 1
                    ? (Index.current.currentIndex = Index.current.currentIndex + 1)
                    : 0
                : Index.current.currentIndex > 0
                    ? Index.current.currentIndex - 1
                    : 100 - 1;

        computeSlide(dir, Index.current.currentIndex)
            .then(() => {
                dispatch(fetchPhotos({ page: Index.current.currentIndex }));
            })
            .finally(() => {
                upComingSlide(slides.current, dir);
            });
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
                <Header
                    navigate={navigation}
                    currentIndex={PaginationSlide.currentIndex}
                    length={100}
                    isContentOpen={isContentOpen}
                />

                <div className="slideshow" ref={slideshow}>
                    <div
                        className={`slide slide--layout-1`}
                        data-contentcolor={items2[stateItem].dataContentcolor}
                        ref={root}
                    >
                        {status === "succeeded" && (
                            <>
                                <FigureMain
                                    url={clone.main.url}
                                    dataSort={clone.main.dataSort}
                                />
                                <FigureBox imageBoxes={clone.imageBoxes} />
                            </>
                        )}
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
