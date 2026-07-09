import Navbar from '@/component/Navbar'
import Hero from '@/component/Hero'
import About from '@/component/About'
import Phylosophy from '@/component/Phylosophy'

export default function Home() {
  return (
    <div>
      <section className="bg-[url('/images/hero-bg.svg')] bg-cover bg-center h-screen">
      <Navbar/>
      <Hero/>
      </section>
      <section>
        <About/>
      </section>
      <section >
        <Phylosophy/>
      </section>
    </div>
  );
}
