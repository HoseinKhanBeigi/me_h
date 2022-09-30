import { CoffeeMugSVG } from "./coffeeMugSVG"
import { random } from "../../../utils"
import { LOOP_EASE_IN_OUT } from '../../../constants'
import gsap from "gsap"
import { useEffect } from 'react';

export const CoffeeMug = () => {
    const loop = gsap.timeline()
    const init = () => {
        loop.to('.coffee-coffee', {
            duration: 5,
            yPercent: random(20, 200),
            xPercent: random(-50, 50),
            rotation: random(0, 360),
            transformOrigin: '50% 50%',
            ...LOOP_EASE_IN_OUT,
        })
    }

    useEffect(() => {
        init()
    }, [])
    return (
        <div>
            <CoffeeMugSVG />
        </div>
    )
}