import { SceneSection } from "../senceSection"
import { TextBlock } from "../textBlock"
import { HolwsCastle } from "../characters/holwsCasle"
import "./index.scss"
import { useEffect } from "react"

export const GhibliScene = () => {
    return (
        <div className="ghibliScene">
            <SceneSection _id="Ghibli">
                <TextBlock>
                    <p>
                        Before designing for web, I was creating
                        <span className="-big -purple">
                            3D models, matte painting and advertisements
                        </span>
                        for many brands, TV commercials, games...
                    </p>
                </TextBlock>
                <div className="container">
                    <div className="sky">
                        <div className="cloud c1"></div>
                        <div className="cloud c2"></div>
                        <HolwsCastle />
                        <div className="grass1"></div>
                        <div className="grass2"></div>
                    </div>
                </div>
            </SceneSection>
            <SceneSection _id="Ghibli2" />
            <SceneSection _id="Ghibli3">
                <TextBlock>
                    <p className="-big">
                        And studying
                        <span className="-purple"
                        >Philosophy, Japanese animation, fine arts and v_ideo games.</span
                        >
                    </p>
                    <p>
                        All of these subjects have a major impact on how I start and develop
                        my creative processes, leading the way on how I view web development
                        today.
                    </p>
                </TextBlock>
            </SceneSection>
            <SceneSection _id="Ghibli4" />
        </div>
    )
}