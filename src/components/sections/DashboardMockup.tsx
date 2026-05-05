import { motion } from "framer-motion";
import { TrendingUp, FileSpreadsheet, CheckCircle2, Users } from "lucide-react";

/**
 * DashboardMockup — pure CSS/JSX illustration of the SIPBANGDES dashboard
 * (no real data, no readable PII). Used as hero visual.
 */
const DashboardMockup = () => {
  return (
    <div className="relative w-full">
      {/* Floating accent blobs */}
      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-secondary/30 blur-3xl animate-blob" />
      <div className="absolute -bottom-10 -right-6 h-48 w-48 rounded-full bg-primary/30 blur-3xl animate-blob [animation-delay:2s]" />

      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative rounded-2xl border border-border bg-card shadow-elevated overflow-hidden"
      >
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-destructive/70" />
            <span className="h-3 w-3 rounded-full bg-secondary" />
            <span className="h-3 w-3 rounded-full bg-alternate/70" />
          </div>
          <div className="ml-3 flex-1 h-6 rounded-md bg-background border border-border" />
        </div>

        {/* Body */}
        <div className="grid grid-cols-12 gap-4 p-4 md:p-6 bg-gradient-to-br from-muted/30 to-background">
          {/* Sidebar */}
          <div className="hidden md:flex col-span-3 flex-col gap-2 rounded-xl gradient-primary p-4 text-primary-foreground">
            <div className="h-2.5 w-20 rounded-full bg-white/40" />
            <div className="mt-4 space-y-2">
              {[1, 0.6, 0.8, 0.5].map((w, i) => (
                <div key={i} className={`flex items-center gap-2 rounded-md px-2 py-2 ${i === 0 ? "bg-white/15" : ""}`}>
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  <div className="h-2 rounded-full bg-white/40" style={{ width: `${w * 80}%` }} />
                </div>
              ))}
            </div>
          </div>

          {/* Main */}
          <div className="col-span-12 md:col-span-9 space-y-4">
            {/* KPI cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: FileSpreadsheet, label: "RAB Aktif", value: "24", tone: "primary" },
                { icon: TrendingUp, label: "Progres", value: "78%", tone: "gold" },
                { icon: CheckCircle2, label: "Disetujui", value: "16", tone: "alt" },
                { icon: Users, label: "Tim", value: "9", tone: "primary" },
              ].map((k, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="rounded-xl border border-border bg-card p-3"
                >
                  <div
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-md ${
                      k.tone === "gold"
                        ? "bg-secondary/20 text-secondary-foreground"
                        : k.tone === "alt"
                          ? "bg-alternate/15 text-alternate"
                          : "bg-primary/10 text-primary"
                    }`}
                  >
                    <k.icon className="h-4 w-4" />
                  </div>
                  <div className="mt-2 text-lg font-bold text-foreground">{k.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{k.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Chart + side */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="md:col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="h-3 w-32 rounded-full bg-foreground/15" />
                  <div className="h-2 w-16 rounded-full bg-foreground/10" />
                </div>
                <div className="flex items-end gap-2 h-32">
                  {[40, 65, 50, 80, 55, 90, 70, 95, 60, 75, 85, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.6 + i * 0.04, duration: 0.5 }}
                      className={`flex-1 rounded-t-md ${i % 3 === 2 ? "bg-secondary" : "bg-primary"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-4 space-y-3">
                <div className="h-3 w-24 rounded-full bg-foreground/15" />
                {[
                  { c: "bg-primary", w: "85%" },
                  { c: "bg-secondary", w: "65%" },
                  { c: "bg-alternate", w: "45%" },
                ].map((b, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between">
                      <div className="h-2 w-16 rounded-full bg-foreground/10" />
                      <div className="h-2 w-8 rounded-full bg-foreground/10" />
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: b.w }}
                        transition={{ delay: 0.8 + i * 0.15, duration: 0.8 }}
                        className={`h-full ${b.c}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="absolute -bottom-4 -left-4 md:-left-8 rounded-xl bg-card border border-border shadow-elegant p-3 flex items-center gap-3 animate-float"
      >
        <div className="h-9 w-9 rounded-lg gradient-gold flex items-center justify-center">
          <CheckCircle2 className="h-5 w-5 text-secondary-foreground" />
        </div>
        <div>
          <div className="text-xs text-muted-foreground">RAB Tersimpan</div>
          <div className="text-sm font-semibold text-foreground">Otomatis & Aman</div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardMockup;
