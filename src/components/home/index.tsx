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

import {
    DOM,
    removeBodyClass,
    addBodyClass,
} from "../../utils";
import "./index.scss";
import gsap, { Power0, Power1, Power3, Power2, TweenMax, TimelineMax } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useResizeWindowRef } from "../../hooks/useResize";
import { duration } from "@mui/material";
export const Home = () => {
    gsap.registerPlugin(ScrollTrigger);
    const windowSizeref = useResizeWindowRef();
    const isPlaying = useRef({
        Biz: true,
        EarlyDays: true,
        Ghibli: false,
        Potion: false,
    });

    let timelines: any = {};
    const setupScenes = () => {
        const scenesElements = {
            myCV: DOM.get("#curriculum.scene"),
            bizTitle: DOM.get("#bizTitle.scene"),
            bizTitle2: DOM.get("#bizTitle2.scene"),
            bizTitle3: DOM.get("#bizTitle3.scene"),
            biz1: DOM.get("#biz1.scene"),
            biz2: DOM.get("#biz2.scene"),
            biz3: DOM.get("#biz3.scene"),
            earlyTitle: DOM.get("#earlyTitle.scene"),
            early1: DOM.get("#early-days.scene"),
            early2: DOM.get("#early-days2.scene"),
            early3: DOM.get("#early-days3.scene"),
            artPhiGamesTitle: DOM.get("#ArtPhiGamesTitle.scene"),
            ghibli: DOM.get("#Ghibli.scene"),
            ghibli2: DOM.get("#Ghibli2.scene"),
            ghibli3: DOM.get("#Ghibli3.scene"),
            ghibli4: DOM.get("#Ghibli4.scene"),
            wrapper: DOM.get("#wrapperTitle.scene"),
            thanks: DOM.get("#thanks.scene"),
        };



        Object.entries(scenesElements).forEach(([scene, element]) => {
            timelines[scene] = gsap.timeline({
                paused: true,
                scrollTrigger: {
                    trigger: element,
                    start: "top center",
                    onUpdate: (self) => {
                        self.progress.toFixed(3)
                    },
                    end: () => "+=" + element.offsetHeight / 2,
                    scrub: true,
                    anticipatePin: 1,

                },
                defaults: { ease: "none" },
            });

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
        timelines.myCV.set("#curriculum .title-container", { autoAlpha: 1 })
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
            .set('#bizTitle .title-container, #biz1 .container', { autoAlpha: 1 })
            .addLabel('start', 0)
            .from(
                '#bizTitle .title',
                {
                    duration: 6,
                    yPercent: -50,
                    autoAlpha: 0,
                    rotationX: 90,
                    transformOrigin: '50% 50% -100px',
                    ease: Power3.easeOut,
                },
                'start'
            )
            .to('#bizTitle .title', {
                duration: 6,
                autoAlpha: 0,
                yPercent: -100,
            })
            .to(
                '#smart, #open',
                {
                    duration: 6,
                    autoAlpha: 0,
                    scale: 0,
                    ease: Power3.easeOut,
                    stagger: 0.2,
                },
                'start+=2'
            )
            .from(
                '#abiz',
                {
                    duration: 6,
                    scale: 0,
                },
                'start+=2'
            )
    };
    const sceneBizTitle2 = () => {
        timelines.bizTitle2
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
            .set('#bizTitle2 .title-container, #biz1 .container', { autoAlpha: 1 })
            .addLabel('start', 0)
            .from(
                '#bizTitle2 .title',
                {
                    duration: 6,
                    yPercent: -50,
                    autoAlpha: 0,
                    rotationX: 90,
                    transformOrigin: '50% 50% -100px',
                    ease: Power3.easeOut,
                },
                'start'
            )
            .to('#bizTitle2 .title', {
                duration: 6,
                autoAlpha: 0,
                yPercent: -100,
            })
            .to(
                '#smart, #open',
                {
                    duration: 6,
                    autoAlpha: 0,
                    scale: 0,
                    ease: Power3.easeOut,
                    stagger: 0.2,
                },
                'start+=2'
            )

    };
    const sceneBizTitle3 = () => {
        timelines.bizTitle3
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
            .set('#bizTitle3 .title-container, #biz1 .container', { autoAlpha: 1 })
            .addLabel('start', 0)
            .from(
                '#bizTitle3 .title',
                {
                    duration: 6,
                    yPercent: -50,
                    autoAlpha: 0,
                    rotationX: 90,
                    transformOrigin: '50% 50% -100px',
                    ease: Power3.easeOut,
                },
                'start'
            )
            .to('#bizTitle3 .title', {
                duration: 6,
                autoAlpha: 0,
                yPercent: -100,
            })
            .to(
                '#smart, #open',
                {
                    duration: 6,
                    autoAlpha: 0,
                    scale: 0,
                    ease: Power3.easeOut,
                    stagger: 0.2,
                },
                'start+=2'
            )

    };
    const sceneBizZen = () => {
        timelines.biz1
            .addLabel('start', 0)
            .from(
                '#zen',
                {
                    duration: 4,
                    xPercent: 70,
                    ease: Power3.easeOut,
                },
                'start'
            )
            .to(
                '#abiz',
                {
                    duration: 4,
                    autoAlpha: 0,
                    xPercent: -100,
                    ease: Power3.easeIn,
                },
                'start'
            )
            .to(
                '#smart, #open',
                {
                    duration: 4,
                    autoAlpha: 0,
                    scale: 0,
                    ease: Power3.easeOut,
                    stagger: 0.2,
                },
                'start'
            )
    };
    const sceneBizEverybody = () => {
        timelines.biz2
            .addLabel('start', 0)
            .to(
                '#zen',
                {
                    duration: 4,
                    yPercent: 130,
                    ease: Power3.easeIn,
                },
                'start'
            )
            .to(
                '#dino, #astro, #coffee, #et, #filomena, #octo',
                {
                    duration: 5,
                    autoAlpha: 1,
                    scale: 1,
                    xPercent: 0,
                    stagger: 0.2,
                    yPercent: 0,
                    ease: Power3.easeOut,
                },

                'start'
            )
    };
    const sceneBizEnding = () => {
        timelines.biz3
            .addLabel('start', 0)
            .to(
                '#dino',
                {
                    duration: 6,
                    yPercent: 200,
                    scale: 1.5,
                    ease: Power3.easeIn,
                },
                'start'
            )
            .to(
                '#et',
                {
                    duration: 6,
                    xPercent: -250,
                    yPercent: -100,
                    autoAlpha: 0,
                    ease: Power3.easeIn,
                },
                'start'
            )
            .to(
                '#filomena',
                {
                    duration: 6,
                    xPercent: -300,
                    yPercent: 300,
                    autoAlpha: 0,
                    ease: Power3.easeIn,
                },
                'start'
            )
            .to(
                '#octo',
                {
                    duration: 6,
                    xPercent: -650,
                    yPercent: 400,
                    autoAlpha: 0,
                    ease: Power3.easeIn,
                },
                'start'
            )
            .to(
                '#astro',
                {
                    duration: 12,
                    bottom: '-10vh',
                    right: '-10vw',
                    scale: 4,
                    ease: Power3.easeInOut,
                },
                'start'
            )
            .to(
                '#coffee',
                {
                    duration: 12,
                    top: '8rem',
                    left: 0,
                    scale: 4,
                    ease: Power3.easeInOut,
                },
                'start'
            )
    };
    const sceneEarlyDays = () => {
        const tl = gsap.timeline({ paused: true });
        const tweener = gsap.timeline();

        tweener
            .to(".tweenerElement", { duration: 20, rotation: 0 })
            .eventCallback('onUpdate', () => {
                gsap.to(tl, {
                    duration: 4,
                    progress: tweener.progress(),
                    ease: Power3.easeOut,
                })
            });

        const Early: any = document.querySelector("#earlyTitle")

        ScrollTrigger.create({
            animation: tweener,
            trigger: '#earlyTitle',
            start: 'top center',
            onUpdate: (self) => {
                self.progress.toFixed(5)
            },

            onLeave: () => {
                gsap.to('#earlyTitle', {
                    duration: 1,
                    // autoAlpha: 0
                });
            },
            onLeaveBack: () => {
                gsap.to('#earlyTitle', {
                    duration: 1,
                    // autoAlpha: 1
                });
            },
            onEnterBack: () => {
                gsap.to('#earlyTitle', {
                    duration: 1,
                    // autoAlpha: 1
                });
            },
            scrub: 1,
        });
        tl.addLabel('start', 0)
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
                    y: -100,
                    x: 100,
                },
                {
                    y: 300,
                    x: -350,
                },
                'action'
            )
            .fromTo(
                '.cloud-3',
                10,
                {
                    y: 100,
                    x: 200,
                },
                {
                    y: -200,
                    x: -250,
                },
                'action'
            )

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



        const tl = gsap.timeline({ paused: true });
        const tweener = gsap.timeline();

        tweener
            .to(".tweenerElement", { duration: 20, rotation: 0 })
            .eventCallback('onUpdate', () => {
                gsap.to(tl, {
                    duration: 4,
                    progress: tweener.progress(),
                    ease: Power3.easeOut,
                })
            });

        const Early: any = document.querySelector("#earlyTitle")

        ScrollTrigger.create({
            animation: tweener,
            trigger: '#early-days2',
            start: 'top top',
            onLeave: () => {
                gsap.to('#early-days2', {
                    duration: 1,
                    autoAlpha: 0
                });
            },
            onLeaveBack: () => {
                gsap.to('#early-days2', {
                    duration: 1,
                    autoAlpha: 1
                });
            },
            onEnterBack: () => {
                gsap.to('#early-days2', {
                    duration: 1,
                    autoAlpha: 1
                });
            },
            scrub: 1,
        });



        const pepeLength = window.innerWidth + DOM.get('.pepe').offsetWidth + 16

        tl.addLabel('start').to(
            '.pepe',
            10,
            {
                x: `-${pepeLength}px`,
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
        const tl = gsap.timeline({ paused: true });
        const tweener = gsap.timeline();

        tweener
            .to(".tweenerElement", { duration: 20, rotation: 0 })
            .eventCallback('onUpdate', () => {
                gsap.to(tl, {
                    duration: 4,
                    progress: tweener.progress(),
                    ease: Power3.easeOut,
                })
            });

        ScrollTrigger.create({
            animation: tweener,
            trigger: '#Ghibli',
            scrub: 1,
            onEnter: () => {
                addBodyClass('blue-background')
            },
            onEnterBack: () => {
                addBodyClass('blue-background')
            },
            onLeave: () => {
                removeBodyClass('blue-background')
            },
            onLeaveBack: () => {
                removeBodyClass('blue-background')
            }

        });

        tl.addLabel('start', 0)
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


        tl.addLabel('start', 0)
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



        const castleLength = windowSizeref.isMobile
            ? `-${windowSizeref.width + DOM.get('.castle-container').offsetWidth + 16
            }px`
            : '-120vw'

        tl.to('.castle-container', 10, {
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

    const sceneWrapper = () => {
        timelines.wrapper
            .addLabel('start', 0)
            .to('#Ghibli .container', 2, { autoAlpha: 0 }, 'start')
            .from('#wrapperTitle .static-container', 2, { autoAlpha: 1 })
    };

    const sceneArtPhiGames = () => {
        timelines.artPhiGamesTitle
            .set('#Mario .container', { autoAlpha: 0 })
            .addLabel('start', 1)
            .to('#ArtPhiGamesTitle .title-container', 1, { autoAlpha: 1 })
            .staggerFrom('#ArtPhiGamesTitle .title .line', 4, {
                yPercent: -50,
                autoAlpha: 0,
                rotationX: 90,
                transformOrigin: '50% 50% -100px',
                ease: Power3.easeOut,
                stagger: 0.5,
            })
            .from(
                '#ArtPhiGamesTitle .std',
                4,
                {
                    yPercent: 50,
                    autoAlpha: 0,
                    rotationX: -90,
                    transformOrigin: '50% 50% 100px',
                    ease: Power3.easeOut,
                },
                '-=1'
            )
            .to('#ArtPhiGamesTitle .title, #ArtPhiGamesTitle .std', 3, {
                yPercent: -100,
                autoAlpha: 0,
            })
            .set('#earlyTitle .title-container', { autoAlpha: 1 })
    };
    useEffect(() => {
        playIntroScene()
        setupScenes();
        sceneMyCV();
        sceneBizTitle();
        sceneBizTitle2();
        sceneBizTitle3();
        sceneBizZen();
        sceneBizEverybody();
        sceneBizEnding();
        sceneEarlyDays();
        sceneOcean();
        sceneFloatingHead();
        sceneSunset();
        sceneArtPhiGames();
        sceneGhibli();
        sceneWrapper()
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

            <BizScene isPlaying={isPlaying.current.Biz} />
            <GapBlock />

            <EarlyDaysScene isPlaying={isPlaying.current.EarlyDays} />
            <GapBlock />
            <TitleSection scene="ArtPhiGamesTitle">
                <TitleFunction subtitle="background.bmp">
                    {["Art", "Philosophy", "Games"].map((el, i) => {
                        return (
                            <span className="line" key={i}>
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
