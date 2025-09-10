export default function Disc(){
    return(
        <div className="w-full flex lg:flex-row flex-col justify-between h-fit my-14 items-center">
            <h1 className="font-medium lg:text-5xl md:text-3xl text-2xl lg:text-left text-center font-ply w-[70%]">Discover our recent events and achievements</h1>
            <div className="flex flex-col gap-6 items-center">
                 <p className="text-gray-500 font-medium lg:w-[90%] lg:text-left text-center w-[80%]">Discover our featured works showcasing our expertise and passion in every project. Let these stories inspire your next venture!</p>
                          <button className="py-2 px-6 lg:w-fit w-[90%] flex justify-center items-center text-white rounded-full font-medium bg-black">Read More<span class="material-symbols-outlined">
arrow_forward
</span></button>
            </div>
        </div>
    )
}