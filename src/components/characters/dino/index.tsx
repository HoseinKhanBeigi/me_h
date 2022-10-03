import { DinoSVG } from "./dinoSVG"
import gsap from "gsap"
import { random } from '../../../utils'
import { LOOP, LOOP_EASE_IN_OUT } from '../../../constants'
import { useEffect } from "react"
const SONGS = [
    // Pink Floyd - Dogs
    'https://open.spotify.com/track/2jvuMDqBK04WvCYYz5qjvG?si=J8VxjC6BR2Kg4Y6eXHqQCQ',
    // The Doors - Spanish Caravan
    'https://open.spotify.com/track/32bJv8V2Xgi5mtxdPcsi8B?si=enqG9uk2Q6SYhhAZtRimGQ',
    // BadBadNotGood - Speaking Gently
    'https://open.spotify.com/track/1pYBTRBbp3PCcdqoke2QSN?si=IMrSO7bhTJCrLgdvwj46xQ',
    // Future Islands - Seasons
    'https://open.spotify.com/track/2oPoWNzWrFonvqrkZtmX52?si=jgc8oNB_Qdqx1vnU0gKnLA',
]
interface Props {
    isPlaying: boolean
}
export const Dino: React.FC<Props> = ({ isPlaying }) => {
    const loop = gsap.timeline();
    const rhythm = 0.3;
    const song = random(1, 4);

    const init = () => {
        const head = document.querySelector('.dino-head')
        const leftArm = document.querySelector('.dino-l-arm')
        const rightArm = document.querySelector('.dino-r-arm')
        const leftLeg = document.querySelector('.dino-l-leg')
        const rightLeg = document.querySelector('.dino-r-leg')
        const tail = document.querySelector('.dino-tail')
        const eye = document.querySelector('.dino-eye')
        const headphone = document.querySelector('.dino-headphone')
        const bright = document.querySelector('.dino-bright')
        const teeth1 = document.querySelector('#dino .teeth1')
        const teeth2 = document.querySelector('#dino .teeth2')
        const mouthChillout = document.querySelector('#dino .mouth-chillout')
        const mouthFuckYeah = document.querySelector('#dino .mouth-fuck-yeah')
        let rotationZ = rhythm * 32

        loop
            .addLabel('start', 0)
            .to(
                leftLeg,

                {
                    duration: rhythm,
                    skewX: -20,
                    transformOrigin: '50% 100%',
                    ...LOOP,
                },
                'start'
            )
            .to(
                rightLeg,

                {
                    duration: rhythm,
                    skewX: 20,
                    transformOrigin: '50% 100%',
                    ...LOOP,
                },
                'start'
            )
            .to(
                headphone,
                {
                    duration: rhythm / 2,
                    scale: 1.1,
                    transformOrigin: '20% 20%',
                    ...LOOP,
                },
                'start'
            )
            .to(
                [leftArm, rightArm],
                {
                    duration: rhythm,
                    yPercent: 20,
                    ...LOOP_EASE_IN_OUT,
                },
                'start'
            )
            .to(
                tail,
                {
                    duration: rhythm,
                    transformOrigin: '25% 50%',
                    rotationZ: 20,
                    ...LOOP_EASE_IN_OUT,
                },
                'start'
            )
            .to(
                head,
                {
                    duration: rhythm,
                    transformOrigin: '85% 100%',
                    rotationZ,
                    ...LOOP_EASE_IN_OUT,
                },
                'start'
            )

        if (song > 2) {
            loop
                .fromTo(
                    eye,

                    {
                        duration: 0.01,
                        scaleY: 0.1,
                        transformOrigin: '50% 50%',
                    },
                    {
                        duration: 0.01,
                        scaleY: 1,
                        transformOrigin: '50% 50%',
                        repeatDelay: 3,
                        ...LOOP,
                    },
                    'start'
                )
                .fromTo(
                    bright,
                    {
                        duration: 0.01,
                        autoAlpha: 0,
                    },
                    {
                        duration: 0.01,
                        autoAlpha: 1,
                        repeatDelay: 3,
                        ...LOOP,
                    },
                    'start'
                )
        } else {
            loop.set(
                eye,
                {
                    scaleY: 0.1,
                    transformOrigin: '50% 50%',
                },
                'start'
            )
        }

    }

    useEffect(() => {
        init()
    }, [])

    return (
        <div>
            <DinoSVG />
        </div>
    )
}