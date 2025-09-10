import Navebar from "./navbar";
import Slider from "./Slide";

export default function Header(){
    return(
        <header className="h-[80vh] text-white w-full bg-[url(/image/BG.jpg)] bg-cover bg-no-repeat">
            <Navebar/>
            <Slider/>
        </header>
    )
}