import Image from "next/image"
import Link from "next/link"

export default function CardKegiatan(props: any) {
    const {judul, route, deskripsi, image, onclick} = props
    return (
       <Link href={""} className="h-auto w-full sm:w-[49%] rounded-3xl shadow border p-5" onClick={onclick}>
           <div className="w-full h-[22rem] bg-zinc-200 rounded-xl overflow-hidden">
               <Image 
                   src={image || "/images/hero.webp"}
                   alt="image"
                   width={500}
                   height={500}    
                   className="w-full h-full object-cover transition-all duration-300"
               />
           </div>
           <div className="mt-5">
               <h1 className="font-bold text-2xl tracking-tighter text-zinc-800">{judul}</h1>
               <p className="mt-2 text-xl text-zinc-600">
                   {deskripsi}
               </p>
           </div>
       </Link>
   )
}