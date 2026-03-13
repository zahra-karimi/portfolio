import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Journey from "./journey/page";
import Skills from "./skills/page";

export default function page() {
  return (
    <main className="font-sans">
      <Header />
      <Hero />
      <Journey/>
      <Skills/>
    </main>
  );
}
