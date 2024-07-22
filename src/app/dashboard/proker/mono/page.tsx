'use client'

import { db } from "@/lib/firebase/init"
import { storage } from "@/lib/firebase/init"
import { useState, useEffect, useRef } from "react"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { collection, getDocs, query, addDoc, orderBy } from "firebase/firestore"

export default function DashboardProkerMono() {
    const [prokerImage, setProkerImage] = useState<File | null>(null);
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false)
    const [nama, setNama] = useState("")
    const [jurusan, setJurusan] = useState("")
    const [judul, setJudul] = useState("")
    const [deskripsi, setDeskripsi] = useState("")
    const [preview, setPreview] = useState("")

    const handleFileImage = (event: any) => {
        const image = event.target.files[0]
        setProkerImage(image)
        // setPreview(URL.createObjectURL(image))
    }

    const handleFileProfileImage = (event: any) => {
        const image = event.target.files[0]
        setProfileImage(image)
        // setPreview(URL.createObjectURL(image))
    }

    const uploadImage = async (image: File) => {
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        return await getDownloadURL(storageRef);
    };

    const addMono = async (e: any) => {
        e.preventDefault()
        if (!prokerImage || !profileImage) return;
        setUploading(true);
        try {
            const prokerImageUrl = await uploadImage(prokerImage);
            const profileImageUrl = await uploadImage(profileImage);
            await addDoc(collection(db, 'prokerMono'), {
                judul: judul,
                deskripsi: deskripsi,
                image: prokerImageUrl,
                nama: nama,
                jurusan: jurusan,
                profileImage: profileImageUrl,
                createdAt: new Date()
            });
        } catch (error) {
            console.error("Error adding post: ", error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="w-full flex justify-center py-20">
            <div className="w-[70rem]">
                <h1 className="text-4xl font-bold tracking-tighter mb-5">Upload Proker Mono Disiplin</h1>
                <form onSubmit={addMono}>
                    <label className="font-semibold">Nama</label>
                    <input
                        type="text"
                        value={nama} 
                        onChange={(e) => setNama(e.target.value)} 
                        placeholder="Nama"
                        className="outline-none border-2 rounded-xl h-12 px-5 w-full mt-2"
                        required
                    />
                    <label className="font-semibold">Jurusan</label>
                    <input
                        type="text"
                        value={jurusan} 
                        onChange={(e) => setJurusan(e.target.value)} 
                        placeholder="Jurusan"
                        className="outline-none border-2 rounded-xl h-12 px-5 w-full my-2"
                        required
                    />
                    <label className="font-semibold">Masukkan Foto</label>
                    <input type="file" onChange={handleFileProfileImage} accept="image/*" required
                        className="cursor-pointer file:cursor-pointer block w-full text-sm text-zinc-500
                            file:mr-4 file:py-2 file:px-10
                            file:rounded-full file:border-0
                            file:font-semibold file:text-base
                          file:bg-sky-50 file:text-sky-700
                            file:transition-all hover:file:bg-sky-100"
                        />
                    <input
                        type="text"
                        value={judul} 
                        onChange={(e) => setJudul(e.target.value)} 
                        placeholder="Judul"
                        className="outline-none border-2 rounded-xl h-12 px-5 w-full mt-2"
                        required
                    />
                    <input
                        type="text"
                        value={deskripsi} 
                        onChange={(e) => setDeskripsi(e.target.value)} 
                        placeholder="Deskripsi"
                        className="outline-none border-2 rounded-xl h-12 px-5 w-full mt-2"
                        required
                    />
                    <input type="file" onChange={handleFileImage} accept="image/*" required
                        className="cursor-pointer file:cursor-pointer block w-full text-sm text-zinc-500
                            file:mr-4 file:py-2 file:px-10
                            file:rounded-full file:border-0
                            file:font-semibold file:text-base
                          file:bg-sky-50 file:text-sky-700
                            file:transition-all hover:file:bg-sky-100"
                        />
                    <button type="submit" className="bg-black text-white p-4">Submit</button>
                </form>
            </div>
        </div>
    )
}