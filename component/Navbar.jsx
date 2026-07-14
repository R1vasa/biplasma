"use client"

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

function Navbar() {
const [activeMenu, setActiveMenu] = useState(null);
const [mobileOpen, setMobileOpen] = useState(false);
const menuRef = useRef(null);

useEffect(() => {
  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setActiveMenu(null);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
   <div className="relative flex justify-center lg:pt-8">

  {/* Daun kiri */}
  <Image
    src="/images/leaf.svg"
    alt="Leaf Left"
    width={180}
    height={180}
    className="absolute left-0 -top-1 z-20 hidden lg:flex"
  />

  {/* Navbar Desktop*/}
  <nav className="relative z-10 items-center gap-25 px-48 py-4 rounded-full bg-white/20 shadow-lg hidden lg:flex">
    <Link href="/" className="text-white text-2xl font-extrabold">
      Home
    </Link>
    <Link href="/#about" className="text-white text-2xl font-extrabold">
      About
    </Link>
    <div ref={menuRef} className="flex items-center gap-25">

      <button
        onClick={() =>
          setActiveMenu(activeMenu === "registered" ? null : "registered")
        }
        className="flex items-center gap-2 text-white text-2xl font-extrabold cursor-pointer"
      >
        Registered
      </button>

      <div
        className={`
          absolute
          top-18
          right-30
          w-100
          bg-white
          rounded-2xl
          shadow-xl
          p-3
          origin-top-left
          transition-all
          duration-300
          ${
            activeMenu === "registered"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
      >
        <div className="absolute -left-8 top-3 w-5 h-5 bg-white rounded-full"></div>

        <div className="space-y-3">

          <Link
            href="/Business-Plan-Competition"
            className="flex items-center gap-4 text-[#FF4F6D] text-2xl font-bold hover:translate-x-2 transition"
          >
            <span className="w-4 h-4 rounded-full bg-[#FF4F6D]"></span>
            Business Plan Competition
          </Link>

          <Link
            href="/Olimpiade-Biologi"
            className="flex items-center gap-4 text-[#9E3F9A] text-2xl font-bold hover:translate-x-2 transition"
          >
            <span className="w-4 h-4 rounded-full bg-[#9E3F9A]"></span>
            Olimpiade Biologi
          </Link>

          <Link
            href="/Poster-Digital"
            className="flex items-center gap-4 text-[#F6A623] text-2xl font-bold hover:translate-x-2 transition"
          >
            <span className="w-4 h-4 rounded-full bg-[#F6A623]"></span>
            Poster Digital
          </Link>

        </div>
      </div>

      <div className="relative">

        <button
          onClick={() =>
            setActiveMenu(activeMenu === "olimpiade" ? null : "olimpiade")
          }
          className="text-white text-2xl font-extrabold cursor-pointer"
        >
          Olimpiade
        </button>

        <div
          className={`
            absolute
            top-14
            left-5
            w-50
            bg-white
            rounded-2xl
            shadow-xl
            p-3
            transition-all
            duration-300
            ${
              activeMenu === "olimpiade"
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }
          `}
        >
          <div className="absolute -left-8 top-3 w-5 h-5 bg-white rounded-full"></div>

          <div className="space-y-3">

          <Link
            href="/Business-Plan-Competition"
            className="flex items-center gap-4 text-[#FF4F6D] text-2xl font-bold hover:translate-x-2 transition"
          >
            <span className="w-4 h-4 rounded-full bg-[#FF4F6D]"></span>
            Click Here
          </Link>

          </div>
        </div>

      </div>

    </div>
  </nav>

  {/* Navbar Mobile*/}
  <nav className="relative flex justify-between items-center w-full px-6 py-4 bg-white/20 shadow-lg lg:hidden">

  <Image
    src="/images/Nav.svg"
    alt="Logo"
    width={100}
    height={50}
    className="h-auto w-24"
  />

  <button
    onClick={() => setMobileOpen(!mobileOpen)}
    className="text-white"
  >
    <Menu size={30} className="cursor-pointer"/>
  </button>

  <div
  className={`
    lg:hidden
    absolute
    top-full
    left-0
    w-full
    bg-white
    shadow-xl
    rounded-b-3xl
    overflow-hidden
    transition-all
    duration-300
    z-50
    ${
      mobileOpen
        ? "max-h-[500px] opacity-100"
        : "max-h-0 opacity-0"
    }
  `}
>

  <Link
    href="/"
    className="block px-8 py-4 text-xl font-bold hover:bg-gray-100"
  >
    Home
  </Link>

  <Link
    href="/#about"
    className="block px-8 py-4 text-xl font-bold hover:bg-gray-100"
  >
    About
  </Link>

  <Link
    href="/registered"
    className="block px-8 py-4 text-xl font-bold hover:bg-gray-100"
  >
    Registered
  </Link>

  <Link
    href="/Business-Plan-Competition"
    className="block px-8 py-4 text-xl font-bold text-[#FF4F6D] hover:bg-gray-100"
  >
    Business Plan Competition
  </Link>

  <Link
    href="/Olimpiade-Biologi"
    className="block px-8 py-4 text-xl font-bold text-[#9E3F9A] hover:bg-gray-100"
  >
    Olimpiade Biologi
  </Link>

  <Link
    href="/Poster-Digital"
    className="block px-8 py-4 text-xl font-bold text-[#F6A623] hover:bg-gray-100"
  >
    Poster Digital
  </Link>

</div>

</nav>

  {/* Daun kanan */}
  <Image
    src="/images/leaf.svg"
    alt="Leaf Right"
    width={180}
    height={180}
    className="absolute right-0 -top-1 scale-x-[-1] z-20 hidden lg:flex"
  />

</div>
  )
}

export default Navbar