import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

import { 
  FaThreads,
  FaXTwitter,
  FaTiktok
 } from "react-icons/fa6";

 import { CiMail } from "react-icons/ci";

export default function Footer({
  accentColor = "#FF4F6D",
  bgColor = "#0C3A75"
}) {
  return (
    <footer
      className="w-full rounded-t-[30px] mt-10 py-8 px-6 lg:px-14" style={{ background : bgColor }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

        {/* Left */}
        <div>
          <p
            className="italic font-semibold text-xs lg:text-sm"
            style={{ color: accentColor }}
          >
            heard enough?
          </p>

          <h1
            className="font-extrabold italic text-4xl lg:text-6xl leading-none"
            style={{ color: accentColor }}
          >
            CONTACT US
          </h1>
        </div>

        {/* Right */}
        <div className="font-Poppins grid grid-cols-2 gap-x-10 gap-y-2 text-sm lg:text-lg font-semibold">

          {/* Kolom kiri */}
          <div className="space-y-1">

            <a
              href="https://instagram.com/bioplasma.2026"
              target="_blank"
              className="flex items-center gap-2 font-bold italic hover:opacity-80"
              style={{ color: accentColor }}
            >
              <FaInstagram size={18} />
              @bioplasma.2026
            </a>

            <a
              href="https://instagram.com/bioplasma.2026"
              target="_blank"
              className="flex items-center gap-2 font-bold italic hover:opacity-80"
              style={{ color: accentColor }}
            >
              <FaThreads size={18} />
              @bioplasma.2026
            </a>

            <a
              href="#"
              className="flex items-center font-bold italic gap-2 hover:opacity-80"
              style={{ color: accentColor }}
            >
              <FaXTwitter size={18} />
              @BIOPLASMA2026
            </a>

            <a
              href="#"
              className="flex items-center font-bold italic gap-2 hover:opacity-80"
              style={{ color: accentColor }}
            >
              <FaTiktok size={18} />
              @bioplasma.2026
            </a>

          </div>

          {/* Kolom kanan */}

          <div className="space-y-1">

            <a
              href="https://youtube.com"
              target="_blank"
              className="flex items-center font-bold italic gap-2 hover:opacity-80"
              style={{ color: accentColor }}
            >
              <FaYoutube size={18} />
              @Bioplasmaub
            </a>

            <a
              href="#"
              className="flex items-center font-bold italic gap-2 hover:opacity-80"
              style={{ color: accentColor }}
            >
              <FaFacebookF size={18} />
              BIOPLASMA2026BIOUB
            </a>

            <a
              href="mailto:bioplasmabioub@gmail.com"
              className="flex items-center font-bold italic gap-2 hover:opacity-80"
              style={{ color: accentColor }}
            >
              <CiMail size={18} />
              bioplasmabioub@gmail.com
            </a>

            <a
              href="https://wa.me/6285801207747"
              className="flex items-center font-bold italic gap-2 hover:opacity-80"
              style={{ color: accentColor }}
            >
              <FaWhatsapp size={18} />
              0858-0120-7747 (Eca)
            </a>

          </div>

        </div>
      </div>
    </footer>
  );
}