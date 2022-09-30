import gsap from "gsap";
import { useEffect, useInsertionEffect, useRef } from "react";
import { random } from "../../utils";
import {
    LOOP,
    LOOP_EASE_IN_OUT,
    LOOP_EASE_OUT,
    LOOP_ELASTIC_OUT,
} from "../../constants";
import { useResizeWindowRef } from "../../hooks/useResize";
import "./index.scss";
interface Props {
    isPlaying: boolean;
}
export const Pepe: React.FC<Props> = ({ isPlaying }) => {
    const animation: React.MutableRefObject<any | HTMLDivElement> = useRef();
    const loop: React.MutableRefObject<any> = useRef(gsap.timeline());
    const svg: React.MutableRefObject<any> = useRef(null);
    const windowSizeref = useResizeWindowRef();


    const toggleAnimation = () => {
        toggleSVGAnimations(isPlaying);
        toggleGsapAnimations(isPlaying);
    };

    const toggleSVGAnimations = (isPlaying: boolean) => {
        if (!svg.current || !("unpauseAnimations" in svg.current)) return;

        if (isPlaying) {
            svg.current.unpauseAnimations();
        } else {
            svg.current.pauseAnimations();
        }
    };

    const initParticles = () => {
        const particlesCount = 15;
        const particles = document.querySelector(".pepe .particles");
        if (!particles) return;

        for (let i = 0, particle; i < particlesCount; i++) {
            particle = document.createElement("div");
            particle.className = `particle p${i}`;
            particles.appendChild(particle);
            const tl = gsap.timeline();
            tl.to(`.particle.p${i}`, {
                delay: random(0, 7),
                duration: random(3, 5),
                y: random(100, 1000),
                x: random(100, 500),
                rotationY: 360 * random(5, 20),
                rotationZ: 360 * random(5, 20),
                autoAlpha: 0,
                repeat: -1,
            });
        }
    };
    const init = () => {


        initParticles();
        const ampa_parrot = document.querySelector(".bg-ampa_parrot_wing");
        const metal_sax = document.querySelector(".bg-metals_sax");
        const metal_trumpet = document.querySelector(".bg-metals_trumpet");
        const metal_trombone = document.querySelector(".bg-metals_trombone");
        const metal_trombone_thing = document.querySelector(
            ".bg-metals_trombone_thing"
        );
        const pepe = document.querySelector(".pepe");
        const blink = document.querySelector(".pepe .blink");
        const ear = document.querySelector(".bg-head-ear");
        const rhythm = 0.3;

        loop.current.addLabel("start", 0).fromTo(
            blink,
            {
                duration: 0.2,
                autoAlpha: 1,
            },
            {
                autoAlpha: 0,
                repeat: -1,
                repeatDelay: random(1, 2.5),
            },
            "start"
        );



        if (!windowSizeref.isMobile) {
            loop.current
                .to(
                    metal_sax,
                    {
                        duration: rhythm,
                        transformOrigin: "25% 10%",
                        yPercent: random(-10, 0),
                        rotation: random(-5, 6),
                        ...LOOP,
                    },
                    "start"
                )
                .to(
                    metal_trumpet,
                    {
                        duration: rhythm * 2,
                        transformOrigin: "30% 100%",
                        rotation: random(-20, 25),
                        yPercent: 10,
                        ...LOOP_EASE_OUT,
                    },
                    "start"
                )
                .to(
                    metal_trombone,
                    {
                        duration: rhythm * 4,
                        transformOrigin: "0% 100%",
                        rotation: random(-40, 45),
                        yPercent: 10,
                        ...LOOP_EASE_IN_OUT,
                    },
                    "start"
                )
                .to(
                    metal_trombone_thing,
                    {
                        duration: rhythm / 2,
                        transformOrigin: "0% 0%",
                        xPercent: random(-25, 15),
                        ...LOOP,
                    },
                    "start"
                );
        }
        if (windowSizeref.isDesktop) {
            loop.current
                .to(
                    ampa_parrot,
                    {
                        duration: 1,
                        transformOrigin: "0% 0%",
                        rotation: random(-5, 5),
                        xPercent: random(-5, 0),
                        yPercent: random(0, 5),
                        ...LOOP_ELASTIC_OUT,
                    },
                    "start"
                )
                .to(
                    ear,
                    {
                        duration: rhythm,
                        transformOrigin: "40% 50%",
                        rotationY: random(5, 15),
                        ...LOOP,
                    },
                    "start"
                )
                .to(
                    pepe,
                    {
                        duration: 3,
                        yPercent: random(-3, 3),
                        ...LOOP_EASE_IN_OUT,
                    },
                    "start"
                );
        }
    };
    const toggleGsapAnimations = (isPlaying: boolean) => {
        if (isPlaying) {
            animation.current.classList.remove('animationStop')
            // loop.current.play();
            console.log("isPlaying", isPlaying);

        } else {
            animation.current.classList.add('animationStop')
            // loop.current;
            console.log("isPlaying", isPlaying);
        }
    };

    useEffect(() => {
        init()
        toggleAnimation();
    }, [])
    return (
        <div ref={animation}>
            <div className="pepe bg-head">
                <div className="blink"></div>
                <div className="keyboard"></div>
                <div className="minas"></div>
                <div className="rio">
                    <div className="particles"></div>
                    <div className="vase">
                        <div className="bg-rio_vase_foliage_3"></div>
                        <div className="bg-rio_vase_foliage_2"></div>
                        <div className="bg-rio_vase_foliage_1"></div>
                        <div className="bg-rio_vase"></div>
                    </div>
                    <div className="bg-rio_pao_cristo"></div>

                    <div className="waterfall"></div>

                    <div className="bg-rio_palmtree_1"></div>
                    <div className="bg-rio_palmtree_2"></div>
                </div>
                <div className="am-pa">
                    <div className="bg-ampa_foliage_3"></div>
                    <div className="bg-ampa_tree_2"></div>
                    <div className="bg-ampa_foliage_2"></div>
                    <div className="bg-ampa_parrot_wing"></div>
                    <div className="bg-ampa_foliage_1"></div>
                    <div className="bg-ampa_ver_o_peso"></div>
                    <div className="bg-ampa_tree_1"></div>
                    <div className="bg-ampa_oxes"></div>
                </div>
                <div className="metals">
                    <div className="bg-metals_sax"></div>
                    <div className="bg-metals_trumpet"></div>
                    <div className="bg-metals_trombone">
                        <div className="bg-metals_trombone_thing"></div>
                    </div>
                </div>

                <div className="bonfim-church"></div>
                <div className="bonfim b1"></div>

                <div className="ear bg-head-ear"></div>
            </div>
        </div>
    );
};
