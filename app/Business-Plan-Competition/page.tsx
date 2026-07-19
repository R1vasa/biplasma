import Navbar from "@/component/Navbar";
import Image from "next/image";
import Accordion from "@/component/Accordion";
import Footer from "@/component/Footer";

const competitionFlow = [
  {
    title: "Pendaftaran Gelombang 1",
    date: "25–30 Juli 2026",
  },
  {
    title: "Pengumpulan Business Model Canvas (BMC) Gelombang 1",
    date: "Paling lambat 2 Agustus 2026",
  },
  {
    title: "Pendaftaran Gelombang 2",
    date: "5–10 Agustus 2026",
  },
  {
    title: "Pengumpulan Business Model Canvas (BMC) Gelombang 2",
    date: "Paling lambat 13 Agustus 2026",
  },
  {
    title: "Pengumpulan Proposal Business Plan",
    date: "Paling lambat 20 Agustus 2026",
  },
  {
    title: "Penjurian BMC dan Proposal",
    date: "23–31 Agustus 2026",
  },
  {
    title: "Pengumuman Peserta Semifinal",
    date: "2 September 2026",
  },
  {
    title: "Pengumpulan Video Strategi Pemasaran",
    date: "6–11 September 2026",
  },
  {
    title: "Penjurian Video Strategi Pemasaran",
    date: "13–18 September 2026",
  },
  {
    title: "Pengumuman Finalis",
    date: "21 September 2026",
  },
  {
    title: "Technical Meeting Finalis",
    date: "18 Oktober 2026",
  },
  {
    title: "Pengumpulan PowerPoint Presentasi",
    date: "12–17 Oktober 2026",
  },
  {
    title: "Babak Final, Awarding, dan Penutupan ( Dilaksanakan secara luring (offline) di Universitas Brawijaya, Malang.)",
    date: "15 November 2026",
  },
];

export const generalRules = [
  "Peserta merupakan siswa/i SMA/MA/sederajat atau mahasiswa aktif jenjang D3, D4, dan S1 dari perguruan tinggi negeri, swasta, maupun kedinasan di Indonesia.",
  "Setiap tim terdiri dari 4 (empat) orang.",
  "Anggota tim dapat berasal dari program studi yang berbeda, namun harus berasal dari institusi yang sama.",
  "Setiap tim wajib memiliki nama tim sebagai identitas dan tidak mengandung unsur SARA.",
  "Peserta yang telah terdaftar tidak dapat digantikan selama kompetisi berlangsung.",
  "Seluruh peserta wajib mengikuti seluruh rangkaian kompetisi sesuai jadwal yang telah ditentukan.",
  "Tim yang lolos ke babak final wajib mengikuti kompetisi secara luring (offline) di Universitas Brawijaya, Malang.",
  "Seluruh peserta wajib mematuhi peraturan yang ditetapkan oleh panitia.",
  "Keputusan panitia dan dewan juri bersifat mutlak dan tidak dapat diganggu gugat.",
  "Informasi resmi mengenai kompetisi akan disampaikan melalui grup WhatsApp dan media sosial BIOPLASMA 2026.",
];

export const generalRulesNote =
  "Ketentuan dan persyaratan lengkap dapat dilihat pada Guidebook Business Plan Competition BIOPLASMA 2026.";

function page() {
  return (
    <div className="font-Poppins">
        <Image src="/images/hero-bg.svg" width={1920} height={1080} alt="Hero Background" className="absolute w-full h-screen object-cover -z-1"/>
        <Navbar/>
            <div className="flex justify-center items-center gap-4 mt-10">
                <div className="w-7 h-7 lg:w-10 lg:h-10 bg-red-400 rounded-full"></div>
                <div className="bg-red-400 px-5 pb-2 pt-2 text-2xl lg:px-10 lg:pb-2 lg:pt-1 lg:text-4xl font-bold text-white rounded-2xl text-shadow-lg shadow-2xl/55 outline-white outline-4">
                    Business Plan Competition
                </div>
                <div className="w-7 h-7 lg:w-10 lg:h-10 bg-red-400 rounded-full"></div>
            </div>

            <div className="bg-red-400 min-h-screen mt-10 rounded-t-4xl flex flex-col">
              <section className="px-6 lg:px-10 pt-10">

                <div className="rounded-[30px] overflow-hidden border-[6px] border-white shadow-lg">
                  <Image
                    src="/images/BPC.png"
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
                      Business Plan Competition (BPC)
                    </span>{" "}
                    merupakan salah satu cabang kompetisi dalam rangkaian BIOPLASMA
                    2026 yang diselenggarakan oleh Departemen Biologi Universitas
                    Brawijaya. Kompetisi ini menjadi wadah bagi pelajar dan mahasiswa
                    untuk mengembangkan ide bisnis yang inovatif, berkelanjutan, dan
                    mampu memberikan solusi terhadap berbagai tantangan di masyarakat.
                    Melalui kompetisi ini, peserta didorong untuk mengasah kemampuan
                    berpikir kritis, kreativitas, kewirausahaan, serta menyusun model
                    bisnis yang memiliki nilai implementasi dan dampak nyata bagi
                    lingkungan maupun masyarakat.
                  </p>
                </div>

              </section>
            <div className="flex-1 flex flex-col mt-5">
                <Accordion title="PENDAFTARAN" textColor="#ff6467">

                <h2 className="text-white font-bold text-xl lg:text-2xl mb-2">
                    Pendaftaran Gelombang 1
                </h2>

                <ul className="list-disc ml-10 text-white text-sm lg:text-xl">
                    <li>25 Juli - 30 Juli 2026</li>
                    <li>Biaya Pendaftaran Rp.95.000 ( sembilan puluh lima ribu rupiah )</li>
                </ul>

                <h2 className="text-white font-bold text-xl lg:text-2xl mt-2 mb-2">
                    Pendaftaran Gelombang 2
                </h2>

                <ul className="list-disc ml-10 text-white text-sm lg:text-xl">
                    <li>5 Agustus - 10 Agustus 2026</li>
                    <li>Biaya Pendaftaran Rp100.000 ( Seratus Ribu Rupiah )</li>
                </ul>

                </Accordion>

                <Accordion title="ALUR KOMPETISI" textColor="#ff6467">
                    <div className="text-white">
                        <p className="font-bold text-sm lg:text-2xl mb-2">
                            Business Plan Competition BIOPLASMA 2026 dilaksanakan melalui beberapa
                            tahapan sebagai berikut:
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

                <Accordion title="KETENTUAN UMUM" textColor="#ff6467">
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

                <Accordion title="PENGUNGGAHAN TWIBBON" textColor="#ff6467">

                <ul className="list-disc ml-6 space-y-2 text-white text-sm lg:text-xl">
                  <li>Mengunggah twibbon dan poster BIOPLASMA 2026 pada akun Instagram pribadi.</li>
                  <li>Mengikuti akun Instagram @bioplasma.2026..</li>
                  <li>Menggunakan caption yang telah disediakan oleh panitia.</li>
                  <li>Bergabung ke grup WhatsApp peserta setelah menyelesaikan proses registrasi.</li>
                </ul>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-4">
                  <div className="bg-white text-red-400 font-bold px-15 py-2 rounded-lg cursor-pointer hover:bg-red-400 hover:text-white transition-colors duration-300">
                    <a href="https://canva.link/7jttmgmzjnogxju" className="text-center text-sm lg:text-2xl">UNDUH TWIBBON</a>
                  </div>
                  <div className="bg-white text-red-400 font-bold px-15 py-2 rounded-lg cursor-pointer hover:bg-red-400 hover:text-white transition-colors duration-300">
                    <a href="https://drive.google.com/drive/folders/1QfSIr_e1KvNFo_u2Mp6fgdxNoAlXJFKe" className="text-center text-sm lg:text-2xl">UNDUH POSTER</a>
                  </div>
                </div>

                </Accordion>

                <Accordion title="HADIAH & PENGHARGAAN" textColor="#ff6467">
                    <div className="text-white">
                        <ol className="list-disc ml-6 space-y-2">
                            <li>
                                <h3 className="font-bold text-sm lg:text-2xl">
                                  Juara 1
                                </h3>

                                <p className="text-sm lg:text-xl">
                                  Rp.2.000.000 + Piala + Sertifikat + Merchandise
                                </p>
                            </li>
                            <li>
                                <h3 className="font-bold text-sm lg:text-2xl">
                                  Juara 2
                                </h3>

                                <p className="text-sm lg:text-xl">
                                  Rp.1.500.000 + Piala + Sertifikat + Merchandise
                                </p>
                            </li>
                            <li>
                                <h3 className="font-bold text-sm lg:text-2xl">
                                  Juara 3
                                </h3>

                                <p className="text-sm lg:text-xl">
                                  Rp.1.000.000 + Piala + Sertifikat + Merchandise
                                </p>
                            </li>
                            <li>
                                <h3 className="font-bold text-sm lg:text-2xl">
                                  Juara Harapan 1
                                </h3>

                                <p className="text-sm lg:text-xl">
                                  Rp.800.000 + Piala + Sertifikat + Merchandise
                                </p>
                            </li>
                            <li>
                                <h3 className="font-bold text-sm lg:text-2xl">
                                  Juara Harapan 2
                                </h3>

                                <p className="text-sm lg:text-xl">
                                  Rp.500.000 + Piala + Sertifikat + Merchandise
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
            <Footer accentColor="#ff6467" bgColor="#FFFFFF"/>
        </div>
    </div>
  )
}

export default page