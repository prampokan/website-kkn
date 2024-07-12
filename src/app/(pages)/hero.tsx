import Image from "next/image"

export default function Hero() {
    return (
        <div className="flex justify-center items-center py-32 px-5 xl:px-0">
            <div className="w-[70rem] flex flex-col md:flex-row gap-8 md:gap-0 items-center">
                <div className="w-full md:w-2/3">
                    <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter mb-10">
                        Selamat datang di Desa Turus!
                    </h1>
                    <span className="text-2xl leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio voluptatum mollitia iure temporibus unde blanditiis culpa magni quasi amet expedita.</span>
                    <div className="flex gap-5 mt-10">
                        <div className="bg-zinc-300 h-36 w-36 rounded-xl"></div>
                        <div className="bg-zinc-300 h-36 w-36 rounded-xl"></div>
                        <div className="bg-zinc-300 h-36 w-36 rounded-xl"></div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-5 md:ml-20">
                        <Image 
                         src="/images/hero.webp"
                         width={390}
                         height={390}
                         alt="Picture of the author"
                         className="h-40 object-cover rounded-t-3xl"
                        />
                        <Image 
                         src="/images/hero.webp"
                         width={390}
                         height={390}
                         alt="Picture of the author"
                         className="h-52 object-cover"
                        />
                        <Image 
                         src="/images/hero.webp"
                         width={390}
                         height={390}
                         alt="Picture of the author"
                         className="h-40 object-cover rounded-b-3xl"
                        />
                </div>
            </div>
        </div>
    )
}