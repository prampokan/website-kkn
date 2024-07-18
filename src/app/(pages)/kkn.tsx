import Image from "next/image"

export default function Kkn() {
    return (
        <div className="w-full flex justify-center pt-32 pb-10 px-5 xl:px-0">
            <div className="w-[70rem] flex flex-col items-center justify-center">
                <div className="flex items-center">
                    <div className="w-32 h-32 sm:w-40 sm:h-40">
                        <Image
                            src="/images/logo-undip.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="w-24 h-24 sm:w-28 sm:h-28 opacity-25">
                        <Image
                            src="/images/arrow.svg"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="w-28 h-28 sm:w-36 sm:h-36">
                        <Image
                            src="/images/logo-klaten.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>
                <div className="mt-10 text-center lg:w-[50rem]">
                    <h1 className="text-5xl font-bold tracking-tighter">Program KKN UNDIP</h1>
                    <p className="text-xl mt-7 leading-loose">Pada tahun 1971, Departemen Pendidikan dan Kebudayaan memulai program pengabdian masyarakat yang menjadi Kuliah Kerja Nyata (KKN) di UNDIP, mengintegrasikan pendidikan, penelitian, dan pengabdian masyarakat. Sejak 2001, KKN dikembangkan dengan berbagai tema, dan pada 2006 menjadi KKN Pembelajaran Pemberdayaan Masyarakat (PPM). Pada 2013, program diperbarui dengan pembekalan di tingkat fakultas dan universitas sesuai Peraturan Rektor No. 5 Tahun 2013.</p>
                </div>
            </div>
        </div>
    )
}