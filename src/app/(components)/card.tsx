import Image from "next/image"

export default function Card(props: any) {
    const {nama, jurusan, judul, deskripsi, image, profileImage} = props
    return (
        <div className="w-full sm:w-[49%] h-auto shadow border rounded-3xl p-5 flex flex-col justify-between">
            <div>

           
            <div className="bg-zinc-200 w-full h-[22rem] rounded-2xl overflow-hidden">
                <Image 
                    src={image || "/images/hero.webp"}
                    alt="image"
                    width={500}
                    height={500}    
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="mt-5">
                    <h1 className="font-bold text-2xl py-2 tracking-tighter">{judul}</h1>
                    <p className="text-xl text-zinc-600">
                        {deskripsi}
                    </p>
                </div>
                </div>
            <div className="mt-5">
                <div className="flex items-center gap-3">
                    <div className="bg-zinc-200 h-12 w-12 rounded-full overflow-hidden">
                        <Image 
                            src={profileImage || "/images/hero.webp"}
                            alt="image"
                            width={500}
                            height={500}    
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="font-semibold text-lg text-zinc-800">{nama}</h1>
                        <span className="text-zinc-600">{jurusan}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}