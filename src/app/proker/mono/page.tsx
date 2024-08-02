'use client'

import Navbar from "../../(components)/navbar"
import Card from "../../(components)/card"
import { db } from "@/lib/firebase/init"
import { getDocs, query, orderBy, collection } from "firebase/firestore"
import { useState, useEffect } from "react"
import Link from "next/link"
import CardSkeleton from "@/app/(components)/cardSkeleton"

export default function ProkerMono() {
    const [mono, setMono] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setIsLoading(true)
        try {
            const q = query(collection(db, 'prokerMono'), orderBy('createdAt', 'desc'));
            const snapshot = await getDocs(q);
            const data: any = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setMono(data);
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
            <Navbar/>
            <div className="w-full flex justify-center py-24 px-5 xl:px-0">
                <div className="w-[70rem]">
                    <h1 className="font-bold text-3xl text-zinc-700 tracking-tighter">Program Kerja Mono Disiplin</h1>
                    <div className="flex mt-6 gap-4">
                        <Link href={'/proker/multi'} className="py-4 px-1 hover:border-b-2 border-zinc-300">
                            <h1 className="font-semibold">Multi Disiplin</h1>
                        </Link>
                        <Link href={'/proker/mono'} className="py-4 px-1 border-b-2 border-black">
                            <h1 className="font-semibold">Mono Disiplin</h1>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:gap-5 mt-8">
                        {isLoading ? 
                            <>{skeleton}</>
                            :
                        (mono && mono.map((item: any) => (
                            <>
                                <Card
                                    key={item.id}
                                    nama={item.nama}
                                    judul={item.judul}
                                    jurusan={item.jurusan}
                                    deskripsi={item.deskripsi}
                                    image={item.image}
                                    profileImage={item.profileImage}
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