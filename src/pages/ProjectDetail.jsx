import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'
import Navbar from '../components/Navbar'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="bg-bg-primary min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-text-primary font-display text-4xl mb-4">Project Not Found</h1>
        <Link to="/" className="text-accent hover:text-accent-hover transition-colors duration-200">
          ← Back Home
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-bg-primary min-h-screen">
      <Navbar />

      <div className="max-w-3xl mx-auto px-8 pt-32 pb-24">

        <Link to="/" className="text-text-muted hover:text-accent text-sm font-mono transition-colors duration-200 mb-8 block">
          ← Back Home
        </Link>

        <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">Project</p>
        <h1 className="font-display text-5xl font-bold text-text-primary mb-6">{project.title}</h1>

        <p className="text-text-secondary text-lg leading-relaxed mb-10">
          {project.longDescription}
        </p>

        <div className="mb-10">
          <p className="text-text-muted font-mono text-sm uppercase tracking-widest mb-4">Tech Stack</p>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech, i) => (
              <span key={i} className="bg-accent-tint text-accent font-mono text-sm px-4 py-2 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
        >
          View on GitHub →
        </a>

      </div>
    </div>
  )
}

export default ProjectDetail;