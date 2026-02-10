import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useSubmitContact } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { Loader2, MapPin, Mail, Phone, Clock } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

export default function Contact() {
  const submitMutation = useSubmitContact();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertContactMessage) => {
    submitMutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <Section bg="muted" className="border-b">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-display font-bold mb-6 text-primary">Contact Us</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to discuss your requirements? Our team is standing by to provide quotes and technical advice.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-xl border-t-4 border-t-accent">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Send a Message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <Label className="text-base">Full Name</Label>
                          <FormControl>
                            <Input placeholder="John Doe" className="h-12 bg-gray-50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <Label className="text-base">Email Address</Label>
                          <FormControl>
                            <Input placeholder="john@company.com" className="h-12 bg-gray-50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <Label className="text-base">Subject</Label>
                          <FormControl>
                            <Input placeholder="Quote for Ball Mill..." className="h-12 bg-gray-50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <Label className="text-base">Message</Label>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project requirements..." 
                              className="min-h-[150px] bg-gray-50 resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90"
                      disabled={submitMutation.isPending}
                    >
                      {submitMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Visit our offices or contact us via phone or email. We aim to respond to all inquiries within 24 hours.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border hover:border-primary/20 transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">
                    6 Knights Road<br />
                    Germiston<br />
                    Gauteng, 1400<br />
                    South Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border hover:border-primary/20 transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-1">Email Us</h3>
                  <p className="text-muted-foreground mb-1">General Inquiries:</p>
                  <a href="mailto:info@zarvex.co.za" className="text-accent font-medium hover:underline">info@zarvex.co.za</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border hover:border-primary/20 transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-1">Call Us</h3>
                  <p className="text-muted-foreground mb-1">Office:</p>
                  <a href="tel:+27110000000" className="text-accent font-medium hover:underline">+27 11 000 0000</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border hover:border-primary/20 transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-1">Opening Hours</h3>
                  <div className="grid grid-cols-2 gap-x-8 text-muted-foreground text-sm">
                    <span>Monday - Friday</span>
                    <span className="text-right">08:00 - 17:00</span>
                    <span>Saturday</span>
                    <span className="text-right">Closed</span>
                    <span>Sunday</span>
                    <span className="text-right">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
