'use client'

import CardKegiatan from "@/app/(components)/cardKegiatan"
import Navbar from "@/app/(components)/navbar"
import Link from "next/link"
import { db } from "@/lib/firebase/init"
import { getDocs, query, orderBy, collection } from "firebase/firestore"
import { useState, useEffect } from "react"
import CardSkeleton from "@/app/(components)/cardSkeleton"

export default function Umkm() {
    const [umkm, setUmkm] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setIsLoading(true)
        try {
            const q = query(collection(db, 'kegiatanUmkm'));
            const snapshot = await getDocs(q);
            const data: any = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUmkm(data);
        } catch (error) {
            console.error("Error getting documents: ", error);
        } finally {
            setIsLoading(false)
        }
    };

    const skeleton = []
    for(let i = 1 ; i <= 4 ; i ++) {
        skeleton.push(
            <CardSkeleton/>
        )
    }

    return (
        <>
            <Navbar />
            <div className="flex justify-center py-24">
                <div className="w-[70rem]">
                    <h1 className="text-4xl font-bold tracking-tighter">UMKM Turus</h1>
                    <div className="flex mt-6 gap-4">
                        <Link href={'/kegiatan/keagamaan'} className="hover:border-b-2 py-3 w-24 flex justify-center border-zinc-400">
                            <h1 className="font-semibold text-zinc-700">Keagamaan</h1>
                        </Link>
                        <Link href={'/kegiatan/kesehatan'} className="py-3  w-24 flex justify-center hover:border-b-2 border-zinc-400">
                            <h1 className="font-semibold text-zinc-700">Kesehatan</h1>
                        </Link>
                        <Link href={'/kegiatan/kebudayaan'} className="py-3 w-24 flex justify-center hover:border-b-2 border-zinc-400">
                            <h1 className="font-semibold text-zinc-700">Kebudayaan</h1>
                        </Link>
                        <Link href={'/kegiatan/umkm'} className="py-3 w-24 flex justify-center border-b-2 border-black">
                            <h1 className="font-semibold text-zinc-700">UMKM</h1>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:gap-5 mt-8">
                        {isLoading ? 
                            <>{skeleton}</>
                        :
                        (umkm && umkm.map((item: any) => (
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
        </>
    )
}