import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';
import Reveal from './Reveal';

const accentMap = {
  blue: 'from-accent-blue/25 to-transparent',
  cyan: 'from-accent-cyan/25 to-transparent',
  indigo: 'from-accent-indigo/25 to-transparent',
};

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={(index % 3) * 0.1}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="group glass rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-shadow duration-300 h-full flex flex-col"
      >
        <div className={`relative h-40 bg-gradient-to-br ${accentMap[project.accent] || accentMap.blue} bg-app-soft flex items-center justify-center`}>
          <span className="font-display font-bold text-3xl text-white/10 group-hover:text-white/20 transition-colors">
            {project.title.split(' ').map((w) => w[0]).join('').slice(0, 3)}
          </span>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
          <p className="text-sm text-dim leading-relaxed mb-4 flex-1">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-accent-cyan"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.github}
              className="flex-1 inline-flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-full border border-white/15 hover:border-accent-cyan/60 hover:text-accent-cyan transition-colors"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href={project.demo}
              className="flex-1 inline-flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan text-[#04070d] hover:opacity-90 transition-opacity"
            >
              <FiExternalLink /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-app-soft relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-3">Projects</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-14 max-w-2xl">
            Things I've built while learning by doing.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
