import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LiquidEther from "@/components/effects/LiquidEther";

export default function Home() {
  return (
    <div className="min-h-screen">
      <LiquidEther 
        colors={['#6c5ce7', '#a29bfe', '#5227FF']}
        mouseForce={15}
        cursorSize={80}
      />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
