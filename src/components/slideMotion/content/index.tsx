import { ContentProps } from "../../../types";
import ArrowBack from '@mui/icons-material/ArrowBack';
export const Content: React.FC<ContentProps> = ({ p1, p2, p3, hideContent }) => {
    return (
        <>
            <button onClick={() => hideContent("hide")} className="slide__back" data-hover>
                <ArrowBack />
            </button>
            <div className="slide__content">
                <p>{p1.content.p1}</p>
                <p>{p2.content.p2}</p>
                <p>{p3.content.p3}</p>
            </div>
        </>
    )
}