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
                <TitleFunction params="(2015,2017)">datis parse</TitleFunction>
            </TitleSection>
            <TitleSection scene="bizTitle2">
                <TitleFunction params="(2017,2019)">round table apps</TitleFunction>
            </TitleSection>
            <TitleSection scene="bizTitle3">
                <TitleFunction params="(2019,2022)">upwork</TitleFunction>
            </TitleSection>
            <SceneSection _id="biz1">
                <div className="static-container">
                    <TextBlock>
                        <p className="-big">
                            From 2015 to 2017 I was
                            <strong className="-purple">senior Frontend</strong>
                            @
                            <a
                                href="https://datispars.com/"
                                target="_blank"
                                title="Visit datispars Commerce's website"
                            >
                                datispars</a
                            >.
                        </p>
                        <p>
                            A SaaS business solution platform focused on simplifying and customizing.
                        </p>
                    </TextBlock>

                </div>
                <div className="static-container">
                    <TextBlock>
                        <p className="-big">
                            From 2015 to 2019 I was
                            <strong className="-purple">senior Frontend</strong>
                            @
                            <a
                                href="https://roundtableapps.com/"
                                target="_blank"
                                title="Visit round table apps Commerce's website"
                            >
                                round table apps</a
                            >.
                        </p>
                        <p>
                            Round Table Apps is a Sydney-based technology and services company, empowering entities to create next generation digital products to achieve their goals..
                        </p>
                    </TextBlock>

                </div>
                <div className="static-container">
                    <TextBlock>
                        <p className="-big">
                            From 2020 to 2022 I am
                            <strong className="-purple">freelancer senior Frontend</strong>
                            @
                            <a
                                href="https://upwork.com/"
                                target="_blank"
                                title="Visit upwork Commerce's website"
                            >
                                upwork</a
                            >.
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
                            Throughout these years I delivered tens of
                            <span className="-big -purple">
                                projects, modules, integrations, and custom projects
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
                            I am currently working and learing about
                            <span className="-big">
                                <span className="-purple">microservice backend</span>, golang & grpc services.
                            </span>
                        </p>
                    </TextBlock>
                </div>
            </SceneSection>
        </div>
    )
}