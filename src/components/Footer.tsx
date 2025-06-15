import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 px-4 md:flex-row md:px-6">
                <p className="text-sm text-muted-foreground">&copy; 2025 Dhanush N. All rights reserved.</p>
                <div className="flex gap-4">
                   
                    <a href="https://github.com/Dhanush2006d/" className="text-muted-foreground transition-colors hover:text-foreground" target='blank'><Github className="h-5 w-5" /></a>
                    <a href="https://www.linkedin.com/in/dhanush-n01/" className="text-muted-foreground transition-colors hover:text-foreground" target='blank'><Linkedin className="h-5 w-5" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
