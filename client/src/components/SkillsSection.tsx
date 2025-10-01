import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiPhp, SiLaravel, SiMysql, SiPostgresql, SiDocker, SiGit, SiLinux, SiRedis } from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "PHP", icon: SiPhp, level: 90, category: "Языки" },
  { name: "1С-Битрикс", icon: SiPhp, level: 95, category: "Фреймворки" },
  { name: "Laravel", icon: SiLaravel, level: 85, category: "Фреймворки" },
  { name: "MySQL", icon: SiMysql, level: 85, category: "Базы данных" },
  { name: "PostgreSQL", icon: SiPostgresql, level: 80, category: "Базы данных" },
  { name: "REST API", icon: SiPhp, level: 90, category: "Интеграции" },
  { name: "Docker", icon: SiDocker, level: 75, category: "DevOps" },
  { name: "Git", icon: SiGit, level: 85, category: "Инструменты" },
  { name: "JavaScript", icon: SiPhp, level: 75, category: "Языки" },
];

export default function SkillsSection() {
  return (
    <section className="py-24 px-4" id="skills">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white" data-testid="text-skills-heading">
            Технологии и навыки
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-skills-subtitle">
            Глубокая экспертиза в современных технологиях backend-разработки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate active-elevate-2 transition-all duration-300 border-l-4"
                style={{ borderLeftColor: 'hsl(270, 70%, 60%)' }}
                data-testid={`card-skill-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" data-testid={`icon-skill-${index}`} />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white" data-testid={`text-skill-name-${index}`}>
                        {skill.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs" data-testid={`badge-skill-category-${index}`}>
                        {skill.category}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Уровень владения</span>
                        <span className="text-primary font-medium" data-testid={`text-skill-level-${index}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                          data-testid={`progress-skill-${index}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 backdrop-blur-md bg-card/50">
            <h3 className="font-display text-2xl font-bold mb-2 text-white">
              1С-Битрикс
            </h3>
            <p className="text-muted-foreground mb-4">
              Квалифицированный специалист с большим опытом в крупных проектах
            </p>
            <div className="flex gap-2 justify-center flex-wrap">
              <Badge variant="default" className="text-sm" data-testid="badge-bitrix-cert-1">
                Разработчик Битрикс
              </Badge>
              <Badge variant="default" className="text-sm" data-testid="badge-bitrix-cert-2">
                1С, ЗАО (2025)
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
