import Image from "next/image"
import Link from "next/link"

export default function CardMulti(props: any) {
    const {judul, route, deskripsi, image, profileImage1, profileImage2, profileImage3, profileImage4, onclick} = props
     return (
        <Link href={route} className="h-auto w-full sm:w-[49%] rounded-3xl shadow border p-5 cursor-pointer" onClick={onclick}>
            <div className="w-full h-[22rem] bg-zinc-200 rounded-xl overflow-hidden">
                <Image 
                    src={image || "/images/hero.webp"}
                    alt="image"
                    width={500}
                    height={500}    
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                />
            </div>
            <div className="mt-5 overflow-hidden">
                <h1 className="font-bold text-2xl tracking-tighter text-zinc-800">{judul}</h1>
                <p className="mt-2 text-xl h-[9rem] text-zinc-600">
                    {deskripsi}
                </p>
            </div>
            <div className="flex mt-5 pt-7 relative">
                <span className="absolute -top-3 font-semibold flex items-center text-red-400 gap-1 group">Lihat Detail
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 group-hover:translate-x-1 transition-all">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </span>
                <div className="rounded-full w-14 h-14 bg-zinc-300 border-white border-4 overflow-hidden">
                    <Image 
                        src={profileImage1 || "/images/hero.webp"}
                        alt="image"
                        width={500}
                        height={500}    
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="rounded-full w-14 h-14 bg-zinc-300 border-white border-4 -translate-x-3 overflow-hidden">
                    <Image 
                        src={profileImage2 || "/images/hero.webp"}
                        alt="image"
                        width={500}
                        height={500}    
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="rounded-full w-14 h-14 bg-zinc-300 border-white border-4 -translate-x-6 overflow-hidden">
                    <Image 
                        src={profileImage3 || "/images/hero.webp"}
                        alt="image"
                        width={500}
                        height={500}    
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="rounded-full w-14 h-14 bg-zinc-300 border-white border-4 -translate-x-9 overflow-hidden">
                    <Image 
                        src={profileImage4 || "/images/hero.webp"}
                        alt="image"
                        width={500}
                        height={500}    
                        className="w-full h-full object-cover"
                    />      
                </div>
            </div>
        </Link>
    )
}