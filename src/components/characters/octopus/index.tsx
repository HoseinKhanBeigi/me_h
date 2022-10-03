import { OctopusSVG } from './OctopusSVG'
import gsap from "gsap"
import { random } from '../../../utils'
import { LOOP, LOOP_EASE_IN_OUT } from '../../../constants'
import { useEffect } from "react"

interface Props {
    isPlaying: boolean
}
export const Octopus: React.FC<Props> = ({ isPlaying }) => {
    const loop = gsap.timeline()
    const init = () => {
        const body = document.querySelector('.octo-octo')
        const eye = document.querySelector('.octo-eye')

        loop
            .addLabel('start', 0)
            .fromTo(
                eye,
                {
                    duration: 0.05,
                    scaleY: 0.1,
                    transformOrigin: '50% 50%',
                },
                {
                    duration: 0.05,
                    scaleY: 1,
                    repeat: -1,
                    repeatDelay: 1.618,
                },
                'start'
            )
            .to(
                body,
                {
                    duration: 5,
                    y: random(-200, 400),
                    x: random(-100, 100),
                    rotation: random(-30, 30),
                    ...LOOP_EASE_IN_OUT,
                    onComplete: () => {
                        // this.action()
                    },
                },
                'start'
            )
    }
    useEffect(() => {
        init()
    }, [])
    return (
        <div>
            <OctopusSVG />
        </div>
    )
}