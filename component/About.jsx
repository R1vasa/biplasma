import Image from "next/image";

function About() {
  return (
    <section
      id="about"
      className="relative pt-5 pb-20 bg-white overflow-hidden"
    >
      {/* Dekorasi */}
      <div className="absolute top-32 -left-10 w-16 h-16 bg-yellow-400 rounded-full"></div>
      <div className="absolute bottom-15 -left-5 lg:left-44 w-20 h-20 bg-pink-500 rounded-full"></div>

      <div className="absolute top-72 right-8 w-10 h-10 bg-orange-400 rounded-full"></div>
      <div className="absolute bottom-20 -right-10 w-24 h-24 bg-purple-600 rounded-full"></div>

      {/* Header */}
      <div className="flex items-center justify-center mb-10">

        <div className="flex-1 h-15 rounded-r-full bg-linear-to-r from-blue-500 to-lime-500"></div>

        <h2
          className="
          mx-6
          font-Starshines
          text-3xl
          lg:text-5xl
          font-bold
          text-center
          [-webkit-text-stroke:2px_white]
          text-shadow-lg
        "
        >
          <span className="text-purple-500">APA </span>
          <span className="text-yellow-500">ITU </span>
          <span className="text-red-500">BIO</span>
          <span className="text-blue-500">PLAS</span>
          <span className="text-orange-400">MA?</span>
        </h2>

        <div className="flex-1 h-15 rounded-l-full bg-linear-to-r from-lime-500 to-blue-500"></div>

      </div>

      {/* Deskripsi */}
      <div className="max-w-6xl mx-auto px-6">

        <div
          className="
          rounded-3xl
          bg-[#FF7B54]
          border-[5px]
          border-white
          shadow-xl
          p-8
        "
        >
          <p className="text-white text-lg leading-8 font-semibold">
            <span className="font-bold">
              BIOPLASMA 2026
            </span>{" "}
            hadir kembali sebagai ajang <i>Open House</i> dan kompetisi
            nasional tahunan yang diselenggarakan oleh Departemen Biologi
            Universitas Brawijaya.

            Rangkaian kegiatan ini dikemas dalam bentuk kompetisi tingkat
            nasional yang meliputi Olimpiade Biologi untuk siswa-siswi
            SMA/MA/sederajat se-Indonesia, Business Plan Competition (BPC)
            untuk siswa-siswi SMA/MA/sederajat, mahasiswa (S1/D4/D3) di
            berbagai Perguruan Tinggi Negeri (PTN), Perguruan Tinggi Swasta
            (PTS), maupun Institusi Kedinasan di Indonesia, serta Lomba
            Poster Digital untuk umum usia 16–24 tahun yang dilengkapi dengan
            webinar desain grafis sebagai sarana edukatif bagi para peserta.
          </p>
        </div>

      </div>

      {/* Judul Cabang */}
      <div className="mt-15 flex items-center">

        <div className=" w-20 lg:w-35 h-15 rounded-r-full md:flex bg-linear-to-r from-orange-300 to-pink-500"></div>

        <h2
          className="
          flex-1
          text-center
          font-Starshines
          text-3xl
          md:text-5xl
          font-bold
          text-shadow-lg
          [-webkit-text-stroke:2px_white]
        "
        >
          <span className="text-orange-400">
            CABANG-CABANG
          </span>{" "}
          <span className="text-pink-500">
            LOMBA
          </span>{" "}
          <span className="text-blue-500">
            BIOPLASMA
          </span>
        </h2>

        <div className="w-20 lg:w-20 h-15 rounded-l-full bg-linear-to-r from-pink-500 to-orange-300 md:flex"></div>

      </div>

      {/* Tombol */}
      <div className="max-w-5xl mx-4 md:mx-auto mt-12">

        <div className="grid md:grid-cols-2 gap-8">

          <button
            className="
            rounded-2xl
            bg-[#FF4F73]
            text-white
            text-xl
            md:text-3xl
            font-bold
            py-3
            border-4
            border-white
            shadow-lg
          "
          >
            Business Plan Competition
          </button>

          <button
            className="
            rounded-2xl
            bg-[#F2B233]
            text-white
            text-xl
            md:text-3xl
            font-bold
            py-3
            border-4
            border-white
            shadow-lg
          "
          >
            Poster Digital
          </button>

        </div>

        <div className="flex justify-center mt-8">

          <button
            className="
            relative
            rounded-2xl
            bg-[#8E44AD]
            text-white
            text-xl
            md:text-3xl
            font-bold
            px-24
            py-3
            border-4
            border-white
            shadow-lg
          "
          >
            Olimpiade
          </button>

          <Image src="/images/Cloud-about.svg" alt="Bioplasma" width={500} height={400} className="absolute -bottom-22 right-0 z-0">
          </Image>
          <Image src="/images/Cloud-about.svg" alt="Bioplasma" width={500} height={400} className="absolute -bottom-22 left-0 z-0 scale-x-[-1]">
          </Image>
        </div>

      </div>
    </section>
  );
}

export default About;