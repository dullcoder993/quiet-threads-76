import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  sizes: string[];
  fabric: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
  onClick: () => void;
}

const ProductCard = ({ product, index, onClick }: ProductCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden bg-secondary mb-6">
        <div className="aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
        
        {/* Quick view indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-background/95 px-6 py-3 text-sm font-medium tracking-wide">
            View Details
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium tracking-tight text-foreground group-hover:text-foreground/80 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground">{product.price}</p>
      </div>
    </motion.article>
  );
};

export default ProductCard;
