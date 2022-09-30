
interface Props {
    children: React.ReactNode,
    scene: string
}

export const TitleSection: React.FC<Props> = ({ children, scene }) => {
    return (
        <section className="scene" id={scene}>
            <div className="title-container">
                {children}
            </div>
        </section>
    )
}