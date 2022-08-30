import { useState } from "react"
import { FigurBoxProps } from "../../../types";
import clsx from "clsx";
const FigureBox: React.FC<FigurBoxProps> = ({ imageBoxes, loading }) => {
    const [isLoaded, setIsLoaded] = useState(true);
    const handleOnLoad = () => {
        setIsLoaded(false)
    }
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
                            filterImg: isLoaded,
                        })}
                        src={item.url}
                        alt="A description of the image."
                        width="400"
                        height="500"
                        loading="lazy"
                        decoding="async"
                        onLoad={handleOnLoad}
                        sizes="(min-width: 66em) 33vw,
                                        (min-width: 44em) 50vw,
                                                        100vw"
                    ></img>
                </div>
            ))}
        </>
    );
};

export default FigureBox
