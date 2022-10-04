import { SceneSection } from "../senceSection"
import { TextBlock } from "../textBlock"
import { HolwsCastle } from "../characters/holwsCasle"
import "./index.scss"

export const GhibliScene = () => {
    return (
        <div className="ghibliScene">
            <SceneSection _id="Ghibli">
                <div className="static-container">
                    <TextBlock>
                        <p>
                            Before designing for web, I was creating
                            <span className="-big -purple">
                                3D models, and mobile game app.
                            </span>
                            with belender - unity engine
                        </p>
                    </TextBlock>
                </div>
                <div className="container">
                    <div className="sky">
                        <div className="cloud c1"></div>
                        <div className="cloud c2"></div>
                    </div>
                    <HolwsCastle />
                    <div className="grass1"></div>
                    <div className="grass2"></div>

                </div>
            </SceneSection>
            <SceneSection _id="Ghibli2" />
            <SceneSection _id="Ghibli3">
                <div className="static-container">
                    <TextBlock>
                        <p className="-big">
                            And studying
                            <span className="-purple"
                            >physics, math, English animation, and v_ideo games.</span
                            >
                        </p>
                        <p>
                            All of these subjects have a major impact on how I start and develop
                            my creative processes, leading the way on how I view web development
                            today.
                        </p>
                    </TextBlock>
                </div>
            </SceneSection>
            <SceneSection _id="Ghibli4" />
        </div>
    )
}