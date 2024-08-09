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
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter text-zinc-700">Kegiatan Desa Turus</h1>
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
        </div>
    </div>
    )
}