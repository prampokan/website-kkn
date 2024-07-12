import Link from "next/link"

export default function Navbar() {
    return (
        <div className="w-full h-14 shadow-sm bg-white fixed flex justify-center items-center px-5 xl:px-0">
            <div className="w-[70rem] flex justify-between">
                <div>
                    <h1 className="font-semibold text-xl">Desa Turus</h1>
                </div>
                <div>
                    <ul className="flex gap-7 text-lg font-medium">
                        <Link href="#">
                            <li>Home</li>
                        </Link>
                        <Link href="#">
                            <li>About</li>
                        </Link>
                        <Link href="#">
                            <li>Project</li>
                        </Link>
                        <Link href="#">
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}