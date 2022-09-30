import * as ScrollMagic from "scrollmagic";
import { IntroScene } from "../introScene";

import { GapBlock } from "../gapBlock";
import { TitleSection } from "../titleSection";
import { TitleFunction } from "../titleFunction";
import { EarlyDaysScene } from "../earlyDaysScene";
import { BizScene } from "../bizSence";
import { GhibliScene } from "../ghibiliSence";
import { WrapperBlock } from "../wrapperScene";
import { ThanksScene } from "../thanksScene";
import { useEffect, useRef } from "react";

import { DOM } from "../../utils";
import "./index.scss";
import gsap, { Power0, Power1, Power3, Power2 } from "gsap";
import { useResizeWindowRef } from "../../hooks/useResize";
export const Home = () => {

    const windowSizeref = useResizeWindowRef();
    const isPlaying = useRef({
        Biz: false,
        EarlyDays: false,
        Ghibli: false,
        Potion: false,
    });
    const scrollMagicController = new ScrollMagic.Controller();
    const scrollMagicScene: any = {};
    let timelines: any = {};
    let tweeners: any = {};

    const setupScenes = () => {
        const scenesElements = {
            myCV: DOM.get("#curriculum.scene"),
            bizTitle: DOM.get("#bizTitle.scene"),
            biz1: DOM.get("#biz1.scene"),
            biz2: DOM.get("#biz2.scene"),
            biz3: DOM.get("#biz3.scene"),
            earlyTitle: DOM.get("#earlyTitle.scene"),
            early1: DOM.get("#early-days.scene"),
            early2: DOM.get("#early-days2.scene"),
            early3: DOM.get("#early-days3.scene"),
            artPhiGamesTitle: DOM.get("#ArtPhiGamesTitle.scene"),
            // mario: DOM.get("#Mario.scene"),
            ghibli: DOM.get("#Ghibli.scene"),
            ghibli2: DOM.get("#Ghibli2.scene"),
            ghibli3: DOM.get("#Ghibli3.scene"),
            ghibli4: DOM.get("#Ghibli4.scene"),
            wrapper: DOM.get("#wrapperTitle.scene"),
            thanks: DOM.get("#thanks.scene"),
        };

        Object.entries(scenesElements).forEach(([scene, element]) => {
            tweeners[scene] = gsap.timeline();
            timelines[scene] = gsap.timeline();
            tweeners[scene]
                .to(element, { duration: 1, autoAlpha: 1 })
                // fake, just to have some progress
                .eventCallback('onComplete', () => {
                    gsap.to(timelines[scene], {
                        duration: 0.5,
                        progress: tweeners[scene].progress(),
                        ease: Power0.easeNone,
                    })
                })
        });
    };
    const playIntroScene = () => {
        const timeline = gsap.timeline()
        timeline
            .addLabel('enter', 1)
            .from(
                '#intro .title',

                {
                    duration: 2,
                    autoAlpha: 0,
                    rotationX: 90,
                    transformOrigin: '50% 50% -100px',
                    ease: Power3.easeOut,
                },
                'enter'
            )
            .from(
                '#intro .std',
                {
                    duration: 2,
                    autoAlpha: 0,
                    x: -32,
                    ease: Power3.easeOut,
                },
                'enter+=1.5'
            )
    };
    const sceneMyCV = () => {
        const timeline = gsap.timeline()
        timeline
            .set('#curriculum .title-container', { autoAlpha: 1 }) // show animations
            .addLabel('start', 0)
            .from(
                '#curriculum .title',

                {
                    duration: 2,
                    yPercent: -50,
                    autoAlpha: 0,
                    rotationX: 90,
                    transformOrigin: '50% 50% -100px',
                    ease: Power3.easeOut,
                },
                'start'
            )
            .from(
                '#curriculum .std',
                {
                    duration: 2,
                    yPercent: 50,
                    autoAlpha: 0,
                    rotationX: -90,
                    transformOrigin: '50% 50% -100px',
                    ease: Power3.easeOut,
                },
                'start'
            )
            .to('#curriculum .title, #curriculum .std', {
                duration: 2,
                autoAlpha: 0,
                yPercent: -100,
            })
    };
    const sceneBizTitle = () => {
        timelines.bizTitle
            // next scene characters
            .set('#filomena', {
                autoAlpha: 0,
                scale: 0,
                xPercent: 600,
                yPercent: 100,
            })
            .set('#dino', {
                scale: 0,
                xPercent: 400,
                yPercent: 100,
            })
            .set('#astro, #coffee, #et, #octo', {
                autoAlpha: 0,
                scale: 0,
                xPercent: 400,
                yPercent: 100,
            })
            // this scene
            .set('#bizTitle .title-container, #biz1 .container', { autoAlpha: 1 })
            .addLabel('start', 0)
            .from(
                '#bizTitle .title',
                6,
                {
                    yPercent: -50,
                    autoAlpha: 0,
                    rotationX: 90,
                    transformOrigin: '50% 50% -100px',
                    ease: Power3.easeOut,
                },
                'start'
            )
            .to('#bizTitle .title', 6, {
                autoAlpha: 0,
                yPercent: -100,
            })
            .staggerFrom(
                '#smart, #open',
                6,
                {
                    autoAlpha: 0,
                    scale: 0,
                    ease: Power3.easeOut,
                },
                0.2,
                'start+=2'
            )
            .from(
                '#abiz',
                6,
                {
                    scale: 0,
                },
                'start+=2'
            )
    };
    const sceneBizZen = () => {
        timelines.biz1
            .addLabel('start', 0)
            .from(
                '#zen',
                4,
                {
                    xPercent: 70,
                    ease: Power3.easeOut,
                },
                'start'
            )
            .to(
                '#abiz',
                4,
                {
                    autoAlpha: 0,
                    xPercent: -100,
                    ease: Power3.easeIn,
                },
                'start'
            )
            .staggerTo(
                '#smart, #open',
                4,
                {
                    autoAlpha: 0,
                    scale: 0,
                    ease: Power3.easeOut,
                },
                0.2,
                'start'
            )
    };
    const sceneBizEverybody = () => {
        timelines.biz2
            .addLabel('start', 0)
            .to(
                '#zen',
                4,
                {
                    yPercent: 130,
                    ease: Power3.easeIn,
                },
                'start'
            )
            .staggerTo(
                '#dino, #astro, #coffee, #et, #filomena, #octo',
                5,
                {
                    autoAlpha: 1,
                    scale: 1,
                    xPercent: 0,
                    yPercent: 0,
                    ease: Power3.easeOut,
                },
                0.2,
                'start'
            )
    };
    const sceneBizEnding = () => {
        timelines.biz3
            .addLabel('start', 0)
            .to(
                '#dino',
                6,
                {
                    yPercent: 200,
                    scale: 1.5,
                    ease: Power3.easeIn,
                },
                'start'
            )
            .to(
                '#et',
                6,
                {
                    xPercent: -250,
                    yPercent: -100,
                    autoAlpha: 0,
                    ease: Power3.easeIn,
                },
                'start'
            )
            .to(
                '#filomena',
                6,
                {
                    xPercent: -300,
                    yPercent: 300,
                    autoAlpha: 0,
                    ease: Power3.easeIn,
                },
                'start'
            )
            .to(
                '#octo',
                6,
                {
                    xPercent: -650,
                    yPercent: 400,
                    autoAlpha: 0,
                    ease: Power3.easeIn,
                },
                'start'
            )
            .to(
                '#astro',
                12,
                {
                    bottom: '-10vh',
                    right: '-10vw',
                    scale: 4,
                    ease: Power3.easeInOut,
                },
                'start'
            )
            .to(
                '#coffee',
                12,
                {
                    top: '8rem',
                    left: 0,
                    scale: 4,
                    ease: Power3.easeInOut,
                },
                'start'
            )
    };
    const sceneEarlyDays = () => {
        // Clouds parallax
        const timeline = createParallax({
            triggerElement: '#earlyTitle',
        })
        timeline
            .addLabel('start', 0)
            .fromTo(
                '.cloud-1',
                10,
                {
                    yPercent: 50,
                    xPercent: 20,
                },
                {
                    yPercent: -85,
                    xPercent: -20,
                },
                'action'
            )
            .fromTo(
                '.cloud-2',
                10,
                {
                    yPercent: 40,
                    xPercent: -10,
                },
                {
                    yPercent: -40,
                    xPercent: 85,
                },
                'action'
            )
            .fromTo(
                '.cloud-3',
                10,
                {
                    yPercent: 70,
                    xPercent: 40,
                },
                {
                    yPercent: -85,
                    xPercent: -40,
                },
                'action'
            )

        // EarlyDays()
        timelines.earlyTitle
            .set('.pepe-scenery', { autoAlpha: 0 })
            .set('#biz1 .container', { autoAlpha: 1 })
            .addLabel('start', 0)
            .to(
                '#astro',
                4,
                {
                    yPercent: 600,
                    xPercent: 200,
                    ease: Power2.easeIn,
                },
                'start'
            )
            .to(
                '#coffee',
                4,
                {
                    yPercent: -600,
                    xPercent: -200,
                    ease: Power2.easeIn,
                },
                'start'
            )
            .to('#earlyTitle .title-container', 2, { autoAlpha: 1 }, 'start')
            .from(
                '#earlyTitle .title',
                4,
                {
                    yPercent: -50,
                    autoAlpha: 0,
                    rotationX: 90,
                    transformOrigin: '50% 50% -100px',
                    ease: Power3.easeOut,
                },
                'start'
            )
            .from(
                '#earlyTitle .std',
                4,
                {
                    yPercent: 50,
                    autoAlpha: 0,
                    rotationX: -90,
                    transformOrigin: '50% 50% 100px',
                    ease: Power3.easeOut,
                },
                'start'
            )
            .to('#earlyTitle .title, #earlyTitle .std', 4, {
                autoAlpha: 0,
                yPercent: -100,
            })
    };
    const sceneOcean = () => {
        // Pepe head parallax
        const timeline = createParallax({
            triggerElement: '#early-days2',
            duration: windowSizeref.height * 4,
        })
        const pepeLength = window.innerWidth + DOM.get('.pepe').offsetWidth + 16

        timeline.addLabel('start').to(
            '.pepe',
            10,
            {
                // x: `-${pepeLength}px`,
                scale: 0.5,
            },
            'start'
        )

        timelines.early1
            // .set('#biz1 .container', { autoAlpha: 0 })
            .to('.pepe-scenery', { duration: 8, autoAlpha: 1 })
    };
    const sceneFloatingHead = () => {
        timelines.early2.addLabel('start', 0)
    };
    const sceneSunset = () => {
        timelines.early3
            .set('#Mario .container', { autoAlpha: 0 })
            .to('.pepe-scenery', 8, { autoAlpha: 0 })
    };
    const sceneGhibli = () => {
        // grass parallax
        const grassTimeline = createParallax({
            triggerElement: '#Ghibli',
            timelineTime: 2,
            duration: windowSizeref.height * 4,
        })

        grassTimeline
            .addLabel('start', 0)
            .to(
                '#Ghibli .grass1',
                20,
                {
                    yPercent: 10,
                    xPercent: -100,
                    ease: Power1.easeIn,
                },
                'start'
            )
            .to(
                '#Ghibli .grass2',
                20,
                {
                    yPercent: 10,
                    xPercent: 100,
                    ease: Power1.easeIn,
                },
                'start'
            )
            .addLabel('start')

        // clouds parallax
        const gCloudsTimeline = createParallax({
            triggerElement: '#Ghibli',
            timelineTime: 6,
            duration: windowSizeref.height * 4,
        })

        gCloudsTimeline
            .addLabel('start', 0)
            .set('#Ghibli .sky .c1, #Ghibli .sky .c2', { yPercent: 50 })
            .to(
                '#Ghibli .sky .c1',
                20,
                {
                    yPercent: 10,
                    xPercent: -50,
                    scale: 1.5,
                    ease: Power1.easeIn,
                },
                'start'
            )
            .to(
                '#Ghibli .sky .c2',
                20,
                {
                    yPercent: 0,
                    scale: 1.5,
                    ease: Power1.easeIn,
                },
                'start'
            )

        // Howl's Castle parallax
        const castleTimeline = createParallax({
            triggerElement: '#Ghibli',
            timelineTime: 3,
            duration: windowSizeref.height * 5,
        })

        const castleLength = windowSizeref.isMobile
            ? `-${window.innerWidth + DOM.get('.castle-container').offsetWidth + 16
            }px`
            : '-120vw'

        castleTimeline.to('.castle-container', 10, {
            x: castleLength,
            y: '-70vh',
            scale: 0.5,
        })

        timelines.ghibli
            .addLabel('start', 0)
            .to('#Mario .container', 4, { autoAlpha: 0 }, 'start')
            .to('#Ghibli .container', 4, { autoAlpha: 1 }, 'start')

        timelines.ghibli2.addLabel('start', 0)
        timelines.ghibli3.addLabel('start', 0)
        timelines.ghibli4.addLabel('start', 0)
    };
    const createParallax = (options: any) => {
        const {
            tweenerElement,
            tweenerTime,
            timelineTime,
            offset,
            duration,
            triggerElement,
        }: any = {
            tweenerElement: '.tweenerElement',
            tweenerTime: 20,
            timelineTime: 4,
            offset: -windowSizeref.height / 2,
            duration: windowSizeref.height * 3.5,
            triggerElement: '',
            ...options,
        }

        console.log(windowSizeref.height);


        const timeline = gsap.timeline()
        const tweener = gsap.timeline()

        tweener
            .to(tweenerElement, { rotation: 0, duration: 4, })
            .eventCallback('onUpdate', () => {
                gsap.to(timeline, {
                    duration: 4,
                    progress: tweener.progress(),
                    ease: Power3.easeOut,
                })
            })


        return timeline
    };
    const sceneWrapper = () => {
        timelines.wrapper
            .addLabel('start', 0)
            .to('#Ghibli .container', 2, { autoAlpha: 0 }, 'start')
            .from('#wrapperTitle .static-container', 2, { autoAlpha: 1 })
    };
    useEffect(() => {
        playIntroScene()
        setupScenes();
        sceneMyCV();
        sceneBizTitle();
        sceneBizZen();
        sceneBizEverybody();
        sceneBizEnding();
        sceneEarlyDays();
        sceneOcean();
        sceneFloatingHead();
        sceneSunset();
        sceneGhibli();
    }, []);
    return (
        <div id="home" className="wrapper">
            <IntroScene />
            <GapBlock />

            <TitleSection scene="curriculum">
                <TitleFunction params="/^.*$/gi" subtitle="&lt;WorkShowcase&gt;">
                    myCV
                </TitleFunction>
            </TitleSection>

            <BizScene />
            <GapBlock />

            <EarlyDaysScene isPlaying={isPlaying.current.EarlyDays} />
            <GapBlock />
            <TitleSection scene="ArtPhiGamesTitle">
                <TitleFunction subtitle="background.bmp">
                    {["Art", "Philosophy", "Games"].map((el, i) => {
                        return (
                            <span className="line">
                                <span className="params">${`{`}</span>
                                {el}
                                <span className="params">{`}`}</span>
                            </span>
                        );
                    })}
                </TitleFunction>
            </TitleSection>

            <GapBlock />

            <GhibliScene />

            <WrapperBlock />
            <ThanksScene />
        </div>
    );
};
