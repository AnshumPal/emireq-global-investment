import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Emireq" className="h-10 w-auto rounded-lg" />
          </div>

          {/* Tagline - Hidden on mobile */}
          <div className="hidden md:block text-sm text-muted-foreground">
            Ethical Global Investment
          </div>

          {/* CTA */}
          <a
            href="#learn-more"
            className="text-sm font-medium text-forest hover:text-forest-light transition-colors link-underline"
          >
            Learn More
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
