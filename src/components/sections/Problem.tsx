import { motion } from "framer-motion";
import { FileX2, AlertTriangle, ClipboardX, Network } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";

const PROBLEMS = [
  {
    icon: FileX2,
    title: "Excel Terpisah Antar Proyek",
    desc: "Setiap proyek dikelola di file Excel berbeda — sulit dikonsolidasi, rawan duplikasi, dan tidak ada single source of truth.",
  },
  {
    icon: ClipboardX,
    title: "Validasi Data Kompleks",
    desc: "Data AHSP, harga material, dan upah saling terkait. Tanpa sistem, validasi memakan waktu dan mudah terlewat.",
  },
  {
    icon: AlertTriangle,
    title: "Manual & Rawan Human Error",
    desc: "Pencatatan manual menyebabkan salah hitung, salah input, dan inkonsistensi laporan antar dokumen.",
  },
  {
    icon: Network,
    title: "Tidak Terintegrasi & Kolaboratif",
    desc: "Tim kesulitan bekerja bersama, file dikirim bolak-balik via chat dan email tanpa kontrol versi.",
  },
];

const Problem = () => {
  return (
    <SectionWrapper id="masalah" className="bg-muted/40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="inline-block text-xs font-semibold tracking-widest text-secondary uppercase">
          Pain Points
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary text-balance">
          Tantangan yang Dihadapi Pemerintah Desa
        </h2>
        <p className="mt-4 text-muted-foreground text-balance">
          Penyusunan RAB konvensional menyimpan banyak kendala yang menghambat transparansi dan efisiensi.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROBLEMS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative rounded-2xl border border-border bg-card p-6 md:p-7 shadow-sm hover:shadow-elegant hover:-translate-y-1 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 h-12 w-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center group-hover:scale-110 transition-transform">
                <p.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">{p.title}</h3>
                <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Problem;
