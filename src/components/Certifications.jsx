import { FiAward } from 'react-icons/fi';
import { certifications } from '../data/misc';
import Reveal from './Reveal';

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 bg-app-soft relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-3">Certifications</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-14 max-w-2xl">
            Formal learning that backs up the practice.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col items-start hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-[#04070d] text-xl mb-4">
                  <FiAward />
                </span>
                <h3 className="font-display font-semibold mb-1">{c.title}</h3>
                <p className="text-sm text-dim">{c.issuer}</p>
                <p className="text-xs text-accent-cyan mt-3">{c.year}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
