import { Section } from "@/components/Section";
import { Check } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <Section bg="muted" className="border-b">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-display font-bold mb-6 text-primary">About ZARVEX GLOBAL</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Founded with a vision to streamline the supply chain for African mining operations, 
            ZARVEX GLOBAL has established itself as a premier supplier of industrial and processing technology.
          </p>
        </div>
      </Section>

      {/* Main Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Who We Are</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-4">
                Based in Germiston, the industrial heart of Gauteng, we are strategically positioned to serve 
                clients across South Africa and the SADC region. Our team consists of metallurgists, 
                engineers, and procurement specialists dedicated to finding the right solution for your specific application.
              </p>
              <p>
                We understand that downtime is costly. That's why we focus not just on product sales, 
                but on reliability, quick turnaround times, and robust after-sales support.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            {/* team of engineers looking at blueprints construction site */}
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
              alt="Engineering Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
        </div>
      </Section>

      {/* Target Market */}
      <Section bg="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Who We Serve</h2>
            <div className="space-y-4">
              {[
                { title: "Mining Operators", desc: "Large scale mines requiring reliable processing trains." },
                { title: "EPCM Contractors", desc: "Project houses building new plants or upgrading existing ones." },
                { title: "Metallurgical Laboratories", desc: "Commercial and mine-site labs needing precision equipment." },
                { title: "Junior Miners", desc: "Cost-effective solutions for startups and small operations." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-lg border border-border/50 shadow-sm">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Service Regions</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border/50">
              <p className="mb-6 text-muted-foreground">
                While based in Gauteng, our logistics network covers key mining provinces and extends across borders.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {["Gauteng", "North West", "Limpopo", "Mpumalanga", "Free State", "Northern Cape", "SADC Region"].map((region, i) => (
                  <li key={i} className="flex items-center gap-2 font-medium text-primary">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {region}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
