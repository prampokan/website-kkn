'use client'

import CardKegiatan from "@/app/(components)/cardKegiatan"
import Navbar from "@/app/(components)/navbar"
import Link from "next/link"
import { db } from "@/lib/firebase/init"
import { getDocs, query, orderBy, collection } from "firebase/firestore"
import { useState, useEffect } from "react"
import CardSkeleton from "@/app/(components)/cardSkeleton"

export default function Keagamaan() {
    const [keagamaan, setKeagamaan] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setIsLoading(true)
        try {
            const q = query(collection(db, 'kegiatanKeagamaan'));
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

    console.log(keagamaan);
    
    return (
        <>
            <Navbar />
            <div className="flex justify-center py-24">
                <div className="w-[70rem]">
                    <h1 className="text-4xl font-bold tracking-tighter">Kegiatan Keagamaan Turus</h1>
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
                        {keagamaan && keagamaan.map((item: any) => (
                            <>
                                <CardKegiatan 
                                    judul={item.judul}
                                    deskripsi={item.deskripsi}
                                    image={item.image}
                                />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}