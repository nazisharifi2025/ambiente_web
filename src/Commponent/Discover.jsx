export default function Discover(){
    return(
        <div className="w-full flex justify-between lg:flex-row flex-col h-fit my-12 items-center">
            <h1 className="font-medium lg:text-5xl md:text-3xl text-2xl px-2 font-ply lg:w-[70%] w-full">Expert guidance and solutions for your project stages</h1>
            <div className="flex flex-col gap-6 items-center">
                 <p className="text-gray-500 font-medium w-[90%]">Discover our featured works showcasing our expertise and passion in every project. Let these stories inspire your next venture!</p>
                          <button className="py-2 px-6 flex lg:w-fit w-[90%] justify-center items-center text-white rounded-full font-medium bg-black">Read More<span class="material-symbols-outlined">
arrow_forward
</span></button>
            </div>
        </div>
    )
}