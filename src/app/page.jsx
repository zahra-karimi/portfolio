import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Journey from "./Journey/page";

export default function page() {
  return (
    <main className="font-sans">
      <Header />
      <Hero />
      <Journey/>
    </main>
  );
}
