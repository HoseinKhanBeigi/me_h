
import { FigureMainProps } from "../../../types"
import { useTileFx } from "../../../hooks/useTileFx"

export const FigureMain: React.FC<FigureMainProps> = ({ dataSort, url }) => {
    const root = useTileFx('figure');
    return (
        <div className={`slide__figure slide__figure--main`} data-sort={dataSort}>
            <div className="slide__figure-inner" ref={root.figure}>
                <div
                    className="slide__figure-img"
                    style={{ backgroundImage: `url(${url})` }}
                ></div>
                <div
                    className="slide__figure-img"
                    style={{ backgroundImage: `url(${url})` }}
                ></div>
                <div
                    className="slide__figure-img"
                    style={{ backgroundImage: `url(${url})` }}
                ></div>
                <div
                    className="slide__figure-img"
                    style={{ backgroundImage: `url(${url})` }}
                ></div>
            </div>
        </div>
    )
}
