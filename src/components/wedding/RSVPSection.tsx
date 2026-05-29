import { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import floralTexture from "@/assets/floral-texture.jpg";

const ConfettiPiece = ({ delay, x }: {delay: number;x: number;}) => {
  const colors = ["hsl(43, 76%, 52%)", "hsl(345, 67%, 91%)", "hsl(135, 18%, 68%)", "hsl(36, 100%, 98%)"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return (
    <motion.div
      className="fixed pointer-events-none z-[100]"
      style={{ left: `${x}%`, top: -20, width: 8, height: 8, backgroundColor: color, borderRadius: Math.random() > 0.5 ? "50%" : "0" }}
      initial={{ y: -20, opacity: 1, rotate: 0 }}
      animate={{ y: "100vh", opacity: 0, rotate: 720 + Math.random() * 360 }}
      transition={{ duration: 2.5 + Math.random() * 1.5, delay, ease: "easeIn" }} />);


};

const RSVPSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <section id="rsvp" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={floralTexture} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Confetti */}
      {showConfetti &&
      Array.from({ length: 50 }).map((_, i) =>
      <ConfettiPiece key={i} delay={Math.random() * 0.5} x={Math.random() * 100} />
      )}

      <div className="relative z-10 max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">RSVP</h2>
          <p className="font-script text-lg text-muted-foreground">We would love to have you there</p>
          <div className="gold-line w-16 mx-auto mt-4 mb-8" />
          
          <div className="glass-card rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
            <p className="font-display text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Need help or directions? Contact us
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-5">
              <a href="tel:08110366837" className="flex items-center gap-3 px-5 py-3 rounded-full border border-gold/40 bg-gold/5 hover:bg-gold/15 transition-colors">
                <Phone className="w-4 h-4 text-gold" />
                <span className="font-body font-semibold text-sm text-foreground">Ayokunnumi</span>
                <span className="font-body text-sm text-gold">08110366837</span>
              </a>
              <a href="tel:08104549760" className="flex items-center gap-3 px-5 py-3 rounded-full border border-gold/40 bg-gold/5 hover:bg-gold/15 transition-colors">
                <Phone className="w-4 h-4 text-gold" />
                <span className="font-body font-semibold text-sm text-foreground">Adetutu</span>
                <span className="font-body text-sm text-gold">08104549760</span>
              </a>
              <a href="tel:09164694420" className="flex items-center gap-3 px-5 py-3 rounded-full border border-gold/40 bg-gold/5 hover:bg-gold/15 transition-colors">
                <Phone className="w-4 h-4 text-gold" />
                <span className="font-body font-semibold text-sm text-foreground">Korede</span>
                <span className="font-body text-sm text-gold">08164694420
                </span>
              </a>
            </div>
            <p className="flex items-center justify-center gap-2 font-body text-xs text-muted-foreground">
              <Phone className="w-3 h-3 text-gold" />
              Tap any contact to call directly
            </p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}>
          
          {!submitted ?
          <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 md:p-10 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" required className="bg-background/50 border-border" />
                <Input placeholder="Last Name" required className="bg-background/50 border-border" />
              </div>
              <Input type="email" placeholder="Email Address" required className="bg-background/50 border-border" />
              <Input type="tel" placeholder="Phone Number" className="bg-background/50 border-border" />
              <Select>
                <SelectTrigger className="bg-background/50 border-border">
                  <SelectValue placeholder="Event attending" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="traditional">Traditional Wedding</SelectItem>
                  <SelectItem value="church">Church Wedding</SelectItem>
                  <SelectItem value="reception">Reception</SelectItem>
                  <SelectItem value="all">All Events</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-background/50 border-border">
                  <SelectValue placeholder="Who are you coming for?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bride">Bride (Ibukunoluwa)</SelectItem>
                  <SelectItem value="groom">Groom (Oluwatomide)</SelectItem>
                  <SelectItem value="both">Both</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" variant="gold" size="lg" className="w-full">
                Confirm Attendance
              </Button>
            </form> :

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card rounded-xl p-10 text-center">
            
              <span className="text-5xl mb-4 block">🎉</span>
              <h3 className="font-display text-2xl text-foreground mb-2">Thank You!</h3>
              <p className="font-body text-sm text-muted-foreground">
                We're so excited to celebrate with you. See you on July 11, 2026!
              </p>
            </motion.div>
          }
        </motion.div>

      </div>
    </section>);

};

export default RSVPSection;