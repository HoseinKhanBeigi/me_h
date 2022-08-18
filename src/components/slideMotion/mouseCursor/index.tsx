import React, { useEffect, useRef } from "react";
import { useMousePositionRef } from "../../../hooks/useMousePosition";



export const CursorFx = () => {
    const dot: any = useRef<HTMLDivElement>();
    const circle: any = useRef<HTMLDivElement>();
    const lerp = (a: any, b: any, n: any) => (1 - n) * a + n * b;
    const requestRef: any = useRef(null);
    const scale = 1;
    const opacity = useRef(1);
    const lastMousePos = useRef({ dot: { x: 0, y: 0 }, circle: { x: 0, y: 0 } });
    const lastScale = useRef(1);
    const lastOpacity = useRef(1);
    const mousePos = useMousePositionRef();
    const bounds = {
        dot: 6,
        circle: 20,
    };
    useEffect(() => {
        requestRef.current = window.requestAnimationFrame(() => {
            render()
        });
        return () => {
            window.cancelAnimationFrame(requestRef.current);
        }
    }, [])


    const render = () => {
        lastMousePos.current.dot.x = lerp(
            lastMousePos.current.dot.x,
            mousePos.current.x - bounds.dot / 2,
            1
        );

        lastMousePos.current.dot.y = lerp(
            lastMousePos.current.dot.y,
            mousePos.current.y - bounds.dot / 2,
            1
        );
        lastMousePos.current.circle.x = lerp(
            lastMousePos.current.circle.x,
            mousePos.current.x - bounds.circle / 2,
            0.15
        );
        lastMousePos.current.circle.y = lerp(
            lastMousePos.current.circle.y,
            mousePos.current.y - bounds.circle / 2,
            0.15
        );

        lastScale.current = lerp(lastScale.current, scale, 0.15);
        lastOpacity.current = lerp(lastOpacity.current, opacity.current, 0.1);
        dot.current.style.transform = `translateX(${lastMousePos.current.dot.x}px) translateY(${lastMousePos.current.dot.y}px)`;
        circle.current.style.transform = `translateX(${lastMousePos.current.circle.x}px) translateY(${lastMousePos.current.circle.y}px) scale(${lastScale.current})`;
        circle.current.style.opacity = lastOpacity.current;
        requestRef.current = requestAnimationFrame(render);
    }

    return (
        <div className="cursor">
            <div ref={circle} className="cursor__inner cursor__inner--circle"></div>
            <div ref={dot} className="cursor__inner cursor__inner--dot"></div>
        </div>
    )
}