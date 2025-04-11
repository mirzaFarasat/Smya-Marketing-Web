import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Clients from "./components/clients";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Clients />
    </main>
  );
}
