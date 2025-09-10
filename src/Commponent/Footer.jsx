export default function Footer(){
    return(
        <div className="lg:h-[80vh] h-[105vh] md:h-[60vh] w-full bg-[url(/image/a12.webp)] ">
            <div className="h-full w-full bg-[rgba(0,0,0,0.8)] lg:flex-row flex-col relative flex justify-between items-center lg:p-20 p-6 ">
                <div className="lg:h-[80%] h-fit lg:w-[40%] md:w-full flex flex-col ">
                 <img src="/image/logo.svg" className="h-14 w-14" alt="" />
                 <strong className="w-[60%] font-medium text-2xl text-white">c123 Example Road New York, NY 12345</strong>
                </div>
                <div className="h-[80%] lg:w-[40%] w-full flex justify-between flex-wrap items-center">
                    <ul className="font-medium text-xl text-white flex flex-col gap-8">
                        <li>HomeV.1</li>
                        <li>HomeV.2</li>
                        <li>HomeV.3</li>
                        <li>Project</li>
                        <li>Project Details</li>
                    </ul>
                    <ul className="font-medium text-xl text-white flex flex-col gap-8">
                        <li>contactV.1</li>
                        <li>contactV.2</li>
                        <li>contactV.3</li>
                        <li>Office Location</li>
                        <li>Biografig</li>
                    </ul>
                    <ul className="font-medium text-xl text-white flex flex-col gap-8">
                        <li>BlogV.1</li>
                        <li>BlogV.2</li>
                        <li>BlogV.3</li>
                        <li>Internal Blog</li>
                        <li>Serveces</li>
                    </ul>
                </div>
                <h1 className="font-ply text-2xl font-medium absolute bottom-2 lg:right-[30%] md:right-24 right-0 text-white">Copyright © 2024 saastemplate. All rights reserved.</h1>
        </div>
            </div>
    )
}