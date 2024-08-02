'use client'

import { db } from "@/lib/firebase/init"
import { getDocs, query, orderBy, collection, limit } from "firebase/firestore"
import { useState, useEffect } from "react"
import CardMulti from "@/app/(components)/cardMulti"
import Link from "next/link"

export default function Proker() {
    const [multi, setMulti] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const q = query(collection(db, 'prokerMulti'), orderBy('createdAt', 'desc'), limit(2));
        const snapshot = await getDocs(q);
        const data: any = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setMulti(data);
    };

    return (
        <div className="w-full flex justify-center items-center py-20 px-5 xl:px-0">
            <div className="w-[70rem]">
            <h1 className="font-bold tracking-tighter text-5xl text-zinc-700">Program Kerja KKN</h1>
                    <div className="flex mt-10">
                        <Link href={'/proker/multi'} className="border border-zinc-300 p-4 bg-red-100 rounded-l-2xl">
                            <h1 className="font-semibold text-zinc-700">Multi Disiplin</h1>
                        </Link>
                        <Link href={'/proker/mono'} className="p-4 border bg-zinc-100 border-zinc-300 hover:bg-red-50 rounded-r-2xl">
                            <h1 className="font-semibold text-zinc-700">Mono Disiplin</h1>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:gap-5 mt-8">
                        {multi && multi.map((item: any) => (
                            <>
                                <CardMulti 
                                    judul={item.judul}
                                    deskripsi={item.deskripsi}
                                    image={item.image}
                                    profileImage1={item.profileImage1}
                                    profileImage2={item.profileImage2}
                                    profileImage3={item.profileImage3}
                                    profileImage4={item.profileImage4}
                                    route={`/proker/multi/${item.id}`}
                                />
                            </>
                        ))}
                    </div>
            </div>
        </div>
    )
}