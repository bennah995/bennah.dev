function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border py-8 px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <span className="text-accent font-display font-bold text-lg">Bennah.dev</span>

        <p className="text-text-muted font-mono text-xs">
          © {new Date().getFullYear()} Benard Mutuku. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="https://github.com/bennah995" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors duration-200 font-mono text-xs">
            GitHub
          </a>
          {/* <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors duration-200 font-mono text-xs">
            LinkedIn
          </a> */}
          <a href="mailto:mwasyabenard617@gmail.com" className="text-text-muted hover:text-accent transition-colors duration-200 font-mono text-xs">
            Email
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer;