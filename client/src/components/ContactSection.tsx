import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Send, FileText } from "lucide-react";

export default function ContactSection() {
  const handlePhoneClick = () => {
    window.location.href = "tel:+77472506895";
    console.log("Phone click triggered");
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
    <section className="py-24 px-4" id="contact">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white" data-testid="text-contact-heading">
            Свяжитесь со мной
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-contact-subtitle">
            Открыт для новых возможностей и интересных проектов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover-elevate active-elevate-2 transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Phone className="w-8 h-8 text-primary" data-testid="icon-contact-phone" />
            </div>
            <h3 className="font-semibold text-white mb-2">Телефон</h3>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-primary p-0 h-auto"
              onClick={handlePhoneClick}
              data-testid="button-phone"
            >
              +7 747 250 68 95
            </Button>
          </Card>

          <Card className="p-6 text-center hover-elevate active-elevate-2 transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Send className="w-8 h-8 text-primary" data-testid="icon-contact-telegram" />
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

          <Card className="p-6 text-center hover-elevate active-elevate-2 transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <FileText className="w-8 h-8 text-primary" data-testid="icon-contact-resume" />
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
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 backdrop-blur-md bg-primary/5 border-primary/30">
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
        </div>
      </div>
    </section>
  );
}
