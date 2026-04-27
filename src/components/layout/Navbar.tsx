import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Box } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "premium-blur py-3 border-b border-brand-border shadow-2xl" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Box className="w-8 h-8 text-brand-accent" />
          <span className="font-display text-xl font-black tracking-tighter uppercase italic text-brand-primary">NEXASport</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-brand-accent ${
                location.pathname === link.path ? "text-brand-accent" : "text-brand-primary/60"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-3 py-1 hover:bg-brand-surface border border-transparent hover:border-brand-border transition-all">
            <span className="mono-detail">CART</span>
            <span className="mono-detail bg-brand-accent text-brand-bg px-1.5 py-0.5 font-bold">0</span>
          </button>
          
          <button 
            className="md:hidden p-2 hover:bg-brand-surface border border-brand-border"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-5 h-5 text-brand-primary" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-bg flex flex-col p-8 md:hidden border-l border-brand-border"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display text-xl font-black tracking-tighter uppercase italic text-brand-primary">NEXASport</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-brand-surface border border-brand-border transition-colors"
              >
                <X className="w-6 h-6 text-brand-primary" />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-5xl font-black uppercase italic tracking-tighter ${
                    location.pathname === link.path ? "text-brand-accent" : "text-brand-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-brand-border">
              <p className="mono-detail text-zinc-500 mb-6">Join the lifestyle</p>
              <div className="flex gap-4">
                {["IG", "TW", "FB"].map(p => (
                  <div key={p} className="w-10 h-10 border border-brand-border flex items-center justify-center font-mono text-xs hover:border-brand-accent hover:text-brand-accent transition-colors cursor-pointer">{p}</div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
