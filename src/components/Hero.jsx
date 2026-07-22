import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';
import NeuralField from './NeuralField';
import RippleButton from './RippleButton';
import profile from "./profile.jpeg";

const roles = ['Machine Learning', 'Python Development', 'Artificial Intelligence', 'Data Science'];

function useTypewriter(words, speed = 70, pause = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      const next = deleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);
      timeout = setTimeout(() => setText(next), deleting ? speed / 2 : speed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-app"
    >
      {/* Animated gradient backdrop */}
      <div className="absolute inset-0 bg-grad-radial" />
      <div
        className="absolute inset-0 opacity-40 bg-node-grid bg-[size:48px_48px]"
        style={{ maskImage: 'radial-gradient(circle at 50% 30%, black, transparent 70%)' }}
      />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent-blue/20 blur-[100px] animate-float-slow" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-accent-cyan/20 blur-[100px] animate-float-slower" />
      <NeuralField density={60} />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent-cyan font-medium tracking-wide mb-4">Hi, I'm</p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-5">
            Hashim
          </h1>
          <h2 className="font-display text-xl sm:text-2xl text-dim mb-3">
            Computer Systems Engineering Student
          </h2>
          <div className="h-8 mb-6">
            <p className="text-lg sm:text-xl font-medium gradient-text inline">
              {typed}
              <span className="inline-block w-[2px] h-5 bg-accent-cyan ml-1 align-middle animate-blink" />
            </p>
          </div>
          <p className="text-dim max-w-xl mb-10 leading-relaxed">
            Aspiring Machine Learning Engineer &middot; Python Developer &middot; AI Enthusiast —
            building models and systems that turn data into decisions.
          </p>

          <div className="flex flex-wrap gap-4">
            <RippleButton href="/resume.pdf" variant="solid">
              <FiDownload /> Download Resume
            </RippleButton>
            <RippleButton href="#contact" variant="outline">
              <FiMail /> Contact Me
            </RippleButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-72 sm:w-96"
        >
          {/* soft glow anchored behind the subject, no hard frame */}
          <div className="absolute inset-x-6 top-10 bottom-0 rounded-full bg-gradient-to-b from-accent-blue/30 to-accent-cyan/20 blur-3xl opacity-70 animate-float-slow" />
          <img
            src="/profile-natural.png"
            alt="Hashim"
            className="relative w-full h-auto drop-shadow-[0_0_50px_rgba(34,211,238,0.25)] animate-float-slow"
          />
        </motion.div>
      </div>
    </section>
  );
}
