import { education } from '../data/misc';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section id="education" className="py-28 bg-app relative">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <p className="text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-3">Education</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-14">
            My academic path so far.
          </h2>
        </Reveal>

        <div className="relative border-l border-white/10 pl-8 space-y-12">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1}>
              <div className="relative">
                <span className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan shadow-glow" />
                <p className="text-sm text-accent-cyan mb-1">{e.period}</p>
                <h3 className="font-display font-semibold text-xl mb-1">{e.degree}</h3>
                <p className="text-dim mb-4">{e.school}</p>
                <div className="flex flex-wrap gap-2">
                  {e.coursework.map((c) => (
                    <span
                      key={c}
                      className="text-xs px-3 py-1.5 rounded-full glass text-dim"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
