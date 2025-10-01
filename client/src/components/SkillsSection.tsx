import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SiPhp, SiLaravel, SiMysql, SiPostgresql, SiDocker, SiGit, SiJavascript } from "react-icons/si";
import { Network, Database, Code } from "lucide-react";
import OneCIcon from "@/components/icons/OneCIcon";
import SpotlightCard from "@/components/effects/SpotlightCard";
import GlassIcons from "@/components/effects/GlassIcons";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  description: string;
}

const skills: Skill[] = [
  { name: "PHP", icon: SiPhp, category: "Языки", description: "Глубокие знания PHP 7.4+, ООП, паттерны проектирования" },
  { name: "1С-Битрикс", icon: OneCIcon, category: "Фреймворки", description: "Сертифицированный разработчик, опыт в крупных проектах" },
  { name: "Laravel", icon: SiLaravel, category: "Фреймворки", description: "Современный фреймворк для быстрой разработки" },
  { name: "MySQL", icon: SiMysql, category: "Базы данных", description: "Оптимизация запросов, проектирование структуры БД" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Базы данных", description: "Продвинутые возможности реляционных СУБД" },
  { name: "REST API", icon: Network, category: "Интеграции", description: "Проектирование и разработка RESTful API" },
  { name: "Docker", icon: SiDocker, category: "DevOps", description: "Контейнеризация приложений, Docker Compose" },
  { name: "Git", icon: SiGit, category: "Инструменты", description: "Контроль версий, GitFlow, совместная разработка" },
  { name: "JavaScript", icon: SiJavascript, category: "Языки", description: "ES6+, современный JavaScript для фронтенда" },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 relative z-10" id="skills" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white" data-testid="text-skills-heading">
            Технологии и навыки
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-skills-subtitle">
            Глубокая экспертиза в современных технологиях backend-разработки
          </p>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassIcons 
            items={[
              { icon: <SiPhp />, color: 'violet', label: 'PHP' },
              { icon: <OneCIcon />, color: 'purple', label: '1С-Битрикс' },
              { icon: <SiLaravel />, color: 'red', label: 'Laravel' },
              { icon: <Database />, color: 'blue', label: 'SQL' },
              { icon: <Network />, color: 'indigo', label: 'REST API' },
              { icon: <SiDocker />, color: 'blue', label: 'Docker' },
              { icon: <SiGit />, color: 'orange', label: 'Git' },
              { icon: <Code />, color: 'green', label: 'JavaScript' },
            ]}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                <SpotlightCard 
                  className="group h-full"
                  spotlightColor="rgba(108, 92, 231, 0.25)"
                  data-testid={`card-skill-${index}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" data-testid={`icon-skill-${index}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-xl font-bold text-white mb-1" data-testid={`text-skill-name-${index}`}>
                          {skill.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs" data-testid={`badge-skill-category-${index}`}>
                          {skill.category}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-skill-desc-${index}`}>
                      {skill.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Card className="inline-block p-6 backdrop-blur-md bg-card/50 hover-elevate transition-all">
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
        </motion.div>
      </div>
    </section>
  );
}
