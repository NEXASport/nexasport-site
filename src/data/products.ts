export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Aero-Tech Training T-Shirt",
    price: 45,
    description: "Ultra-breathable seamless fabric designed for high-intensity training. Moisture-wicking and stretch-fit.",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800",
    category: "Upper Wear"
  },
  {
    id: "2",
    name: "Flex-Move Running Leggings",
    price: 65,
    description: "Compression fit with zero-gravity feel. Features secure zip pocket and reflective elements for night runs.",
    image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&q=80&w=800",
    category: "Lower Wear"
  },
  {
    id: "3",
    name: "NEXA-Shield Sport Hoodie",
    price: 85,
    description: "Soft-touch thermal fleece providing warmth without the weight. Scuba hood for full coverage.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
    category: "Outerwear"
  },
  {
    id: "4",
    name: "Dri-Fit Gym Shorts",
    price: 35,
    description: "Lightweight woven fabric with side slits for maximum range of motion. Built-in liner for support.",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800",
    category: "Lower Wear"
  },
  {
    id: "5",
    name: "Storm-Ready Running Jacket",
    price: 120,
    description: "Water-repellent and windproof shell. Features adjustable cuffs and back ventilation for temperature control.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800",
    category: "Outerwear"
  },
  {
    id: "6",
    name: "Cloud-Step Training Shoes",
    price: 140,
    description: "Reactive foam cushioning with breathable knit upper. Engineered for stability and explosive power.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    category: "Footwear"
  }
];
