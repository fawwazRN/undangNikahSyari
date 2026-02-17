import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EnvelopeCover from "@/components/wedding/EnvelopeCover";
import BismillahSection from "@/components/wedding/BismillahSection";
import CoupleSection from "@/components/wedding/CoupleSection";
import EventSection from "@/components/wedding/EventSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import GuestbookSection from "@/components/wedding/GuestbookSection";
import FooterSection from "@/components/wedding/FooterSection";
import AudioPlayer from "@/components/wedding/AudioPlayer";
import LeafDecoration from "@/components/wedding/LeafDecoration";

const Index = () => {
  const [opened, setOpened] = useState(false);
  const [audioAutoPlay, setAudioAutoPlay] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleOpen = useCallback(() => {
    setOpened(true);
    setAudioAutoPlay(true);
  }, []);

  const handleRSVPSubmitted = useCallback(() => {
    setRefreshKey((k) => k + 1);
  }, []);

  return (
    <div className="flex justify-center bg-botanical-dark min-h-screen">
      {/* Mobile container — always phone-sized */}
      <div className="w-full max-w-[430px] min-h-screen bg-background relative overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          {!opened ? (
            <EnvelopeCover key="envelope" onOpen={handleOpen} />
          ) : (
            <motion.div
              key="invitation"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Side leaf decorations */}
              <LeafDecoration className="fixed left-0 top-0 w-12 h-auto opacity-10 pointer-events-none" />
              <LeafDecoration className="fixed right-0 top-0 w-12 h-auto opacity-10 pointer-events-none" flip />

              <BismillahSection />
              <CoupleSection />
              <EventSection />
              <CountdownSection />
              <RSVPSection onSubmitted={handleRSVPSubmitted} />
              <GuestbookSection refreshKey={refreshKey} />
              <FooterSection />

              <AudioPlayer autoPlay={audioAutoPlay} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
