
import React from "react"
import "./index.scss"

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