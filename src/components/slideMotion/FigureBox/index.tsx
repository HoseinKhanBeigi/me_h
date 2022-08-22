import { FigurBoxProps } from "../../../types";
export const FigureBox: React.FC<FigurBoxProps> = ({ imageBoxes }) => {
    return (
        <>
            {imageBoxes.map((item: any, i: number) => (
                <div
                    key={i}
                    className="slide__figure slide__figure--box"
                    data-sort={item.dataSort}
                >
                    <div
                        className="slide__figure-img"
                        style={{ backgroundImage: `url(${item.url})` }}
                    ></div>
                </div>
            ))}
        </>
    );
};
