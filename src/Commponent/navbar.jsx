
export default function Navebar(){
    return(
        <nav className="flex justify-between w-full h-fit px-12 py-6 ">
            <img src="/image/logo2.svg" alt="" />
            <ul className="flex gap-8 font-medium ">
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">Serveces</a></li>
            </ul>
            <div className="flex gap-5">
                <button className="pu-3 font-medium px-4 text-gray-400 bg-white rounded-full">Sign Up</button>
                <button className="pu-3 font-medium px-5 border border-white rounded-full">Contect Us</button>
            </div>
        </nav>
    )
}