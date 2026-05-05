import { motion } from "framer-motion";
import { ArrowRight, Sparkles, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardMockup from "./DashboardMockup";

const Hero = () => {
  return (
    <section id="beranda" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-primary/5 to-transparent" aria-hidden />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-xs font-semibold text-primary"
            >
              <Sparkles className="h-3.5 w-3.5 text-secondary" />
              Solusi Digital untuk Pemerintah Desa
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary text-balance"
            >
              Digitalisasi Perencanaan{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Anggaran Desa</span>
                <span className="absolute inset-x-0 bottom-1 md:bottom-2 h-3 md:h-4 bg-secondary/40 -z-0" />
              </span>{" "}
              dalam Satu Sistem
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance"
            >
              SIPBANGDES membantu pemerintah desa menyusun RAB, mengelola data AHSP, dan
              memonitor proyek pembangunan secara terintegrasi, akurat, dan kolaboratif.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button asChild variant="hero" size="xl">
                <a href="#kontak">
                  Coba Demo <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline-primary" size="xl">
                <a href="#fitur">
                  <PlayCircle className="h-4 w-4" /> Pelajari Lebih Lanjut
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-secondary" />
                Berbasis Web
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-secondary" />
                Multi-User Kolaboratif
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-secondary" />
                Insight AI
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
