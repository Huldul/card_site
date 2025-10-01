import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import SpotlightCard from "@/components/effects/SpotlightCard";

interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    period: "Март 2025 - Настоящее время",
    title: "PHP-разработчик",
    company: "Веб-студия ONELAB",
    description: "Разработка backend-решений, внедрение интеграций с внешними сервисами, создание административных панелей. Работа с современными технологиями и фреймворками.",
    technologies: ["PHP", "Bitrix", "Laravel", "MySQL", "REST API"],
  },
  {
    period: "Октябрь 2023 - Март 2025",
    title: "Backend-разработчик",
    company: "Astana-creative",
    description: "Занимался разработкой back-end, внедрением интеграций, написанием админ-панелей. Работа с CRM системами (amoCRM, Bitrix24). Разработка REST API.",
    technologies: ["1С-Битрикс", "PHP", "Laravel", "MySQL", "Docker", "Git"],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 relative z-10" id="experience" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white" data-testid="text-experience-heading">
            Опыт работы
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-experience-subtitle">
            3+ года разработки на крупных и средних проектах
          </p>
        </motion.div>

        <div className="relative">
          <div 
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
                data-testid={`experience-item-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                  <SpotlightCard 
                    className="group"
                    spotlightColor="rgba(108, 92, 231, 0.25)"
                  >
                    <div className="space-y-4">
                      <div>
                        <Badge variant="secondary" className="mb-2" data-testid={`badge-period-${index}`}>
                          {exp.period}
                        </Badge>
                        <h3 className="font-display text-2xl font-bold text-white mb-1" data-testid={`text-exp-title-${index}`}>
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium" data-testid={`text-exp-company-${index}`}>
                          {exp.company}
                        </p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed" data-testid={`text-exp-desc-${index}`}>
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                            data-testid={`badge-tech-${index}-${techIndex}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </div>

                <motion.div 
                  className="absolute left-0 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center ring-4 ring-background group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-primary-foreground" data-testid={`icon-exp-${index}`} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="inline-block p-8 backdrop-blur-md bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover-elevate transition-all">
            <div className="flex items-center gap-4">
              <motion.div 
                className="text-6xl font-bold text-primary"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
              >
                3+
              </motion.div>
              <div className="text-left">
                <div className="font-display text-2xl font-bold text-white">Года опыта</div>
                <div className="text-muted-foreground">коммерческой разработки</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
