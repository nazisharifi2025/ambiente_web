export default function Project(){
    return(
        <div className="w-[90%] h-screen my-12 text-white flex justify-between gap-7 mx-auto">
            <div className="w-[45%] h-full bg-[url(/image/a13.webp)] bg-cover bg-no-repeat overflow-hidden">
            <div className="h-full w-full bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.6)] hover:scale-105 gap-5 flex flex-col justify-center items-center">
            <p className="font-bold text-center">Our Project</p>
            <h1 className="font-ply text-center text-6xl">Your Idea , Out Exertise</h1>
            <button className="py-2 text-center px-5 bg-white text-gray-600 rounded-full">See EXplore Our serveces</button>
            </div>
            </div>
            <div className="w-[45%] h-full bg-[url(/image/a19.jpg)] overflow-hidden bg-cover bg-no-repeat">
            <div className="h-full w-full bg-[rgba(0,0,0,0.3)] gap-5 hover:bg-[rgba(0,0,0,0.6)] hover:scale-105  flex flex-col justify-center items-center">
            <p className="font-bold text-center">Contact Us</p>
            <h1 className="font-ply text-center text-6xl">Lets Begin In The Experince</h1>
            <button className="py-2 text-center px-5 bg-white text-gray-600 rounded-full">Get in touch</button>
            </div>
            </div>
        </div>
    )
}