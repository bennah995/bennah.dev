const stack = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind", "HTML / CSS", "Zustand", ]
  },
  {
    category: "Backend / Database",
    items: ["Node.js", "Express.js", "PostgreSQL", "Redis"]
  },
  {
    category: "Intergrations",
    items: ["M-Pesa Daraja API", "STK Push"]
  },
  {
    category: "Tools & Environments",
    items: ["Git / GitHub", "Ubuntu", "Postman", "VS Code", "NGROK"]
  }
]

function About() {
  return (
    <section id="about" className="bg-bg-primary py-24 px-8">
      <div className="max-w-5xl mx-auto">

        <p className="text-text-muted font-mono text-sm tracking-widest uppercase mb-2">About</p>
        <h2 className="font-display text-4xl font-bold text-text-primary mb-12">Who I Am</h2>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <div>
            <p className="text-text-secondary leading-relaxed mb-4">
              I'm Benard, full-stack software engineer based in Nairobi, Kenya. I build real systems that solve real problems — from M-Pesa payment integrations to multi-channel CRM platforms.
            </p>

            <p className="text-text-secondary leading-relaxed mb-4">
              I believe in shipping, learning in public, and building with purpose — one product at a time.
            </p>

            <p className="text-text-secondary leading-relaxed">
              When I'm not coding, you'll find me following F1, at the gym, or behind a camera.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-text-muted font-mono text-sm tracking-widest uppercase">Tech Stack</p>
            {stack.map((group, i) => (
              <div key={i}>
                <p className="text-accent font-mono text-xs uppercase tracking-widest mb-2">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <span key={j} className="bg-bg-primary border border-border text-text-secondary font-mono text-xs px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About;