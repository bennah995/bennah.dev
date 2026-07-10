import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-bg-primary/80 backdrop-blur-md border-b border-border">

      <a href="/">
        <span className="text-accent font-display font-bold text-xl">
          Bennah.dev
        </span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        <li><a href="#work" className="text-text-secondary hover:text-accent transition-colors duration-200 font-medium">Work</a></li>
        <li><a href="#about" className="text-text-secondary hover:text-accent transition-colors duration-200 font-medium">About</a></li>
        <li><a href="#contact" className="text-text-secondary hover:text-accent transition-colors duration-200 font-medium">Contact</a></li>
      </ul>

      {/* Hamburger button */}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg-primary/95 backdrop-blur-md border-b border-border px-8 py-6 flex flex-col gap-6">
          <a href="#work" onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-accent transition-colors duration-200 font-medium">Work</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-accent transition-colors duration-200 font-medium">About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-accent transition-colors duration-200 font-medium">Contact</a>
        </div>
      )}

    </nav>
  )
}

export default Navbar;