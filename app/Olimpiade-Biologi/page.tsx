import Navbar from "@/component/Navbar";
import Image from "next/image";
import Accordion from "@/component/Accordion";
import Footer from "@/component/Footer";

const competitionFlow = [
  {
    title: "Pendaftaran Gelombang 1",
    date: "21–26 Juli 2026",
  },
  {
    title: "Pendaftaran Gelombang 2",
    date: "39 Juli–3 Agustus 2026",
  },
  {
    title: "Webinar Desain Grafis",
    date: "6–12 Agustus 2026",
  },
  {
    title: "Technical Meeting Babak Penyisihan",
    date: "5 September 2026",
  },
  {
    title: "Babak Penyisihan (Online)",
    date: "13 September 2026",
  },
  {
    title: "Pengumuman Semifinalis",
    date: "15 September 2026",
  },
  {
    title: "Technical Meeting Semifinal & Final",
    date: "18 Oktober 2026",
  },
  {
    title: "Babak Semifinal (Offline)",
    date: "14 November 2026",
  },
  {
    title: "Babak Final & Awarding (Offline)",
    date: "15 November 2026",
  },
];

export const generalRules = [
    "Peserta merupakan siswa-siswi SMA/MA/sederajat yang tergabung dalam tim beranggotakan 3 orang dari sekolah yang sama.",
    "Setiap sekolah dapat mengirimkan lebih dari satu tim.",
    "Peserta wajib mengikuti seluruh rangkaian Olimpiade Biologi BIOPLASMA 2026.",
    "Peserta wajib menyiapkan perangkat serta jaringan internet yang stabil untuk babak penyisihan.",
    "Peserta wajib mengikuti akun Instagram dan TikTok BIOPLASMA 2026.",
    "Peserta wajib bergabung ke grup WhatsApp setelah melakukan registrasi.",
    "Peserta wajib mematuhi seluruh peraturan yang ditetapkan oleh panitia.",
    "Keputusan panitia bersifat mutlak dan tidak dapat diganggu gugat.",
];

export const generalRulesNote =
  "Ketentuan dan persyaratan lengkap dapat dilihat pada Guidebook Olimipade Biologi BIOPLASMA 2026";

function page() {
  return (
    <div className="font-Poppins">
        <Image src="/images/hero-bg.svg" width={1920} height={1080} alt="Hero Background" className="absolute w-full h-screen object-cover -z-1"/>
        <Navbar/>
            <div className="flex justify-center items-center gap-4 mt-10">
                <div className="w-7 h-7 lg:w-10 lg:h-10 bg-[#9E3F9A] rounded-full"></div>
                <div className="bg-[#9E3F9A] px-5 pb-2 pt-2 text-2xl lg:px-10 lg:pb-2 lg:pt-1 lg:text-4xl font-bold text-white rounded-2xl text-shadow-lg shadow-2xl/55 outline-white outline-4">
                    OLIMPIADE BIOLOGI
                </div>
                <div className="w-7 h-7 lg:w-10 lg:h-10 bg-[#9E3F9A] rounded-full"></div>
            </div>

            <div className="bg-[#9E3F9A] min-h-screen mt-10 rounded-t-4xl flex flex-col">
                <section className="px-6 lg:px-10 pt-10">
                
                  <div className="rounded-[30px] overflow-hidden border-[6px] border-white shadow-lg">
                     <Image
                        src="/images/BIO.png"
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
                        Olimpiade Biologi BIOPLASMA 2026
                      </span>{" "}
                        merupakan kompetisi tingkat nasional yang diselenggarakan oleh Departemen Biologi 
                        Universitas Brawijaya bagi siswa-siswi SMA/MA/sederajat di seluruh Indonesia. Kompetisi 
                        ini menjadi wadah bagi peserta untuk mengembangkan kemampuan berpikir kritis, meningkatkan
                        pemahaman di bidang biologi, serta menumbuhkan semangat kompetitif, sportif, dan kerja sama 
                        tim melalui berbagai tahapan seleksi.
                       </p>
                      </div>
                
                </section>
            <div className="flex-1 flex flex-col mt-5">
                <Accordion title="PENDAFTARAN" textColor="#9E3F9A">

                <h2 className="text-white font-bold text-xl lg:text-2xl mb-2">
                    Pendaftaran Gelombang 1
                </h2>

                <ul className="list-disc ml-10 text-white text-sm lg:text-xl">
                    <li>21 Juli - 26 Juli 2026</li>
                    <li className="font-bold">Biaya Pendaftaran Rp125.000/tim (Seratus dua puluh lima ribu rupiah , per tim )</li>
                </ul>

                <h2 className="text-white font-bold text-xl lg:text-2xl mt-2 mb-2">
                    Pendaftaran Gelombang 2
                </h2>

                <ul className="list-disc ml-10 text-white text-sm lg:text-xl">
                    <li>29 Juli - 3 Agustus 2026</li>
                    <li className="font-bold">Biaya Pendaftaran Rp155.000/tim (Seratus lima puluh lima ribu rupiah , per tim )</li>
                </ul>
                
                <h2 className="text-white font-bold text-xl lg:text-2xl mt-2 mb-2">
                    Pendaftaran Gelombang 3
                </h2>

                <ul className="list-disc ml-10 text-white text-sm lg:text-xl">
                    <li>6 Agustus - 12 Agustus 2026</li>
                    <li className="font-bold">Biaya Pendaftaran Rp170.000/tim (Seratus tujuh puluh ribu rupiah , per tim )</li>
                </ul>

                </Accordion>

                <Accordion title="ALUR KOMPETISI" textColor="#9E3F9A">
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

                <Accordion title="KETENTUAN UMUM" textColor="#9E3F9A">
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

                <Accordion title="PENGUNGGAHAN TWIBBON" textColor="#9E3F9A">

                <ul className="list-disc ml-6 space-y-2 text-white text-sm lg:text-xl">
                  <li>Mengunggah twibbon dan poster BIOPLASMA 2026 pada akun Instagram pribadi.</li>
                  <li>Mengikuti akun Instagram @bioplasma.2026..</li>
                  <li>Menggunakan caption yang telah disediakan oleh panitia.</li>
                  <li>Bergabung ke grup WhatsApp peserta setelah menyelesaikan proses registrasi.</li>
                </ul>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-4">
                  <div className="bg-white text-[#9E3F9A] font-bold px-15 py-2 rounded-lg cursor-pointer hover:bg-fuchsia-700 hover:text-white transition-colors duration-300">
                    <a href="https://canva.link/7jttmgmzjnogxju" className="text-center text-sm lg:text-2xl">UNDUH TWIBBON</a>
                  </div>
                  <div className="bg-white text-[#9E3F9A] font-bold px-15 py-2 rounded-lg cursor-pointer hover:bg-fuchsia-700 hover:text-white transition-colors duration-300">
                    <a href="https://drive.google.com/file/d/1-KWzOIKwihS9ru89Od1u7MuVbWZW7Nyq/view?usp=drive_link" className="text-center text-sm lg:text-2xl">UNDUH POSTER</a>
                  </div>
                </div>

                </Accordion>

                <Accordion title="HADIAH & PENGHARGAAN" textColor="#9E3F9A">
                    <div className="text-white">
                        <ol className="list-disc ml-6 space-y-2">
                            <li>
                                <h3 className="font-bold text-sm lg:text-2xl">
                                  Juara 1
                                </h3>

                                <p className="text-sm lg:text-xl">
                                  Rp.3.500.000 + Piala + Sertifikat Juara + Merchandise
                                </p>
                            </li>
                            <li>
                                <h3 className="font-bold text-sm lg:text-2xl">
                                  Juara 2
                                </h3>

                                <p className="text-sm lg:text-xl">
                                  Rp.2.800.000 + Piala + Sertifikat Juara + Merchandise
                                </p>
                            </li>
                            <li>
                                <h3 className="font-bold text-sm lg:text-2xl">
                                  Juara 3
                                </h3>

                                <p className="text-sm lg:text-xl">
                                  Rp.2.300.000 + Piala + Sertifikat Juara + Merchandise
                                </p>
                            </li>
                            <li>
                                <h3 className="font-bold text-sm lg:text-2xl">
                                  Juara Harapan 1
                                </h3>

                                <p className="text-sm lg:text-xl">
                                  Rp.1.000.000 + Piala + Sertifikat Juara + Merchandise
                                </p>
                            </li>
                            <li>
                                <h3 className="font-bold text-sm lg:text-2xl">
                                  Juara Harapan 2
                                </h3>

                                <p className="text-sm lg:text-xl">
                                  Rp.750.000 + Piala + Sertifikat Juara + Merchandise
                                </p>
                            </li>
                            <li>
                                <h3 className="font-bold text-sm lg:text-xl">
                                  Seluruh peserta akan memperoleh E-Sertifikat.
                                </h3>
                            </li>
                        </ol>

                    </div>
                </Accordion>
            </div>
            <Footer accentColor="#9E3F9A" bgColor="#FFFFFF"/>
        </div>
    </div>
  )
}

export default page