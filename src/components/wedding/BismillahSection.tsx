import { motion } from "framer-motion";
import GoldFrame from "./GoldFrame";
import FloralDivider from "./FloralDivider";

const BismillahSection = () => (
  <motion.section
    className="py-16 px-6 text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <GoldFrame className="max-w-md mx-auto">
      <p className="text-accent text-lg font-display mb-4">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
      <FloralDivider />
      <p className="font-serif-body text-foreground/80 text-sm leading-relaxed italic mb-4">
        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
      </p>
      <p className="text-accent text-sm font-display">— QS. Ar-Rum: 21 —</p>
    </GoldFrame>
  </motion.section>
);

export default BismillahSection;
