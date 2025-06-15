
import { Button } from "@/components/ui/button";

const Contact = ({ addToRefs }: { addToRefs: (el: HTMLElement | null) => void }) => {
  return (
    <section id="contact" ref={addToRefs} className="animated-element container mx-auto py-24 px-4 md:px-6 text-center">
      <h2 className="font-display text-4xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
      <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
        I'm currently available for freelance work and open to discussing new projects. Feel free to reach out!
      </p>
      <Button size="lg" asChild className="mt-8">
        <a href="mailto:dhanush2006.n@gmail.com">Say Hello</a>
      </Button>
    </section>
  );
}

export default Contact;
