'use client'

import Navbar from "../../(components)/navbar"
import Card from "../../(components)/card"
import { db } from "@/lib/firebase/init"
import { getDocs, query, orderBy, collection } from "firebase/firestore"
import { useState, useEffect } from "react"

export default function ProkerMono() {
    const [mono, setMono] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const q = query(collection(db, 'prokerMono'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const data: any = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setMono(data);
    };

    return (
        <>
            <Navbar/>
            <div className="w-full flex justify-center py-24 px-5 xl:px-0">
                <div className="w-[70rem]">
                    <h1 className="font-bold text-3xl text-zinc-700 tracking-tighter">Program Kerja Mono Disiplin</h1>
                    <div className="flex flex-wrap gap-2 lg:gap-5 mt-8">
                        {mono && mono.map((item: any) => (
                            <>
                                <Card
                                    nama={item.nama}
                                    judul={item.judul}
                                    jurusan={item.jurusan}
                                    deskripsi={item.deskripsi}
                                    image={item.image}
                                    profileImage={item.profileImage}
                                />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}