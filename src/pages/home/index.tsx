import { memo } from "react";
import SlideMotion from "../../components/slideMotion";
import DomProvider from "../../context/domContext";

function Home() {
    return (
        <DomProvider>
            <SlideMotion />
        </DomProvider>
    );
}

export default memo(Home);
