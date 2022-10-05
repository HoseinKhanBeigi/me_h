import { Potion } from "../characters/potion"
import { MusicIcon } from "../icon/musicIcon"
import { SceneSection } from "../senceSection"
import { TextBlock } from "../textBlock"

export const ThanksScene = () => {
    return (
        <SceneSection _id="thanks">
            <div className="static-container">
                <TextBlock>
                    <Potion />
                    <div className="madeof">
                        <p className="-comment">// Made with</p>
                        <div className="cols">
                            <ul className="col">
                                <li className="ico">(){`{& lt;/&gt;}`}</li>
                                <li>react</li>
                                <li>GSAP 3</li>
                                <li>scrollTrigger</li>
                            </ul>
                            <ul className="col">
                                <li className="ico">~</li>
                                <li>+62 cups of coffee</li>
                                <li>Endless references</li>
                            </ul>
                        </div>
                    </div>
                </TextBlock>
            </div>
        </SceneSection>
    )
}