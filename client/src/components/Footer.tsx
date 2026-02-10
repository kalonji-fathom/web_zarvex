import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-white">
                ZARVEX
              </span>
              <span className="text-xs font-medium tracking-widest text-primary-foreground/70">
                GLOBAL (PTY) LTD
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner in mineral processing solutions and industrial equipment supplies across Southern Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white font-display">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-primary-foreground/70 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-primary-foreground/70 hover:text-accent transition-colors">Products</Link></li>
              <li><Link href="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white font-display">Contact Us</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>6 Knights Road<br />Germiston<br />Gauteng, 1400</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@zarvex.co.za" className="hover:text-white transition-colors">info@zarvex.co.za</a>
              </li>
            </ul>
          </div>

          {/* Business Hours/Social */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white font-display">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="text-xs text-primary-foreground/50">
              <p>Mon - Fri: 08:00 - 17:00</p>
              <p>Sat - Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/40 gap-4">
          <p>&copy; {new Date().getFullYear()} Zarvex Global (Pty) Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
