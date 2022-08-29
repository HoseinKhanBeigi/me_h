import * as React from "react";
import { DomContextType, DomProviderProps } from "../types";

export const DomContext: any = React.createContext<DomContextType | null>(null);

const DomProvider: React.FC<DomProviderProps> = ({ children }) => {
    function figure(el: HTMLDivElement | any) {
        const img = el.querySelector(".slide__figure-img");
        const parentElement = el;
        let slideElement = img;
        let isMain = false;
        let inner = "";

        if (el.classList.contains("slide__figure--main")) {
            isMain = true;
            inner = el.querySelector(".slide__figure-inner");
            slideElement = inner;
        }
        return {
            parentElement,
            isMain,
            slideElement,
            inner,
        };
    }

    function slide(el: HTMLDivElement | any) {
        let figures: any = [];
        [...el.querySelectorAll(".slide__figure")].forEach((fig) => {
            figures.push(figure(fig));
        });
        const title = el.querySelector(".slide__title");
        const content = el.querySelector(".slide__content");
        const contentcolor = el.dataset.contentcolor;
        const innerTitle = el.querySelector(".slide__title").children;
        const text = el.querySelector(".slide__text");
        const innerTitleTotal = innerTitle.length;
        const innerTitleMainLetters = [...innerTitle[innerTitleTotal - 1].children];
        const titleLettersTotal = innerTitleMainLetters.length;
        const backFromContentCtrl = el.querySelector(".slide__back");
        return {
            DOM: {
                el,
                content,
                innerTitle,
                backFromContentCtrl,
                title,
                text,
            },
            figures,
            contentcolor,
            innerTitleMainLetters,
            innerTitleTotal,
            titleLettersTotal,
        };
    }

    return <DomContext.Provider value={slide}>{children}</DomContext.Provider>;
};

export default DomProvider;
