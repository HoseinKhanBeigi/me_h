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


import "./index.scss"
export const BizScene = () => {
    return (
        <div className="bizScene">
            <TitleSection scene="bizTitle">
                <TitleFunction params="2011,2019">biz</TitleFunction>
            </TitleSection>


            <SceneSection _id="biz1">
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
                <div className="container">
                    <ABiz />
                    <Dino />
                    <Astronaut />
                    <CoffeeMug />
                    <Shrimp />
                    <Octopus />
                    <ET />
                    <Zen />
                    <Shapes />
                </div>
            </SceneSection>
            <SceneSection _id="biz2">
                <TextBlock>
                    <p>
                        Throughout these years we delivered hundreds of
                        <span className="-big -purple">
                            tools, modules, integrations, and custom projects
                        </span>
                        for online stores and service prov_iders.
                    </p>
                </TextBlock>
            </SceneSection>
            <SceneSection _id="biz3">
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
            </SceneSection>
        </div>
    )
}