import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const marqueeText = "Ibukunoluwa ❤️ Oluwatomide — #Motirenikejiminiakokotemi'26 — ";

const WeddingFooter = () => (
  <footer className="footer-gradient overflow-hidden">
    {/* Marquee */}
    <div className="py-6 border-b border-cream/10 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="font-script text-xl md:text-2xl text-cream/40 mx-4">
            {marqueeText}
          </span>
        ))}
      </div>
    </div>

    {/* Footer content */}
    <div className="py-12 text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Heart className="mx-auto text-gold/60 mb-4" size={24} />
        <p className="font-script text-lg md:text-xl text-cream/70 mb-2">
          With love, we can't wait to celebrate with you.
        </p>
        <p className="font-body text-xs text-cream/40 tracking-[0.2em] uppercase mt-6">
          July 11, 2026 • Lagos, Nigeria
        </p>
      </motion.div>
    </div>
  </footer>
);

export default WeddingFooter;
