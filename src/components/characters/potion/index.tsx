import { PotionSVG } from "./potionSVG"
import { LOOP_EASE_IN_OUT } from '../../../constants'
import { getNodes } from '../../../utils'
import { gsap } from "gsap"
import { useEffect } from "react"
import "./index.scss"
export const Potion = () => {
    const loop = gsap.timeline();

    const init = () => {
        const potion = getNodes('#potion')
        loop
            .addLabel('start')
            .to(potion, {
                duration: 3,
                transformOrigin: '50% 90%',
                rotation: 15,
                ...LOOP_EASE_IN_OUT,
            })
            .fromTo(
                potion.potionDrop,
                {
                    duration: 0.5,
                    yPercent: 100,
                    rotation: 0,
                    scale: 1,
                },
                {
                    duration: 0.5,
                    transformOrigin: '20% 120%',
                    rotation: 360,
                    yPercent: -100,
                    scale: 0,
                    repeat: -1,
                },
                'start'
            )
            .fromTo(
                potion.potionDrop2,
                {
                    duration: 0.7,
                    yPercent: 100,
                    rotation: 0,
                    scale: 1,
                },
                {
                    duration: 0.7,
                    transformOrigin: '0% 120%',
                    rotation: -360,
                    yPercent: -100,
                    scale: 0,
                    repeat: -1,
                },
                'start'
            )
    }

    useEffect(() => {
        init()
    }, []);

    return (
        <div>
            <PotionSVG />
        </div>
    )
}