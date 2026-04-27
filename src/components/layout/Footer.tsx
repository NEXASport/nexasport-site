import { Link } from "react-router-dom";
import { Box, Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-bg text-brand-primary pt-24 pb-12 overflow-hidden relative border-t border-brand-border">
      <div className="absolute top-0 right-0 opacity-5 select-none pointer-events-none">
        <span className="text-[260px] font-display font-black uppercase italic tracking-tighter block leading-none translate-y-20 translate-x-10">NEXA</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <Box className="w-8 h-8 text-brand-accent" />
            <span className="font-display text-xl font-black tracking-tighter uppercase italic">NEXASport</span>
          </Link>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-tight leading-relaxed mb-10 max-w-xs">
            NEXASport defines the intersection of high-tier minimalism and peak performance tech. Engineered for the 1%.
          </p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 border border-brand-border flex items-center justify-center transition-all hover:bg-brand-accent hover:text-brand-bg hover:border-brand-accent">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mono-detail text-brand-accent mb-8 font-bold">CATEGORIES</h4>
          <ul className="space-y-4">
            {["UPPER_WEAR", "LOWER_WEAR", "OUTERWEAR", "FOOTWEAR"].map(item => (
              <li key={item}><Link to="/products" className="text-[10px] font-bold uppercase tracking-widest hover:text-brand-accent transition-colors text-zinc-500">{item}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mono-detail text-brand-accent mb-8 font-bold">COMPANY</h4>
          <ul className="space-y-4">
            {["ABOUT_US", "CONTACT", "CAREERS", "MISSION"].map(item => (
              <li key={item}><Link to={item === "ABOUT_US" ? "/about" : "/contact"} className="text-[10px] font-bold uppercase tracking-widest hover:text-brand-accent transition-colors text-zinc-500">{item.replace("_", " ")}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mono-detail text-brand-accent mb-8 font-bold">DISPATCHES</h4>
          <p className="text-[10px] text-zinc-500 mb-8 font-bold uppercase tracking-widest">JOIN_LABS FOR CORE_UPDATES.</p>
          <div className="flex border-b border-brand-border pb-2 focus-within:border-brand-accent transition-colors">
            <input 
              type="email" 
              placeholder="ENTER_ID" 
              className="bg-transparent py-2 flex-1 text-[10px] font-mono tracking-widest focus:outline-none"
            />
            <button className="p-2 hover:text-brand-accent transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-32 pt-10 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="mono-detail text-zinc-600 font-bold">© 2026 NEXASPORT_INTERNATIONAL. [V_1.0.4]</p>
        <div className="flex gap-10 mono-detail font-bold text-zinc-600">
          <Link to="#" className="hover:text-brand-primary transition-colors">PRIVACY_PROTOCOL</Link>
          <Link to="#" className="hover:text-brand-primary transition-colors">SERVICE_TERMS</Link>
          <span className="text-brand-accent">STATUS: ACTIVE</span>
        </div>
      </div>
    </footer>
  );
}
