import { random } from "../../../utils"
import { LOOP_EASE_IN_OUT } from '../../../constants'
import gsap from "gsap"
import { useEffect } from 'react';
import { ShrimpSVG } from './shrimpSVG'

export const Shrimp = () => {
    const loop = gsap.timeline()
    const init = () => {
        const body = document.querySelector('.filomena-filomena')
        const skirt = document.querySelector('.filomena-skirt')
        const backSkirt = document.querySelector('.filomena-back-skirt')
        const leftFoot = document.querySelector('.filomena-l-foot')
        const rightFoot = document.querySelector('.filomena-r-foot')
        const leftArm = document.querySelector('.filomena-l-arm')
        const rightArm = document.querySelector('.filomena-r-arm')

        loop.addLabel('start').to([skirt, backSkirt], {
            duration: 3,
            skewY: -0.5,
            skewX: 0.5,
            transformOrigin: '50% 0%',
            ...LOOP_EASE_IN_OUT,
        }).to(
            leftFoot,
            {
                duration: 2,
                transformOrigin: '1% 99%',
                rotation: 80,
                ...LOOP_EASE_IN_OUT,
            },
            'start'
        )
            .to(
                rightFoot,
                {
                    duration: 2,
                    transformOrigin: '1% 99%',
                    yPercent: -7,
                    rotation: 50,
                    ...LOOP_EASE_IN_OUT,
                },
                '-=1.9'
            )
            .to(
                leftArm,
                {
                    duration: 0.6,
                    transformOrigin: '20% 50%',
                    skewY: 20,
                    yPercent: -10,
                    ...LOOP_EASE_IN_OUT,
                },
                'start'
            )
            .to(
                rightArm,
                {
                    duration: 0.5,
                    transformOrigin: '20% 50%',
                    skewY: 20,
                    yPercent: -20,
                    ...LOOP_EASE_IN_OUT,
                },
                'start'
            )
            .to(
                body,
                {
                    duration: 10,
                    bezier: {
                        curviness: 1.25,
                        values: [
                            {
                                yPercent: random(-50, -15),
                                xPercent: random(-30, 30),
                                rotation: random(-40, -20),
                            },
                            {
                                yPercent: random(-50, -15),
                                xPercent: random(-30, 30),
                                rotation: random(40, 20),
                            },
                        ],
                        autoRotate: true,
                    },
                    ...LOOP_EASE_IN_OUT,
                },
                'start'
            )
    }
    useEffect(() => {
        init();
    }, [])
    return (
        <div>
            <ShrimpSVG />
        </div>
    )
}