import { Link } from "react-router-dom";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="work" className="bg-bg-primary py-24 px-8">
      <div className="max-w-5xl mx-auto">
        
        <p className="text-text-muted font-mono text-sm tracking-widest uppercase mb-2">Portfolio</p>
        <h2 className="font-display text-4xl font-bold text-text-primary mb-12">Things I've Built</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-bg-secondary border border-border hover:border-accent transition-colors duration-300 rounded-xl p-6 flex flex-col gap-4">
              
              <h3 className="font-display text-xl font-semibold text-text-primary">{project.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed flex-1">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span key={i} className="bg-accent-tint text-accent text-xs font-mono px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>

              <Link to={`/projects/${project.slug}`} className="text-accent hover:text-accent-hover text-sm font-medium transition-colors duration-200">
                See more →
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects;