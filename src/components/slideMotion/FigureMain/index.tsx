
import { FigureMainProps } from "../../../types"

export const FigureMain: React.FC<FigureMainProps> = ({ dataSort, url }) => {
    return (
        <div className={`slide__figure slide__figure--main`} data-sort={dataSort}>
            <div className="slide__figure-inner" >
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
