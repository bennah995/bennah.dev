import { Link } from "react-router-dom";

function HeroSection(){
  return(
    <div className="bg-bg-primary h-screen flex flex-col items-center justify-center text-center px-6">
      
      <p className="text-text-secondary text-sm font-mono tracking-widest uppercase mb-4">
        Hello, I'm Bennah
      </p>

      <h1 className="text-6xl font-bold font-display text-text-primary mb-4">
        Benard Mutuku
      </h1>

      <span className="text-accent font-display text-xl font-medium mb-6">
        Software Engineer
      </span>

      <p className="text-text-secondary text-lg max-w-xl mb-10">
        Building purposeful software that solves real problems, one product at a time.
      </p>

      <div className="flex gap-4">
        <a href="#work" className="bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
          View Work
        </a>
        <button href="#" className="border border-accent text-accent hover:bg-accent-tint font-medium px-6 py-3 rounded-lg transition-colors duration-200">
          Contact Me
        </button>
      </div>

    </div>
  )
}

export default HeroSection;