import Image from "next/image"

export default function Hero() {
    return (
        <div className="flex justify-center items-center py-32 px-5 xl:px-0">
            <div className="w-[70rem] flex flex-col md:flex-row gap-8 md:gap-0 items-center">
                <div className="w-full md:w-2/3">
                    <h1 className="text-6xl text-zinc-700 lg:text-8xl font-bold tracking-tighter mb-10 relative z-10">
                        Selamat datang di Desa Turus!
                    </h1>
                    <span className="hidden lg:flex h-20 w-60 bg-gradient-to-r from-red-500 to-red-100 absolute translate-x-80 translate-y-64 -rotate-2 opacity-30 z-0 top-0"></span>
                    <span className="text-2xl leading-relaxed text-zinc-600">Desa Turus adalah desa di kecamatan Polanharjo, Klaten, Jawa Tengah, Indonesia yang terdiri dari 4 RW dan 13 RT.</span>
                    <div className="flex gap-5 mt-10">
                        <div className="bg-zinc-50 border h-24 w-24 sm:h-36 sm:w-36 rounded-xl p-2 flex flex-col justify-center items-center text-center">
                            <div className="w-7 sm:w-10">
                                <Image 
                                    src="/images/logo-klaten.png"
                                    width={150}
                                    height={150}
                                    alt="Picture of the author"
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-center text-sm sm:text-base font-mono text-zinc-600 sm:mt-2">Kabupaten Klaten</span>
                        </div>
                        <div className="bg-zinc-50 border h-24 w-24 sm:h-36 sm:w-36 rounded-xl flex flex-col justify-center items-center">
                            <span className="text-xl sm:text-4xl px-1 py-2 bg-red-100 rounded-2xl">
                                👨‍👩‍👧‍👦
                            </span>
                            <span className="text-center text-sm sm:text-base font-mono text-zinc-600 sm:mt-2">600+ Kartu Keluarga</span>
                        </div>
                        <div className="bg-zinc-50 border h-24 w-24 sm:h-36 sm:w-36 rounded-xl flex flex-col justify-center items-center px-0 sm:px-5">
                            <span className="text-xl sm:text-4xl px-1 py-2 bg-red-100 rounded-2xl">
                                🌡️
                            </span>
                            <span className="text-center text-sm sm:text-base font-mono text-zinc-600 sm:mt-2">30°c Suhu Rata-rata</span>
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
                         src="/images/hero4.jpg"
                         width={390}
                         height={390}
                         alt="Picture of the author"
                         className="h-52 object-cover"
                        />
                        <Image 
                         src="/images/hero3.jpg"
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