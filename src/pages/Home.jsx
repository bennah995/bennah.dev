import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;