import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export default function Products() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-20">
      <Section bg="muted" className="border-b">
        <div className="max-w-4xl">
          <Badge className="mb-4 bg-primary text-white">Our Catalog</Badge>
          <h1 className="text-5xl font-display font-bold mb-6 text-primary">Products & Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We supply high-grade machinery and consumables tailored for the mining and mineral processing sectors. 
            All our equipment is backed by comprehensive warranty and technical support.
          </p>
        </div>
      </Section>

      <Section>
        <Tabs defaultValue="processing" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted p-1 h-auto flex flex-wrap justify-center gap-2">
              <TabsTrigger 
                value="processing" 
                className="px-6 py-3 text-base data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
              >
                Mineral Processing
              </TabsTrigger>
              <TabsTrigger 
                value="lab" 
                className="px-6 py-3 text-base data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
              >
                Laboratory / Pilot
              </TabsTrigger>
              <TabsTrigger 
                value="industrial" 
                className="px-6 py-3 text-base data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
              >
                Industrial Supplies
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="processing">
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                { name: "Jaw Crushers", desc: "Heavy-duty primary crushers for hard rock applications." },
                { name: "Ball Mills", desc: "Efficient grinding solutions for fine powder generation." },
                { name: "Flotation Cells", desc: "For separation of valuable minerals from gangue." },
                { name: "Vibrating Screens", desc: "High-capacity sizing and dewatering screens." },
                { name: "Magnetic Separators", desc: "Removal of ferrous contaminants." },
                { name: "Thickeners", desc: "Sedimentation and water recovery systems." }
              ].map((prod, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">{prod.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{prod.desc}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="lab">
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                { name: "Lab Jaw Crushers", desc: "Small scale crushing for sample preparation." },
                { name: "Pulverizers", desc: "Disk mills for fine grinding of assay samples." },
                { name: "Sieve Shakers", desc: "Particle size analysis equipment." },
                { name: "Sample Splitters", desc: "Riffle splitters for representative sampling." },
                { name: "Pilot Flotation Banks", desc: "Scale-up testing units." }
              ].map((prod, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">{prod.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{prod.desc}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="industrial">
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                { name: "PPE & Safety Gear", desc: "Helmets, boots, high-vis wear, and respiratory protection." },
                { name: "Conveyor Belts", desc: "Replacement belts and rollers." },
                { name: "Pumps & Valves", desc: "Slurry pumps and industrial valves." },
                { name: "Chemical Reagents", desc: "Mining chemicals and processing aids." },
                { name: "Tools & Hardware", desc: "General engineering tools and workshop supplies." }
              ].map((prod, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">{prod.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{prod.desc}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </Section>
    </div>
  );
}
