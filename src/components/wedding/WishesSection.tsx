import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialWishes = [
  { name: "Adebayo Oladele", message: "May your union be filled with endless love, joy, and God's abundant blessings. Congratulations!", date: "March 2026", avatar: "AO" },
  { name: "Funke Adeyemi", message: "Two beautiful souls becoming one! Wishing you a lifetime of happiness and togetherness. ❤️", date: "March 2026", avatar: "FA" },
  { name: "Chidi Nwosu", message: "God has truly written a beautiful love story for you both. May your marriage be a testimony!", date: "February 2026", avatar: "CN" },
  { name: "Blessing Eze", message: "So happy for you both! Your love inspires everyone around you. Here's to forever! 🥂", date: "February 2026", avatar: "BE" },
  { name: "Tunde Bakare", message: "What God has joined together, let no man put asunder. Congratulations to the beautiful couple!", date: "January 2026", avatar: "TB" },
];

const getMonthYear = () => {
  const d = new Date();
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return `${months[d.getMonth()]} ${d.getFullYear()}`;
};

const getAvatar = (name: string) => {
  const parts = name.trim().split(/\s+/);
  return parts.length >= 2
    ? (parts[0][0] + parts[1][0]).toUpperCase()
    : name.slice(0, 2).toUpperCase();
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") return window.innerWidth < 768;
    return false;
  });
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

const WishesSection = () => {
  const [wishes, setWishes] = useState(initialWishes);
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const isMobile = useIsMobile();
  const visible = isMobile ? 1 : 3;
  const maxStart = Math.max(0, wishes.length - visible);

  const handleSubmit = () => {
    if (!newName.trim() || !newMessage.trim()) return;
    const newWish = {
      name: newName.trim(),
      message: newMessage.trim(),
      date: getMonthYear(),
      avatar: getAvatar(newName),
    };
    setWishes((prev) => [newWish, ...prev]);
    setCurrent(0);
    setNewName("");
    setNewMessage("");
    setModalOpen(false);
  };

  return (
    <section className="section-padding romantic-gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Well Wishes</h2>
          <div className="gold-line w-16 mx-auto" />
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex gap-4 md:gap-6 overflow-hidden">
            {wishes.slice(current, current + visible).map((wish, i) => (
              <motion.div
                key={wish.name + wish.date + i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="w-full md:flex-1 md:min-w-0 flex-shrink-0"
              >
                <div className="glass-card rounded-xl p-6 md:p-8 h-full">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center font-body text-sm font-semibold text-foreground mb-4">
                    {wish.avatar}
                  </div>
                  <p className="font-display text-lg text-foreground mb-2">{wish.name}</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {wish.message}
                  </p>
                  <p className="font-body text-xs text-muted-foreground/60">{wish.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nav arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-gold transition-colors disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setCurrent(Math.min(maxStart, current + 1))}
              disabled={current >= maxStart}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-gold transition-colors disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button variant="gold" size="lg" onClick={() => setModalOpen(true)}>
            Leave a Wish
          </Button>
        </div>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="glass-card border-gold/20">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-center">Leave a Wish</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Input
              placeholder="Your Name"
              className="bg-background/50 border-border"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <Textarea
              placeholder="Write your message..."
              className="bg-background/50 border-border min-h-[120px]"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button variant="gold" className="w-full" onClick={handleSubmit}>
              Send Wish
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WishesSection;
