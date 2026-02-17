import { motion } from "framer-motion";
import FloralDivider from "./FloralDivider";

const PersonCard = ({ name, fullName, parents, side, delay }: { name: string; fullName: string; parents: string; side: string; delay: number }) => (
  <motion.div
    className="text-center flex-1"
    initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="w-28 h-28 mx-auto rounded-full border-2 border-accent/50 bg-muted flex items-center justify-center mb-4 shadow-lg">
      <span className="text-4xl">🌸</span>
    </div>
    <h3 className="font-display text-2xl text-botanical-dark mb-1">{name}</h3>
    <p className="font-serif-body text-foreground/80 text-sm mb-2">{fullName}</p>
    <p className="text-muted-foreground text-xs">{parents}</p>
  </motion.div>
);

const CoupleSection = () => (
  <motion.section
    className="py-16 px-6 text-center bg-botanical-dark/5"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="font-display text-xl text-accent mb-8 tracking-widest uppercase">Mempelai</h2>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-md mx-auto">
      <PersonCard
        name="Fulan"
        fullName="Fulan bin Abdullah"
        parents="Putra dari Bapak Abdullah & Ibu Aminah"
        side="left"
        delay={0}
      />
      <motion.div
        className="font-display text-4xl text-accent"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        &
      </motion.div>
      <PersonCard
        name="Fulanah"
        fullName="Fulanah binti Abdullah"
        parents="Putri dari Bapak Abdullah & Ibu Fatimah"
        side="right"
        delay={0.2}
      />
    </div>
    <FloralDivider />
  </motion.section>
);

export default CoupleSection;
