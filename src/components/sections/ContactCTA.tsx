import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import SectionWrapper from "@/components/ui/section-wrapper";

const ContactCTA = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Mohon lengkapi semua kolom.");
      return;
    }

    setLoading(true);
    
    try {
      const subject = encodeURIComponent(`Inquiry dari ${form.name} (Sipbangdes)`);
      const body = encodeURIComponent(
        `Nama: ${form.name}\n` +
        `Email: ${form.email}\n\n` +
        `Pesan:\n${form.message}`
      );
      
      await new Promise((r) => setTimeout(r, 800));
      
      window.location.href = `mailto:sipbangdes@gmail.com?subject=${subject}&body=${body}`;
      
      toast.success("Terima kasih! Email Anda telah disiapkan.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Gagal menyiapkan email. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="kontak" className="py-24 md:py-32">
      <div className="relative overflow-hidden rounded-3xl gradient-hero text-primary-foreground px-8 py-10 md:px-14 md:py-14 md:pr-20 shadow-elevated">
        {/* Decorations */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-secondary uppercase">
              Mulai Sekarang
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Siap Mendigitalkan Perencanaan Anggaran Desa Anda?
            </h2>

            <p className="mt-5 text-primary-foreground/80 text-balance">
              Jadwalkan demo gratis bersama tim kami atau hubungi langsung untuk
              informasi lebih lanjut. Kami siap mendampingi proses adopsi di
              desa Anda.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="xl" variant="gold">
                <a
                  href="https://wa.me/6285870388515"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Hubungi Kami
                </a>
              </Button>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-3 text-primary-foreground/85">
                <Mail className="h-4 w-4 text-secondary" />
                sipbangdes@gmail.com
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/85">
                <Phone className="h-4 w-4 text-secondary" />
                +62 858-7038-8515
              </div>
            </div>
          </div>

          {/* FORM */}
          <motion.form
            id="form-demo"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl bg-card text-foreground p-6 md:p-8 shadow-elevated w-full max-w-md ml-auto"
          >
            <h3 className="text-xl font-semibold text-primary">
              Kirim Pesan
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Tim kami akan menghubungi Anda dalam 1×24 jam.
            </p>

            <div className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium">
                  Nama
                </label>
                <Input
                  id="name"
                  required
                  placeholder="Nama lengkap Anda"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="email@desa.go.id"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium">
                  Pesan
                </label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Ceritakan kebutuhan desa Anda..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  "Menyiapkan..."
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Kirim Pesan
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactCTA;