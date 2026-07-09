function Contact() {
  return (
    <section id="contact" className="bg-bg-secondary py-24 px-8">
      <div className="max-w-2xl mx-auto text-center">

        <p className="text-text-muted font-mono text-sm tracking-widest uppercase mb-2">Contact</p>
        <h2 className="font-display text-4xl font-bold text-text-primary mb-4">Let's Work Together</h2>
        <p className="text-text-secondary text-lg leading-relaxed mb-12">
          Have a project in mind, need a system built, or just want to connect? My inbox is open.
        </p>

        <form className="flex flex-col gap-4 text-left">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-text-muted font-mono text-xs uppercase tracking-widest">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-bg-secondary border border-border hover:border-border-hover focus:border-accent outline-none text-text-primary placeholder:text-text-muted px-4 py-3 rounded-lg transition-colors duration-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-text-muted font-mono text-xs uppercase tracking-widest">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-bg-secondary border border-border hover:border-border-hover focus:border-accent outline-none text-text-primary placeholder:text-text-muted px-4 py-3 rounded-lg transition-colors duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-text-muted font-mono text-xs uppercase tracking-widest">Subject</label>
            <input
              type="text"
              placeholder="Project Inquiry"
              className="bg-bg-secondary border border-border hover:border-border-hover focus:border-accent outline-none text-text-primary placeholder:text-text-muted px-4 py-3 rounded-lg transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-text-muted font-mono text-xs uppercase tracking-widest">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="bg-bg-secondary border border-border hover:border-border-hover focus:border-accent outline-none text-text-primary placeholder:text-text-muted px-4 py-3 rounded-lg transition-colors duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 mt-2"
          >
            Send Message →
          </button>

        </form>

      </div>
    </section>
  )
}

export default Contact;