'use client'
import Navbar from "../../(components)/navbar"
import { db } from "@/lib/firebase/init"
import { getDocs, query, orderBy, collection } from "firebase/firestore"
import { useState, useEffect } from "react"
import CardMulti from "@/app/(components)/cardMulti"
import Link from "next/link"

export default function ProkerMulti() {
    const [multi, setMulti] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const q = query(collection(db, 'prokerMulti'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const data: any = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setMulti(data);
    };
    return (
        <>
            <Navbar />
            <div className="w-full flex justify-center py-24 px-5 xl:px-0">
                <div className="w-[70rem]">
                    <h1 className="font-bold tracking-tighter text-3xl mb-10 text-zinc-700">Program Kerja Multi Disiplin</h1>
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
        </>
    )
}