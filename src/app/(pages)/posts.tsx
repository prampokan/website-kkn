'use client'

import Image from "next/image"
import { auth, db } from "@/lib/firebase/init"
import { storage } from "@/lib/firebase/init"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { useState, useEffect, useRef } from "react"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { collection, getDocs, query, addDoc, orderBy } from "firebase/firestore"

export default function Posts() {
    const googleAuth = new GoogleAuthProvider()
    const [user, loading, error] = useAuthState(auth)
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false)
    const [loadingPosts, setLoadingPosts] = useState(false)
    const [loadingLogOut, setLoadingLogOut] = useState(false)
    const [posts, setPosts] = useState([])
    const [newPost, setNewPost] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [preview, setPreview] = useState("")
    const [modalPost, setModalPost] = useState(false)
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const divRef = useRef<HTMLDivElement>(null);

    interface Post {
        id: string;
        photo: string;
        userPhoto: string;
        description: string;
        username: string;
        createdAt: {
            seconds: number;
        };
    }

    const handleClickOutside = (event: any) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
          setIsOpen(false);
        }
    };
    
    useEffect(() => {
        getPosts()
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const getPosts = async () => {
        setLoadingPosts(true)
        try {
            const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
            const snapshot = await getDocs(q);
            const data: any = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPosts(data);
        } catch (error) {
            console.error("Error getting posts: ", error);
        } finally {
            setLoadingPosts(false);
        }
    }; 

    const handleFileChange = (event: any) => {
        const image = event.target.files[0]
        setFile(image)
        setPreview(URL.createObjectURL(image))
    }

    const addPost = async (e: any) => {
        e.preventDefault()
        if (!file) return;
        setUploading(true);
        try {
            const storageRef = ref(storage, `images/${file.name}`);
            await uploadBytes(storageRef, file);
            const url: any = await getDownloadURL(storageRef);
            await addDoc(collection(db, 'posts'), {
                description: newPost,
                username: user?.displayName,
                userPhoto: user?.photoURL,
                photo: url,
                createdAt: new Date()
            });
            getPosts();
            setModalOpen(false);
            setNewPost("");
            setPreview("");
        } catch (error) {
            console.error("Error adding post: ", error);
        } finally {
            setUploading(false);
        }
    };

    const login = async() => {
        await signInWithPopup(auth, googleAuth)
        setModalOpen(true)
    }

    const formatedTimeStamp = (timestamp: any) => {
        const now = new Date();
        const postDate = new Date(timestamp * 1000);
        const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);
    
        const units = [
            { name: 'tahun', value: 60 * 60 * 24 * 365 },
            { name: 'bulan', value: 60 * 60 * 24 * 30 },
            { name: 'hari', value: 60 * 60 * 24 },
            { name: 'jam', value: 60 * 60 },
            { name: 'menit', value: 60 },
            { name: 'detik', value: 1 },
        ];
    
        for (let unit of units) {
            const quotient = Math.floor(diffInSeconds / unit.value);
            if (quotient > 0) {
                return `${quotient} ${unit.name} yg lalu`;
            }
        }
    
        return 'baru saja';
    };

    const handlePostClick = (id: string) => {
        const post = posts.find((post: Post) => post.id === id);
        if (post) {
            setSelectedPost(post);
            setModalPost(true);
        }
    };

    const skeleton = []
    for(let i = 1 ; i <= 6 ; i ++) {
        skeleton.push(
            <div className="h-[22rem] w-[22rem] rounded-3xl border overflow-hidden animate-pulse">
                <div className="w-full h-[17rem] overflow-hidden bg-zinc-100"></div>
                    <div className="h-[5rem] w-full flex items-center p-3 gap-3">
                        <div className="rounded-full h-12 w-12 bg-zinc-100"></div>
                    <div>
                        <h3 className="font-bold text-lg bg-zinc-100 w-24 h-3 rounded"></h3>
                        <p className="text-sm bg-zinc-100 w-48 h-2 mt-2 rounded"></p>
                    </div>
                </div>
            </div>
        )
    }   

    return (
        <div className="flex justify-center py-20 px-5 xl:px-0">
            <div className="w-full xl:w-[70rem]">
                <div>
                    <h1 className="font-bold text-2xl sm:text-5xl tracking-tighter text-zinc-700">Unggah Keseruanmu di Turus!</h1>
                </div>
                <div className="mt-10">
                    {user ? 
                        <div className="flex gap-3 items-center">
                            <button onClick={() => setModalOpen(true)} className="text-sm sm:text-base border px-8 h-12 rounded-lg flex items-center justify-center gap-2 text-zinc-500 hover:text-zinc-700 bg-zinc-50 transition-all font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                Unggah Foto
                            </button>
                            <div className={`${modalOpen ? "opacity-100" : "invisible"} transition-all opacity-0 fixed top-0 left-0 w-full h-full flex justify-center items-center z-10 bg-black/50`}>
                                <div className={`w-[22rem] h-[30rem] bg-white rounded-3xl overflow-hidden`}>
                                    <div className="bg-zinc-100 w-full h-20 flex items-center justify-between px-4">
                                        <div className="flex gap-4">
                                            <div className="bg-zinc-300 h-12 w-12 rounded-full overflow-hidden">
                                                <Image 
                                                    src={user?.photoURL || "/images/hero.webp"}
                                                    alt="image"
                                                    width={500}
                                                    height={500}    
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-lg">{user.displayName}</h1>
                                                <h2 className="text-sm text-zinc-600">{user.email}</h2>
                                            </div>
                                        </div>
                                        <div onClick={() => setModalOpen(false)} className="p-2 hover:bg-zinc-200 rounded-full cursor-pointer transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="w-full h-52 bg-zinc-100 overflow-hidden flex justify-center items-center">
                                        {preview ?
                                            <Image 
                                            src={preview}
                                            alt="image"
                                            width={500}
                                            height={500}    
                                            className="w-full h-full object-contain"
                                            />
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-zinc-600">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                            </svg>
                                        }
                                        
                                    </div>
                                    <div className="p-3">
                                        <form onSubmit={addPost}>
                                            <input type="file" onChange={handleFileChange} accept="image/*" required
                                                className="cursor-pointer file:cursor-pointer block w-full text-sm text-zinc-500
                                                        file:mr-4 file:py-2 file:px-10
                                                        file:rounded-full file:border-0
                                                        file:font-semibold file:text-base
                                                      file:bg-sky-50 file:text-sky-700
                                                        file:transition-all hover:file:bg-sky-100"
                                            />
                                            <input
                                                type="text"
                                                value={newPost} 
                                                onChange={(e) => setNewPost(e.target.value)} 
                                                placeholder="Enter new chat"
                                                className="outline-none border rounded-full h-12 px-5 w-full mt-2"
                                                required
                                            />
                                            <button type="submit" disabled={uploading} className="flex bg-zinc-50 text-zinc-700 justify-center items-center border rounded-xl w-full  font-semibold h-12 mt-2 hover:text-zinc-900 hover:bg-zinc-100 transition-all">
                                                {uploading ? 
                                                    (
                                                        <svg aria-hidden="true" className="w-5 h-5 text-white animate-spin fill-zinc-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                        </svg>
                                                    ) 
                                                : "Upload"}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="flex" ref={divRef}>
                                <div onClick={() => setIsOpen(!isOpen)} className="hover:bg-zinc-100 p-2 rounded-full transition-all cursor-pointer">   
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                    </svg>
                                </div>
                                <button 
                                    onClick={() => {
                                        setLoadingLogOut(true)
                                        setTimeout(() => {
                                            auth.signOut(); 
                                            setIsOpen(false);
                                            setLoadingLogOut(false)
                                        }, 1000)  
                                    }} 
                                    className={`${isOpen ? "opacity-100 translate-x-2" : "invisible"} opacity-0 border w-20 rounded-lg flex items-center justify-center gap-2 text-zinc-500 hover:text-zinc-700 bg-zinc-50 transition-all font-semibold`}>
                                    {loadingLogOut ? 
                                        (
                                            <svg aria-hidden="true" className="w-5 h-5 text-white animate-spin fill-zinc-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                            </svg>
                                        )
                                        : "Log out"}
                                </button>
                            </div>
                        </div>
                        :
                        <button onClick={login} className="text-sm sm:text-base border px-8 h-12 rounded-lg flex items-center justify-center gap-2 text-zinc-500 hover:text-zinc-700 bg-zinc-50 transition-all font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            Log in dengan google untuk unggah foto!
                        </button>
                    }
                </div>
                <div className="flex flex-wrap gap-5 md:gap-7 xl:gap-8 mt-6">
                    {loadingPosts ? 
                        <>{skeleton}</>
                    :
                    posts.map((post: any) => (
                        <>
                            <div key={post.id} onClick={() => handlePostClick(post.id)} className="h-[22rem] w-full sm:w-[48%] xl:w-[22rem] rounded-3xl border overflow-hidden cursor-pointer hover:shadow-xl transition-all">
                                <div className="h-[17rem] overflow-hidden">
                                    <Image
                                        src={post.photo}
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="h-[5rem] w-full flex items-center p-3 gap-3">
                                    <div className="rounded-full h-12 w-12 bg-slate-100 overflow-hidden">
                                        <Image
                                            src={post.userPhoto}
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-3/4">
                                        <p className="font-medium font-mono h-6 truncate">{post.description}</p>
                                        <div className="flex gap-2 items-center">
                                            <h3 className="font-semibold text-zinc-600 text-sm">{post.username}</h3>
                                            <span className="text-[12px] text-zinc-400 font-medium">{formatedTimeStamp(post.createdAt.seconds)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${modalPost ? "opacity-100" : "invisible"} shadow-2xl transition-all opacity-0 fixed top-0 left-0 w-full h-full flex justify-center items-center z-10 bg-black/10`}>
                                <div className="bg-white flex md:flex-row flex-col rounded-2xl overflow-hidden">
                                    <div className="w-64 h-auto md:w-96">
                                        <Image
                                            src={selectedPost?.photo || '/images/hero.webp'}
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-64 md:w-72 p-3 flex flex-col justify-between">
                                        <div className="relative w-full">
                                            <div 
                                             onClick={() => {
                                                setModalPost(false);
                                                setSelectedPost(null);
                                             }}
                                             className="w-10 h-10 flex justify-center right-0 items-center absolute hover:bg-zinc-200 rounded-full cursor-pointer transition-all">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                            <div className="md:mt-14 pr-10">
                                                <p className="font-medium font-mono h-6">{selectedPost?.description}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 mt-14 md:mt-0">
                                            <div className="rounded-full h-12 w-12 bg-slate-100 overflow-hidden">
                                                <Image
                                                    src={selectedPost?.userPhoto || '/images/hero.webp'}
                                                    width={500}
                                                    height={500}
                                                    alt="Picture of the author"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h3 className="font-semibold text-zinc-600 text-sm">{selectedPost?.username}</h3>
                                                <span className="text-[12px] text-zinc-400 font-medium">{formatedTimeStamp(selectedPost?.createdAt.seconds)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))} 
                </div>
            </div>
        </div>
    )
}