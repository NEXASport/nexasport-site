import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-brand-primary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Info Side */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-display font-black uppercase italic tracking-tighter leading-[0.85] mb-12"
            >
              ESTABLISH <br /> <span className="text-stroke text-brand-accent">CONTACT</span>
            </motion.h1>
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-tight mb-16 leading-relaxed max-w-sm">
              Inquiry dispatch required? Our elite tactical support is operational 24/7. Transmit your intelligence below.
            </p>

            <div className="space-y-12">
              {[
                { icon: Mail, label: "COMM_PROTOCOL", value: "dispatch@nexasport.com" },
                { icon: Phone, label: "SECURE_LINE", value: "+352 661 155 289" },
                { icon: MapPin, label: "GRID_COORD", value: "721 MOTION WAY, SF, CA" }
              ].map(info => (
                <div key={info.label} className="flex items-center gap-8 group">
                  <div className="w-14 h-14 bg-brand-surface border border-brand-border flex items-center justify-center group-hover:border-brand-accent group-hover:text-brand-accent transition-all">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mono-detail text-zinc-600 mb-1 font-bold">{info.label}</h4>
                    <p className="text-base font-black italic tracking-tighter uppercase">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 pt-12 border-t border-brand-border">
               <p className="mono-detail text-zinc-600 mb-8 font-bold">NETWORK_JOIN</p>
               <div className="flex gap-10">
                  {["INSTAGRAM", "TWITTER", "YOUTUBE"].map(sm => (
                    <a key={sm} href="#" className="font-display font-black text-xs uppercase italic tracking-widest hover:text-brand-accent transition-colors border-b border-transparent hover:border-brand-accent">
                      {sm}
                    </a>
                  ))}
               </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-brand-surface p-8 md:p-16 rounded-[40px] border border-brand-border shadow-2xl relative"
          >
            <div className="absolute top-5 right-10 mono-detail text-zinc-700 font-bold">FORM_ID: NX_402</div>
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="mono-detail text-zinc-500 font-bold">IDENTITY_ID</label>
                    <input 
                       type="text" 
                       placeholder="FULL_NAME"
                       className="w-full bg-brand-bg border border-brand-border rounded-xl py-4 px-6 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-brand-accent transition-all"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="mono-detail text-zinc-500 font-bold">EMAIL_LOCATOR</label>
                    <input 
                       type="email" 
                       placeholder="ARTIFACT_MAIL"
                       className="w-full bg-brand-bg border border-brand-border rounded-xl py-4 px-6 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-brand-accent transition-all"
                    />
                  </div>
               </div>

               <div className="space-y-4">
                 <label className="mono-detail text-zinc-500 font-bold">SUBJECT_PROTOCOL</label>
                 <select className="w-full bg-brand-bg border border-brand-border rounded-xl py-4 px-6 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-brand-accent appearance-none transition-all cursor-pointer">
                    <option>GENERAL_INQUIRY</option>
                    <option>ASSET_ACQUISITION</option>
                    <option>LOGISTICS_SUPPORT</option>
                    <option>SYSTEM_FEEDBACK</option>
                 </select>
               </div>

               <div className="space-y-4">
                 <label className="mono-detail text-zinc-500 font-bold">INTEL_DISPATCH</label>
                 <textarea 
                    rows={5}
                    placeholder="PROVIDE_ASSET_DETAILS"
                    className="w-full bg-brand-bg border border-brand-border rounded-xl py-4 px-6 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-brand-accent transition-all resize-none"
                 />
               </div>

               <button className="w-full bg-brand-accent text-brand-bg py-5 rounded-xl font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 hover:bg-white transition-all transform active:scale-[0.98] shadow-lg shadow-brand-accent/10">
                 TRANSMIT_PACKET
                 <Send className="w-4 h-4" />
               </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
