import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Send, FileText, Mail } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handlePhoneClick = () => {
    window.location.href = "tel:+77472506895";
    console.log("Phone click triggered");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:kiriunchik@gmail.com";
    console.log("Email click triggered");
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/huldul", "_blank");
    console.log("Telegram click triggered");
  };

  const handleResumeClick = () => {
    window.open("https://hh.kz/resume/a72b4567ff0da1e5510039ed1f365134767a34", "_blank");
    console.log("Resume click triggered");
  };

  return (
    <section className="py-24 px-4" id="contact" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white" data-testid="text-contact-heading">
            Свяжитесь со мной
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-contact-subtitle">
            Открыт для новых возможностей и интересных проектов
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 text-center hover-elevate active-elevate-2 transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" data-testid="icon-contact-phone" />
              </div>
              <h3 className="font-semibold text-white mb-2">Телефон</h3>
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-primary p-0 h-auto text-sm"
                onClick={handlePhoneClick}
                data-testid="button-phone"
              >
                +7 747 250 68 95
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 text-center hover-elevate active-elevate-2 transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" data-testid="icon-contact-email" />
              </div>
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-primary p-0 h-auto text-sm"
                onClick={handleEmailClick}
                data-testid="button-email"
              >
                kiriunchik@gmail.com
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 text-center hover-elevate active-elevate-2 transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Send className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" data-testid="icon-contact-telegram" />
              </div>
              <h3 className="font-semibold text-white mb-2">Telegram</h3>
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-primary p-0 h-auto"
                onClick={handleTelegramClick}
                data-testid="button-telegram"
              >
                @huldul
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 text-center hover-elevate active-elevate-2 transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <FileText className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" data-testid="icon-contact-resume" />
              </div>
              <h3 className="font-semibold text-white mb-2">Резюме</h3>
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-primary p-0 h-auto"
                onClick={handleResumeClick}
                data-testid="button-resume"
              >
                HeadHunter
              </Button>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="p-8 backdrop-blur-md bg-primary/5 border-primary/30 hover-elevate transition-all">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={handleTelegramClick}
                className="min-w-[200px]"
                data-testid="button-cta-telegram"
              >
                <Send className="mr-2 h-5 w-5" />
                Написать в Telegram
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleResumeClick}
                className="min-w-[200px] backdrop-blur-sm"
                data-testid="button-cta-resume"
              >
                <FileText className="mr-2 h-5 w-5" />
                Смотреть резюме
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
