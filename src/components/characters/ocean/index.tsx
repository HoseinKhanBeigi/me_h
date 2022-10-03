import gsap from "gsap"
import { useEffect } from "react"
import './index.scss'

export const Ocean = () => {
    const loop = gsap.timeline()
    const init = () => {
        // setup ocean
        const wave1 = document.querySelector('.ocean-waves.w1')
        const wave2 = document.querySelector('.ocean-waves.w2')

        loop
            .fromTo(
                wave1,
                16,
                {
                    xPercent: 10,
                    yPercent: 0,
                    zIndex: 9,
                },
                {
                    xPercent: 0,
                    yPercent: -100,
                    zIndex: 1,
                    repeat: -1,
                }
            )
            .fromTo(
                wave2,
                16,
                {
                    xPercent: 10,
                    yPercent: 0,
                    zIndex: 9,
                },
                {
                    xPercent: 0,
                    yPercent: -100,
                    zIndex: 1,
                    repeat: -1,
                },
                '-=8'
            )
    }
    useEffect(() => {
        init()
    }, [])
    return (
        <div>
            <div className="pepe-scenery" role="img" aria-labelledby="pepeDesc">
                <p className="ariaLabel" id="pepeDesc">
                    A floating head carrying musical instruments in the ear, foliage and
                    monuments in the hair, flies over a greenish ocean during the sunset
                </p>
                <div className="sky"></div>
                <div className="ocean">
                    <div className="sky-mask"></div>
                    <div className="ocean-waves w1"></div>
                    <div className="ocean-waves w2"></div>
                </div>
            </div>
        </div>
    )
}