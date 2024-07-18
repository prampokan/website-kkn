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
                        <div className="bg-zinc-50 border h-24 w-24 sm:h-36 sm:w-36 rounded-xl p-2 flex flex-col justify-center items-center text-center">
                            <div className="w-10">
                                <Image 
                                src="/images/logo-klaten.png"
                                width={150}
                                height={150}
                                alt="Picture of the author"
                                className="object-cover"
                                />
                            </div>
                            <span className="text-center font-mono text-zinc-600 mt-2">Kabupaten Klaten</span>
                        </div>
                        <div className="bg-zinc-50 border h-24 w-24 sm:h-36 sm:w-36 rounded-xl flex flex-col justify-center items-center">
                            <span className="text-5xl px-1 py-2 bg-red-100 rounded-2xl">
                                👨‍👩‍👧‍👦
                            </span>
                            <span className="text-center font-mono text-zinc-600 mt-2">250+ Kartu Keluarga</span>
                        </div>
                        <div className="bg-zinc-50 border h-24 w-24 sm:h-36 sm:w-36 rounded-xl flex flex-col justify-center items-center">
                            <span className="text-4xl px-1 py-2 bg-red-100 rounded-2xl">
                                🧪
                            </span>
                            <span className="text-center font-mono text-zinc-600 mt-2">30°c Suhu Rata-rata</span>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-5 md:ml-20">
                        <Image 
                         src="/images/hero2.jpg"
                         width={390}
                         height={390}
                         alt="Picture of the author"
                         className="h-40 object-cover rounded-t-3xl"
                        />
                        <Image 
                         src="/images/hero2.jpg"
                         width={390}
                         height={390}
                         alt="Picture of the author"
                         className="h-52 object-cover"
                        />
                        <Image 
                         src="/images/hero2.jpg"
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