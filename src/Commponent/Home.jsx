import Art from "./Art";
import AskedQu from "./AskedQu";
import Disc from "./Disc";
import Discover from "./Discover";
import Essential from "./Essential";
import Header from "./Header";
import Poritefoliom from "./Poretifoleom";
import Project from "./Project";
import Sliders from "./Sliders";
import Swiper from "./Swiper";

export default function Home(){
    return(
        <div>
            <Header/>
            <Swiper/>
            <Poritefoliom/>
            <Essential/>
            <Discover/>
            <Art/>
            <Disc/>
            <Sliders/>
            <AskedQu/>
            <Project/>
            
        </div>
    )
}