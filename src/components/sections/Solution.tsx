import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import DashboardMockup from "./DashboardMockup";

const SOLUTIONS = [
  "Satu sistem untuk semua proyek desa — terkonsolidasi & rapi.",
  "Validasi otomatis pada setiap perhitungan AHSP, material, dan upah.",
  "Audit trail dan kontrol versi — siapa mengubah apa, kapan.",
  "Kolaborasi multi-user real-time tanpa kirim file Excel bolak-balik.",
  "Export laporan PDF instan, siap untuk review & approval.",
  "Insight berbasis AI untuk membantu pengambilan keputusan.",
];

const Solution = () => {
  return (
    <SectionWrapper id="solusi">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <DashboardMockup />
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-block text-xs font-semibold tracking-widest text-secondary uppercase">
            Solusi
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary text-balance">
            Bagaimana SIPBANGDES Menyelesaikannya
          </h2>
          <p className="mt-4 text-muted-foreground text-balance">
            SIPBANGDES dirancang khusus untuk alur kerja perencanaan anggaran pembangunan desa —
            menggantikan Excel terpisah dengan platform terintegrasi yang akurat dan kolaboratif.
          </p>

          <ul className="mt-8 space-y-3">
            {SOLUTIONS.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3"
              >
                <span className="shrink-0 mt-0.5 h-6 w-6 rounded-full gradient-primary flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" />
                </span>
                <span className="text-foreground/90">{s}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Solution;
