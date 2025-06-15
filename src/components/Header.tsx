
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="font-display text-2xl font-bold">
          Dhanush N<span className="text-primary">.</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">About</a>
          <a href="#projects" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Projects</a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Contact</a>
        </nav>
        <Button asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
