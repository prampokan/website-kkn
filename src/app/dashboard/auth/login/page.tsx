'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleLogin = (e: any) => {
        e.preventDefault()
        if(username === "desaturus" && password === "desaturus123") {
            document.cookie = "token=1br178ben1wu9cn019nw109nc01; path=/"
            router.push('/dashboard')
        }
    }

    return (
        <div className="flex justify-center">
            <div className="w-[70rem]">
                <form className="flex flex-col" onSubmit={handleLogin}>
                    <input
                        type="text" 
                        className="border border-black p-2 outline-none" 
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input 
                        type="password" 
                        className="border border-black p-2 outline-none" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="bg-black text-white py-2" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}