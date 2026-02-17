const LeafDecoration = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 200 400"
    className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main stem */}
    <path
      d="M100 400 Q95 300 100 200 Q105 100 100 0"
      stroke="hsl(150 35% 30%)"
      strokeWidth="2"
      fill="none"
    />
    {/* Leaves */}
    {[0, 1, 2, 3, 4, 5].map((i) => {
      const y = 50 + i * 60;
      const side = i % 2 === 0 ? 1 : -1;
      return (
        <g key={i}>
          <path
            d={`M100 ${y} Q${100 + side * 50} ${y - 30} ${100 + side * 70} ${y - 10} Q${100 + side * 50} ${y + 10} 100 ${y}`}
            fill="hsl(150 35% 30% / 0.3)"
            stroke="hsl(150 35% 30% / 0.6)"
            strokeWidth="1"
          />
          <path
            d={`M100 ${y} Q${100 + side * 35} ${y - 5} ${100 + side * 60} ${y - 5}`}
            stroke="hsl(150 35% 30% / 0.4)"
            strokeWidth="0.5"
            fill="none"
          />
        </g>
      );
    })}
  </svg>
);

export default LeafDecoration;
