import GooeyNav from './GooeyNav';

const navItems = [
  { label: "Главная", href: "#hero" },
  { label: "Навыки", href: "#skills" },
  { label: "Опыт", href: "#experience" },
  { label: "Контакты", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2 md:py-4 backdrop-blur-sm">
      <div className="container mx-auto flex justify-center px-2">
        <GooeyNav 
          items={navItems}
          particleCount={8}
          particleDistances={[50, 6]}
          particleR={60}
          initialActiveIndex={0}
          animationTime={400}
          timeVariance={200}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </header>
  );
}
