import React from "react";
import runes from "runes";

interface ICharmingProps {
    letters: string;
}
export const Charming: React.FC<ICharmingProps> = ({ letters }) => {


    const charmed = React.useMemo(() => {
        const ltrs = runes(letters);
        return ltrs.map((ltr: string, idx: number) => {
            return (
                <span key={idx} aria-hidden>
                    {ltr}
                </span>
            );
        });
    }, [letters]);

    return (
        <>
            {charmed}
        </>

    );
};

export default Charming;