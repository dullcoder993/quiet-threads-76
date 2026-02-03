import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  sizes: string[];
  fabric: string;
  price: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleBuyClick = (platform: string) => {
    toast.info(`${platform} integration coming soon!`, {
      description: "We're working hard to bring this feature to you.",
      duration: 3000,
    });
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-border">
        <DialogTitle className="sr-only">{product.name} Details</DialogTitle>
        <div className="grid md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square md:aspect-auto bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                  {product.name}
                </h2>
                <p className="text-xl text-muted-foreground">{product.price}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Fabric Info */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                  Fabric
                </h4>
                <p className="text-foreground">{product.fabric}</p>
              </div>

              {/* Size Selection */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                  Size
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border text-sm font-medium transition-all duration-200 ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-foreground hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Buy Buttons */}
              <div className="space-y-3 pt-4">
                <button
                  onClick={() => handleBuyClick("Amazon")}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <span>Buy on Amazon</span>
                </button>
                <button
                  onClick={() => handleBuyClick("Flipkart")}
                  className="w-full btn-outline flex items-center justify-center gap-2"
                >
                  <span>Buy on Flipkart</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
