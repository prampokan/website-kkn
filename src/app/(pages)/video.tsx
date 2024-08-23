export default function Video() {
    return (
        <div className="flex justify-center w-full py-20 px-5 xl:px-0">
            <div className="w-[70rem]">
                <div className="mb-10">
                    <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter text-zinc-700">Kenali Desa Turus dalam 10 menit! 📺</h1>
                </div>
                <div className="h-[32rem] w-full overflow-hidden">
                    <iframe 
                        width="100%" 
                        height="auto" 
                        src="https://www.youtube.com/embed/y-gsuJItMzw?si=XW__biuFMyj6HXbT" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="aspect-video rounded-[1rem] md:rounded-[2rem] lg:aspect-[21/9]"
                    >
                    </iframe>
                </div>
            </div>
        </div>
    )
}