function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-bg-primary/80 backdrop-blur-md border-b border-border">
      
      <a href="/">
        <span className="text-accent font-display font-bold text-xl">
          Bennah.dev
        </span>
      </a>

      <ul className="flex gap-8 list-none">
        <li><a href="#work" className="text-text-secondary hover:text-accent transition-colors duration-200 font-medium">Work</a></li>
        <li><a href="#about" className="text-text-secondary hover:text-accent transition-colors duration-200 font-medium">About</a></li>
        <li><a href="#contact" className="text-text-secondary hover:text-accent transition-colors duration-200 font-medium">Contact</a></li>
      </ul>

    </nav>
  )
}

export default Navbar;