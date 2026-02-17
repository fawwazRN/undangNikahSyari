import FloralDivider from "./FloralDivider";
import LeafDecoration from "./LeafDecoration";

const FooterSection = () => (
  <footer className="py-12 px-6 text-center relative overflow-hidden">
    <LeafDecoration className="absolute left-0 bottom-0 w-16 h-auto opacity-20" />
    <LeafDecoration className="absolute right-0 bottom-0 w-16 h-auto opacity-20" flip />
    <FloralDivider />
    <p className="font-display text-2xl text-botanical-dark mb-2">Fulan & Fulanah</p>
    <p className="text-muted-foreground text-sm mb-1 font-serif-body italic">
      Merupakan suatu kehormatan dan kebahagiaan apabila Bapak/Ibu/Saudara/i berkenan hadir
    </p>
    <p className="text-accent text-sm font-display mt-4">Wassalamu'alaikum Wr. Wb.</p>
    <div className="mt-8 text-muted-foreground/50 text-xs">
      © 2026 — Fulan & Fulanah
    </div>
  </footer>
);

export default FooterSection;
