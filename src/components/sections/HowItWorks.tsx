import { motion } from "framer-motion";
import { ClipboardList, Layers, Calculator, ShieldCheck, Download } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";

const STEPS = [
  { icon: ClipboardList, title: "Input Data Proyek", desc: "Masukkan informasi proyek pembangunan: lokasi, jenis, lingkup, dan periode." },
  { icon: Layers, title: "Susun AHSP & TOS", desc: "Pilih dari master data atau buat AHSP baru lengkap dengan koefisien material, upah, dan alat." },
  { icon: Calculator, title: "Hitung RAB", desc: "Sistem otomatis menghitung total RAB, rekap, dan struktur biaya per item pekerjaan." },
  { icon: ShieldCheck, title: "Review & Approval", desc: "Tim verifikator melakukan review, memberi catatan, dan menyetujui RAB secara digital." },
  { icon: Download, title: "Export & Monitoring", desc: "Cetak PDF resmi dan pantau progres realisasi proyek hingga selesai." },
];

const HowItWorks = () => {
  return (
    <SectionWrapper id="cara-kerja">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="inline-block text-xs font-semibold tracking-widest text-secondary uppercase">
          Cara Kerja
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary text-balance">
          Lima Langkah Sederhana, Hasil Profesional
        </h2>
        <p className="mt-4 text-muted-foreground text-balance">
          Alur kerja yang dirancang sesuai praktik nyata di lapangan.
        </p>
      </motion.div>

      <div className="mt-16 relative">
        {/* connector */}
        <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="relative mx-auto h-20 w-20 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground shadow-elegant">
                <step.icon className="h-8 w-8" />
                <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center shadow-sm">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowItWorks;
