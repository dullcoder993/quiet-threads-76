import { motion } from "framer-motion";

const founders = [
  {
    name: "Akash Sharma",
    role: "Founder",
    bio: "An introvert who spent years searching for the perfect hoodie that didn't scream for attention. When he couldn't find it, he decided to create it.",
  },
  {
    name: "Priya Menon",
    role: "Co-Founder",
    bio: "A textile enthusiast who believes that what you wear should feel like a gentle hug, not a costume. She brings the fabric expertise to our quiet revolution.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-background" />
        <div className="bg-primary hidden lg:block" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* Left Content - Light */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="section-padding bg-background lg:bg-transparent"
          >
            <div className="max-w-lg">
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-8">
                Born from <span className="font-semibold">Silence</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Solace started as a conversation between two introverts who were
                  tired of fashion that demanded attention. We wanted clothes that
                  let us disappear when we needed to, and feel powerful in our
                  quietness.
                </p>
                <p>
                  Every hoodie we create is designed with one question in mind: does
                  this respect the wearer's need for comfort and calm? If not, it
                  doesn't make the cut.
                </p>
                <p>
                  We're not building a fashion empire. We're creating a uniform for
                  the ones who find strength in solitude.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Dark */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-padding bg-primary"
          >
            <div className="max-w-lg lg:ml-auto">
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary-foreground/60 mb-8">
                The Minds Behind Solace
              </p>

              <div className="space-y-12">
                {founders.map((founder, index) => (
                  <motion.div
                    key={founder.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                    className="space-y-3"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-primary-foreground">
                        {founder.name}
                      </h3>
                      <p className="text-sm text-primary-foreground/60 tracking-wide">
                        {founder.role}
                      </p>
                    </div>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      {founder.bio}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
