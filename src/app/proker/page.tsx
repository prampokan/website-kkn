import Navbar from "../(components)/navbar"

export default function Proker() {
    return (
        <>
            <Navbar/>
            <div className="w-full flex justify-center">
                <div className="w-[70rem]">
                    <h1 className="mt-20 font-bold text-4xl tracking-tight">Program Kerja🚀</h1>
                    <div className="flex flex-wrap gap-5 mt-8">
                        <div className="w-[49%] h-[30rem] shadow rounded-3xl p-5">
                            <div className="bg-zinc-200 w-full h-[22rem] rounded-2xl">

                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minima nulla placeat accusamus, nisi voluptatem atque aspernatur adipisci nam qui ipsum doloremque assumenda veritatis distinctio consequatur ullam tempora obcaecati. Dolor.</p>
                            </div>
                        </div>
                        <div className="w-[49%] h-[30rem] shadow rounded-3xl p-5">
                            <div className="bg-zinc-200 w-full h-[22rem] rounded-2xl">

                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minima nulla placeat accusamus, nisi voluptatem atque aspernatur adipisci nam qui ipsum doloremque assumenda veritatis distinctio consequatur ullam tempora obcaecati. Dolor.</p>
                            </div>          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}