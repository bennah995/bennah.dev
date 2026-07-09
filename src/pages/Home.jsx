import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Projects />
      <About />
    </>
  )
}

export default Home;