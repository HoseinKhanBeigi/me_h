import { FigurBoxProps } from "../../../types";
import clsx from "clsx";
export const FigureBox: React.FC<FigurBoxProps> = ({ imageBoxes, loading }) => {
    return (
        <>
            {imageBoxes.map((item: any, i: number) => (
                <div
                    key={i}
                    className="slide__figure slide__figure--box"
                    data-sort={item.dataSort}
                >
                    <img
                        className={clsx("slide__figure-img", {
                            filterImg: loading !== "succeeded",
                        })}
                        src={loading === "succeeded" && item.url}
                        alt="A description of the image."
                        width="400"
                        height="500"
                        loading="lazy"
                        decoding="async"
                        sizes="(min-width: 66em) 33vw,
                                        (min-width: 44em) 50vw,
                                                        100vw"
                    ></img>
                </div>
            ))}
        </>
    );
};
