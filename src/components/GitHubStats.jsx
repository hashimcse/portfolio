import { FiGithub, FiStar, FiUsers, FiFolder } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import { useCounter } from '../hooks/useCounter';
import { useGitHubStats } from '../hooks/useGitHubStats';
import { socials } from '../data/misc';
import Reveal from './Reveal';

const GITHUB_USERNAME = 'hashimcse';

function StatCard({ label, value, Icon, loading }) {
  const [ref, inView] = useInView();
  const animated = useCounter(value, inView && !loading);

  return (
    <div
      ref={ref}
      className="glass rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
    >
      <Icon className="mx-auto mb-3 text-accent-cyan" size={22} />

      <p className="font-display font-bold text-3xl gradient-text mb-1">
        {loading ? '—' : animated}
      </p>

      <p className="text-sm text-dim">{label}</p>
    </div>
  );
}

export default function GitHubStats() {
  const { repos, followers, stars, loading, error } =
    useGitHubStats(GITHUB_USERNAME);

  const stats = [
    {
      label: 'Total Repositories',
      value: repos,
      icon: FiFolder,
    },
    {
      label: 'Stars',
      value: stars,
      icon: FiStar,
    },
    {
      label: 'Followers',
      value: followers,
      icon: FiUsers,
    },
  ];

  return (
    <section id="github" className="py-28 bg-app-soft relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-3">
            GitHub
          </p>

          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-10 max-w-2xl">
            Most of my learning happens in commits.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-2xl p-6 mb-10 overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
              className="w-full min-w-[720px]"
              loading="lazy"
            />

            <p className="text-xs text-dim mt-3">
              Live contribution graph for{' '}
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-cyan hover:underline"
              >
                github.com/{GITHUB_USERNAME}
              </a>
              .
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {stats.map((stat) => (
            <Reveal key={stat.label}>
              <StatCard
                label={stat.label}
                value={stat.value}
                Icon={stat.icon}
                loading={loading}
              />
            </Reveal>
          ))}
        </div>

        {error && (
          <p className="text-xs text-red-400 mb-6">
            Couldn't reach the GitHub API right now ({error}). Numbers will
            refresh on the next load.
          </p>
        )}

        <Reveal delay={0.2}>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan text-[#04070d] font-medium hover:-translate-y-0.5 hover:shadow-glow transition-all duration-300"
          >
            <FiGithub />
            View GitHub Profile
          </a>
        </Reveal>
      </div>
    </section>
  );
}