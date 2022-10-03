import { TextBlock } from "../textBlock"

export const IntroScene = () => {
    return (
        <section className="scene-intro" id="intro">
            <div className="static-container">
                <h1 className="title">
                    <span className="iuri">Hossein</span>
                    <span className="func">.is()</span>
                </h1>

                <TextBlock>
                    <p className="-purple">Hossein Khan Beigi</p>
                    <p className="-gray">Creative frontend developer</p>
                </TextBlock>
            </div>
        </section>
    )
}