import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <div className="bg-zinc-900 flex justify-center w-full pt-20 pb-10 px-5 xl:px-0" id='tentangkami'>
            <div className="w-[70rem]">
                <Link href={'/'} className="w-24 flex items-center gap-2 cursor-pointer">
                    <Image
                        src="/images/logo-klaten.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                        className="object-cover w-7 h-auto -rotate-6"
                    />
                    <h1 className="font-black text-zinc-200 text-xl tracking-tighter leading-4">Desa Turus</h1>
                </Link>
                <div className="flex gap-20 py-10">
                    <div className="flex flex-col">
                        <span className="text-zinc-400 mb-3">Beranda</span>
                        <span className="text-zinc-200 cursor-pointer hover:underline">Beranda</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-zinc-400 mb-3">Kegiatan</span>
                        <span className="text-zinc-200 mb-2 cursor-pointer hover:underline">Keagamaan</span>
                        <span className="text-zinc-200 mb-2 cursor-pointer hover:underline">Keasehatan</span>
                        <span className="text-zinc-200 mb-2 cursor-pointer hover:underline">Kebudayaan</span>
                        <span className="text-zinc-200 cursor-pointer hover:underline">UMKM</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-zinc-400 mb-3">Program Kerja KKN</span>
                        <span className="text-zinc-200 mb-2 cursor-pointer hover:underline">Multi Disiplin</span>
                        <span className="text-zinc-200 cursor-pointer hover:underline">Mono Disiplin</span>
                    </div>
                </div>
                <p className="text-zinc-100">©2024 All rights reserved by <b>Desa Turus, Kecamatan Polanharjo, Kabupaten Klaten</b></p>
                <p className="text-zinc-600 mt-5 text-sm">Built with ♡ by <Link className="hover:text-zinc-500" href={'https://pramudya-diagusta.vercel.app/'} target="_blank">Pramudya Diagusta</Link></p>
            </div>
        </div>
    )
}