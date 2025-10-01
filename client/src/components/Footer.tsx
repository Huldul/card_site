import { SiGithub, SiTelegram } from "react-icons/si";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-white mb-1" data-testid="text-footer-name">
              Кирилл Жилин
            </h3>
            <p className="text-muted-foreground" data-testid="text-footer-title">
              PHP Backend Разработчик
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                window.open("https://t.me/huldul", "_blank");
                console.log("Footer Telegram clicked");
              }}
              data-testid="button-footer-telegram"
            >
              <SiTelegram className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                window.open("https://hh.kz/resume/a72b4567ff0da1e5510039ed1f365134767a34", "_blank");
                console.log("Footer Resume clicked");
              }}
              data-testid="button-footer-resume"
            >
              <FileText className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            © {currentYear} Кирилл Жилин. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
