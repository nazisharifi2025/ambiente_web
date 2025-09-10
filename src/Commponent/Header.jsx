import Navebar from "./navbar";
import Slider from "./Slide";

export default function Header(){
    return(
        <header className="lg:h-[80vh] md:h-screen h-[60vh] text-white w-full bg-[url(/image/slider1.jpg)] bg-cover bg-no-repeat">
            <Navebar/>
            <Slider/>
        </header>
    )
}