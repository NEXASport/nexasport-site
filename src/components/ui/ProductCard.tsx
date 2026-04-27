import { Product } from "@/data/products";
import { motion } from "motion/react";
import { ShoppingCart, Plus } from "lucide-react";
import React from "react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-brand-bg border border-brand-border p-4 transition-all hover:border-brand-accent/50"
    >
      <div className="aspect-[4/5] overflow-hidden bg-brand-surface relative rounded-lg border border-brand-border">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-brand-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
          <button className="w-full bg-brand-accent text-brand-bg py-3 px-4 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <Plus className="w-4 h-4" />
            Add to Cart
          </button>
        </div>

        <div className="absolute top-4 left-4">
          <span className="bg-brand-bg/80 backdrop-blur-sm px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest text-brand-accent border border-brand-accent/20">
            {product.category}
          </span>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-start gap-4">
        <div>
          <h3 className="font-display font-black text-xs uppercase italic tracking-widest leading-tight text-brand-primary group-hover:text-brand-accent transition-colors">
            {product.name}
          </h3>
          <p className="text-zinc-500 text-[10px] mt-2 font-medium max-w-[200px] line-clamp-1 uppercase tracking-tighter">
            {product.description}
          </p>
        </div>
        <p className="font-mono font-bold text-xs text-brand-accent">
          ${product.price}.00
        </p>
      </div>
    </motion.div>
  );
}
