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
        if (status === "succeeded") {
            [...slideshow.current.querySelectorAll(".slide")].forEach((el, i) => {
                slides.current = slide(el);
            });
        }

    }, [Index.current.currentIndex, status]);

    function figure(el: HTMLDivElement | any) {
        const img = el.querySelector(".slide__figure-img");
        const parentElement = el;
        let slideElement = img;
        let isMain = false;
        let inner = "";

        if (el.classList.contains("slide__figure--main")) {
            isMain = true;
            inner = el.querySelector(".slide__figure-inner");
            slideElement = inner;
        }
        return {
            parentElement,
            isMain,
            slideElement,
            inner,
        }

    }

    function slide(el: HTMLDivElement | any) {
        let figures: any = [];
        [...el.querySelectorAll(".slide__figure")].forEach((fig) => {
            figures.push(figure(fig));
        });
        const title = el.querySelector(".slide__title");
        const content = el.querySelector(".slide__content");
        const contentcolor = el.dataset.contentcolor;
        const innerTitle = el.querySelector(".slide__title").children;
        const text = el.querySelector(".slide__text");
        const innerTitleTotal = innerTitle.length;
        const innerTitleMainLetters = [...innerTitle[innerTitleTotal - 1].children];
        const titleLettersTotal = innerTitleMainLetters.length;
        const backFromContentCtrl = el.querySelector(".slide__back");
        return {
            DOM: {
                el,
                content,
                innerTitle,
                backFromContentCtrl,
                title,
                text,
            },
            figures,
            contentcolor,
            innerTitleMainLetters,
            innerTitleTotal,
            titleLettersTotal,
        };
    }

    const initialPhotos = () => {
        return new Promise<void>((resolve) => {
            dispatch(fetchPhotos({ page: 1 }));
            resolve();
        });
    };
    useEffect(() => {
        initialPhotos().then(() => {
            if (status === "succeeded") {
                upComingSlide(slides.current, "right");
            }
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
                if (status === "succeeded") {
                    upComingSlide(slides.current, dir);
                }
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
            {status === "succeeded" && (
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

                            <FigureMain
                                url={clone.main.url}
                                dataSort={clone.main.dataSort}
                                loading={status}
                            />

                            <FigureBox imageBoxes={clone.imageBoxes} loading={status} />
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
            )}
        </>
    );
}

export default React.memo(SlideMotion);
