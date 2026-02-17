import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import GoldFrame from "./GoldFrame";
import FloralDivider from "./FloralDivider";

const WEDDING_DATE = "2026-06-15";

const EventCard = ({
  title,
  date,
  time,
  location,
  delay,
}: {
  title: string;
  date: string;
  time: string;
  location: string;
  delay: number;
}) => (
  <motion.div
    className="mb-8 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}>
    <h3 className="mb-3 font-display text-botanical-dark text-xl">{title}</h3>
    <div className="space-y-2 text-foreground/70 text-sm">
      <div className="flex justify-center items-center gap-2">
        <Calendar className="w-4 h-4 text-accent" />
        <span>{date}</span>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Clock className="w-4 h-4 text-accent" />
        <span>{time}</span>
      </div>
      <div className="flex justify-center items-center gap-2">
        <MapPin className="w-4 h-4 text-accent" />
        <span>{location}</span>
      </div>
    </div>
  </motion.div>
);

const saveToGoogleCalendar = () => {
  const url = `https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NmwzNTM5djE2NXNxc280aW40Z3J2NTV1bGogY19hOGQzOWNlNDA4N2NkNjExYWZkMzJkMmYyY2Y1NDdhNDUxMmM4NmRmMWRlNGNhM2NlNDBhZjdmZmI4YTNhYzUxQGc&tmsrc=c_a8d39ce4087cd611afd32d2f2cf547a4512c86df1de4ca3ce40af7ffb8a3ac51%40group.calendar.google.com`;
  window.open(url, "_blank");
};

const openMaps = () => {
  window.open("https://maps.app.goo.gl/Kvq434qokDSEeFAL7", "_blank");
};

const EventSection = () => (
  <motion.section
    className="px-6 py-16 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}>
    <h2 className="mb-8 font-display text-accent text-xl uppercase tracking-widest">
      Waktu & Tempat
    </h2>
    <GoldFrame className="mx-auto max-w-md">
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
      <div className="flex sm:flex-row flex-col justify-center gap-3 mt-6">
        <motion.button
          onClick={saveToGoogleCalendar}
          className="flex justify-center items-center gap-2 bg-accent hover:opacity-90 shadow px-5 py-2.5 rounded-full font-medium text-sm transition-opacity text-accent-foreground"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}>
          <Calendar className="w-4 h-4" /> Save to Calendar
        </motion.button>
        <motion.button
          onClick={openMaps}
          className="flex justify-center items-center gap-2 bg-botanical hover:opacity-90 shadow px-5 py-2.5 rounded-full font-medium text-primary-foreground text-sm transition-opacity"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}>
          <MapPin className="w-4 h-4" /> Buka Maps
        </motion.button>
      </div>
    </GoldFrame>
  </motion.section>
);

export default EventSection;
