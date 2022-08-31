import React, {
    useEffect,
    useState,
    useRef,
    useContext,
    useLayoutEffect,
    useCallback,
} from "react";
import { CursorFx } from "./mouseCursor";
import { currentSlide } from "./currentSlide";
import { upComingSlide } from "./upComingSlide";
import { toggleContent } from "./toggleContent";
import FigureMain from "./FigureMain";
import FigureBox from "./FigureBox";
import { Content } from "./content";
import { Header } from "./header";
import { SlideTitle } from "./SlideTitle";
import { useAppSelector, useAppDispatch } from "../../hooks/useDispatch";
import { fetchPhotos } from "../../features/actions";
import { useParams } from "react-router-dom";
import { DomContext } from "../../context/domContext";
import "../../app.scss";

function SlideMotion() {
    const dispatch = useAppDispatch();
    const params = useParams();
    const slide: any = useContext(DomContext);
    const slideshow: React.MutableRefObject<HTMLDivElement | any> = useRef();
    const slides: React.MutableRefObject<HTMLDivElement | any> = useRef();
    const root: React.MutableRefObject<HTMLDivElement | any> = useRef();
    const dirct: React.MutableRefObject<string> = useRef("right");
    const [isContentOpen, setIsContentOpen] = useState<boolean>(false);
    const { status, clone } = useAppSelector((state) => state.photoSlice);

    useLayoutEffect(() => {
        if (status === "succeeded") {
            [...slideshow.current.querySelectorAll(".slide")].forEach((el, i) => {
                slides.current = slide(el);
            });
        }
    }, [params.id, status]);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPhotos({ page: params.id ?? 1 }));
        }
    }, [dispatch, status]);

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
    const getDispatch = (index: number, dir: string) => {
        dispatch(fetchPhotos({ page: index }));
    };

    const navigation = useCallback((dir: string, index: number) => {
        dirct.current = dir;
        currentSlide(slides.current, dir, getDispatch, index);
    }, []);

    useLayoutEffect(() => {
        if (status === "succeeded") {
            upComingSlide(slides.current, dirct.current);
        }
    }, [status]);

    return (
        <>
            <main>
                <Header navigate={navigation} isContentOpen={isContentOpen} />
                <div className="slideshow" ref={slideshow}>
                    <div
                        className={`slide slide--layout-${clone.layout}`}
                        data-contentcolor={clone.dataContentcolor}
                        ref={root}
                    >
                        {status !== "succeeded" ? (
                            <div className="loading" />
                        ) : (
                            <>
                                <FigureMain url={clone} dataSort={clone} loading={status} />
                                <FigureBox imageBoxes={clone.imageBoxes} loading={status} />
                                <SlideTitle
                                    slideTitle={clone.slideTitle}
                                    textMeta={clone.textMeta}
                                    textDescription={clone.textDescription}
                                    showContent={handleContent}
                                />
                                <Content
                                    p1={clone}
                                    p2={clone}
                                    p3={clone}
                                    hideContent={handleContent}
                                />
                            </>
                        )}
                    </div>
                </div>
                <CursorFx />
            </main>
        </>
    );
}

export default React.memo(SlideMotion);
