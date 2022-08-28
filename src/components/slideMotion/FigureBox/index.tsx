import { FigurBoxProps } from "../../../types";
export const FigureBox: React.FC<FigurBoxProps> = ({ imageBoxes, loading }) => {
    return (
        <>
            {loading === "succeeded" ? (
                imageBoxes.map((item: any, i: number) => (
                    <div
                        key={i}
                        className="slide__figure slide__figure--box"
                        data-sort={item.dataSort}
                    >
                        <img
                            className="slide__figure-img"
                            src={item.url}
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
                ))
            ) : (
                <div>loading...</div>
            )}
        </>
    );
};
