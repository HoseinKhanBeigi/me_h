import { TitleSection } from "../titleSection"
import { TitleFunction } from "../titleFunction"
import { SceneSection } from "../senceSection"
import { TextBlock } from "../textBlock"
import { Pepe } from "../pepe"


import { Ocean } from "../characters/ocean"
import './index.scss'
interface Prop {
    isPlaying: boolean
}

export const EarlyDaysScene: React.FC<Prop> = ({ isPlaying }) => {
    return (
        <div className="earlyDays">
            <TitleSection scene="earlyTitle">
                <TitleFunction
                    params="2008,2011"
                    subtitle={`...`}>
                    earlyDays
                </TitleFunction>
                <div className="clouds cloud-1"></div>
                <Pepe isPlaying={isPlaying} />
                <div className="clouds cloud-2"></div>
                <div className="clouds cloud-3"></div>
                <Ocean />
            </TitleSection>

            <SceneSection _id="early-days">
                <div className="static-container">
                    <TextBlock>
                        <p>Design & illustration.</p>
                        <p className="-big">
                            A frontend developer<br />
                            <span className="-purple">with one foothold in arts.</span>
                        </p>
                    </TextBlock>
                </div>
            </SceneSection>
            <SceneSection _id="early-days2">
                <div className="static-container">
                    <TextBlock>
                        <p className="-big">
                            <span className="-purple">Freelancing</span> &
                            <span className="-purple">startuping,</span><br />
                            <span className="-purple">Inches</span> &
                            <span className="-purple">pixels.</span>
                        </p>
                        <p>
                            Illustrating album arts, book covers, and billboards as a freelancer.
                            And designing websites, online magazines, and news portals at my first
                            web studio.<br />
                        </p>
                    </TextBlock>
                </div>
            </SceneSection>
            <SceneSection _id="early-days3">
                <div className="static-container">
                    <TextBlock>
                        <p>
                            We've proudly fueled the starring<br />
                            of some big Brazilian names such as
                            <span className="-big -purple"
                            ><em>Porta dos Fundos</em>, <em>Kibe Loco</em>, Fhits.tv,
                                <em>Galo Frito</em></span
                            >
                            among many others...
                        </p>
                    </TextBlock>
                </div>
            </SceneSection>
        </div>
    )
}