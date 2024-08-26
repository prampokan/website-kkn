'use client'
import { useState } from "react"
import Image from "next/image"

export default function CardKegiatan(props: any) {
    const [open, setOpen] = useState(false)
    const {judul, route, deskripsi, image, onclick} = props
    return (
       <div className="h-auto w-full sm:w-[49%] rounded-3xl shadow border p-5" onClick={onclick}>
           <div className="w-full h-[22rem] bg-zinc-200 rounded-xl overflow-hidden">
               <Image 
                   src={image || "/images/hero.webp"}
                   alt="image"
                   width={500}
                   height={500}    
                   className="w-full h-full object-cover transition-all duration-300"
               />
           </div>
           <div className={`mt-5 ${open ? "h-auto" : "h-[9rem]"} overflow-hidden`}>
               <h1 className="font-bold text-2xl tracking-tighter text-zinc-800">{judul}</h1>
               <p className="mt-2 text-xl text-zinc-600">
                   {deskripsi}
               </p>
           </div>
           <span onClick={() => setOpen(!open)} className="font-semibold w-28 flex items-center text-red-400 gap-1 group cursor-pointer mt-5">{open ? "Tutup" : "Lihat Detail"}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 group-hover:translate-x-1 transition-all">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </span>
       </div>
   )
}