import { motion } from "framer-motion";
import { Layers, Target, Clock, Eye } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";

const REASONS = [
  { icon: Layers, title: "Terintegrasi", desc: "Semua data dan proyek dalam satu platform — tidak ada lagi file tercecer." },
  { icon: Target, title: "Akurat & Minim Error", desc: "Validasi otomatis dan formula terstandar mengurangi kesalahan hitung." },
  { icon: Clock, title: "Hemat Waktu", desc: "Proses penyusunan RAB jadi berkali lipat lebih cepat dibanding manual." },
  { icon: Eye, title: "Transparan & Akuntabel", desc: "Audit trail lengkap mendukung tata kelola desa yang baik." },
];

const WhyChoose = () => {
  return (
    <SectionWrapper id="keunggulan" className="bg-muted/40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="inline-block text-xs font-semibold tracking-widest text-secondary uppercase">
          Keunggulan
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary text-balance">
          Mengapa Memilih SIPBANGDES?
        </h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {REASONS.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm hover:shadow-elegant transition-all"
          >
            <div className="mx-auto h-14 w-14 rounded-2xl bg-secondary/15 text-primary flex items-center justify-center">
              <r.icon className="h-7 w-7" />
            </div>
            <h3 className="mt-4 font-semibold text-foreground">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhyChoose;
