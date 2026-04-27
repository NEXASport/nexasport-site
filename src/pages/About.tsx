import { motion } from "motion/react";
import { Shield, Zap, Target, Award, Box } from "lucide-react";

export function About() {
  return (
    <div className="pt-20 pb-24 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="mono-detail text-brand-accent mb-6 font-bold tracking-[0.4em]">MISSION_PROTOCOL</p>
            <h1 className="text-7xl md:text-[100px] font-display font-black uppercase italic tracking-tighter mb-10 leading-[0.85]">
              SPEED & <br /> <span className="text-stroke">UTILITY</span>
            </h1>
            <p className="text-sm font-bold uppercase tracking-tight text-zinc-500 leading-relaxed mb-12 max-w-lg">
              Established 2026. NEXASport was engineered to close the gap between brutalist high-fashion and elite technical performance. We believe in unrestricted motion for those who demand the standard.
            </p>
            <div className="grid grid-cols-3 gap-8 border-t border-brand-border pt-12">
              {[
                { val: "2026", label: "EST_ID" },
                { val: "54+", label: "CORE_ARTIFACTS" },
                { val: "100%", label: "LAB_SPEC" }
              ].map(stat => (
                <div key={stat.label}>
                  <span className="block text-3xl font-display font-black tracking-tighter italic text-brand-primary">{stat.val}</span>
                  <span className="mono-detail text-zinc-600 font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="relative">
             <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-brand-border transform lg:rotate-3">
               <img 
                 src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
                 alt="Athlete"
                 className="w-full h-full object-cover grayscale mix-blend-luminosity brightness-75"
               />
             </div>
             {/* Decor */}
             <div className="absolute -top-10 -right-10 hidden lg:block opacity-10">
               <span className="text-[120px] font-display font-black text-brand-accent uppercase rotate-90 leading-none">ELITE</span>
             </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Shield, title: "ARMOR_TECH", text: "Proprietary fabrics tested in extreme environments to ensure fail-proof durability." },
            { icon: Zap, title: "KINETIC_CORE", text: "Motion-responsive design that syncs with your physiological output." },
            { icon: Target, title: "PRECISION_FIT", text: "Laser-cut seams and anatomical mapping for zero-gravity sensation." },
            { icon: Award, title: "LEGACY_EDGE", text: "Sophisticated minimalism that commands authority in every setting." }
          ].map((pillar, i) => (
            <motion.div 
               key={pillar.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-brand-surface border border-brand-border p-10 group hover:border-brand-accent transition-all"
            >
              <div className="w-12 h-12 border border-brand-border text-brand-accent flex items-center justify-center mb-8 group-hover:bg-brand-accent group-hover:text-brand-bg transition-all duration-500">
                <pillar.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black uppercase italic tracking-tighter text-xl mb-6">{pillar.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed font-bold uppercase tracking-tight">{pillar.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Founders & CEO Section */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <p className="mono-detail text-brand-accent mb-4 font-bold tracking-[0.4em]">CORE_LEADERSHIP</p>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter mb-4 whitespace-nowrap">FROM THE <span className="text-stroke text-brand-accent">FOUNDERS</span></h2>
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-tight max-w-2xl mx-auto leading-relaxed">
              NEXASport is more than a brand—it's a commitment to human potential. Our vision was to create a ecosystem where performance clothing meets architectural minimalism. We build for the athletes who refuse to settle for the standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Aryna Mykolaievska",
                role: "Co-Founder & CEO",
                image: `${import.meta.env.BASE_URL}aryna.jpg`,
                description: "Visionary strategist focused on brand evolution and technical innovation in activewear."
              },
              {
                name: "Oleksandr Khoruzhenko",
                role: "Co-Founder & CEO",
                image: `${import.meta.env.BASE_URL}oleksandr.jpg`,
                description: "Operations lead focused on strategy, performance, and building a premium sportswear brand for active lifestyles."
              },
              {
                name: "Abrar Aiash",
                role: "Co-Founder & CEO",
                image: `${import.meta.env.BASE_URL}abrar.jpg`,
                description: "Creative architectural lead defining the minimalist aesthetic and user experience of NEXASport."
              }
            ].map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-surface border border-brand-border p-8 text-center group hover:border-brand-accent transition-all duration-500"
              >
                <div className="w-[190px] h-[190px] mx-auto mb-10 relative flex items-center justify-center">
                  <div className="absolute inset-0 border border-brand-accent transform rotate-45 scale-110 opacity-20 group-hover:rotate-90 transition-transform duration-700"></div>
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="w-[190px] h-[190px] object-cover object-center rounded-full grayscale group-hover:grayscale-0 transition-all border-2 border-brand-border relative z-20 block"
                    />
                </div>
                <h3 className="font-display font-black uppercase italic tracking-tighter text-xl mb-2">{founder.name}</h3>
                <p className="mono-detail text-brand-accent font-bold mb-6">{founder.role}</p>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-tight leading-relaxed">
                  {founder.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Philosophy Full Width - Refined */}
        <div className="bg-brand-surface border border-brand-border p-10 md:p-24 rounded-[40px] relative overflow-hidden">
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <p className="mono-detail text-brand-accent mb-6 font-bold">CORE_LOGIC</p>
                 <h2 className="text-5xl md:text-8xl font-display font-black uppercase italic tracking-tighter mb-10 leading-[0.9]">
                   THE <span className="text-brand-accent">1% MARGIN</span>.
                 </h2>
                 <p className="text-zinc-500 text-lg leading-relaxed font-bold uppercase tracking-tight mb-12">
                   Discipline is the baseline. Our artifacts are the tools for those who refuse to settle. We design for the obsessive, the relentless, and the elite. Optimization is the only goal.
                 </p>
                 <div className="flex items-center gap-6">
                    <div className="flex -space-x-4">
                      <div className="w-10 h-10 border border-brand-accent bg-zinc-950 p-0.5 z-30">
                        <img src="/aryna.jpg" className="grayscale w-full h-full object-cover" alt="A" />
                      </div>
                      <div className="w-10 h-10 border border-brand-accent bg-zinc-950 p-0.5 z-20">
                        <img src="/oleksandr.jpg" className="grayscale w-full h-full object-cover" alt="O" />
                      </div>
                      <div className="w-10 h-10 border border-brand-accent bg-zinc-950 p-0.5 z-10">
                        <img src="/abrar.jpg" className="grayscale w-full h-full object-cover" alt="Ab" />
                      </div>
                    </div>
                    <div>
                       <p className="mono-detail font-bold text-brand-primary tracking-widest">BOARD_OF_FOUNDERS</p>
                       <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">NEXASPORT_HQ</p>
                    </div>
                 </div>
              </div>
              <div className="hidden lg:block">
                 <img 
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-[500px] object-cover rounded-2xl grayscale brightness-50 contrast-125 border border-brand-border"
                    alt="Gym"
                 />
              </div>
           </div>
           
           <div className="absolute top-0 right-0 p-10 opacity-5">
              <Box className="w-64 h-64 text-white" />
           </div>
        </div>
      </div>
    </div>
  );
}
