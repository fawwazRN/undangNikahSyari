import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FloralDivider from "./FloralDivider";

const WEDDING_DATE = new Date("2026-06-15T08:00:00+07:00");

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, WEDDING_DATE.getTime() - now.getTime());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <motion.section
      className="py-16 px-6 text-center bg-botanical-dark/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-display text-xl text-accent mb-8 tracking-widest uppercase">Menghitung Hari</h2>
      <div className="flex justify-center gap-4 max-w-sm mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            className="flex-1 bg-cream border border-accent/30 rounded-xl p-4 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <motion.p
              className="font-display text-3xl sm:text-4xl text-botanical-dark"
              key={item.value}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {String(item.value).padStart(2, "0")}
            </motion.p>
            <p className="text-muted-foreground text-xs mt-1">{item.label}</p>
          </motion.div>
        ))}
      </div>
      <FloralDivider />
    </motion.section>
  );
};

export default CountdownSection;
