import GooeyNav from './GooeyNav';

const navItems = [
  { label: "Главная", href: "#hero" },
  { label: "Навыки", href: "#skills" },
  { label: "Опыт", href: "#experience" },
  { label: "Контакты", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto flex justify-center">
        <GooeyNav 
          items={navItems}
          particleCount={12}
          particleDistances={[70, 8]}
          particleR={80}
          initialActiveIndex={0}
          animationTime={500}
          timeVariance={250}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </header>
  );
}
