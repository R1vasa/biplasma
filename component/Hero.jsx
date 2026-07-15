import Image from "next/image";

function Hero() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center mt-20 lg:mt-7">
            <h1 className="font-Starshines text-yellow-500 text-2xl font-extrabold [-webkit-text-stroke:0.5px_white] md:text-4xl">HI <span className="text-red-400">EVERYONE </span> <span className="text-green-400">,</span> <span className="text-blue-400">WELCOME</span> <span className="text-yellow-500">TO</span></h1>
            <Image src="/images/Hero.svg" alt="Hero Image" width={750} height={500} preload className="h-auto z-1 lg:absolute lg:top-6 lg:left-0 lg:w-[1500]" />
            <h1 className="font-Starshines text-yellow-500 text-md font-extrabold mt-4 mx-4 text-center py-2 px-8 rounded-full bg-white/20  shadow-lg [-webkit-text-stroke:0.3px_white] z-1 bottom-25 lg:absolute md:text-2xl md:mx-0">Biology <span className="text-blue-500">Open</span> <span className="text-green-500">House</span> <span className="text-red-400">Olympiad </span> and <span className="text-blue-500">Saturday’s</span> <span className="text-purple-500">Market </span></h1>
            <div className="absolute bottom-0 left-0 w-full h-75 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.77)_77%,rgba(255,255,255,1)_100%)]"
/>
            <div className="absolute bottom-0 left-0 w-full flex items-end justify-between pointer-events-none">

            {/* Daun kiri */}
            <Image
                src="/images/BLeaf.svg"
                alt="Left Leaf"
                width={180}
                height={180}
                className="w-30 md:w-50"
                preload
            />

            {/* Daun kanan */}
            <Image
                src="/images/BLeaf.svg"
                alt="Right Leaf"
                width={180}
                height={180}
                className="scale-x-[-1] w-30 md:w-50"
                preload
            />

            </div>
        </div>
    </div>
  )
}

export default Hero