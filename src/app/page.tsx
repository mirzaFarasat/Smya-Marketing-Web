import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Clients from "./components/clients";
import Stats from "./components/Stats";

export default function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <Stats />
      <About />
      <WhyChooseUs />
      <Clients />
    </main>
  );
}
