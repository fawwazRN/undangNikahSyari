import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import GoldFrame from "./GoldFrame";
import FloralDivider from "./FloralDivider";

const WEDDING_DATE = "2026-06-15";

const EventCard = ({ title, date, time, location, delay }: { title: string; date: string; time: string; location: string; delay: number }) => (
  <motion.div
    className="text-center mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <h3 className="font-display text-xl text-botanical-dark mb-3">{title}</h3>
    <div className="space-y-2 text-sm text-foreground/70">
      <div className="flex items-center justify-center gap-2">
        <Calendar className="w-4 h-4 text-accent" />
        <span>{date}</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Clock className="w-4 h-4 text-accent" />
        <span>{time}</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <MapPin className="w-4 h-4 text-accent" />
        <span>{location}</span>
      </div>
    </div>
  </motion.div>
);

const saveToGoogleCalendar = () => {
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Fulan+%26+Fulanah&dates=20260615T080000Z/20260615T150000Z&location=Masjid+Al-Ikhlas,+Jakarta&details=Anda+diundang+ke+pernikahan+Fulan+dan+Fulanah`;
  window.open(url, "_blank");
};

const openMaps = () => {
  window.open("https://maps.google.com/?q=Masjid+Al-Ikhlas+Jakarta", "_blank");
};

const EventSection = () => (
  <motion.section
    className="py-16 px-6 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="font-display text-xl text-accent mb-8 tracking-widest uppercase">Waktu & Tempat</h2>
    <GoldFrame className="max-w-md mx-auto">
      <EventCard
        title="Akad Nikah"
        date="Senin, 15 Juni 2026"
        time="08:00 - 10:00 WIB"
        location="Masjid Al-Ikhlas, Jakarta"
        delay={0}
      />
      <FloralDivider />
      <EventCard
        title="Resepsi"
        date="Senin, 15 Juni 2026"
        time="11:00 - 14:00 WIB"
        location="Gedung Serbaguna, Jakarta"
        delay={0.2}
      />
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
        <motion.button
          onClick={saveToGoogleCalendar}
          className="bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-medium shadow hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Calendar className="w-4 h-4" /> Save to Calendar
        </motion.button>
        <motion.button
          onClick={openMaps}
          className="bg-botanical text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium shadow hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <MapPin className="w-4 h-4" /> Buka Maps
        </motion.button>
      </div>
    </GoldFrame>
  </motion.section>
);

export default EventSection;
