import Link from "next/link"

export default function Dashboard() {
    return (
        <div className="flex justify-center py-20 px-5 xl:px-0">
            <div className="w-[70rem]">
                <h1 className="text-7xl font-bold tracking-tighter">dashboard admin turus</h1>
                <div className="mt-10">
                    <h1 className="text-3xl font-bold tracking-tighter">Kegiatan Desa Turus</h1>
                    <div className="flex flex-col sm:flex-row gap-5 mt-8">
                        <Link href={'/dashboard/kegiatan/keagamaan'} className="bg-red-100 h-20 w-full sm:w-[23%] xl:w-52 rounded-xl shadow-lg border border-zinc-400 flex items-center justify-center gap-2 cursor-pointer hover:shadow-2xl hover:text-black transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-500">
                                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
                            </svg>
                            <h1 className="font-semibold text-lg text-zinc-700">Keagamaan</h1>
                        </Link>
                        <div className="bg-red-100 h-20 w-full sm:w-[23%] xl:w-52 rounded-xl shadow-lg border border-zinc-400 flex items-center justify-center gap-2 cursor-pointer hover:shadow-2xl hover:text-black transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-500">
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>
                            <h1 className="font-semibold text-lg text-zinc-700">Kesehatan</h1>
                        </div>
                        <div className="bg-red-100 h-20 w-full sm:w-[23%] xl:w-52 rounded-xl shadow-lg border border-zinc-400 flex items-center justify-center gap-2 cursor-pointer hover:shadow-2xl hover:text-black transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-500">
                                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                            </svg>
                            <h1 className="font-semibold text-lg text-zinc-700">Kebudayaan</h1>
                        </div>
                        <div className="bg-red-100 h-20 w-full sm:w-[23%] xl:w-52 rounded-xl shadow-lg border border-zinc-400 flex items-center justify-center gap-2 cursor-pointer hover:shadow-2xl hover:text-black transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-500">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                            <h1 className="font-semibold text-lg text-zinc-700">UMKM</h1>
                        </div>
                      
                    </div>
                </div>
                <div className="mt-20">
                    <h1 className="text-3xl font-bold tracking-tighter">Program Kerja KKN</h1>
                    <div className="flex flex-col sm:flex-row gap-5 mt-8">
                        <Link href={'/dashboard/proker/multi'} className="bg-red-100 h-20 w-full sm:w-52 rounded-xl shadow-lg border border-zinc-400 flex items-center justify-center gap-2 cursor-pointer hover:shadow-2xl hover:text-black transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-500">
                                <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd" />
                                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                            </svg>
                            <h1 className="font-semibold text-lg text-zinc-700">Multi Disiplin</h1>
                        </Link>
                        <Link href={'/dashboard/proker/mono'} className="bg-red-100 h-20 w-full sm:w-52 rounded-xl shadow-lg border border-zinc-400 flex items-center justify-center gap-2 cursor-pointer hover:shadow-2xl hover:text-black transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-500">
                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                            </svg>
                            <h1 className="font-semibold text-lg text-zinc-700">Mono Disiplin</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}