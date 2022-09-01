import { useMemo, useState } from "react";
import clsx from "clsx";
import { FigureMainProps } from "../../../types";
import { useTileFx } from "../../../hooks/useTileFx";

const FigureMain: React.FC<FigureMainProps> = ({ dataSort, url }) => {
    const root = useTileFx("figure");
    const [isLoaded, setIsLoaded] = useState(true);
    const handleOnLoad = () => {
        setIsLoaded(false);
    };

    const srcUlr = useMemo(() => {
        return url.main.url;
    }, []);

    console.log(srcUlr);


    const arr: Array<number> = Array(4);
    return (
        <>
            <div
                className="slide__figure slide__figure--main"
                data-sort={dataSort.main.dataSort}
            >
                <div className="slide__figure-inner" ref={root.figure}>
                    {[1, 2, 3, 4].map((_: number, index: number) => {
                        return (
                            <img
                                key={index}
                                className={clsx("slide__figure-img", {
                                    filterImg: isLoaded,
                                })}
                                onLoad={handleOnLoad}
                                src={srcUlr}
                                alt="A description of the image."
                                width="690"
                                height="100%"
                                loading="lazy"
                                decoding="async"
                            ></img>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default FigureMain;
