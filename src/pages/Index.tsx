
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
  const addToRefs = useScrollAnimation();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero addToRefs={addToRefs} />
        <Projects addToRefs={addToRefs} />
        <Contact addToRefs={addToRefs} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
