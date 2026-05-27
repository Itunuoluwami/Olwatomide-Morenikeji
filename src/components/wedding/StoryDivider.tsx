import { motion } from "framer-motion";

const StoryDivider = () => (
  <section className="section-padding romantic-gradient-bg">
    <div className="max-w-3xl mx-auto text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-script text-2xl md:text-4xl text-foreground leading-relaxed"
      >
        Every love story is beautiful, but ours is our favorite.
      </motion.p>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="gold-line w-24 mx-auto mt-8"
      />
    </div>
  </section>
);

export default StoryDivider;
