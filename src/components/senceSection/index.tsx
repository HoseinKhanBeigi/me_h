import "./index.scss"
interface Prop {
    children?: React.ReactNode
    _id: string,
    class?: String
}

export const SceneSection: React.FC<Prop> = ({ children, _id }) => {
    return (
        <section className="scene" id={_id}>
            <div className="static-container">
                {children}
            </div>
        </section>
    )
}