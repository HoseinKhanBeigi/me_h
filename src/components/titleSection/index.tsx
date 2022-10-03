import "./index.scss"
interface Props {
    children: React.ReactNode,
    scene: string
}


export const TitleSection: React.FC<Props> = ({ children, scene }) => {
    return (
        <section id={scene} className="scene">
            <div className="title-container">
                {children}
            </div>
        </section>
    )
}