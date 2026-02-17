import FloralDivider from "./FloralDivider";
import LeafDecoration from "./LeafDecoration";

const FooterSection = () => (
  <footer className="relative px-6 py-12 overflow-hidden text-center">
    <LeafDecoration className="bottom-0 left-0 absolute opacity-20 w-16 h-auto" />
    <LeafDecoration
      className="right-0 bottom-0 absolute opacity-20 w-16 h-auto"
      flip
    />
    <FloralDivider />
    <p className="mb-2 font-display text-botanical-dark text-2xl">
      Fulan & Fulanah
    </p>
    <p className="mb-1 font-serif-body text-muted-foreground text-sm italic">
      Merupakan suatu kehormatan dan kebahagiaan apabila Bapak/Ibu/Saudara/i
      berkenan hadir
    </p>
    <p className="mt-4 font-display text-accent text-sm">
      Wassalamu'alaikum Wr. Wb.
    </p>
    <div className="mt-8 text-muted-foreground/50 text-xs">
      © 2026 — Fawwaz Romzi Nagib
    </div>
  </footer>
);

export default FooterSection;
