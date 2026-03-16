import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Journey from "./journey/page";
import Skills from "./skills/page";
import Projects from "./projects/page";

export default function page() {
  return (
    <main className="font-sans">
      <Header />
      <Hero />
      <Journey />
      <Skills />
      <Projects />
    </main>
  );
}
