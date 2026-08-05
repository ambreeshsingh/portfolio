import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import DSA from "../components/DSA";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DSA/>
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;