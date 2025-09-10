export default function Disc(){
    return(
        <div className="w-full flex justify-between h-fit my-14 items-center">
            <h1 className="font-medium text-5xl font-ply w-[70%]">Discover our recent events and achievements</h1>
            <div className="flex flex-col gap-6 items-center">
                 <p className="text-gray-500 font-medium w-[90%]">Discover our featured works showcasing our expertise and passion in every project. Let these stories inspire your next venture!</p>
                          <button className="py-2 px-6 flex justify-center items-center text-white rounded-full font-medium bg-black">Read More<span class="material-symbols-outlined">
arrow_forward
</span></button>
            </div>
        </div>
    )
}