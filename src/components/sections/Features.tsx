import { motion } from "framer-motion";
import {
  Calculator,
  Database,
  FileText,
  Sparkles,
  LineChart,
  Users,
} from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";

const FEATURES = [
  {
    icon: Calculator,
    title: "Manajemen RAB Terintegrasi",
    desc: "Susun Rencana Anggaran Biaya lengkap dengan AHSP dan TOS dalam satu alur kerja terstruktur.",
  },
  {
    icon: Database,
    title: "Master Data Lengkap",
    desc: "Kelola data material, upah, alat, dan AHSP secara terpusat dan dapat digunakan ulang antar proyek.",
  },
  {
    icon: FileText,
    title: "Generate PDF Otomatis",
    desc: "Cetak laporan profesional siap-tanda-tangan hanya dalam satu klik — tanpa formatting manual.",
  },
  {
    icon: Sparkles,
    title: "Insight Berbasis AI",
    desc: "Dapatkan analisa cerdas terhadap struktur biaya, anomali, dan rekomendasi efisiensi anggaran.",
  },
  {
    icon: LineChart,
    title: "Monitoring Progres Proyek",
    desc: "Pantau realisasi, persentase pengerjaan, dan deviasi anggaran secara real-time melalui dashboard.",
  },
  {
    icon: Users,
    title: "Kolaborasi Multi-User",
    desc: "Tim perangkat desa bekerja bersama dengan peran dan akses yang jelas — aman dan terukur.",
  },
];

const Features = () => {
  return (
    <SectionWrapper id="fitur" className="bg-muted/40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="inline-block text-xs font-semibold tracking-widest text-secondary uppercase">
          Fitur Utama
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary text-balance">
          Semua yang Anda Butuhkan untuk Perencanaan Desa
        </h2>
        <p className="mt-4 text-muted-foreground text-balance">
          Fitur lengkap yang dirancang sesuai praktik perencanaan anggaran pembangunan desa.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl border border-border bg-card p-6 md:p-7 shadow-sm hover:shadow-elegant transition-all overflow-hidden"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-secondary/0 group-hover:bg-secondary/10 transition-colors" />
            <div className="relative">
              <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-semibold text-lg text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Features;
