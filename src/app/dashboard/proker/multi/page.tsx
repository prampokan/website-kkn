'use client'

import { db } from "@/lib/firebase/init"
import { storage } from "@/lib/firebase/init"
import { useState, useEffect, useRef } from "react"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { collection, getDocs, query, addDoc, orderBy } from "firebase/firestore"

export default function DashboardProkerMulti() {
    const [prokerImage, setProkerImage] = useState<File | null>(null);
    const [profileImage1, setProfileImage1] = useState<File | null>(null);
    const [profileImage2, setProfileImage2] = useState<File | null>(null);
    const [profileImage3, setProfileImage3] = useState<File | null>(null);
    const [profileImage4, setProfileImage4] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false)
    const [nama1, setNama1] = useState("")
    const [nama2, setNama2] = useState("")
    const [nama3, setNama3] = useState("")
    const [nama4, setNama4] = useState("")
    const [jurusan1, setJurusan1] = useState("")
    const [jurusan2, setJurusan2] = useState("")
    const [jurusan3, setJurusan3] = useState("")
    const [jurusan4, setJurusan4] = useState("")
    const [judul, setJudul] = useState("")
    const [deskripsi, setDeskripsi] = useState("")
    const [preview, setPreview] = useState("")

    const handleFileImage = (event: any) => {
        const image = event.target.files[0]
        setProkerImage(image)
        // setPreview(URL.createObjectURL(image))
    }

    const handleFileProfileImage1 = (event: any) => {
        const image = event.target.files[0]
        setProfileImage1(image)
        // setPreview(URL.createObjectURL(image))
    }
    const handleFileProfileImage2 = (event: any) => {
        const image = event.target.files[0]
        setProfileImage2(image)
        // setPreview(URL.createObjectURL(image))
    }
    const handleFileProfileImage3 = (event: any) => {
        const image = event.target.files[0]
        setProfileImage3(image)
        // setPreview(URL.createObjectURL(image))
    }
    const handleFileProfileImage4 = (event: any) => {
        const image = event.target.files[0]
        setProfileImage4(image)
        // setPreview(URL.createObjectURL(image))
    }

    const uploadImage = async (image: File) => {
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        return await getDownloadURL(storageRef);
    };

    const addMono = async (e: any) => {
        e.preventDefault()
        if (!prokerImage || !profileImage1 || !profileImage2 || !profileImage3 || !profileImage4) return;
        setUploading(true);
        try {
            const prokerImageUrl = await uploadImage(prokerImage);
            const profileImageUrl1 = await uploadImage(profileImage1);
            const profileImageUrl2 = await uploadImage(profileImage2);
            const profileImageUrl3 = await uploadImage(profileImage3);
            const profileImageUrl4 = await uploadImage(profileImage4);
            await addDoc(collection(db, 'prokerMulti'), {
                judul: judul,
                deskripsi: deskripsi,
                image: prokerImageUrl,
                nama1: nama1,
                nama2: nama2,
                nama3: nama3,
                nama4: nama4,
                jurusan1: jurusan1,
                jurusan2: jurusan2,
                jurusan3: jurusan3,
                jurusan4: jurusan4,
                profileImage1: profileImageUrl1,
                profileImage2: profileImageUrl2,
                profileImage3: profileImageUrl3,
                profileImage4: profileImageUrl4,
                createdAt: new Date()
            });
        } catch (error) {
            console.error("Error adding post: ", error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-[70rem]">
                <form onSubmit={addMono}>
                    <input
                        type="text"
                        value={nama1} 
                        onChange={(e) => setNama1(e.target.value)} 
                        placeholder="Nama 1"
                        className="outline-none border rounded-full h-12 px-5 w-full mt-2"
                        required
                    />
                    <input
                        type="text"
                        value={nama2} 
                        onChange={(e) => setNama2(e.target.value)} 
                        placeholder="Nama 2"
                        className="outline-none border rounded-full h-12 px-5 w-full mt-2"
                        required
                    />
                    <input
                        type="text"
                        value={nama3} 
                        onChange={(e) => setNama3(e.target.value)} 
                        placeholder="Nama 3"
                        className="outline-none border rounded-full h-12 px-5 w-full mt-2"
                        required
                    />
                    <input
                        type="text"
                        value={nama4} 
                        onChange={(e) => setNama4(e.target.value)} 
                        placeholder="Nama 4"
                        className="outline-none border rounded-full h-12 px-5 w-full mt-2"
                        required
                    />
                    <input
                        type="text"
                        value={jurusan1} 
                        onChange={(e) => setJurusan1(e.target.value)} 
                        placeholder="Jurusan 1"
                        className="outline-none border rounded-full h-12 px-5 w-full mt-2"
                        required
                    />
                    <input
                        type="text"
                        value={jurusan2} 
                        onChange={(e) => setJurusan2(e.target.value)} 
                        placeholder="Jurusan 2"
                        className="outline-none border rounded-full h-12 px-5 w-full mt-2"
                        required
                    />
                    <input
                        type="text"
                        value={jurusan3} 
                        onChange={(e) => setJurusan3(e.target.value)} 
                        placeholder="Jurusan 3"
                        className="outline-none border rounded-full h-12 px-5 w-full mt-2"
                        required
                    />
                    <input
                        type="text"
                        value={jurusan4} 
                        onChange={(e) => setJurusan4(e.target.value)} 
                        placeholder="Jurusan 4"
                        className="outline-none border rounded-full h-12 px-5 w-full mt-2"
                        required
                    />
                    <input type="file" onChange={handleFileProfileImage1} accept="image/*" required
                        className="cursor-pointer file:cursor-pointer block w-full text-sm text-zinc-500
                            file:mr-4 file:py-2 file:px-10
                            file:rounded-full file:border-0
                            file:font-semibold file:text-base
                          file:bg-sky-50 file:text-sky-700
                            file:transition-all hover:file:bg-sky-100"
                    />
                    <input type="file" onChange={handleFileProfileImage2} accept="image/*" required
                        className="cursor-pointer file:cursor-pointer block w-full text-sm text-zinc-500
                            file:mr-4 file:py-2 file:px-10
                            file:rounded-full file:border-0
                            file:font-semibold file:text-base
                          file:bg-sky-50 file:text-sky-700
                            file:transition-all hover:file:bg-sky-100"
                    />
                    <input type="file" onChange={handleFileProfileImage3} accept="image/*" required
                        className="cursor-pointer file:cursor-pointer block w-full text-sm text-zinc-500
                            file:mr-4 file:py-2 file:px-10
                            file:rounded-full file:border-0
                            file:font-semibold file:text-base
                          file:bg-sky-50 file:text-sky-700
                            file:transition-all hover:file:bg-sky-100"
                    />
                    <input type="file" onChange={handleFileProfileImage4} accept="image/*" required
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
                        className="outline-none border rounded-full h-12 px-5 w-full mt-2"
                        required
                    />
                    <input
                        type="text"
                        value={deskripsi} 
                        onChange={(e) => setDeskripsi(e.target.value)} 
                        placeholder="Deskripsi"
                        className="outline-none border rounded-full h-12 px-5 w-full mt-2"
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