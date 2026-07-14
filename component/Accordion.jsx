"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({
  title,
  children,
  defaultOpen = false,
  textColor
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="font-Poppins mx-5 my-2 lg:mx-10 lg:my-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setOpen(!open)}
          className="
            flex
            items-center
            justify-between
            w-fit
            rounded-xl
            bg-white
            px-3
            sm:px-5
            lg:px-8
            py-2
            shadow-md
            whitespace-nowrap
          "
        >
          <span
            className="
              font-bold
              text-sm
              sm:text-xl
              lg:text-2xl
              leading-none
            "
            style={{ color : textColor }}
          >
            {title}
          </span>

          <ChevronDown
            size={18}
            className={`duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Garis Putih */}
        <div className="flex-1 h-6 sm:h-8 lg:h-10 rounded-xl bg-white"></div>
      </div>

      {/* Content */}
      <div
        className={`
          overflow-hidden
          transition-all
          duration-500
          ${
            open
              ? "max-h-[1200px] opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }
        `}
      >
        {children}
      </div>
    </div>
  );
}