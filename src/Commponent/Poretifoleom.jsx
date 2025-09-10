import { useState } from "react"

export default function Poritefoliom(){
    const [pages,setpages] = useState([
        {
            title : "Our Project",
            des: "Explore our portfolio to witness the transformation of creative ideas into remarkable realities.",
        },
        {
            title : "Our Services",
            des: "With our expertise and tailored solutions, we’re here to support you in achieving your goals and taking your vision to the next level.",
        },
        {
            title : "About Us",
            des: "We transform bold ideas into reality. With passion, we push boundaries and turn concepts into tangible outcomes.",
        },
            {
                title : "Contact Us",
                des: "Connect with us to share your vision. We’ll collaborate to turn your dreams into reality. Let’s create something extraordinary!",
            },
    ])
    return(
        <div className="w-[80%] my-12 mx-auto h-fit ">
            <h1 className=" text-4xl font py-12 lg:w-[50%] w-full lg:text-left text-center">See our portfolio for bold <span className="text-style-italic"> ideas and creative expertise</span></h1>
            <div className="w-full gap-5 mx-auto h-fit flex lg:flex-row flex-col justify-between items-center">
            <div className="flex flex-col gap-4 lg:h-[75vh] md:h-[70vh] h-[50vh] lg:w-[45%] w-full overflow-hidden">
                <img src="/image/a5.webp" className="h-full w-full hover:scale-200 transform-3d transition-all duration-700"  alt="" />
            </div>
            <div className="lg:w-1/2 w-[90%] flex flex-col  justify-between gap-6 lg:h-[75vh] h-[55vh] ">
            {pages.map((item,index)=>(
                <div key={index} className="w-full">
                <h1 className="font-bold font text-2xl">{item.title}</h1>
                <p className="font-medium text-gray-500">{item.des}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
    )
}