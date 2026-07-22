import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import { socials } from '../data/misc';
import Reveal from './Reveal';
import RippleButton from './RippleButton';

const infoItems = [
  { icon: FiMail, label: 'Email', value: socials.email, href: `mailto:${socials.email}` },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/hashim', href: socials.linkedin },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/hashim', href: socials.github },
  { icon: FiPhone, label: 'Phone', value: socials.phone, href: `tel:${socials.phone}` },
  { icon: FiMapPin, label: 'Location', value: socials.location, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Replace these with your own EmailJS service, template, and public key.
      await emailjs.send(
        'service_v6eptlr',
        'template_l3tyef4',
        form,
        'kXiqFzPAjuovX2rIa'
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-28 bg-app relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-accent-cyan text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-14 max-w-2xl">
            Have a project or opportunity in mind? Let's talk.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <Reveal delay={0.1}>
            <div className="space-y-4">
              {infoItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
                    <span className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-accent-cyan text-lg shrink-0">
                      <Icon />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-dim uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm font-medium truncate">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs text-dim mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent-cyan/60 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-dim mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent-cyan/60 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs text-dim mb-2 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent-cyan/60 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-dim mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent-cyan/60 transition-colors resize-none"
                  placeholder="Tell me a bit about it..."
                />
              </div>

              <RippleButton type="button" as="button" onClick={handleSubmit} variant="solid" className="w-full sm:w-auto">
                <FiSend /> {status === 'sending' ? 'Sending...' : 'Send Message'}
              </RippleButton>

              {status === 'success' && (
                <p className="text-sm text-accent-cyan">Message sent — thanks for reaching out!</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400">
                  Something went wrong. Set up your EmailJS service ID, template ID, and public key in Contact.jsx.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
