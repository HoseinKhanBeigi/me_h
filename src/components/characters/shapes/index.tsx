import { ShapesSVG } from "./shapesSVG"
import { LOOP_EASE_IN_OUT } from '../../../constants'
import { useEffect } from "react"
import gsap from "gsap"
export const Shapes = () => {
    const loop = gsap.timeline()
    const init = () => {
        const smart = document.querySelector('.smart-smart')
        const open = document.querySelector('.open-open')

        loop
            .clear(true)
            .addLabel('start')
            .to(
                smart,
                {
                    duration: 8,
                    rotation: -360,
                    transformOrigin: '50% 50%',
                    ...LOOP_EASE_IN_OUT,
                },
                'start'
            )
            .to(
                open,
                {
                    duration: 7,
                    rotation: 360,
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
            <ShapesSVG />
        </div>
    )
}