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
                    <h1 className="font-bold text-3xl sm:text-5xl tracking-tighter mb-3">Kenali Desa Turus🤝</h1>
                    <Dropdown 
                        title="✨ Profile Desa"
                        description="Desa Turus, yang berlokasi di Kecamatan Polanharjo, Kabupaten Klaten, memiliki kode pos 57474. Untuk informasi lebih lanjut, Anda dapat menghubungi nomor telepon 085702059516 atau mengirim email ke turuspolanharjo34@gmail.com. Alamat lengkapnya adalah Desa Turus, Kecamatan Polanharjo, Kabupaten Klaten."
                    />
                    <Dropdown 
                        title="🛖 Sejarah Desa"
                        description="Desa Turus terbentuk dari penggabungan dua wilayah dengan latar belakang sosial budaya berbeda, yaitu Kademangan Ngemplak (meliputi dusun Mrisen, Ngemplak, dan Popongan) dan dusun Turus. Wilayah ini secara resmi menjadi Desa Praja Turus pada tanggal 4 Mei 1934, yang kini diperingati sebagai hari jadi Desa Turus. Nama Turus dipilih karena sesuai dengan kondisi sosial setempat dan memiliki makna dalam bahasa Jawa sebagai nasihat menuju jalan yang benar, mengandung harapan dan tujuan agar desa ini diberkahi Tuhan Yang Maha Esa."
                    />
                    <Dropdown 
                        title="🥇 Visi & Misi Desa"
                        description="Desa Turus berkomitmen untuk menjadi desa yang lebih maju, sejahtera, dan religius. Pemerintah desa berfokus pada pelayanan yang cepat dan tepat, berkoordinasi dengan kelembagaan desa untuk pelayanan terbaik, dan memberdayakan potensi masyarakat dalam kewirausahaan. Pembangunan infrastruktur dan kesehatan desa juga menjadi prioritas, bersama dengan peningkatan kesadaran hukum dan keamanan. Upaya meningkatkan kualitas Sumber Daya Manusia (SDM) dengan nilai-nilai luhur juga terus dilakukan."
                    />
                </div>
            </div>
        </div>
    )
}