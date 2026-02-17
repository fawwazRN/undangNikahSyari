import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FloralDivider from "./FloralDivider";

const WEDDING_DATE = new Date("2026-03-08T10:00:00+07:00");

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
      className="bg-botanical-dark/5 px-6 py-16 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}>
      <h2 className="mb-8 font-display text-accent text-xl uppercase tracking-widest">
        Menghitung Hari
      </h2>
      <div className="flex justify-center gap-4 mx-auto max-w-sm">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            className="flex-1 bg-cream shadow-md p-4 border border-accent/30 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}>
            <motion.p
              className="font-display text-botanical-dark text-3xl sm:text-4xl"
              key={item.value}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}>
              {String(item.value).padStart(2, "0")}
            </motion.p>
            <p className="mt-1 text-muted-foreground text-xs">{item.label}</p>
          </motion.div>
        ))}
      </div>
      <FloralDivider />
    </motion.section>
  );
};

export default CountdownSection;
