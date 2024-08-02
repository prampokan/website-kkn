export default function CardSkeleton() {
    return (
        <div className="h-auto w-full sm:w-[49%] rounded-3xl shadow border p-5 cursor-pointer animate-pulse">
            <div className="w-full h-[22rem] bg-zinc-200 rounded-xl overflow-hidden">
                
            </div>
            <div className="flex items-center mt-5 gap-4">
                <div className="rounded-full h-14 w-14 bg-zinc-200">
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl tracking-tighter bg-zinc-200 h-5 w-32"></h1>
                    <h1 className="font-bold text-2xl tracking-tighter bg-zinc-200 h-5 w-52"></h1>
                </div>
            </div>
        </div>
    )
}