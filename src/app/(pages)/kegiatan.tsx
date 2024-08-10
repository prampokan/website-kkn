'use client'

import CardKegiatan from "@/app/(components)/cardKegiatan"
import Navbar from "@/app/(components)/navbar"
import Link from "next/link"
import { db } from "@/lib/firebase/init"
import { getDocs, query, orderBy, collection, limit } from "firebase/firestore"
import { useState, useEffect } from "react"
import CardSkeleton from "@/app/(components)/cardSkeleton"

export default function Kegiatan() {
    const [keagamaan, setKeagamaan] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setIsLoading(true)
        try {
            const q = query(collection(db, 'kegiatanKeagamaan'), limit(2));
            const snapshot = await getDocs(q);
            const data: any = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setKeagamaan(data);
        } catch (error) {
            console.error("Error getting documents: ", error);
        } finally {
            setIsLoading(false)
        }
    };

    const skeleton = []
    for(let i = 1 ; i <= 2 ; i ++) {
        skeleton.push(
            <CardSkeleton/>
        )
    }  
    return(
        <div className="flex justify-center py-24 px-5 xl:px-0">
        <div className="w-[70rem]">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter text-zinc-700 z-10 relative">Kegiatan Desa Turus</h1>
            <span className="w-[15rem] h-[2rem] bg-gradient-to-r from-red-500 to-red-100 absolute -rotate-2 -translate-y-7 z-0 opacity-30"></span>
            <div className="flex mt-6 gap-3 sm:gap-4">
                <Link href={'/kegiatan/keagamaan'} className="border-b-2 border-black py-3 px-1 flex justify-center">
                    <h1 className="font-semibold text-zinc-700 text-sm sm:text-base">Keagamaan</h1>
                </Link>
                <Link href={'/kegiatan/kesehatan'} className="py-3 px-1 flex justify-center hover:border-b-2 border-zinc-400">
                    <h1 className="font-semibold text-zinc-700 text-sm sm:text-base">Kesehatan</h1>
                </Link>
                <Link href={'/kegiatan/kebudayaan'} className="py-3 px-1 flex justify-center hover:border-b-2 border-zinc-400">
                    <h1 className="font-semibold text-zinc-700 text-sm sm:text-base">Kebudayaan</h1>
                </Link>
                <Link href={'/kegiatan/umkm'} className="py-3 px-1 flex justify-center hover:border-b-2 border-zinc-400">
                    <h1 className="font-semibold text-zinc-700 text-sm sm:text-base">UMKM</h1>
                </Link>
            </div>
            <div className="flex flex-wrap gap-2 lg:gap-5 mt-8">
                {isLoading ? 
                    <>{skeleton}</>
                    :
                    (keagamaan && keagamaan.map((item: any) => (
                        <>
                            <CardKegiatan 
                                judul={item.judul}
                                deskripsi={item.deskripsi}
                                image={item.image}
                            />
                        </>
                    )))
                }
            </div>
            <div className="mt-8 w-full flex justify-center">
                <Link href={'/kegiatan/keagamaan'} className="p-4 text-zinc-700 group flex w-[10rem] items-center gap-1 justify-center shadow border font-semibold rounded-full">
                    Lihat Semua
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 group-hover:translate-x-1 transition-all">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </Link>
            </div>
        </div>
    </div>
    )
}