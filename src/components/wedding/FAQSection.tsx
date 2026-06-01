import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need an access card to attend the reception?",
    a: "Yes, entry to the reception is strictly by access card. Access cards are limited and can only admit one. We kindly ask that you present your card at the entrance — thank you for understanding!",
  },
  {
    q: "Can I bring a plus one?",
    a: "We’re keeping things intimate, so entry is by invitation only and each access card is for one guest. Because of this, we’re not able to include plus ones — we hope you understand and can’t wait to celebrate with you!",
  },
  {
    q: "What is the dress code?",
    a: "Our wedding colors are Blush Pink, Emerald Green and Sage Green. We encourage guests to dress in these colors or complementary tones. Traditional attire is welcome!",
  },
  {
    q: "What time should guests arrive?",
    a: "Please arrive as early as possible. The traditional wedding begins at 08:00 AM, the church wedding at 11:00 AM, and the reception at 2:00 PM. We can't wait to celebrate with you!",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding romantic-gradient-bg">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">FAQ</h2>
        <div className="gold-line w-16 mx-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card rounded-xl px-6 border-none"
            >
              <AccordionTrigger className="font-display text-base md:text-lg text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
