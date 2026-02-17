import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, HelpCircle, X, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import FloralDivider from "./FloralDivider";

interface RSVPEntry {
  id: string;
  nama: string;
  status: string;
  pesan: string | null;
  created_at: string;
}

const statusConfig: Record<string, { icon: typeof Check; label: string; color: string }> = {
  hadir: { icon: Check, label: "Hadir", color: "text-botanical" },
  ragu: { icon: HelpCircle, label: "Ragu", color: "text-accent" },
  tidak_hadir: { icon: X, label: "Tidak Hadir", color: "text-muted-foreground" },
};

const GuestbookSection = ({ refreshKey }: { refreshKey: number }) => {
  const [entries, setEntries] = useState<RSVPEntry[]>([]);

  const fetchEntries = async () => {
    const { data } = await supabase.from("rsvp").select("*").order("created_at", { ascending: false }).limit(50);
    if (data) setEntries(data as RSVPEntry[]);
  };

  useEffect(() => {
    fetchEntries();
  }, [refreshKey]);

  // Realtime subscription
  useEffect(() => {
    const channel = supabase
      .channel("rsvp-realtime")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "rsvp" }, () => {
        fetchEntries();
      })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  return (
    <motion.section
      className="py-16 px-6 text-center bg-botanical-dark/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-display text-xl text-accent mb-2 tracking-widest uppercase">Ucapan Tamu</h2>
      <p className="text-muted-foreground text-sm mb-8">
        <MessageCircle className="inline w-4 h-4 mr-1" />
        {entries.length} ucapan
      </p>

      <div className="max-w-md mx-auto space-y-4 max-h-96 overflow-y-auto px-1">
        {entries.length === 0 && (
          <p className="text-muted-foreground text-sm italic py-8">Belum ada ucapan. Jadilah yang pertama! 💌</p>
        )}
        {entries.map((entry, i) => {
          const sc = statusConfig[entry.status] || statusConfig.hadir;
          const Icon = sc.icon;
          return (
            <motion.div
              key={entry.id}
              className="bg-cream border border-accent/20 rounded-xl p-4 text-left shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-sm text-botanical-dark">{entry.nama}</h4>
                <span className={`flex items-center gap-1 text-xs ${sc.color}`}>
                  <Icon className="w-3 h-3" /> {sc.label}
                </span>
              </div>
              {entry.pesan && <p className="text-foreground/70 text-sm font-serif-body">{entry.pesan}</p>}
            </motion.div>
          );
        })}
      </div>
      <FloralDivider />
    </motion.section>
  );
};

export default GuestbookSection;
