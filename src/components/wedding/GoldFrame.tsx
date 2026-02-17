const GoldFrame = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative ${className}`}>
    {/* Corner ornaments */}
    {["top-0 left-0", "top-0 right-0 scale-x-[-1]", "bottom-0 left-0 scale-y-[-1]", "bottom-0 right-0 scale-[-1]"].map(
      (pos, i) => (
        <svg key={i} className={`absolute ${pos} w-16 h-16`} viewBox="0 0 60 60" fill="none">
          <path d="M0 0 Q30 5 55 0 Q50 30 55 55 Q25 50 0 55 Q5 25 0 0Z" stroke="hsl(42 70% 55%)" strokeWidth="1.5" fill="none" />
          <path d="M5 5 Q15 10 25 5" stroke="hsl(42 70% 55% / 0.5)" strokeWidth="1" fill="none" />
          <path d="M5 5 Q10 15 5 25" stroke="hsl(42 70% 55% / 0.5)" strokeWidth="1" fill="none" />
          <circle cx="8" cy="8" r="2" fill="hsl(42 70% 55% / 0.6)" />
        </svg>
      )
    )}
    <div className="border border-accent/30 p-6 sm:p-8">{children}</div>
  </div>
);

export default GoldFrame;
