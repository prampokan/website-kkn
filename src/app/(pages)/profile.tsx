import Image from "next/image"

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
                <div className="md:ml-10 w-full md:w-1/2 mt-8 md:mt-0">
                    <h1 className="text-3xl lg:text-5xl font-bold tracking-tighter mb-4 md:mb-8">Visi & Misi Desa Turus</h1>
                    <p className="text-2xl leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis repellat odio veniam modi blanditiis perferendis consequatur deleniti, similique, suscipit distinctio et omnis laborum facilis, obcaecati a odit voluptatibus! Doloremque, repellendus.</p>
                </div>
            </div>
        </div>
    )
}