import { useState } from "react"
import clsx from "clsx";
import { FigureMainProps } from "../../../types";
import { useTileFx } from "../../../hooks/useTileFx";


const FigureMain: React.FC<FigureMainProps> = ({
    dataSort,
    url,
    loading,
}) => {
    const root = useTileFx("figure");
    const [isLoaded, setIsLoaded] = useState(true);
    const handleOnLoad = () => {
        setIsLoaded(false)
    }

    const arr: any = Array(4).keys()

    return (
        <>
            <div className="slide__figure slide__figure--main" data-sort={dataSort}>
                <div className="slide__figure-inner" ref={root.figure}>
                    {[...arr].map((_: number, index: number) => {
                        return <img
                            key={index}
                            className={clsx("slide__figure-img", {
                                filterImg: isLoaded,
                            })}
                            onLoad={handleOnLoad}
                            src={url}
                            alt="A description of the image."
                            width="690"
                            height="100%"
                            loading="lazy"
                            decoding="async"
                        ></img>
                    })}
                </div>
            </div>
        </>
    );
};

export default FigureMain
