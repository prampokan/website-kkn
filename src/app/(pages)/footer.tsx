import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <div className="bg-zinc-900 flex justify-center w-full py-20 px-5 xl:px-0">
            <div className="w-[70rem]">
                <Link href={'/'} className="w-24 flex items-center gap-2 cursor-pointer">
                    <Image
                        src="/images/logo-klaten.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                        className="object-cover w-7 h-auto -rotate-6"
                    />
                    <h1 className="font-black text-zinc-200 text-xl tracking-tighter leading-4">Desa Turus</h1>
                </Link>
            </div>
        </div>
    )
}