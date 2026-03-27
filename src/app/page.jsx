import Header from "../components/Header";
import Hero from "../components/Hero";
import Journey from "./Journey/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import About from "./about/page";
import Contact from "./contact/page";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";


export default function page() {
  return (
    <main className="font-sans">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Journey />
      <Contact />
      <Footer/>
      <ScrollToTop />
    </main>
  );
}
