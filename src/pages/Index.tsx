import WeddingNavbar from "@/components/wedding/WeddingNavbar";
import HeroSection from "@/components/wedding/HeroSection";
import StoryDivider from "@/components/wedding/StoryDivider";
import VowsSection from "@/components/wedding/VowsSection";
import GallerySection from "@/components/wedding/GallerySection";
import TimelineSection from "@/components/wedding/TimelineSection";
import ColorThemeSection from "@/components/wedding/ColorThemeSection";
import WishesSection from "@/components/wedding/WishesSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import GiftSection from "@/components/wedding/GiftSection";
import FAQSection from "@/components/wedding/FAQSection";
import WeddingFooter from "@/components/wedding/WeddingFooter";
import FloatingAccessCardButton from "@/components/wedding/FloatingAccessCardButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WeddingNavbar />
      <HeroSection />
      <StoryDivider />
      <VowsSection />
      <GallerySection />
      <TimelineSection />
      <ColorThemeSection />
      <WishesSection />
      <RSVPSection />
      <GiftSection />
      <FAQSection />
      <WeddingFooter />
      <FloatingAccessCardButton />
    </div>
  );
};

export default Index;
