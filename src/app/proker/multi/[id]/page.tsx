'use client'

import Navbar from "../../../(components)/navbar"
import { db } from "@/lib/firebase/init"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"

export default function DetailMulti({ params }: { params: { id: string } }) {
    const { id } = params
    const [item, setItem] = useState<any>(null)

    useEffect(() => {
        if (id) {
            getData(id)
        }
    }, [id])

    const getData = async (id: string) => {
        const docRef = doc(db, 'prokerMulti', id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            setItem(docSnap.data())
        } else {
            console.log("No such document!")
        }
    }

    return (
        <>
            <Navbar />
            {item && 
            <div className="w-full flex justify-center py-32 px-5 xl:px-0">
                <div className="w-[70rem] flex flex-col-reverse sm:flex-row relative">
                    <Link href={"/proker/multi"} className="text-red-400 font-semibold flex items-center py-2 absolute -top-12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        kembali
                    </Link>
                    <div className="sm:w-1/2">
                        <h1 className="text-3xl sm:text-5xl my-7 sm:my-0 font-bold tracking-tighter text-zinc-700">{item?.judul}</h1>
                        <p className="text-xl font-medium my-5 font-mono">Pelaksana Program:</p>
                        <div className="flex gap-2 shadow-sm border rounded-xl w-[23rem] p-2">
                            <div className="w-14 h-14 rounded-full overflow-hidden">
                                <Image
                                    src={item?.profileImage1}
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h1 className="font-semibold text-lg text-zinc-800 translate-y-1">{item?.nama1}</h1>
                                <span className="text-zinc-600">{item?.jurusan1}</span>
                            </div>
                        </div>
                        <div className="flex gap-2 shadow-sm border rounded-xl w-[23rem] p-2 mt-3">
                            <div className="w-14 h-14 rounded-full overflow-hidden">
                                <Image
                                    src={item?.profileImage2}
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                    alt="Picture of the author"
                                />
                            </div>
                            <div>
                                <h1 className="font-semibold text-lg text-zinc-800 translate-y-1">{item?.nama2}</h1>
                                <span className="text-zinc-600">{item?.jurusan2}</span>
                            </div>
                        </div>
                        <div className="flex gap-2 shadow-sm border rounded-xl w-[23rem] p-2 mt-3">
                            <div className="w-14 h-14 rounded-full overflow-hidden">
                                <Image
                                    src={item?.profileImage3}
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                    className="w-full h-full object-cover"
                                    />
                            </div>
                            <div>
                                <h1 className="font-semibold text-lg text-zinc-800 translate-y-1">{item?.nama3}</h1>
                                <span className="text-zinc-600">{item?.jurusan3}</span>
                            </div>
                        </div>
                        <div className="flex gap-2 shadow-sm border rounded-xl w-[23rem] p-2 mt-3">
                            <div className="w-14 h-14 rounded-full overflow-hidden">
                                <Image
                                    src={item?.profileImage4}
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h1 className="font-semibold text-lg text-zinc-800 translate-y-1">{item?.nama4}</h1>
                                <span className="text-zinc-600">{item?.jurusan4}</span>
                            </div>
                        </div>
                        <div className="mt-20">
                            <p className="leading-loose text-xl">{item?.deskripsi}</p>
                        </div>
                    </div>
                    <div className="sm:w-1/2">
                        <div className="h-[30rem] md:w-[35rem] w-full border rounded-xl overflow-hidden">
                            <div className="w-full h-10 bg-zinc-200 px-3 flex items-center gap-2">
                                <div className="rounded-full h-5 w-5 bg-rose-500"></div>
                                <div className="rounded-full h-5 w-5 bg-yellow-400"></div>
                                <div className="rounded-full h-5 w-5 bg-zinc-300"></div>
                            </div>
                            <Image
                                src={item?.image || "/images/hero.webp"}
                                width={700}
                                height={700}
                                alt="Picture of the author"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}