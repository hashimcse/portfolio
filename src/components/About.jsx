import { useInView } from '../hooks/useInView';
import { useCounter } from '../hooks/useCounter';
import Reveal from './Reveal';

const stats = [
  { label: 'Projects Completed', value: 6, suffix: '+' },
  { label: 'Technologies Learned', value: 18, suffix: '+' },
  { label: 'Certifications', value: 4 },
  { label: 'GitHub Repositories', value: 12, suffix: '+' },
];

function StatCard({ stat }) {
  const [ref, inView] = useInView();
  const value = useCounter(stat.value, inView);

  return (
    <div ref={ref} className="glass rounded-2xl p-6 text-center shadow-card hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
      <p className="font-display font-bold text-4xl gradient-text mb-1">
        {value}
        {stat.suffix || ''}
      </p>
      <p className="text-sm text-dim">{stat.label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 bg-app-soft relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-8 max-w-2xl">
            Turning curiosity about intelligent systems into working code.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-dim leading-relaxed">
              <p>
                I'm a Computer Systems Engineering student who spends most of my free time
                deep in notebooks, training models, and figuring out why a dataset is lying
                to me. What started as curiosity about how machines learn has grown into a
                genuine drive to become an AI Engineer.
              </p>
              <p>
                I enjoy the full path from raw data to a model that actually works — cleaning
                messy datasets, engineering the right features, and iterating until a model
                explains something real about the world. I like problems that have a
                measurable, testable answer.
              </p>
              <p>
                Alongside machine learning, I keep building on the fundamentals: systems,
                networking, and software engineering practices that make my models something
                more than a notebook cell — a system someone could actually rely on.
              </p>
              <p>
                I'm continuously learning new tools and techniques, one project at a time, with
                the long-term goal of designing intelligent systems that solve real, practical
                problems.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <StatCard key={s.label} stat={s} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
