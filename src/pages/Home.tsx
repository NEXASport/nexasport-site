import { motion } from "motion/react";
import { ArrowRight, Box, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-brand-bg">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2000" 
            alt="Athlete Training"
            className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-linear-to-b from-brand-bg/20 via-brand-bg/60 to-brand-bg" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-brand-primary">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="mono-detail text-brand-accent mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-brand-accent" />
              NEW COLLECTION DROP
            </h2>
            <h1 className="text-7xl md:text-9xl font-display font-black uppercase italic leading-[0.85] tracking-tighter mb-8">
              EXCEED <br />
              THE <br />
              <span className="text-stroke">STANDARD</span>
            </h1>
            <p className="max-w-md text-sm text-zinc-500 mb-10 font-bold leading-relaxed uppercase tracking-tight">
              Engineered for the elite. Combining brutalist aesthetics with peak performance technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/products"
                className="bg-brand-accent text-brand-bg px-10 py-4 font-black uppercase tracking-widest text-xs flex items-center gap-3 transition-all hover:bg-white active:scale-95"
              >
                Shop Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/about"
                className="technical-border bg-brand-bg/40 backdrop-blur-sm px-10 py-4 font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-brand-surface transition-all"
              >
                View Artifacts
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Side Rail Text */}
        <div className="absolute right-10 bottom-20 hidden lg:block rotate-90 origin-right">
          <span className="text-brand-accent/10 font-display font-black text-8xl uppercase tracking-tighter italic select-none">NXS_CORE</span>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-brand-border pb-8">
            <div>
              <p className="mono-detail text-zinc-600 mb-2 font-bold">SERIAL_DROP_001</p>
              <h3 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter">Season Elite</h3>
            </div>
            <Link to="/products" className="group flex items-center gap-3 mono-detail text-brand-accent hover:text-white transition-colors pb-2">
              BROWSE_CATALOG
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Message Section */}
      <section className="py-24 bg-brand-surface text-brand-primary overflow-hidden relative border-y border-brand-border">
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <Box className="w-12 h-12 mx-auto mb-10 text-brand-accent opacity-50" />
            <h2 className="text-4xl md:text-7xl font-display font-black uppercase italic leading-[0.9] mb-10 tracking-tighter">
              "WE DON'T <br />FOLLOW TRENDS. <br />WE CREATE <br /> <span className="text-stroke italic">STANDARDS</span>."
            </h2>
            <p className="text-zinc-500 text-sm md:text-base font-bold uppercase tracking-tight leading-relaxed mb-12 max-w-2xl mx-auto">
              NEXASport is a performance laboratory. We bridge the gap between high-fashion aesthetics and technical utility. Unrestricted motion for the modern athlete.
            </p>
            <div className="flex justify-center flex-wrap gap-12 mono-detail text-zinc-600 font-bold">
               <div className="flex items-center gap-2"><span className="w-2 h-2 bg-brand-accent rounded-full" />ELITE_FABRICS</div>
               <div className="flex items-center gap-2"><span className="w-2 h-2 bg-brand-accent rounded-full" />LAB_TESTED</div>
               <div className="flex items-center gap-2"><span className="w-2 h-2 bg-brand-accent rounded-full" />Z_GRAVITY</div>
            </div>
         </div>
         {/* Background Decor */}
         <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-5 select-none pointer-events-none">
            <span className="text-[300px] font-display font-black uppercase italic text-stroke">NEXA</span>
         </div>
      </section>

      {/* CTA Footer Wrapper */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <img 
               src="https://images.unsplash.com/photo-1548690312-e3b507d17a47?auto=format&fit=crop&q=80&w=1000" 
               className="w-full h-full object-cover grayscale"
               alt="Marathon Runner"
            />
            <div className="absolute inset-0 bg-brand-accent/20 mix-blend-overlay" />
          </div>
          <div>
            <h2 className="text-5xl font-display font-black uppercase italic tracking-tighter mb-6 leading-none">
              READY FOR <br /> YOUR NEXT <br /> CHALLENGE?
            </h2>
            <p className="text-gray-500 mb-10 text-lg leading-relaxed">
              Don't wait for motivation. Cultivate discipline. Gear up with the tools used by winners. Our new summer drop is here.
            </p>
            <Link 
              to="/products"
              className="inline-flex bg-brand-primary text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm items-center gap-3 transition-all hover:bg-brand-accent hover:translate-x-2 shadow-lg hover:shadow-brand-accent/20"
            >
              Get The Gear
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
