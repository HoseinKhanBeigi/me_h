import { Power0, gsap } from "gsap";
import { RoughEase } from "gsap/EasePack"
import { LOOP_EASE_IN_OUT, LOOP } from "../../../constants";
import { getNodes } from "../../../utils";
import { useResizeWindowRef } from "../../../hooks/useResize";
import { useEffect } from "react";
import './index.scss'
export const HolwsCastle = () => {
    const loop = gsap.timeline();
    const windowSizeref = useResizeWindowRef();
    const init = () => {
        const castle = getNodes(".castle");
        loop
            .addLabel("start", 0)
            .to(
                castle.topTower,
                {
                    duration: 2,
                    rotation: -15,
                    transformOrigin: "50% 100%",
                    ease: RoughEase.ease.config({
                        template: Power0.easeNone,
                        strength: 0.5,
                        points: 10,
                        taper: "none",
                        randomize: true,
                        clamp: false,
                    }),
                    ...LOOP,
                },
                "start"
            )
            .to(
                castle.bucket,
                {
                    duration: 0.6,
                    rotationZ: -25,
                    rotationX: -45,
                    transformOrigin: "50% 0%",
                    ...LOOP,
                },
                "start"
            )
            .to(
                [castle.frontLip, castle.backLip],
                {
                    duration: 1.6,
                    rotation: -20,
                    xPercent: -5,
                    transformOrigin: "100% 0%",
                    ease: RoughEase.ease.config({
                        template: Power0.easeNone,
                        strength: 1,
                        points: 16,
                        taper: "none",
                        randomize: true,
                        clamp: false,
                    }),
                    ...LOOP,
                },
                "start"
            )
            .to(
                castle.ear,
                {
                    duration: 2,
                    rotation: -25,
                    transformOrigin: "25% 50%",
                    ease: RoughEase.ease.config({
                        template: Power0.easeNone,
                        strength: 1,
                        points: 16,
                        taper: "none",
                        randomize: true,
                        clamp: false,
                    }),
                    ...LOOP,
                },
                "start"
            )
            .to(
                castle,
                {
                    duration: 1.6,
                    yPercent: -5,
                    ...LOOP_EASE_IN_OUT,
                },
                "start"
            );

        if (windowSizeref.isDesktop) {
            loop
                .to(
                    castle.topTower,
                    {
                        duration: 2,
                        rotation: -15,
                        transformOrigin: "50% 100%",
                        ease: RoughEase.ease.config({
                            template: Power0.easeNone,
                            strength: 0.5,
                            points: 10,
                            taper: "none",
                            randomize: true,
                            clamp: false,
                        }),
                        ...LOOP,
                    },
                    "start"
                )
                .to(
                    castle.lLeg,
                    {
                        duration: 2,
                        rotation: -15,
                        transformOrigin: "0% 0%",
                        ...LOOP_EASE_IN_OUT,
                    },
                    "start"
                )
                .to(
                    castle.rLeg,
                    {
                        duration: 2.2,
                        rotation: -15,
                        transformOrigin: "0% 0%",
                        ...LOOP_EASE_IN_OUT,
                    },
                    "start"
                )
                .to(
                    castle.rArm,
                    {
                        duration: 1.8,
                        rotation: 15,
                        transformOrigin: "0% 0%",
                        ...LOOP_EASE_IN_OUT,
                    },
                    "start"
                )
                .to(
                    castle.lArm,
                    {
                        duration: 2,
                        rotation: 15,
                        transformOrigin: "0% 0%",
                        ...LOOP_EASE_IN_OUT,
                    },
                    "start"
                )
                .to(
                    castle.foliage1,
                    {
                        duration: 0.7,
                        transformOrigin: "50% 100%",
                        skewX: 10,
                        ...LOOP,
                    },
                    "start"
                )
                .to(
                    castle.foliage2,
                    {
                        duration: 0.6,
                        transformOrigin: "50% 100%",
                        skewX: -8,
                        ...LOOP,
                    },
                    "start"
                )
                .to(
                    castle.foliage3,
                    {
                        duration: 0.5,
                        transformOrigin: "50% 100%",
                        skewX: 6,
                        ...LOOP,
                    },
                    "start"
                );
        }
    };
    useEffect(() => {
        init();
    }, []);
    return (
        <div>
            <div className="castle-container" role="img" aria-labelledby="castleDesc">
                <p className="ariaLabel" id="castleDesc">
                    The castle of Howl's movie Moving Castle, flying over a green lawn and
                    a blue sky.
                </p>
                <div className="castle">
                    <div className="top">
                        <div className="top-tower"></div>
                        <div className="top-clothes"></div>
                        <div className="top-top"></div>
                    </div>
                    <div className="bucket"></div>
                    <div className="mouth">
                        <div className="back-lip"></div>
                        <div className="front-lip"></div>
                    </div>
                    <div className="l-leg"></div>
                    <div className="r-leg"></div>
                    <div className="l-arm"></div>
                    <div className="body"></div>
                    <div className="fans">
                        <div className="fan2"></div>
                        <div className="fan1"></div>
                        <div className="fix-tail"></div>
                    </div>
                    <div className="r-arm-holder">
                        <div className="r-arm"></div>
                        <div className="fix-shoulder"></div>
                    </div>
                    <div className="ear"></div>
                    <div className="lower-foliage">
                        <div className="foliage2"></div>
                        <div className="foliage1"></div>
                        <div className="fix-balcony"></div>
                    </div>
                    <div className="wing"></div>
                    <div className="higher-foliage">
                        <div className="foliage3"></div>
                        <div className="foliage2"></div>
                        <div className="foliage1"></div>
                        <div className="fix-roof"></div>
                    </div>
                    <div className="flag"></div>
                </div>
            </div>
        </div>
    );
};
