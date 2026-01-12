import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Logo & Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-cream" />
              </div>
              <span className="font-serif text-xl font-medium">Emireq</span>
            </div>
            <p className="text-cream/60 text-sm max-w-xs">
              Ethical Global Investment. Building sustainable wealth for a
              better world.
            </p>
          </div>

          {/* Legal */}
          <div className="text-sm text-cream/50 max-w-md">
            <p className="mb-4">
              Emireq is a registered investment manager. Your capital is at risk.
              The value of investments can go down as well as up.
            </p>
            <p>
              This page is for informational purposes only and does not
              constitute financial advice. Please consult a qualified advisor
              before investing.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          <p>© 2026 Emireq. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-cream/60 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-cream/60 transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-cream/60 transition-colors cursor-pointer">
              Risk Disclosure
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
