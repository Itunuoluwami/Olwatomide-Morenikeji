import { useState } from "react";
import { motion } from "framer-motion";
import { Ticket, Download, FileImage } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import accessCardImage from "@/assets/access-card.png";
import { jsPDF } from "jspdf";
import { toast } from "sonner";

const FloatingAccessCardButton = () => {
  const [accessCardOpen, setAccessCardOpen] = useState(false);

  const handleDownloadPNG = () => {
    const link = document.createElement("a");
    link.href = accessCardImage;
    link.download = "Wedding-Access-Card.png";
    link.click();
    toast.success("Access card downloaded as PNG!");
  };

  const handleDownloadPDF = async () => {
    try {
      const img = new Image();
      img.src = accessCardImage;
      await new Promise((resolve) => { img.onload = resolve; });
      const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [img.width, img.height] });
      pdf.addImage(accessCardImage, "PNG", 0, 0, img.width, img.height);
      pdf.save("Wedding-Access-Card.pdf");
      toast.success("Access card downloaded as PDF!");
    } catch {
      toast.error("Failed to generate PDF");
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setAccessCardOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full gold-gradient text-white font-body font-semibold text-sm shadow-[0_4px_20px_rgba(191,155,48,0.4)] hover:shadow-[0_6px_30px_rgba(191,155,48,0.6)] transition-shadow cursor-pointer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
        >
          <Ticket className="w-5 h-5" />
        </motion.div>
        <span>See Invitation Card</span>
        <motion.span
          className="absolute inset-0 rounded-full gold-gradient opacity-30"
          animate={{ scale: [1, 1.3], opacity: [0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.button>

      <Dialog open={accessCardOpen} onOpenChange={setAccessCardOpen}>
        <DialogContent className="glass-card border-gold/20 w-[calc(100vw-2rem)] max-w-[calc(100vw-2rem)] sm:w-full sm:max-w-lg mx-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-center">Wedding Invitation Card</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 py-4">
            <img
              src={accessCardImage}
              alt="Wedding Invitation Card"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="flex gap-3 w-full">
              <Button
                variant="gold-outline"
                className="flex-1 gap-2"
                onClick={handleDownloadPNG}
              >
                <FileImage className="w-4 h-4" />
                Download PNG
              </Button>
              <Button
                variant="gold-outline"
                className="flex-1 gap-2"
                onClick={handleDownloadPDF}
              >
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingAccessCardButton;
