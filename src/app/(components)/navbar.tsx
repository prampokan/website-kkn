import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (
        <div className="w-full h-16 shadow bg-white/90 backdrop-blur fixed flex justify-center items-center px-5 xl:px-0 z-50">
            <div className="w-[70rem] flex justify-between items-center">
                <div className="w-24 flex items-center gap-2">
                    <Image
                        src="/images/logo-klaten.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                        className="object-cover w-7 h-auto -rotate-6"
                    />
                    <h1 className="font-black text-zinc-700 text-xl leading-4">Desa Turus</h1>
                </div>
                <div>
                    <ul className="flex gap-10 text-zinc-600 text-lg font-medium">
                        <Link href="#">
                            <li>Beranda</li>
                        </Link>
                        <Link href="#" className="group flex items-center gap-2">
                            <li>Kegiatan Turus</li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 translate-y-[1px] group-hover:-rotate-180 transition-all duration-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </Link>
                        <Link href="#" className="group flex items-center gap-2">
                            <li>Program Kerja</li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 translate-y-[1px] group-hover:-rotate-180 transition-all duration-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </Link>
                        <Link href="#">
                            <li>Tentang Kami</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}