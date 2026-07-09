import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Projects />
      <About />
      <Contact />
    </>
  )
}

export default Home;