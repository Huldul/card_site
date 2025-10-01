import { ArrowDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import profileImage from "@assets/photo_5264993902300102698_y_1759353387671.jpg";

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
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                style={{
                  background: 'linear-gradient(135deg, hsl(260, 80%, 65%) 0%, hsl(270, 70%, 60%) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                data-testid="text-hero-name"
              >
                Кирилл Жилин
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white" data-testid="text-hero-title">
                PHP Backend Разработчик
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-hero-subtitle">
                Квалифицированный специалист по Bitrix Framework с опытом коммерческой разработки
              </p>
            </div>

            <Card 
              className="p-6 backdrop-blur-md bg-white/10 border border-primary/30"
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
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative">
              <div 
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/40 rounded-2xl blur-2xl"
                aria-hidden="true"
              />
              <img
                src={profileImage}
                alt="Кирилл Жилин"
                className="relative rounded-2xl w-full max-w-md shadow-2xl"
                data-testid="img-hero-profile"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" data-testid="icon-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
