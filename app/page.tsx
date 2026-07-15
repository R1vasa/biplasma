import Navbar from '@/component/Navbar'
import Hero from '@/component/Hero'
import About from '@/component/About'
import Phylosophy from '@/component/Phylosophy'
import Footer from '@/component/Footer'

export default function Home() {
  return (
    <div>
      <section className="bg-[url('/images/hero-bg.svg')] bg-cover bg-center min-h-screen">
      <Navbar/>
      <Hero/>
      </section>
      <section>
        <About/>
      </section>
      <section >
        <Phylosophy/>
      </section>
      <section>
        <Footer accentColor="#FFFFFF" bgColor='radial-gradient(
          circle at left center,
          #0C3A75 0%,
          #166DDB 35%,
          #166DDB 70%,
          #0C3A75 100%' />
      </section>
    </div>
  );
}
