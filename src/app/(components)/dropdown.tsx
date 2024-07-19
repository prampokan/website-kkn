'use client'

import { useState } from "react"

export default function Dropdown(props:any) {
    const {title, description} = props
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? "h-auto" : "h-20"} transition-all border h-20 rounded-xl p-6 flex flex-col cursor-pointer hover:bg-zinc-100 overflow-hidden`}>
            <div className="w-full flex justify-between">
                <h1 className="text-xl font-semibold tracking-tighter text-zinc-700">{title}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${isOpen ? "rotate-45" : "rotate-0"} size-6 transition-all`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
            <div className="mt-6 text-sm leading-loose text-zinc-600">
               {description}
            </div>
        </div>
    )
}