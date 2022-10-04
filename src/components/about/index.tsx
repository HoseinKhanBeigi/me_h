import { GithubIcon } from "../icon/githubIcon"
import { LinkedInIcon } from "../icon/LinkedInIcon"
import { TextBlock } from "../textBlock"
import { fetchData } from "../../utils/about"
import "./index.scss"
import gsap, { Power3 } from "gsap"
import { useEffect } from 'react';

export const About = () => {
    const desc = fetchData.description;
    const subtitles = fetchData.subtitles;

    const introTimeline = gsap.timeline()

    const playIntro = () => {
        introTimeline
            .addLabel('enter', 1)
            .from(
                '.title',
                2,
                {
                    autoAlpha: 0,
                    rotationX: 90,
                    transformOrigin: '50% 50% -100px',
                    ease: Power3.easeOut,
                },
                'enter'
            )
            .from(
                '.std',
                2,
                {
                    autoAlpha: 0,
                    x: -32,
                    ease: Power3.easeOut,
                },
                'enter+=1.5'
            )
    };

    useEffect(() => {
        playIntro()
    }, [])

    return (
        <div id="about" className="wrapper">
            <div className="pic"></div>
            <div className="static-container">
                <h1 className="title">about(<span className="params">me</span>)</h1>
                <TextBlock>
                    <div className="first-fold">
                        <ul className="about-contact">
                            <li>
                                <a href={"https://github.com/HoseinKhanBeigi"} title={"GitHub"} target="_blank">
                                    <GithubIcon />
                                </a>
                            </li>
                            <li>
                                <a href={"https://www.linkedin.com/in/hosein-khan-beigi/"} title={"LinkedIn"} target="_blank">
                                    <LinkedInIcon />
                                </a>
                            </li>
                        </ul>

                        <p className="-purple">
                            {desc.map((el) => {
                                return (
                                    <span>
                                        {el}<br />
                                    </span>
                                )
                            })}
                        </p>
                        <p className="-gray">
                            {subtitles.map((el, i: number) => {
                                return (
                                    <span key={i}>{el}<br /></span>
                                )
                            })
                            }
                            {`//` + fetchData.experiences[0].position + `@`}
                            {fetchData.experiences[0].company}
                        </p>
                    </div >

                    <div className="about-grid">
                        <h2>Main skills</h2>
                        <div className="columns fluent">
                            <ul>
                                {fetchData.skills.map((skills, i: number) => {
                                    return (
                                        <li key={i}>{skills.join(', ')}<br /></li>
                                    )
                                })
                                }
                            </ul>
                        </div>

                        <h2>Experience</h2>
                        <div className="columns experience">
                            <ul>
                                {fetchData.experiences.map((experience, i: number) => {
                                    return (
                                        <li>
                                            <strong className="-purple">{experience.position}</strong>
                                            <br />
                                            @{experience.company}<br />
                                            {experience.time || null}
                                        </li>

                                    )
                                })
                                }
                            </ul>
                        </div >

                        <h2>contacts</h2>
                        <div className="columns languages">
                            <ul>
                                <li>
                                    <strong className="-purple">email</strong><br />
                                    {fetchData.contacts.email}
                                </li>
                                <li>
                                    <strong className="-purple">phone</strong><br />
                                    {fetchData.contacts.phone}
                                </li>
                            </ul>
                        </div >

                        <h2>Also busy with</h2>
                        <div className="columns busy">
                            <ul>
                                {fetchData.busy.map((busy, i: number) => {
                                    return (
                                        <li key={i}>{busy}</li>
                                    )
                                })}
                            </ul>
                        </div >
                    </div >
                </TextBlock >
            </div >
        </div >
    )
}