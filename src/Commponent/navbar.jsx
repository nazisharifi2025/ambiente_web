import { useState } from "react";

export default function Navebar() {
  const [menuOpen, setMenuOpen] = useState(false); // کنترل باز یا بسته بودن منو

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between w-full h-fit px-12 py-6 relative">
      <img src="/image/logo2.svg" alt="Logo" />

      {/* منو */}
      <ul
        className={`
          flex gap-8 font-medium 
          lg:flex-row
          md:flex-col 
          flex-col
          lg:block ${menuOpen ? "block" : "hidden"} 
          lg:bg-transparent bg-black 
          lg:p-0 p-6 
          lg:rounded-none rounded-2xl 
          lg:relative absolute 
          top-20 md:right-18 right-10 lg:top-4 lg:left-[30%] w-[80%] z-50
        `}
      >
        <li><a href="">Home</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Project</a></li>
        <li><a href="">Services</a></li>
      </ul>

      {/* دکمه‌ها و آیکون منو */}
      <div className="flex gap-5 lg:w-[30%] w-[50%] items-center justify-end">
        <button className="py-3 font-medium lg:block md:block hidden px-4 text-gray-400 bg-white rounded-full">
          Sign Up
        </button>
        <button className="py-3 font-medium px-5 lg:block md:block hidden border border-white rounded-full">
          Contact Us
        </button>

        {/* آیکون منو فقط در موبایل */}
        <button
          className="p-2 bg-white rounded-xl lg:hidden block text-black"
          onClick={toggleMenu}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>
    </nav>
  );
}
