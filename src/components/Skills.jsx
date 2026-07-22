import { skillGroups } from '../data/skills';
import { useInView } from '../hooks/useInView';
import Reveal from './Reveal';

function SkillBar({ skill }) {
  const [ref, inView] = useInView();
  const Icon = skill.icon;

  return (
    <div ref={ref} className="glass rounded-xl p-4 hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-accent-cyan text-lg">
          <Icon />
        </span>
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="ml-auto text-xs text-dim">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div
          className="progress-fill h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan"
          style={{ width: inView ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-app relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-3">Skills</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-14 max-w-2xl">
            The tools I reach for, grouped by what they're for.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.1}>
              <h3 className="font-display font-semibold text-lg mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                {group.title}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
