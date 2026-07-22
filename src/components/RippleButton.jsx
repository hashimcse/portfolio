import { useState } from 'react';

export default function RippleButton({
  children,
  onClick,
  href,
  variant = 'solid',
  className = '',
  type = 'button',
  as,
}) {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now();
    setRipples((r) => [...r, { id, x, y, size }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 650);
  };

  const base =
    'ripple relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 focus-visible:outline-none';
  const solid =
    'bg-gradient-to-r from-accent-blue to-accent-cyan text-[#04070d] shadow-glow-blue hover:shadow-glow hover:-translate-y-0.5';
  const outline =
    'border border-white/15 text-current hover:border-accent-cyan/60 hover:-translate-y-0.5 hover:bg-white/5';

  const classes = `${base} ${variant === 'solid' ? solid : outline} ${className}`;

  const Tag = as || (href ? 'a' : 'button');

  return (
    <Tag
      href={href}
      type={href ? undefined : type}
      className={classes}
      onClick={(e) => {
        createRipple(e);
        onClick && onClick(e);
      }}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple-circle"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}
    </Tag>
  );
}
