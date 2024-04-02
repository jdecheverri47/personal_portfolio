import HeroSection from "@/components/sections/HeroSection";
import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";
import FixedFooter from "@/components/sections/FixedFooter";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Footer />
      <FixedFooter />
    </main>
  );
}
