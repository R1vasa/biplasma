import Image from "next/image";

function Phylosophy() {
  return (
    <>
    <div className="relative bg-[url('/images/Filosofi-hero.svg')] bg-cover bg-center min-h-screen">
        <div className="absolute rotate-180 top-0 left-0 w-full h-75 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.77)_77%,rgba(255,255,255,1)_100%)]"/>
        <div className="absolute bottom-0 left-0 w-full h-75 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.77)_77%,rgba(255,255,255,1)_100%)]"/>
        <h1 className="text-3xl lg:text-5xl font-bold font-Starshines text-center text-shadow-lg [-webkit-text-stroke:2px_white] text-white z-10 relative pt-20">
          <span className="text-blue-500">FILOSOFI </span>
          <span className="text-red-500">LOGO </span>
          <span className="text-green-500">BIOPLASMA </span>
          <span className="text-yellow-500">2026 </span>
        </h1>
        
        {/* section */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1.5fr] gap-8 mb-16 mt-20 mx-10">
         {/* <!-- LEFT COLUMN --> */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="relative card-tail-right block">
              <div className="bg-blue-500 text-white rounded-2xl shadow-lg p-5">
                <p className="font-display font-bold text-sm text-blue-500 bg-white inline-block px-2 py-0.5 rounded mb-2">
                  DAUN MELENGKUNG MENYERUPAI SEPASANG TANGAN
                </p>
                <p className="text-sm leading-relaxed">
                  Melambangkan komitmen nyata dalam menjaga, menopang, dan menaungi ekosistem.
                  Bentuk tangan yang terbuka merefleksikan peran aktif manusia dalam melestarikan
                  keanekaragaman hayati. Simbol ini terinspirasi dari City Thneed-Ville sebagai
                  filosofi <span className="font-extrabold">POSDIG</span>.
                </p>
              </div>
            </div>
      
            <div className="relative card-tail-right">
              <div className="bg-rose-400 text-white rounded-2xl shadow-lg p-5">
                <p className="font-display font-bold text-sm text-red-500 bg-white inline-block px-2 py-0.5 rounded mb-2">
                  POHON TRUFFULA YANG BERPUTAR MELINGKAR
                </p>
                <p className="text-sm leading-relaxed">
                  Melambangkan roda ekosistem dan siklus kehidupan yang terus berjalan secara dinamis.
                  Pola melingkar ini menggambarkan keberlanjutan (sustainability) di mana setiap
                  komponen alam saling terhubung tanpa putus. Simbol ini terinspirasi dari Pabrik
                  Once-Ler sebagai filosofi <span className="font-extrabold">BPC</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex justify-center order-1 lg:order-2">
            <Image src="/images/Logo.svg" alt="Description" width={200} height={200} />
          </div>

          {/* Right Column */}
          <div className="space-y-8 order-3">
            <div className="relative card-tail-left">
              <div className="bg-emerald-600 text-white rounded-2xl shadow-lg p-5">
                <p className="font-display font-bold text-sm bg-white text-emerald-600 inline-block px-2 py-0.5 rounded mb-2">
                  SEPASANG DAUN YANG MENAUNGI POHON TRUFFULA
                </p>
                <p className="text-sm leading-relaxed">
                  Melambangkan keharmonisan, biodiversitas, dan keseimbangan mutlak di dalam sebuah
                  sistem, ini menunjukkan bahwa perlindungan yang tepat akan melahirkan lingkungan
                  yang sehat dan seimbang. Simbol ini terinspirasi dari Truffula Forest sebagai
                  filosofi <span className="font-extrabold">Olimplade</span>.
                </p>
              </div>
            </div>
      
            <div className="relative card-tail-left">
              <div className="bg-amber-400 text-white rounded-2xl shadow-lg p-5">
                <p className="font-display font-bold text-sm bg-white text-amber-500 inline-block px-2 py-0.5 rounded mb-2">
                  BINTANG EMAS DI PUSAT LOGO
                </p>
                <p className="text-sm leading-relaxed">
                  Melambangkan puncak pencapaian, harapan, dan prestasi tertinggi yang ingin diraih
                  melalui kerja keras serta dedikasi kompetisi ini.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div className="relative bg-[url('/images/Background.svg')] bg-cover bg-center min-h-screen">

      {/* ===== Title ===== */}
      <div className="flex items-center justify-center py-8 lg:py-10">

        <div className="flex-1 w-20 h-15 lg:h-15 rounded-r-full bg-linear-to-r from-red-500 to-blue-500"></div>

        <h2
          className="
            mx-3 lg:mx-6
            font-Starshines
            text-center
            text-3xl
            lg:text-5xl
            font-bold
            [-webkit-text-stroke:1px_white]
            lg:[-webkit-text-stroke:2px_white]
            text-shadow-lg
            leading-tight
          "
        >
          <span className="text-orange-400">SAY </span>
          <span className="text-green-600">HI </span>
          <span className="text-red-400">TO </span>
          <span className="text-blue-500">OUR </span>

          <br className="lg:hidden" />

          <span className="text-green-600">MASKOT </span>
          <span className="text-blue-400">HI </span>
          <span className="text-red-400">TRUFIO!!</span>
        </h2>

        <div className="flex-1 h-15 rounded-l-full bg-linear-to-r from-blue-500 to-red-500"></div>

      </div>

      {/* ===== Content ===== */}
      <div className="flex flex-col items-center mt-8 lg:mt-10 px-4 lg:px-10">

        {/* ===== Maskot ===== */}
        <div
          className="
            flex
            gap-4
            w-full
            overflow-x-auto
            lg:overflow-visible
            lg:justify-center
            pb-2
            scrollbar-none
          "
        >
          <Image
            src="/images/Maskot_1.svg"
            alt="Trufio"
            width={180}
            height={180}
            className="shrink-0 lg:w-75"
          />

          <Image
            src="/images/Maskot_2.svg"
            alt="Trufio"
            width={180}
            height={180}
            className="shrink-0 lg:w-75"
          />

          <Image
            src="/images/Maskot_3.svg"
            alt="Trufio"
            width={180}
            height={180}
            className="shrink-0 lg:w-75"
          />

          <Image
            src="/images/Maskot_1.svg"
            alt="Trufio"
            width={180}
            height={180}
            className="shrink-0 lg:w-75"
          />
        </div>

        {/* ===== Nama ===== */}
        <h1
          className="
            font-Starshines
            mt-6
            text-center
            text-2xl
            sm:text-3xl
            lg:text-4xl
            font-extrabold
            text-red-500
            [-webkit-text-stroke:1px_white]
            text-shadow-lg
          "
        >
          Trufio

          <br className="lg:hidden" />

          <span className="text-blue-500">
            {" "}
            (PENJAGA ILMU KEAJAIBAN)
          </span>
        </h1>

        {/* ===== Deskripsi ===== */}
        <div
          className="
            mt-6
            w-full
            max-w-6xl
            rounded-[20px]
            border-[3px]
            border-white
            bg-linear-to-t
            from-blue-200
            to-white
            p-5
            lg:px-8
            lg:py-6
            shadow-lg
          "
        >
          <p
            className="
              font-Helvetica-Rounded
              text-[#2E82E6]
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              font-bold
              leading-relaxed
              text-justify
            "
          >
            Trufio merepresentasikan sinergi antara kecerdasan sains (biologi),
            kelestarian alam (biodiversitas), dan semangat inovasi masa depan.
            Trufio mencerminkan karakter yang bijaksana namun tetap kreatif,
            dinamis, dan penuh dengan ide-ide cemerlang. Burung hantu merupakan
            simbol kebijaksanaan, rasa ingin tahu, dan pengetahuan. Warna
            Truffula melambangkan keajaiban alam dan keberagaman hayati. Daun
            melambangkan identitas biologi sebagai dasar ilmu, pertumbuhan,
            dan kehidupan. Percikan cahaya melambangkan wonder, ide,
            inspirasi, dan inovasi untuk masa depan.
          </p>
        </div>

      </div>

    </div>
    </>
  )
}

export default Phylosophy