import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Factory, Hammer, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          {/* industrial mining plant wide shot */}
          <img 
            src="https://pixabay.com/get/gef6436fae311bd6e18207f2d7973b100ec1cb0a2eef6e889824fe353d9c897347f8db16f2f277df3ea59d82e6bdf516305fdd192352f4f18a7777318ebaeb357_1280.jpg" 
            alt="Mining plant background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply" />
        </div>

        <div className="container-width relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
              <span className="text-accent font-bold tracking-wider text-xs uppercase">Premium Industrial Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Engineering <span className="text-accent">Excellence</span> for Mining & Industry
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              ZARVEX GLOBAL delivers high-performance mineral processing equipment, laboratory solutions, and industrial supplies across Southern Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 h-14">
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 h-14">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Value Proposition */}
      <Section bg="muted" className="relative z-20 -mt-20 pt-32 pb-20">
        <motion.div 
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Reliability",
              desc: "Equipment built to withstand the harshest mining environments with minimal downtime.",
              icon: <CheckCircle2 className="w-8 h-8 text-accent" />
            },
            {
              title: "Quality Assurance",
              desc: "ISO-certified products sourced from world-class manufacturers ensuring peak performance.",
              icon: <CheckCircle2 className="w-8 h-8 text-accent" />
            },
            {
              title: "Technical Expertise",
              desc: "Decades of combined engineering experience to guide your equipment selection.",
              icon: <CheckCircle2 className="w-8 h-8 text-accent" />
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg border border-border/50 hover:shadow-xl hover:border-accent/20 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 rounded-lg bg-primary/5 w-fit group-hover:bg-primary/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Product Categories */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Solutions</h2>
          <p className="text-lg text-muted-foreground">Comprehensive range of specialized equipment for every stage of your operation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link href="/products" className="group">
            <div className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg">
              {/* large industrial rock crusher machine */}
              <img 
                src="https://pixabay.com/get/g2ceb9f191fc91889e749217066592b485e2f67aa3db1374e44db0b9fcc8874b1808a490f7a7c8e362686a3df56f4140fce1744b09fbb1904d262ab72bd245f1a_1280.jpg" 
                alt="Mineral Processing" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <Factory className="text-accent w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Mineral Processing</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">Crushers, mills, flotation cells, and thickeners for high-volume processing plants.</p>
                <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                  View Range <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/products" className="group">
            <div className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg">
              {/* laboratory microscope and scientific glassware */}
              <img 
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2050&auto=format&fit=crop" 
                alt="Laboratory Equipment" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <Microscope className="text-accent w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Lab & Pilot Scale</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">Precision instruments and small-scale processing units for R&D and quality control.</p>
                <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                  View Range <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/products" className="group">
            <div className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg">
              {/* industrial tools and safety gear */}
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
                alt="Industrial Supplies" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <Hammer className="text-accent w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Industrial Supplies</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">Safety gear, specialized tools, and engineering consumables for site operations.</p>
                <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                  View Range <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="dark" className="mt-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to optimize your operations?</h2>
            <p className="text-primary-foreground/80 text-lg">Contact our engineering team today for a consultation or quote.</p>
          </div>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-8 h-14 shadow-lg shadow-black/20">
              Get in Touch
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
