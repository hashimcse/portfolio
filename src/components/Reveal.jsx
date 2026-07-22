import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function Reveal({ children, delay = 0, y = 24, className = '' }) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
