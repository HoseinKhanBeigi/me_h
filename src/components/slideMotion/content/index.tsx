import { ContentProps } from "../../../types"
export const Content: React.FC<ContentProps> = ({ p1, p2, p3, hideContent }) => {
    return (
        <>
            <button onClick={() => hideContent("hide")} className="slide__back" data-hover>
                <svg className="icon icon--back"><use xlinkHref="#icon-arrow"></use></svg>
            </button>
            <div className="slide__content">
                <p>{p1}</p>
                <p>{p2}</p>
                <p>{p3}</p>
            </div>
        </>
    )
}