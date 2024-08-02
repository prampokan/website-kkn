'use client'
import Navbar from "../../(components)/navbar"
import { db } from "@/lib/firebase/init"
import { getDocs, query, orderBy, collection } from "firebase/firestore"
import { useState, useEffect } from "react"
import CardMulti from "@/app/(components)/cardMulti"
import Link from "next/link"
import CardSkeleton from "@/app/(components)/cardSkeleton"

export default function ProkerMulti() {
    const [multi, setMulti] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setIsLoading(true);
        try {
            const q = query(collection(db, 'prokerMulti'), orderBy('createdAt', 'desc'));
            const snapshot = await getDocs(q);
            const data: any = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setMulti(data);
        } catch (error) {
            console.error("Error getting documents: ", error);
        } finally {
            setIsLoading(false);
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
            <div className="w-full flex justify-center py-24 px-5 xl:px-0">
                <div className="w-[70rem]">
                    <h1 className="font-bold tracking-tighter text-3xl text-zinc-700">Program Kerja Multi Disiplin</h1>
                    <div className="flex mt-6">
                        <Link href={'/proker/multi'} className="border border-zinc-300 p-4 bg-red-100 rounded-l-2xl">
                            <h1 className="font-semibold text-zinc-700">Multi Disiplin</h1>
                        </Link>
                        <Link href={'/proker/mono'} className="p-4 border bg-zinc-100 border-zinc-300 hover:bg-red-50 rounded-r-2xl">
                            <h1 className="font-semibold text-zinc-700">Mono Disiplin</h1>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:gap-5 mt-8">
                    {isLoading ? 
                        <>{skeleton}</>
                        : 
                        (multi && multi.map((item: any) => (
                            <CardMulti 
                                key={item.id}
                                judul={item.judul}
                                deskripsi={item.deskripsi}
                                image={item.image}
                                profileImage1={item.profileImage1}
                                profileImage2={item.profileImage2}
                                profileImage3={item.profileImage3}
                                profileImage4={item.profileImage4}
                                route={`/proker/multi/${item.id}`}
                            />
                        )))
                    }
                    </div>
                </div>
            </div>
        </>
    )
}