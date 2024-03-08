import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

// import { database } from "../data/db";

export default function Home({}) {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
