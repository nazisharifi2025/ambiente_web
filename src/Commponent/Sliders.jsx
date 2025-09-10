import { useEffect, useReducer, useState } from "react"

export default function Sliders(){
    // slider 1
    const [Slider,setSlider] = useState([
        {
            img : "/image/a9.webp",
        },
        {
            img : "/image/a10.webp",
        },
        {
            img : "/image/a11.webp",
        }
    ]);
    const [curentindex,setcurentindex] = useState(0);
    useEffect(()=>{
        const interval = setInterval(() => {
            setcurentindex((index)=> (index + 1) % Slider.length)
        }, 3000);
        return ()=> clearInterval(interval);
    },[Slider.length]);
    // Slide 2
      const [Slider2,setSlider2] = useState([
        {
            imge : "/image/a10.webp",
        },
        {
            imge : "/image/a11.webp",
        },
        {
            imge : "/image/a16.webp",
        }
    ]);
    const [indexfit,setindexfit] = useState(0);
    useEffect(()=>{
        const setint = setInterval(()=>{
            setindexfit((ind)=> (ind + 1) % Slider2.length);
        },3000)
        return ()=> clearInterval(setint);
    },[Slider2.length])
    // buttons 
   // قبلاً تعریف شده:

    return(
        // slider1
        <div className="w-full h-full flex  justify-center items-center gap-12">
<div className="h-12 w-full bg-white absolute bottom-0 left-0 bg-clip group-hover:h-20 z-10  group-hover:no-clip"></div>
            
            {/* button 2 endded */}
            {/* slide 1 */}
        <div className="h-[70%] w-[50%] overflow-hidden">
            <img src={Slider[curentindex].img} className="h-full w-full transition-transform duration-300 ease-in-out transform hover:scale-110" alt="" />
        </div>
        {/* slidr2 */}
        
         <div className="h-[70%] w-[50%] overflow-hidden">
            <img src={Slider2[indexfit].imge} className="h-full w-full transition-transform duration-300 ease-in-out transform hover:scale-110" alt="" />
        </div>
 
        </div>
    )
}