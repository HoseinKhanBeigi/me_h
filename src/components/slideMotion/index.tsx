import React, {
    useEffect,
    useState,
    useRef,
    useMemo,
} from "react";
import { CursorFx } from "./mouseCursor";
import { currentSlide } from "./currentSlide";
import { upComingSlide } from "./upComingSlide";
import { toggleContent } from "./toggleContent";
import { FigureMain } from "./FigureMain";
import { FigureBox } from "./FigureBox";
import { Content } from "./content";
import { Header } from "./header";
import { SlideTitle } from "./SlideTitle";
import { useAppSelector, useAppDispatch } from "../../hooks/useDispatch";
import { fetchPhotos } from "../../features/actions";
import { useParams } from "react-router-dom";
import { getRandom } from "../../utils/index";
import "../../app.scss";

function SlideMotion() {
    const getRandomNumber = useMemo(() => {
        return getRandom(5);
    }, []);
    const dispatch = useAppDispatch();
    const params = useParams();
    const slideshow: React.MutableRefObject<HTMLDivElement | any> = useRef();
    const slides: React.MutableRefObject<HTMLDivElement | any> = useRef();
    const root: React.MutableRefObject<HTMLDivElement | any> = useRef();
    const [isContentOpen, setIsContentOpen] = useState<boolean>(false);
    const [layout, setLayout] = useState(getRandomNumber);
    const { status, clone } = useAppSelector(
        (state) => state.photoSlice
    );


    useEffect(() => {
        if (status === "succeeded") {
            [...slideshow.current.querySelectorAll(".slide")].forEach((el, i) => {
                slides.current = slide(el);
            });
        }
    }, [params.id, status]);
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
        };
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
    const computeSlide = (dir: string) => {
        return new Promise((resolve) => {
            currentSlide(slides.current, dir, resolve);
        });
    };

    const navigation = (dir: string, index: number) => {
        computeSlide(dir)
            .then(() => {
                dispatch(fetchPhotos({ page: index }));
            })
            .finally(() => {
                if (status === "succeeded") {
                    upComingSlide(slides.current, dir);
                    setLayout(getRandomNumber);
                }
            });
    };

    return (
        <>
            {status === "succeeded" && (
                <main>
                    <Header navigate={navigation} isContentOpen={isContentOpen} />
                    <div className="slideshow" ref={slideshow}>
                        <div
                            className={`slide slide--layout-${layout}`}
                            data-contentcolor={clone.dataContentcolor}
                            ref={root}
                        >
                            <FigureMain
                                url={clone.main.url}
                                dataSort={clone.main.dataSort}
                                loading={status}
                            />

                            <FigureBox imageBoxes={clone.imageBoxes} loading={status} />
                            <SlideTitle
                                slideTitle={clone.slideTitle}
                                textMeta={clone.textMeta}
                                textDescription={clone.textDescription}
                                showContent={handleContent}
                            />
                            <Content
                                p1={clone.content.p1}
                                p2={clone.content.p2}
                                p3={clone.content.p3}
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
