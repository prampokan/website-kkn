'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleLogin = (e: any) => {
        e.preventDefault()
        if(username === process.env.NEXT_PUBLIC_USERNAME && password === process.env.NEXT_PUBLIC_PASSWORD) {
            document.cookie = "token=1br178ben1wu9cn019nw109nc01; path=/"
            router.push('/dashboard')
        } else {
            alert("Password atau Username Salah!")
        }
    }

    return (
        <div className="flex justify-center h-screen px-5 xl:px-0">
            <div className="w-[70rem] flex justify-center items-center flex-col">
                <div className="w-full md:w-[40rem] p-5 rounded-3xl shadow-lg border">
                    <form className="flex flex-col" onSubmit={handleLogin}>
                        <h1 className="font-bold text-2xl sm:text-4xl tracking-tighter mb-5">Login ke Dashboard Desa Turus</h1>
                        <label className="font-semibold text-red-400 mb-2">Masukkan Username</label>
                        <input
                            type="text" 
                            className="border p-2 outline-none rounded-md mb-5" 
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label className="font-semibold text-red-400 mb-2">Masukkan Password</label>
                        <input 
                            type="password" 
                            className="border p-2 outline-none rounded-md mb-5" 
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button className="bg-black text-white py-2 font-bold hover:bg-zinc-500 rounded-md" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}