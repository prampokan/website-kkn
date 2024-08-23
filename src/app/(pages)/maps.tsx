export default function Maps() {
    return (
        <div className="flex justify-center w-full py-20 px-5 xl:px-0">
            <div className="w-[70rem]">
                <div className="mb-10">
                    <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter text-zinc-700">Dimana sih Desa Turus?👀</h1>
                </div>
                <div className="h-[32rem] w-full rounded-[3rem] overflow-hidden">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15818.43851706497!2d110.65312469403764!3d-7.617384928366025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a41d55c70c5e3%3A0xfc2ac7990aa4b655!2sTurus%2C%20Polanharjo%2C%20Klaten%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1720842295468!5m2!1sen!2sid" 
                        width="100%" 
                        height="100%" 
                        style={{border:'0'}} 
                        allowFullScreen
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

{/* <iframe
	width="100%"
	height="auto"
	src="https://www.youtube.com/embed/Yoa0rUk-O9Q"
	title="Panorama KAMPUNG MANGGAHANG Hyperlapse"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
	class="aspect-video rounded-[2rem] md:rounded-[4rem] lg:aspect-[21/9]"
/> */}