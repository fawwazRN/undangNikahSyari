import { motion } from "framer-motion";
import LeafDecoration from "./LeafDecoration";

interface EnvelopeCoverProps {
  onOpen: () => void;
}

const EnvelopeCover = ({ onOpen }: EnvelopeCoverProps) => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-botanical-dark relative overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background leaves */}
      <LeafDecoration className="absolute left-0 top-0 w-24 h-auto opacity-30 animate-sway" />
      <LeafDecoration className="absolute right-0 top-0 w-24 h-auto opacity-30 animate-sway" flip />
      <LeafDecoration className="absolute left-4 bottom-0 w-20 h-auto opacity-20 rotate-180" />
      <LeafDecoration className="absolute right-4 bottom-0 w-20 h-auto opacity-20 rotate-180" flip />

      {/* Envelope */}
      <motion.div
        className="relative w-80 sm:w-96"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Envelope body */}
        <div className="bg-cream rounded-lg shadow-2xl overflow-hidden border-2 border-accent/40">
          {/* Envelope flap (triangle) */}
          <div className="relative">
            <svg viewBox="0 0 400 150" className="w-full" preserveAspectRatio="none">
              <polygon points="0,0 400,0 200,140" fill="hsl(42 70% 55% / 0.15)" stroke="hsl(42 70% 55% / 0.4)" strokeWidth="1" />
              <polygon points="0,0 400,0 200,120" fill="hsl(42 70% 55% / 0.08)" stroke="none" />
            </svg>
            {/* Seal */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 rounded-full bg-accent/80 border-2 border-accent flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-display text-lg">💌</span>
              </div>
            </div>
          </div>

          {/* Content area */}
          <div className="px-8 pb-10 pt-6 text-center">
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-2">The Wedding of</p>
            <h1 className="font-display text-4xl sm:text-5xl text-botanical-dark mb-1 leading-tight">
              Fulan
            </h1>
            <p className="font-display text-2xl text-accent italic mb-1">&</p>
            <h1 className="font-display text-4xl sm:text-5xl text-botanical-dark mb-6 leading-tight">
              Fulanah
            </h1>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-px w-12 bg-accent/50" />
              <div className="w-2 h-2 rounded-full bg-accent/60" />
              <div className="h-px w-12 bg-accent/50" />
            </div>

            <p className="text-muted-foreground text-sm mb-8 font-serif-body italic">
              Anda diundang untuk merayakan pernikahan kami
            </p>

            {/* Open button */}
            <motion.button
              onClick={onOpen}
              className="bg-botanical text-primary-foreground px-8 py-3 rounded-full font-medium tracking-wide shadow-lg hover:bg-botanical-light transition-colors duration-300 border border-accent/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              💌 Buka Undangan
            </motion.button>
          </div>
        </div>

        {/* Leaf decorations on envelope */}
        <svg className="absolute -top-4 -left-8 w-20 h-20 opacity-40 animate-sway" viewBox="0 0 80 80" fill="none">
          <path d="M60 70 Q30 50 10 20 Q40 30 60 70Z" fill="hsl(150 35% 30% / 0.5)" />
          <path d="M60 70 Q35 40 10 20" stroke="hsl(150 35% 30% / 0.6)" strokeWidth="0.8" fill="none" />
        </svg>
        <svg className="absolute -top-4 -right-8 w-20 h-20 opacity-40 animate-sway scale-x-[-1]" viewBox="0 0 80 80" fill="none">
          <path d="M60 70 Q30 50 10 20 Q40 30 60 70Z" fill="hsl(150 35% 30% / 0.5)" />
          <path d="M60 70 Q35 40 10 20" stroke="hsl(150 35% 30% / 0.6)" strokeWidth="0.8" fill="none" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default EnvelopeCover;
