import Link from "next/link"
import CardKegiatan from "../(components)/cardKegiatan"

export default function Kegiatan() {
    return(
        <div className="flex justify-center py-24 px-5 xl:px-0">
        <div className="w-[70rem]">
            <h1 className="text-5xl font-bold tracking-tighter text-zinc-700">Kegiatan Desa Turus</h1>
            <div className="flex mt-6">
                <Link href={'/kegiatan/keagamaan'} className="border border-zinc-300 py-3 bg-red-100 rounded-l-2xl w-28 flex justify-center">
                    <h1 className="font-semibold text-zinc-700">Keagamaan</h1>
                </Link>
                <Link href={'/kegiatan/kesehatan'} className="py-3 border bg-zinc-100 border-zinc-300 hover:bg-red-50 w-28 flex justify-center">
                    <h1 className="font-semibold text-zinc-700">Kesehatan</h1>
                </Link>
                <Link href={'/kegiatan/kebudayaan'} className="py-3 border bg-zinc-100 border-zinc-300 hover:bg-red-50 w-28 flex justify-center">
                    <h1 className="font-semibold text-zinc-700">Kebudayaan</h1>
                </Link>
                <Link href={'/kegiatan/umkm'} className="py-3 border bg-zinc-100 border-zinc-300 hover:bg-red-50 rounded-r-2xl w-28 flex justify-center">
                    <h1 className="font-semibold text-zinc-700">UMKM</h1>
                </Link>
            </div>
            <div className="flex flex-wrap gap-2 lg:gap-5 mt-8">
                <CardKegiatan 
                    judul="Pengajian"
                    deskripsi="Pengajian Malam Satu Suro"
                />
                <CardKegiatan 
                    judul="Pengajian"
                    deskripsi="Pengajian Malam Satu Suro"
                />
            </div>
        </div>
    </div>
    )
}