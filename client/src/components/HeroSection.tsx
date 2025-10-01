import { ArrowDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import GradualBlur from "./effects/GradualBlur";
import profileImage from "@assets/123145151 — копия_1759353924508.jpg";

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

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
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
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold text-white" 
                data-testid="text-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                PHP Backend Разработчик
              </motion.h2>
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
                  <div className="text-3xl font-bold text-primary" data-testid="text-stat-years">2+</div>
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
            <div className="relative group">
              <motion.div 
                className="absolute -inset-8 bg-gradient-to-br from-primary/40 via-primary/30 to-purple-500/40 rounded-3xl blur-3xl opacity-75 group-hover:opacity-100"
                aria-hidden="true"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <div className="relative">
                <motion.img
                  src={profileImage}
                  alt="Кирилл Жилин"
                  className="relative rounded-3xl w-full max-w-md shadow-2xl transition-all duration-500 group-hover:shadow-primary/50"
                  data-testid="img-hero-profile"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(108, 92, 231, 0.25)',
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                <GradualBlur 
                  position="bottom" 
                  strength={4} 
                  divCount={6}
                />
                
                <div 
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(108, 92, 231, 0.1) 100%)',
                  }}
                />
              </div>
            </div>
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
