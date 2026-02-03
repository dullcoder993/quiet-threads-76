import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

import hoodieBlack from "@/assets/hoodie-black.jpg";
import hoodieWhite from "@/assets/hoodie-white.jpg";
import hoodieCharcoal from "@/assets/hoodie-charcoal.jpg";

const products = [
  {
    id: 1,
    name: "The Midnight",
    description:
      "Our signature black hoodie. Crafted for those who find comfort in the shadows. Oversized fit with a deep hood for maximum privacy. Perfect for late-night walks and quiet contemplation.",
    image: hoodieBlack,
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "100% Premium Cotton Terry • 400 GSM • Pre-shrunk",
    price: "₹2,499",
  },
  {
    id: 2,
    name: "The Canvas",
    description:
      "A blank slate for the minimalist soul. Pure white, pure comfort. The subtle texture speaks volumes in its silence. For days when you want to blend into the light.",
    image: hoodieWhite,
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "100% Organic Cotton • 380 GSM • Enzyme Washed",
    price: "₹2,499",
  },
  {
    id: 3,
    name: "The Dusk",
    description:
      "Between day and night, there's a moment of perfect calm. This charcoal grey captures that essence. Neither here nor there—just comfortably in between.",
    image: hoodieCharcoal,
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "Cotton-Modal Blend • 420 GSM • Brushed Interior",
    price: "₹2,799",
  },
];

const Collection = () => {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: (typeof products)[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="collection" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Collection
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground">
            Essential <span className="font-semibold">Comfort</span>
          </h2>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Collection;
