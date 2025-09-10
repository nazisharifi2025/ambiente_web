import { useState } from "react"

export default function Art(){
    const [Art,setArt] = useState([
        {
            title : "Art Workshop",
            des : "Space with industrial and contemporary elements Space with industrial and contemporary elements Space with industrial and contemporary elements Space with industrial.",
            sea : "Seattle, Washington, United States",
            btn1 : "Read More ",
            btn2 : "Book Now",
            img: "/image/a6.webp",
        },
        {
            title : "Spa Design",
            des : "Incorporating soothing color palettes, organic materials, and gentle illumination can significantly contribute to establishing a serene and tranquil environment.",
            sea : "Oaklanda, California, United States",
            btn1 : "Read More ",
            btn2 : "Book Now",
             img: "/image/a7.webp",
        },
        {
            title : "Modern Loft Design",
            des : "Space with industrial and contemporary elements Space with industrial and contemporary elements Space with industrial and contemporary elements Space with industrial and co",
            sea : "Chicago, Illinois, United Stated",
            btn1 : "Read More ",
            btn2 : "Book Now",
             img: "/image/a8.webp",
        },
    ])
    return(
        <div className="h-fit w-full flex flex-col gap-11">
            {Art.map((pro,index)=>(
        <div key={index} className="w-[85%] h-[90vh] flex bg-gray-100 mx-auto">
            <div className="w-[55%] flex flex-col gap-5 p-12">
            <h1 className="font-medium text-3xl">{pro.title}</h1>
            <p className="text-gray-500 font-medium w-[90%]">{pro.des}</p>
            <div className="w-full border-b border-gray-500 pb-2 my-3 flex justify-between items-center">
                <span className="font-light text-xl">Location:</span>
                <strong className="text-xl font-medium">{pro.sea}</strong>
            </div>
            <div className="w-full border-b border-gray-500 pb-2 my-3 flex justify-between items-center">
                <span className="font-light text-xl">Location:</span>
                <strong className="text-xl font-medium">{pro.sea}</strong>
            </div>
            <div className="w-full flex flex-wrap gap-5">
                <li className=" list-inside font-medium text-md border rounded-full py-2 px-4">Comfortable</li>
                <li className=" list-inside font-medium text-md border rounded-full py-2 px-4">Contemporary</li>
                <li className=" list-inside font-medium text-md border rounded-full py-2 px-4">Hospitality</li>
                <li className=" list-inside font-medium text-md border rounded-full py-2 px-4">Industrial</li>
                <li className=" list-inside font-medium text-md border rounded-full py-2 px-4">Minimalist</li>
            </div>
            <div className="flex my-8 gap-5 w-full">
                <button className="py-2 px-6 flex justify-center items-center text-white rounded-full font-medium bg-black">{pro.btn1}<span class="material-symbols-outlined">
arrow_forward
</span></button>
                <button className="py-2 px-4 rounded-full font-medium border">{pro.btn2}</button>
            </div>
            </div>
            <div className="w-[50%] h-full overflow-hidden">
                <img src={pro.img} className="h-full w-full hover:scale-125 transform-3d duration-700 transition-all" alt="" />
            </div>
        </div>
        ))}
        </div>
    )
}