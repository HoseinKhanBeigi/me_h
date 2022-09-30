
import React from "react"

interface Prop {
    children: React.ReactNode
}
export const TextBlock: React.FC<Prop> = ({ children }) => {
    return (
        <div className="std">
            {children}
        </div>
    )
}