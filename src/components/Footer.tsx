import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <div className="text-xl font-semibold tracking-tight text-foreground">
            SOLACE
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground text-center">
            Comfort for the quiet ones.
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © PRK. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
