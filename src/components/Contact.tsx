import { motion } from "framer-motion";
import { Instagram, Twitter, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
    label: "@solace.wear",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "#",
    label: "@solacewear",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:hello@solace.wear",
    label: "hello@solace.wear",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground">
              Let's <span className="font-semibold">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Have a question or just want to say hello? We might be introverts,
              but we love hearing from you.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <link.icon
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-sm font-medium link-underline">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
