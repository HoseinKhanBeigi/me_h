import { FigureMainProps } from "../../../types";
import { useTileFx } from "../../../hooks/useTileFx";

export const FigureMain: React.FC<FigureMainProps> = ({
    dataSort,
    url,
    loading,
}) => {
    const root = useTileFx("figure");
    return (
        <>

            <div className={`slide__figure slide__figure--main`} data-sort={dataSort}>
                <div className="slide__figure-inner" ref={root.figure}>
                    <img
                        className="slide__figure-img"
                        src={url}
                        alt="A description of the image."
                        width="690"
                        height="100%"
                        loading="lazy"
                        decoding="async"
                    ></img>
                    <img
                        className="slide__figure-img"
                        src={url}
                        alt="A description of the image."
                        width="690"
                        height="100%"
                        loading="lazy"
                        decoding="async"
                    ></img>
                    <img
                        className="slide__figure-img"
                        src={url}
                        alt="A description of the image."
                        width="690"
                        height="100%"
                        loading="lazy"
                        decoding="async"
                    ></img>
                    <img
                        className="slide__figure-img"
                        src={url}
                        alt="A description of the image."
                        width="690"
                        height="100%"
                        loading="lazy"
                        decoding="async"
                    ></img>




                </div>
            </div>
        </>
    );
};
