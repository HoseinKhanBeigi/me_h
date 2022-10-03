import gsap, { Power3, Elastic } from 'gsap';
import React, { useEffect } from 'react';
import "./index.scss"
interface Props {
    isPlaying: boolean
}
export const SpineLine: React.FC<Props> = ({ isPlaying }) => {
    const loop = gsap.timeline();
    const init = () => {
        loop
            .clear()
            .addLabel('enter', 0)
            .fromTo(
                '.spine',
                {
                    duration: 1,
                    autoAlpha: 0,
                    yPercent: 20,
                },
                {
                    duration: 1,
                    autoAlpha: 1,
                    yPercent: 0,
                    ease: Power3.easeOut,
                },
                'enter'
            )
            .fromTo(
                '.spine-target .circle',
                {
                    duration: 1,
                    scale: 0,
                    autoAlpha: 0,
                },
                {
                    duration: 1,
                    scale: 1,
                    autoAlpha: 1,
                    ease: Elastic.easeOut.config(1, 0.5),
                },
                'enter+=.7'
            )
            .fromTo(
                '.spine-target .circle',
                {
                    duration: 2,
                    backgroundColor: 'transparent',
                },
                {
                    duration: 2,
                    backgroundColor: '#5918df',
                },
                'enter+=1.2'
            )
            .fromTo(
                '.spine-target .pulse',
                {
                    duration: 4,
                    autoAlpha: 1,
                    scale: 0,
                },
                {
                    autoAlpha: 0,
                    scale: 8,
                    ease: Power3.easeOut,
                },
                'enter+=1.2'
            )
    }
    const end = () => {
        loop
            .clear()
            .addLabel('leave', 0)
            .to(
                '.spine-target .circle, .spine-target .pulse',
                {
                    duration: 0.5,
                    scale: 0,
                    autoAlpha: 0,
                    ease: Power3.easeIn,
                },
                'leave'
            )
            .to(
                '.spine',
                {
                    duration: 0.5,
                    autoAlpha: 0,
                    yPercent: 50,
                    ease: Power3.easeIn,
                },
                'leave+=.25'
            )
    };
    const toggleGsapAnimations = (isPlaying: boolean) => {
        if (isPlaying) {
            init()
        } else {
            end()
        }
    };
    useEffect(() => {
        toggleGsapAnimations(isPlaying);
    }, [])
    return (
        <div>
            <div className="spine" />

            <div className="spine-target">
                <div className="circle" />
                <div className="pulse" />
            </div>
        </div>
    )
}