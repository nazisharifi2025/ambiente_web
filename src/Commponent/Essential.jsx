import { useState } from "react"

export default function Essential(){
    const [count,setcount] = useState([
        {
            title: "Client and Counting",
            count : "250+",
            des: "We’re proud to have the trust of 250 clients.",
        },
        {
            title: "Completed Project",
            count : "90+",
            des: "We have completed over 50 projects in various sectors,",
        },
        {
            title: "Expert Team",
            count : "500+",
            des: "We have 100 architects and engineers focused on quality.",
        },
        {
            title: "Project Value",
            count : "$5.5M",
            des: "We manage projects over 3M, showcasing our skill in design.",
        },
    ])
    return(
        <div className="h-[70vh] w-[90%]  flex flex-col gap-6 my-16 mx-auto p-5 justify-center ">
            <div className="flex justify-between w-full items-center">
                <h1 className="font-bold font text-5xl ">Essential aspects driving our success</h1>
                 <p className="font-medium text-gray-500 text-xl">Our success is driven by innovation, operational excellence, and a strong commitment to our client</p>
            </div>
            <div className="flex justify-between gap-7 w-full my-12">
                {count.map((counts,index)=>(
                <div className="flex flex-col gap-8 w-[25%]">
                    <h3 className="font-medium font ">{counts.title}</h3>
                    <h1 className="font-bold text-5xl font-ply">{counts.count}</h1>
                    <p className="text-gray-500 font-medium w-[90%]">{counts.des}</p>
                </div>
                ))}
            </div>
        </div>
    )
}