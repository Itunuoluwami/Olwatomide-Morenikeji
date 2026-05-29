import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Heart } from "lucide-react";
import { toast } from "sonner";

const GiftSection = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (value: string, field: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    toast.success(`${field} copied!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const details = [
    { label: "BANK NAME", value: "First Bank of Nigeria", field: "Bank Name" },
    { label: "ACCOUNT NAME", value: "Oshonuga Ibukunoluwa Sarah", field: "Account Name" },
    { label: "ACCOUNT NUMBER", value: "3196933149", field: "Account Number" },
  ];

  return (
    <section id="gifts" className="section-padding bg-background">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Gifts</h2>
          <div className="gold-line w-16 mx-auto mb-4" />
          <p className="font-script text-xl md:text-2xl text-foreground mb-2">
            Your presence is the greatest gift.
          </p>
          <p className="font-body text-sm text-muted-foreground mb-8">
            If you wish to bless us further, here are our details.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-xl p-8 md:p-10"
        >
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gold/30" />
            <Heart className="w-4 h-4 text-gold" />
            <span className="font-script text-lg text-muted-foreground">Bank Details</span>
            <Heart className="w-4 h-4 text-gold" />
            <div className="h-px flex-1 bg-gold/30" />
          </div>

          {/* Details */}
          <div className="space-y-6">
            {details.map((item) => (
              <div key={item.field} className="flex items-start justify-between">
                <div>
                  <p className="font-display text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="font-body text-base md:text-lg font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(item.value, item.field)}
                  className="mt-2 p-2 rounded-md border border-border hover:bg-accent transition-colors"
                  aria-label={`Copy ${item.field}`}
                >
                  {copiedField === item.field ? (
                    <Check className="w-4 h-4 text-gold" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftSection;
