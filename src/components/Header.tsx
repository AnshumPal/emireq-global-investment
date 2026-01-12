import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "How It Works", href: "#money-flow" },
  { label: "Risks", href: "#risks" },
  { label: "For You?", href: "#audience" },
];

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50"
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <img src={logo} alt="Emireq" className="h-9 w-auto rounded-lg shadow-sm" />
            <div className="hidden sm:block">
              <span className="font-serif text-lg font-medium tracking-tight block leading-tight">
                Emireq
              </span>
              <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                Ethical Investment
              </span>
            </div>
          </a>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#learn-more"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-forest text-cream rounded-lg hover:bg-forest-light transition-colors shadow-sm"
          >
            <span>Get Started</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
