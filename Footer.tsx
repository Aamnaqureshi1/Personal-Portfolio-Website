import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-muted/30 to-accent/20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Aamna Qureshi
            </h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer passionate about creating
              amazing digital experiences.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full"></div>
              Contact
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <p className="hover:text-primary transition-colors duration-300 cursor-pointer">aamnaqureshi987@gmail.com</p>
              <p className="hover:text-primary transition-colors duration-300 cursor-pointer">+91 3189377567 </p>
              <p className="hover:text-primary transition-colors duration-300 cursor-pointer">Abbottabad, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 mt-8 text-center text-muted-foreground">
          <p className="bg-gradient-to-r from-muted-foreground to-primary bg-clip-text text-transparent">
            &copy; {currentYear} Aamna Qureshi. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}