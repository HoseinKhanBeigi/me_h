import { AstronautSVG } from "./astronautSVG"
import { random } from '../../../utils'
import { LOOP_ELASTIC_OUT, LOOP_EASE_IN_OUT } from '../../../constants'
import gsap from "gsap"
import { useEffect } from "react"
export const Astronaut = () => {
    const loop = gsap.timeline();
    const init = () => {
        const astroHead = document.querySelector(".astro-head");
        const astroTube = document.querySelector(".astro-tube");
        const astrolarm = document.querySelector(".astro-l-arm");
        const astrolleg = document.querySelector(".astro-l-leg");
        const astrorleg = document.querySelector(".astro-r-leg");
        const astrobody = document.querySelector(".astro-body");
        const astroastro = document.querySelector(".astro-astro");
        loop.set(astroHead, {
            rotation: -15,
            transformOrigin: '50% 90%',
            yPercent: 0,
            xPercent: -10,
        }).set(astroTube, {
            rotation: -15,
            transformOrigin: '0% 100%',
        }).addLabel('start', 0)
            .to(
                astroHead,
                {
                    duration: 4,
                    rotation: 10,
                    yPercent: 5,
                    xPercent: 10,
                    ...LOOP_EASE_IN_OUT,
                },
                'start'
            ).to(
                astroTube,
                {
                    duration: 4,
                    rotation: 20,
                    yPercent: 10,
                    ...LOOP_EASE_IN_OUT,
                },
                'start'
            ).to(
                astrolarm,
                {
                    duration: 2,
                    rotation: -20,
                    transformOrigin: '90% 90%',
                    ...LOOP_ELASTIC_OUT,
                },
                'start'
            )
            .fromTo(
                astrolleg,
                {
                    duration: 2,
                    rotation: 10,
                    transformOrigin: '90% 10%',
                },
                {
                    duration: 2,
                    rotation: -10,
                    ...LOOP_EASE_IN_OUT,
                },
                'start'
            )
            .fromTo(
                astrorleg,
                {
                    duration: 2,
                    rotation: -10,
                    transformOrigin: '90% 10%',
                },
                {
                    duration: 2,
                    rotation: 10,
                    ...LOOP_EASE_IN_OUT,
                },
                'start'
            )
            .to(
                astrobody,
                {
                    duration: 1,
                    scaleX: 1.06,
                    transformOrigin: '50% 50%',
                    ...LOOP_EASE_IN_OUT,
                },
                'start'
            )
            .to(
                astroastro,
                {
                    duration: 5,
                    yPercent: random(-40, -20),
                    xPercent: random(-10, 10),
                    rotation: random(-120, 120),
                    transformOrigin: '50% 50%',
                    ...LOOP_EASE_IN_OUT,
                },
                'start'
            )
    }
    useEffect(() => {
        init()
    }, [])
    return (
        <div>
            <AstronautSVG />
        </div>
    )
}