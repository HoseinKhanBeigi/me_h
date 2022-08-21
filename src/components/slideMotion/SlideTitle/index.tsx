import { SlideTitleProps } from "../../../types"
export const SlideTitle: React.FC<SlideTitleProps> = ({ slideTitle, textMeta, textDescription }) => {
    return (
        <>
            <h2 className="slide__title">
                <span className="slide__title-inner">{slideTitle}</span>
                <span className="slide__title-inner">{slideTitle}</span>
                <span className="slide__title-inner">{slideTitle}</span>
            </h2>
            <div className="slide__text slide__text--right">
                <p className="slide__text-meta">{textMeta}</p>
                <p className="slide__text-description">{textDescription}</p>
                <a className="slide__text-link" data-hover href="#">+</a>
            </div>
        </>
    )
}