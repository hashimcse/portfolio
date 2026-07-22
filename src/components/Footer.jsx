import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { socials } from '../data/misc';

const socialLinks = [
  { icon: FiGithub, href: socials.github, label: 'GitHub' },
  { icon: FiLinkedin, href: socials.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: `mailto:${socials.email}`, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-app-soft border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-dim order-2 sm:order-1">
          &copy; {new Date().getFullYear()} Hashim. All rights reserved.
        </p>

        <div className="flex items-center gap-4 order-1 sm:order-2">
          {socialLinks.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-accent-cyan hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>

        <p className="text-xs text-dim order-3">Designed &amp; Developed by Hashim</p>
      </div>
    </footer>
  );
}
