'use client'

import { db } from "@/lib/firebase/init"
import { getDocs, query, orderBy, collection, limit } from "firebase/firestore"
import { useState, useEffect } from "react"
import CardMulti from "@/app/(components)/cardMulti"
import Link from "next/link"
import CardSkeleton from "../(components)/cardSkeleton"

export default function Proker() {
    const [multi, setMulti] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setIsLoading(true)
        try {
            const q = query(collection(db, 'prokerMulti'), orderBy('createdAt', 'desc'), limit(2));
            const snapshot = await getDocs(q);
            const data: any = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setMulti(data);
        } catch (error) {
            console.error()
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

    return (
        <div className="w-full flex justify-center items-center py-20 px-5 xl:px-0">
            <div className="w-[70rem]">
            <h1 className="font-bold tracking-tighter text-5xl text-zinc-700">Program Kerja KKN</h1>
                    <div className="flex mt-6 gap-5">
                        <Link href={'/proker/multi'} className="py-4 px-1 border-b-2 border-black">
                            <h1 className="font-semibold">Multi Disiplin</h1>
                        </Link>
                        <Link href={'/proker/mono'} className="py-4 px-1 hover:border-b-2 border-zinc-400">
                            <h1 className="font-semibold">Mono Disiplin</h1>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:gap-5 mt-8">
                        {isLoading ? 
                            <>{skeleton}</>
                        :
                            (multi && multi.map((item: any) => (
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
                        )))
                        }
                    </div>
            </div>
        </div>
    )
}