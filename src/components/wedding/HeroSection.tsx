import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const FloralParticle = ({ delay, x, size }: { delay: number; x: number; size: number }) => (
  <motion.div
    className="absolute text-gold/30 pointer-events-none select-none"
    style={{ left: `${x}%`, fontSize: size }}
    initial={{ y: -20, opacity: 0, rotate: 0 }}
    animate={{
      y: ["0%", "100vh"],
      opacity: [0, 0.6, 0.6, 0],
      rotate: [0, 360],
    }}
    transition={{
      duration: 12 + Math.random() * 8,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    ✿
  </motion.div>
);

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="font-display text-3xl md:text-5xl text-cream">{value}</span>
    <span className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-cream/70 mt-1">
      {label}
    </span>
  </div>
);

const HeroSection = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-07-11T10:00:00").getTime();
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setCountdown({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollToRsvp = () => document.querySelector("#rsvp")?.scrollIntoView({ behavior: "smooth" });
  const scrollToGifts = () => document.querySelector("#gifts")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Ibukunoluwa and Oluwatomide engagement"
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <FloralParticle key={i} delay={i * 1.5} x={10 + Math.random() * 80} size={14 + Math.random() * 12} />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-body text-xs md:text-sm tracking-[0.4em] uppercase text-cream/80 mb-4"
        >
          Come celebrate with us
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-script text-lg md:text-2xl text-cream/70 mb-6"
        >
          the start of a beautiful new chapter
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="font-display text-2xl sm:text-4xl md:text-7xl lg:text-8xl text-cream font-light tracking-wide leading-tight"
        >
          Ibukunoluwa
          <span className="font-script text-xl sm:text-3xl md:text-5xl lg:text-6xl mx-1 sm:mx-3 md:mx-6 text-gold-light">&</span>
          Oluwatomide
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-body text-sm md:text-lg font-bold tracking-[0.3em] text-gold-light mt-6 drop-shadow-lg"
        >
          #Motirenikejiminiakokotemi'26
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex gap-6 md:gap-10 mt-8"
        >
          <CountdownUnit value={countdown.days} label="Days" />
          <span className="font-display text-3xl md:text-5xl text-cream/40 self-start">:</span>
          <CountdownUnit value={countdown.hours} label="Hours" />
          <span className="font-display text-3xl md:text-5xl text-cream/40 self-start">:</span>
          <CountdownUnit value={countdown.minutes} label="Minutes" />
          <span className="font-display text-3xl md:text-5xl text-cream/40 self-start hidden md:block">:</span>
          <div className="hidden md:block">
            <CountdownUnit value={countdown.seconds} label="Seconds" />
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex gap-4 mt-10"
        >
          <Button variant="hero" size="lg" onClick={scrollToRsvp}>
            RSVP
          </Button>
          <Button variant="hero-outline" size="lg" onClick={scrollToGifts}>
            Send Gift
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-cream/50">Scroll</span>
        <ChevronDown className="text-cream/50 animate-scroll-bounce" size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
