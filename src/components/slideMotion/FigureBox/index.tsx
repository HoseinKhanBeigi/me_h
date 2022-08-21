import { FigurBoxProps } from "../../../types"
export const FigureBox: React.FC<FigurBoxProps> = ({ url, dataSort }) => {
    return (
        <>
            <div className="slide__figure slide__figure--box" data-sort={dataSort}>
                <div className="slide__figure-img" style={{ backgroundImage: `url(${url})` }}></div>
            </div>
            <div className="slide__figure slide__figure--box" data-sort={dataSort}>
                <div className="slide__figure-img" style={{ backgroundImage: `url(${url})` }}></div>
            </div>
            <div className="slide__figure slide__figure--box" data-sort={dataSort}>
                <div className="slide__figure-img" style={{ backgroundImage: `url(${url})` }}></div>
            </div>
        </>
    )
}