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
            <div className="mt-5">
                <h1 className="font-bold text-2xl tracking-tighter text-zinc-800">{judul}</h1>
                <p className="mt-2 text-xl text-zinc-600">
                    {deskripsi}
                </p>
            </div>
            <div className="flex mt-5">
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