import { motion } from "framer-motion";
import { Leaf, Church, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const events = [
  {
    icon: Leaf,
    emoji: "🌿",
    title: "Traditional Wedding / Engagement",
    date: "July 11, 2026",
    time: "8:00 AM",
    venue: "Eniola Rentals Hall",
    address: "Plot 1, Abuja Zone, Ijaiye Housing Estate, Pen Cinema, Agege, Lagos",
  },
  {
    icon: Church,
    emoji: "⛪",
    title: "Church Wedding",
    date: "July 11, 2026",
    time: "11:00 AM",
    venue: "The New Covenant Baptist Church",
    address: "No 1, Garden Close, Low Cost Housing Estate, Pencinema, Agege, Lagos State",
  },
  {
    icon: Wine,
    emoji: "🥂",
    title: "Wedding Reception",
    date: "July 11, 2026",
    time: "2:00 PM",
    venue: "Eniola Rentals Hall",
    address: "Plot 1, Abuja Zone, Ijaiye Housing Estate, Pen Cinema, Agege, Lagos",
    hasAccessCard: true,
  },
];

const TimelineSection = () => {
  const [accessCardOpen, setAccessCardOpen] = useState(false);

  return (
    <section id="schedule" className="section-padding romantic-gradient-bg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Wedding Schedule</h2>
          <div className="gold-line w-16 mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px gold-gradient opacity-40" />

          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full gold-gradient -translate-x-1.5 mt-6 md:mt-0 shadow-md z-10" />

              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                <div className="glass-card rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-500 group">
                  <span className="text-3xl mb-3 block">{event.emoji}</span>
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">{event.title}</h3>
                  <p className="font-body text-sm text-gold font-medium mb-1">{event.date}</p>
                  <p className="font-body text-sm text-muted-foreground mb-3">{event.time}</p>
                  <p className="font-body text-sm font-medium text-foreground">{event.venue}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{event.address}</p>
                  {event.hasAccessCard && (
                    <Button
                      variant="gold-outline"
                      size="sm"
                      className="mt-4"
                      onClick={() => setAccessCardOpen(true)}
                    >
                      Get Access Card
                    </Button>
                  )}
                </div>
              </div>

              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={accessCardOpen} onOpenChange={setAccessCardOpen}>
        <DialogContent className="glass-card border-gold/20 max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-center">Access Card</DialogTitle>
            <DialogDescription className="font-body text-center text-base text-muted-foreground pt-2">
              You'll get your access card on the day of the event.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-2">
            <Button variant="gold-outline" onClick={() => setAccessCardOpen(false)}>
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TimelineSection;
