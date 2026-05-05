import { Mail, MessageCircle, MapPin } from "lucide-react";
import Logo from "@/components/ui/logo";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              Sistem Perencanaan Anggaran Pembangunan Desa.
              Solusi digital terintegrasi untuk pemerintah desa dalam menyusun RAB,
              mengelola data, dan memonitor proyek pembangunan.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary">Navigasi</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                ["Beranda", "#beranda"],
                ["Fitur", "#fitur"],
                ["Solusi", "#solusi"],
                ["Cara Kerja", "#cara-kerja"],
                ["Kontak", "#kontak"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-primary transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary">Kontak</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" /> sipbangdes@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-secondary" /> +62 858-7038-8515
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-secondary mt-0.5" /> Purwokerto, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} Sipbangdes. Hak cipta dilindungi undang-undang.</p>
          <p>Dibangun untuk transparansi dan akuntabilitas desa.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
