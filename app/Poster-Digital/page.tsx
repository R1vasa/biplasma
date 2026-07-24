import Navbar from "@/component/Navbar";
import Image from "next/image";
import Accordion from "@/component/Accordion";
import Footer from "@/component/Footer";

const competitionFlow = [
  {
    title: "Pendaftaran Gelombang 1",
    date: "23–28 Juli 2026",
  },
  {
    title: "Pendaftaran Gelombang 2",
    date: "31 Agustus–5 September 2026",
  },
  {
    title: "Webinar Desain Grafis",
    date: "20 September 2026",
  },
  {
    title: "Pengumpulan Karya Poster Digital",
    date: "28 September–3 Oktober 2026",
  },
  {
    title: "Penilaian Karya",
    date: "5–10 Oktober 2026",
  },
  {
    title: "Pengumuman Pemenang",
    date: "19 Oktober 2026",
  },
  {
    title: "Awarding",
    date: "15 Oktober 2026",
  },
];

export const generalRules = [
    "Peserta berusia 16–24 tahun dan merupakan Warga Negara Indonesia (WNI).",
    "Setiap peserta hanya diperbolehkan mengumpulkan satu karya.",
    "Peserta wajib mengikuti akun Instagram @bioplasma.2026.",
    "Peserta wajib mengunggah twibbon dan poster BIOPLASMA 2026 pada akun Instagram pribadi.",
    "Peserta wajib bergabung ke grup WhatsApp setelah melakukan registrasi.",
    "Peserta wajib mengikuti webinar sebagai bagian dari pembekalan lomba.",
    "Seluruh peserta wajib mematuhi ketentuan yang ditetapkan oleh panitia.",
    "Keputusan panitia dan dewan juri bersifat mutlak dan tidak dapat diganggu gugat"
];

export const generalRulesNote =
  "Ketentuan dan persyaratan lengkap dapat dilihat pada Guidebook Poster Digital BIOPLASMA 2026.";

function page() {
  return (
    <div className="font-Poppins">
        <Image src="/images/hero-bg.svg" width={1920} height={1080} alt="Hero Background" className="absolute w-full h-screen object-cover -z-1"/>
        <Navbar/>
            <div className="flex justify-center items-center gap-4 mt-10">
                <div className="w-7 h-7 lg:w-10 lg:h-10 bg-amber-400 rounded-full"></div>
                <div className="bg-amber-400 px-5 pb-2 pt-2 text-2xl lg:px-10 lg:pb-2 lg:pt-1 lg:text-4xl font-bold text-white rounded-2xl text-shadow-lg shadow-2xl/55 outline-white outline-4">
                    POSTER DIGITAL
                </div>
                <div className="w-7 h-7 lg:w-10 lg:h-10 bg-amber-400 rounded-full"></div>
            </div>

            <div className="bg-amber-400 min-h-screen mt-10 rounded-t-4xl flex flex-col">
                <section className="px-6 lg:px-10 pt-10">

                <div className="rounded-[30px] overflow-hidden border-[6px] border-white shadow-lg">
                  <Image
                    src="/images/POSDIG.png"
                    alt="Business Plan Competition"
                    width={1000}
                    height={1080}
                    className="w-full h-55 md:h-70 lg:h-90 object-cover"
                    priority
                  />
                </div>

                <div className="mt-5 text-white">
                  <p className="text-sm md:text-lg lg:text-xl leading-relaxed text-justify">
                    <span className="font-bold">
                      Lomba Poster Digital BIOPLASMA 2026
                    </span>{" "}
                    merupakan salah satu cabang kompetisi dalam rangkaian BIOPLASMA 2026 yang diselenggarakan oleh Departemen Biologi Universitas Brawijaya. Kompetisi ini ditujukan bagi masyarakat umum berusia 16–24 tahun sebagai wadah untuk menuangkan kreativitas dan inovasi melalui karya poster digital yang komunikatif, estetik, dan inspiratif. Melalui kompetisi ini, peserta didorong untuk menyampaikan pesan mengenai isu lingkungan melalui desain visual yang menarik, inovatif, dan berdampak positif bagi masyarakat.
                  </p>
                </div>

              </section>
            <div className="flex-1 flex flex-col mt-5">
                <Accordion title="PENDAFTARAN" textColor="#ffba00">

                <h2 className="text-white font-bold text-xl lg:text-2xl mb-2">
                    Pendaftaran Gelombang 1
                </h2>

                <ul className="list-disc ml-10 text-white text-sm lg:text-xl">
                    <li>23 Agustus - 28 Agustus 2026</li>
                    <li className="font-bold">Biaya Pendaftaran Rp35.000 ( Tiga Puluh Lima Ribu Rupiah )</li>
                </ul>

                <h2 className="text-white font-bold text-xl lg:text-2xl mt-2 mb-2">
                    Pendaftaran Gelombang 2
                </h2>

                <ul className="list-disc ml-10 text-white text-sm lg:text-xl">
                    <li>5 Agustus - 10 Agustus 2026</li>
                    <li className="font-bold">Biaya Pendaftaran Rp.45.000 ( empat puluh lima ribu rupiah )</li>
                </ul>

                </Accordion>

                <Accordion title="ALUR KOMPETISI" textColor="#ffba00">
                    <div className="text-white">
                        <p className="font-bold text-sm lg:text-2xl mb-2">
                            Poster Digital BIOPLASMA 2026 dilaksanakan melalui beberapa tahapan sebagai berikut:
                        </p>

                        <ol className="list-decimal ml-6 space-y-2">
                            {competitionFlow.map((item, index) => (
                            <li key={index}>
                                <h3 className="font-bold text-sm lg:text-xl">
                                {item.title}
                                </h3>

                                <p className="ml-2 text-sm lg:text-xl">
                                {item.date}
                                </p>
                            </li>
                            ))}
                        </ol>

                    </div>

                </Accordion>

                <Accordion title="KETENTUAN UMUM" textColor="#ffba00">
                    <ul className="list-disc ml-6 space-y-2 text-white text-sm lg:text-xl">
                    {generalRules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                    ))}
                    </ul>

                    <p className="mt-4 text-white text-sm lg:text-xl">
                    Catatan:{" "}
                    <span className="font-bold">
                        {generalRulesNote}
                    </span>
                    </p>
                </Accordion>

                <Accordion title="PENGUNGGAHAN TWIBBON" textColor="#ffba00">

                <ul className="list-disc ml-6 space-y-2 text-white text-sm lg:text-xl">
                  <li>Mengunggah twibbon dan poster BIOPLASMA 2026 pada akun Instagram pribadi.</li>
                  <li>Mengikuti akun Instagram @bioplasma.2026..</li>
                  <li>Menggunakan caption yang telah disediakan oleh panitia.</li>
                  <li>Bergabung ke grup WhatsApp peserta setelah menyelesaikan proses registrasi.</li>
                </ul>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-4">
                  <div className="bg-white text-amber-400 font-bold px-15 py-2 rounded-lg cursor-pointer hover:bg-amber-500 hover:text-white transition-colors duration-300">
                    <a href="https://twb.nz/BIOPLASMA2026" className="text-center text-sm lg:text-2xl">UNDUH TWIBBON</a>
                  </div>
                  <div className="bg-white text-amber-400 font-bold px-15 py-2 rounded-lg cursor-pointer hover:bg-amber-500 hover:text-white transition-colors duration-300">
                    <a href="https://drive.google.com/file/d/1-KWzOIKwihS9ru89Od1u7MuVbWZW7Nyq/view?usp=drive_link" className="text-center text-sm lg:text-2xl">UNDUH POSTER</a>
                  </div>
                </div>

                </Accordion>

                <Accordion title="HADIAH & PENGHARGAAN" textColor="#ffba00">
                    <div className="text-white">
                        <ol className="list-disc ml-6 space-y-2">
                            <li>
                                <h3 className="font-bold text-sm lg:text-2xl">
                                  Juara 1
                                </h3>

                                <p className="text-sm lg:text-xl">
                                  Rp.400.000 + E-SERTIFIKAT JUARA
                                </p>
                            </li>
                            <li>
                                <h3 className="font-bold text-sm lg:text-2xl">
                                  Juara 2
                                </h3>

                                <p className="text-sm lg:text-xl">
                                  Rp.300.000 + E-SERTIFIKAT JUARA
                                </p>
                            </li>
                            <li>
                                <h3 className="font-bold text-sm lg:text-2xl">
                                  Juara 3
                                </h3>

                                <p className="text-sm lg:text-xl">
                                  Rp.250.000 + E-SERTIFIKAT JUARA
                                </p>
                            </li>
                            <li>
                                <h3 className="font-bold text-sm lg:text-xl">
                                  Seluruh peserta akan memperoleh E-Sertifikat Peserta lomba dan webinar.
                                </h3>
                            </li>
                        </ol>

                    </div>
                </Accordion>
            </div>
            <Footer accentColor="#fcc800" bgColor="#FFFFFF"/>
        </div>
    </div>
  )
}

export default page