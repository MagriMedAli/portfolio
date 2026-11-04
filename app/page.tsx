import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { CursorLabel, SmoothScroll } from "@/components/ui";

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <CursorLabel />
      <Preloader />
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Services />
      <Process />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
