import React from "react";
import { RegularListProps } from "../../types"

export const RegularList: React.FC<RegularListProps> = ({ items, Component }) => {
    return (
        <>
            {items.map((item: any, i: any) => {
                return (<Component key={i} {...item} />)
            })}
        </>
    )
}