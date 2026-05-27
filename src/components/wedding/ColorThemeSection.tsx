import { motion } from "framer-motion";

const colors = [
  { name: "Blush Pink", hex: "#F7D6E0", hsl: "345 67% 91%" },
  { name: "Olive Green", hex: "#708238", hsl: "76 41% 37%" },
  { name: "Sage Green", hex: "#A8BFA0", hsl: "135 18% 68%" },
];

const ColorThemeSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Our Wedding Colors</h2>
        <div className="gold-line w-16 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 justify-items-center">
        {colors.map((color, i) => (
          <motion.div
            key={color.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            <div
              className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg border-4 border-background"
              style={{ backgroundColor: color.hex, boxShadow: `0 8px 30px ${color.hex}40` }}
            />
            <div className="text-center">
              <p className="font-display text-sm md:text-base text-foreground">{color.name}</p>
              <p className="font-body text-xs text-muted-foreground mt-1">{color.hex}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ColorThemeSection;
