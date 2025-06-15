
const Hero = ({ addToRefs }: { addToRefs: (el: HTMLElement | null) => void }) => {
  return (
    <section ref={addToRefs} className="animated-element container mx-auto flex min-h-screen items-center px-4 pt-24 md:px-6">
      <div className="max-w-3xl">
        <h1 className="font-display text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl">
          Creative Developer & Digital Artisan
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          I craft beautiful, engaging, and user-friendly digital experiences. From design to deployment, I bring ideas to life with code and creativity.
        </p>
      </div>
    </section>
  );
};

export default Hero;
