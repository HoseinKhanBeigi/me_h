
import { HeaderInterface } from "../../../types"
export const Header: React.FC<HeaderInterface> = ({ navigate, currentIndex, length }) => {
    return (
        <div className="frame">
            <div className="frame__title-wrap">
                <h1 className="frame__title">Layer Motion Slideshow in React</h1>
                <div className="nav">
                    <div className="nav__counter">
                        <span>{currentIndex}</span>/<span>{length}</span>
                    </div>
                    <div className="nav__arrows">
                        <button
                            className="nav__arrow nav__arrow--prev"
                            data-hover
                            onClick={() => navigate("left")}
                        >
                            <svg className="icon icon--rotated icon--nav">
                                <use xlinkHref="#icon-nav"></use>
                            </svg>
                        </button>
                        <button
                            className="nav__arrow nav__arrow--next"
                            data-hover
                            onClick={() => navigate("right")}
                        >
                            <svg className="icon icon--nav">
                                <use xlinkHref="#icon-nav"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}