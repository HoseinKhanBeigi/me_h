import { TitleSection } from "../titleSection"
import { TitleFunction } from "../titleFunction"
import { SceneSection } from "../senceSection"
import { TextBlock } from "../textBlock"
import { ABiz } from "../characters/aBiz"
import { Dino } from "../characters/dino"
import { Astronaut } from "../characters/astronaut"
import { CoffeeMug } from "../characters/coffeMug"
import { Shrimp } from "../characters/shrimp"
import { Octopus } from "../characters/octopus"
import { ET } from "../characters/et"
import { Zen } from "../characters/zen"
import { Shapes } from "../characters/shapes"

import React from 'react';
import "./index.scss"
interface Props {
    isPlaying: boolean;
}

export const BizScene: React.FC<Props> = ({ isPlaying }) => {
    return (
        <div className="bizScene">
            <TitleSection scene="bizTitle">
                <TitleFunction params="2011,2019">biz</TitleFunction>
            </TitleSection>
            <SceneSection _id="biz1">
                <div className="static-container">
                    <TextBlock>
                        <p className="-big">
                            From 2011 to 2019 I was
                            <strong className="-purple">Head of Frontend</strong>
                            @
                            <a
                                href="https://www.bizcommerce.com.br/"
                                target="_blank"
                                title="Visit Biz Commerce's website"
                            >
                                biz</a
                            >.
                        </p>
                        <p>
                            A SaaS e-commerce platform focused on simplifying and customizing the
                            use of Magento.
                        </p>
                    </TextBlock>
                </div>
                <div className="container">
                    <ABiz isPlaying={isPlaying} />
                    <Dino isPlaying={isPlaying} />
                    <Astronaut isPlaying={isPlaying} />
                    <CoffeeMug isPlaying={isPlaying} />
                    <Shrimp isPlaying={isPlaying} />
                    <Octopus isPlaying={isPlaying} />
                    <ET isPlaying={isPlaying} />
                    <Zen isPlaying={isPlaying} />
                    <Shapes isPlaying={isPlaying} />
                </div>
            </SceneSection>
            <SceneSection _id="biz2">
                <div className="static-container">
                    <TextBlock>
                        <p>
                            Throughout these years we delivered hundreds of
                            <span className="-big -purple">
                                tools, modules, integrations, and custom projects
                            </span>
                            for online stores and service prov_iders.
                        </p>
                    </TextBlock>
                </div>
            </SceneSection>
            <SceneSection _id="biz3">
                <div className="static-container">
                    <TextBlock>
                        <p>
                            biz currently runs
                            <span className="-big">
                                <span className="-purple">+1200 stores</span>, payment & shipping
                                integrations with
                                <span className="-purple">thousands of transactions</span> daily.
                            </span>
                        </p>
                    </TextBlock>
                </div>
            </SceneSection>
        </div>
    )
}