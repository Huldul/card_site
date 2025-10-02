import { ArrowDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import profileImage from "@assets/photo_5327870814764248816_c (1)_1759400446929.jpg";
import ProfileCard from "@/components/effects/ProfileCard";
import RotatingText from "@/components/effects/RotatingText";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, hsl(220, 45%, 12%) 0%, hsl(225, 50%, 25%) 50%, hsl(260, 80%, 65%) 100%)',
        }}
      >
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(108, 92, 231, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(162, 155, 254, 0.25) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-20 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                style={{
                  background: 'linear-gradient(135deg, hsl(260, 80%, 65%) 0%, hsl(270, 70%, 60%) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                data-testid="text-hero-name"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Кирилл Жилин
              </motion.h1>
              <motion.div
                className="text-2xl md:text-3xl font-semibold text-white flex items-center gap-2 flex-wrap" 
                data-testid="text-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span>PHP Backend</span>
                <RotatingText
                  texts={['Разработчик', 'Developer', 'Engineer', 'Specialist']}
                  mainClassName="px-3 py-1 bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/30 rounded-lg inline-flex overflow-hidden"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.02}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </motion.div>
              <motion.p 
                className="text-lg text-muted-foreground" 
                data-testid="text-hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Квалифицированный специалист по Bitrix Framework с опытом коммерческой разработки
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card 
                className="p-6 backdrop-blur-md bg-white/10 border border-primary/30 hover-elevate transition-all"
                data-testid="card-hero-stats"
              >
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="text-stat-years">3+</div>
                  <div className="text-sm text-muted-foreground">Года опыта</div>
                </div>
                <div className="text-center border-l border-r border-primary/20">
                  <div className="text-3xl font-bold text-primary" data-testid="text-stat-level">Middle</div>
                  <div className="text-sm text-muted-foreground">PHP Developer</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="text-stat-certs">1С</div>
                  <div className="text-sm text-muted-foreground">Сертификат</div>
                </div>
              </div>
            </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ProfileCard
              name="Кирилл Жилин"
              title="PHP Backend-разработчик"
              handle="kiriunchik"
              status="Открыт для проектов"
              contactText="Связаться"
              avatarUrl={profileImage}
              miniAvatarUrl={profileImage}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="w-6 h-6 text-primary" data-testid="icon-scroll-indicator" />
        </motion.div>
      </div>
    </section>
  );
}
