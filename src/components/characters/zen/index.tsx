import { ZenSVG } from "./zenSVG"
import { LOOP_EASE_IN_OUT } from '../../../constants'
import gsap from "gsap"
import { useEffect } from "react"
export const Zen = () => {
    const loop = gsap.timeline()
    const init = () => {
        const body = document.querySelector('.zen-zen')
        const head = document.querySelector('.zen-head')
        const leftArm = document.querySelector('.zen-l-arm')
        const rightArm = document.querySelector('.zen-r-arm')
        const leftMustache = document.querySelector('.zen-l-mustache')
        const rightMustache = document.querySelector('.zen-r-mustache')

        loop
            .set(head, {
                transformOrigin: '50% 90%',
                rotation: 5,
            })
            .addLabel('start')
            .to(
                head,
                3,
                {
                    rotation: -5,
                    ...LOOP_EASE_IN_OUT,
                },
                'start'
            )
            .to(
                [leftArm, leftMustache],
                2,
                {
                    transformOrigin: '90% 50%',
                    rotation: -20,
                    ...LOOP_EASE_IN_OUT,
                },
                'start'
            )
            .to(
                [rightArm, rightMustache],
                2,
                {
                    transformOrigin: '10% 50%',
                    rotation: 20,
                    ...LOOP_EASE_IN_OUT,
                },
                'start'
            )
            .to(
                body,
                2,
                {
                    yPercent: -10,
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
            <ZenSVG />
        </div>
    )
}