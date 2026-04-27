import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { motion } from "motion/react";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

const categories = ["All", "Upper Wear", "Lower Wear", "Outerwear", "Footwear"];

export function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 border-b border-brand-border pb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[120px] font-display font-black uppercase italic tracking-tighter leading-[0.85] mb-10"
          >
            THE <span className="text-stroke">COLLECTION</span>
          </motion.h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded text-[9px] uppercase font-bold tracking-[0.2em] transition-all border ${
                    activeCategory === cat 
                    ? "bg-brand-accent text-brand-bg border-brand-accent" 
                    : "bg-transparent text-zinc-500 border-brand-border hover:border-zinc-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <button className="flex items-center gap-3 mono-detail text-brand-accent font-bold group">
              <SlidersHorizontal className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              SORT / FILTER
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-32 text-center">
            <p className="mono-detail text-zinc-600">ZERO_RESULTS_FOUND_FOR_CATEGORY</p>
          </div>
        )}

        {/* Newsletter Teaser */}
        <div className="mt-32 bg-brand-surface rounded-3xl p-8 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-brand-border">
           <div className="max-w-md">
              <h2 className="text-3xl md:text-5xl font-display font-black uppercase italic tracking-tighter mb-4 leading-none">NEVER MISS <br /> A DROP</h2>
              <p className="text-zinc-500 font-bold uppercase text-xs tracking-tight">Stay updated on our latest releases and exclusive artifacts.</p>
           </div>
           <div className="w-full md:w-auto flex gap-4">
              <input 
                 type="email" 
                 placeholder="INPUT_ID" 
                 className="bg-brand-bg border border-brand-border py-4 px-8 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-brand-accent flex-1 md:w-80 transition-colors"
              />
              <button className="bg-brand-accent text-brand-bg px-10 py-4 font-black uppercase tracking-widest text-[10px] hover:bg-white transition-colors">
                Transcribe
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
