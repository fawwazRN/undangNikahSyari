import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, HelpCircle, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import GoldFrame from "./GoldFrame";

const RSVPSection = ({ onSubmitted }: { onSubmitted: () => void }) => {
  const [nama, setNama] = useState("");
  const [status, setStatus] = useState<"hadir" | "ragu" | "tidak_hadir" | "">("");
  const [jumlahTamu, setJumlahTamu] = useState(1);
  const [pesan, setPesan] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const statusOptions = [
    { value: "hadir" as const, label: "Saya Hadir", icon: Check, color: "bg-botanical text-primary-foreground" },
    { value: "ragu" as const, label: "Masih Ragu", icon: HelpCircle, color: "bg-accent text-accent-foreground" },
    { value: "tidak_hadir" as const, label: "Tidak Hadir", icon: X, color: "bg-muted text-muted-foreground" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama || !status) {
      toast({ title: "Mohon isi nama dan pilih kehadiran", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("rsvp").insert({ nama, status, jumlah_tamu: jumlahTamu, pesan: pesan || null });
    setLoading(false);
    if (error) {
      toast({ title: "Gagal mengirim", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Terima kasih! 💌", description: "Ucapan Anda telah terkirim" });
      setNama(""); setStatus(""); setJumlahTamu(1); setPesan("");
      onSubmitted();
    }
  };

  return (
    <motion.section
      className="py-16 px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-display text-xl text-accent mb-8 tracking-widest uppercase">RSVP & Ucapan</h2>
      <GoldFrame className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {/* Nama */}
          <div>
            <label className="text-sm font-medium text-foreground/80 mb-1 block">Nama Anda</label>
            <input
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
            />
          </div>

          {/* Status */}
          <div>
            <label className="text-sm font-medium text-foreground/80 mb-2 block">Konfirmasi Kehadiran</label>
            <div className="grid grid-cols-3 gap-2">
              {statusOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setStatus(opt.value)}
                  className={`flex flex-col items-center gap-1 py-3 px-2 rounded-lg border-2 text-xs font-medium transition-all ${
                    status === opt.value ? `${opt.color} border-transparent shadow-md scale-105` : "border-border bg-background hover:border-accent/40"
                  }`}
                >
                  <opt.icon className="w-5 h-5" />
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Jumlah tamu */}
          {status === "hadir" && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} transition={{ duration: 0.3 }}>
              <label className="text-sm font-medium text-foreground/80 mb-1 block">Jumlah Tamu</label>
              <input
                type="number"
                min={1}
                max={10}
                value={jumlahTamu}
                onChange={(e) => setJumlahTamu(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
              />
            </motion.div>
          )}

          {/* Pesan */}
          <div>
            <label className="text-sm font-medium text-foreground/80 mb-1 block">Pesan untuk Pengantin</label>
            <textarea
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              placeholder="Tulis ucapan & doa terbaik Anda..."
              rows={3}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition resize-none"
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={loading}
            className="w-full bg-botanical text-primary-foreground py-3 rounded-full font-medium shadow-lg hover:bg-botanical-light transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="w-4 h-4" />
            {loading ? "Mengirim..." : "Kirim Ucapan"}
          </motion.button>
        </form>
      </GoldFrame>
    </motion.section>
  );
};

export default RSVPSection;
