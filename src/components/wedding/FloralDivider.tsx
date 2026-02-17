const FloralDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 my-8 ${className}`}>
    <svg viewBox="0 0 80 20" className="w-20 h-5" fill="none">
      <path d="M0 10 Q20 0 40 10 Q60 20 80 10" stroke="hsl(42 70% 55%)" strokeWidth="1" />
      <path d="M0 10 Q20 20 40 10 Q60 0 80 10" stroke="hsl(42 70% 55% / 0.4)" strokeWidth="1" />
    </svg>
    <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none">
      <circle cx="10" cy="10" r="3" fill="hsl(42 70% 55% / 0.6)" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse
          key={angle}
          cx="10"
          cy="10"
          rx="2"
          ry="6"
          fill="hsl(150 35% 30% / 0.3)"
          transform={`rotate(${angle} 10 10)`}
        />
      ))}
    </svg>
    <svg viewBox="0 0 80 20" className="w-20 h-5 scale-x-[-1]" fill="none">
      <path d="M0 10 Q20 0 40 10 Q60 20 80 10" stroke="hsl(42 70% 55%)" strokeWidth="1" />
      <path d="M0 10 Q20 20 40 10 Q60 0 80 10" stroke="hsl(42 70% 55% / 0.4)" strokeWidth="1" />
    </svg>
  </div>
);

export default FloralDivider;
