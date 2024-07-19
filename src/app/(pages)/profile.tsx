import Image from "next/image"
import Dropdown from "../(components)/dropdown"

export default function Profile() {
    return (
        <div className="w-full flex justify-center py-20 px-5 xl:px-0">
            <div className="w-[70rem] flex flex-col md:flex-row">
                <div className="h-[25rem] md:w-[30rem] w-full border rounded-xl overflow-hidden">
                    <div className="w-full h-10 bg-zinc-200 px-3 flex items-center gap-2">
                        <div className="rounded-full h-5 w-5 bg-rose-500"></div>
                        <div className="rounded-full h-5 w-5 bg-yellow-400"></div>
                        <div className="rounded-full h-5 w-5 bg-zinc-300"></div>
                    </div>
                    <Image
                        src="/images/hero2.jpg"
                        width={700}
                        height={700}
                        alt="Picture of the author"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="md:ml-10 w-full md:w-1/2 mt-8 md:mt-0 flex flex-col gap-5">
                    <h1 className="font-bold text-5xl tracking-tighter mt-10 mb-8">Kenali Desa Turus🤝</h1>
                    <Dropdown 
                        title="🛖 Sejarah Desa Turus"
                        description="Desa Turus terbentuk dari penggabungan dua wilayah dengan latar belakang sosial budaya berbeda, yaitu Kademangan Ngemplak (meliputi dusun Mrisen, Ngemplak, dan Popongan) dan dusun Turus. Wilayah ini secara resmi menjadi Desa Praja Turus pada tanggal 4 Mei 1934, yang kini diperingati sebagai hari jadi Desa Turus. Nama Turus dipilih karena sesuai dengan kondisi sosial setempat dan memiliki makna dalam bahasa Jawa sebagai nasihat menuju jalan yang benar, mengandung harapan dan tujuan agar desa ini diberkahi Tuhan Yang Maha Esa."
                    />
                    <Dropdown 
                        title="🥇 Visi & Misi Desa"
                        description=""
                    />
                </div>
            </div>
        </div>
    )
}