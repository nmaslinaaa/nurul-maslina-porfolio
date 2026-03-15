import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
   <footer className="fixed bottom-0 left-0 right-0 py-3 border-t border-border bg-background/80 backdrop-blur-md z-40 font-tech ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Nurul Maslina. All rights reserved.
            </p>
          </div>
         </div>
      </div>
    </footer>
  );
};
