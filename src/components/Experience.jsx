import { experience } from '../data/misc';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-app relative">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <p className="text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-3">Experience</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-14">
            Where I've applied what I've learned.
          </h2>
        </Reveal>

        <div className="relative border-l border-white/10 pl-8 space-y-12">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.1}>
              <div className="relative">
                <span className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan shadow-glow" />
                <p className="text-sm text-accent-cyan mb-1">{e.period}</p>
                <h3 className="font-display font-semibold text-xl mb-1">{e.role}</h3>
                <p className="text-dim mb-4">{e.org}</p>
                <ul className="space-y-2 text-sm text-dim list-disc list-inside">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
