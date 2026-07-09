import Image from "next/image";

function Navbar() {
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
    <a href="#" className="text-white text-2xl font-extrabold">
      Home
    </a>
    <a href="#about" className="text-white text-2xl font-extrabold">
      About
    </a>
    <a href="#" className="text-white text-2xl font-extrabold">
      Registered
    </a>
    <a href="#" className="text-white text-2xl font-extrabold">
      Olimpiade
    </a>
  </nav>

  {/* Navbar Mobile*/}
  <nav className="flex justify-between w-full px-8 py-4 bg-white/20 shadow-lg lg:hidden">
    <h1 className="text-2xl">Bioplasma</h1>
    <button className="text-white text-2xl font-extrabold">Menu</button>
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