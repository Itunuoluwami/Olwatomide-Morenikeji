import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import beginning1 from "@/assets/gallery-beginning-1.jpg";
import beginning2 from "@/assets/gallery-beginning-2.jpg";
import beginning3 from "@/assets/gallery-beginning-3.jpg";
import families1 from "@/assets/gallery-families-1.jpg";
import families2 from "@/assets/gallery-families-2.jpg";
import families3 from "@/assets/gallery-families-3.jpg";
import families4 from "@/assets/gallery-families-4.jpg";
import families5 from "@/assets/gallery-families-5.jpg";
import journey1 from "@/assets/gallery-journey-1.jpg";
import journey2 from "@/assets/gallery-journey-2.jpg";
import journey3 from "@/assets/gallery-journey-3.jpg";
import journey4 from "@/assets/gallery-journey-4.jpg";
import journey5 from "@/assets/gallery-journey-5.jpg";
import journey6 from "@/assets/gallery-journey-6.jpg";

type GalleryImage = { src: string; caption: string; span?: string };

const tabs: { id: string; label: string; images: GalleryImage[] }[] = [
  {
    id: "beginning",
    label: "The Beginning",
    images: [
      { src: beginning1, caption: "Where it all started" },
      { src: beginning2, caption: "A sweet embrace" },
      { src: beginning3, caption: "Roses for my love" },
    ],
  },
  {
    id: "families",
    label: "Families Meet",
    images: [
      { src: families1, caption: "The happy couple", span: "col-span-1 row-span-1" },
      { src: families2, caption: "Our families united", span: "sm:col-span-2 row-span-1" },
      { src: families3, caption: "Beautiful bride", span: "col-span-1 row-span-1" },
      { src: families4, caption: "Together forever", span: "col-span-1 row-span-1" },
      { src: families5, caption: "Family blessings", span: "col-span-1 row-span-1" },
    ],
  },
  {
    id: "journey",
    label: "The Journey",
    images: [
      { src: journey1, caption: "In uniform, in love" },
      { src: journey2, caption: "Side by side" },
      { src: journey3, caption: "Forever partners" },
      { src: journey4, caption: "Eye to eye" },
      { src: journey5, caption: "Hubby & Wifey" },
      { src: journey6, caption: "Sweet laughter" },
    ],
  },
];

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("beginning");
  const [lightbox, setLightbox] = useState<{ images: typeof tabs[0]["images"]; index: number } | null>(null);

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  const openLightbox = (idx: number) => setLightbox({ images: currentTab.images, index: idx });

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Our Gallery</h2>
          <div className="gold-line w-16 mx-auto" />
        </motion.div>

        {/* Pill tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-12 px-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-body text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] uppercase px-3 py-2 sm:px-6 sm:py-2.5 rounded-full transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? "gold-gradient text-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={
              activeTab === "families"
                ? "grid grid-cols-1 sm:grid-cols-3 gap-4"
                : "columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
            }
          >
            {currentTab.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`cursor-pointer group overflow-hidden rounded-lg ${
                  activeTab === "families" ? (img.span || "") : "break-inside-avoid"
                }`}
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-700 h-[400px]"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-cream/80 hover:text-cream"
              onClick={() => setLightbox(null)}
            >
              <X size={32} />
            </button>
            <button
              className="absolute left-4 md:left-8 text-cream/80 hover:text-cream"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((prev) =>
                  prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null
                );
              }}
            >
              <ChevronLeft size={40} />
            </button>
            <div className="w-screen h-screen flex flex-col items-center justify-center px-2 md:px-20 py-4" onClick={(e) => e.stopPropagation()}>
              <img
                src={lightbox.images[lightbox.index].src}
                alt={lightbox.images[lightbox.index].caption}
                className="flex-1 min-h-0 max-w-full w-auto h-auto mx-auto rounded-lg object-contain"
              />
              <p className="shrink-0 text-center font-script text-xl md:text-2xl text-cream/70 mt-3">
                {lightbox.images[lightbox.index].caption}
              </p>
            </div>
            <button
              className="absolute right-4 md:right-8 text-cream/80 hover:text-cream"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((prev) =>
                  prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null
                );
              }}
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
