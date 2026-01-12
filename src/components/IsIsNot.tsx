import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const isItems = [
  "A long-term investment vehicle (5+ year horizon)",
  "Diversified across sustainable global assets",
  "Managed by registered investment professionals",
  "Screened against strict ESG criteria",
  "Fully regulated and audited annually",
];

const isNotItems = [
  "A get-rich-quick scheme or speculative trading",
  "Guaranteed returns—markets fluctuate",
  "A savings account with instant access",
  "Suitable for money you may need soon",
  "Free from all risk—no investment is",
];

const IsIsNot = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      {/* IS Column */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-forest/5 rounded-2xl p-6 md:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-forest/20 flex items-center justify-center">
            <Check className="w-5 h-5 text-forest" />
          </div>
          <h3 className="font-serif text-xl font-medium text-forest">
            What this investment is
          </h3>
        </div>

        <ul className="space-y-4">
          {isItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex items-start gap-3"
            >
              <div className="mt-1 w-5 h-5 rounded-full bg-forest flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-cream" />
              </div>
              <span className="text-foreground/90">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* IS NOT Column */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-card rounded-2xl p-6 md:p-8 border border-border"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <X className="w-5 h-5 text-muted-foreground" />
          </div>
          <h3 className="font-serif text-xl font-medium text-muted-foreground">
            What this investment is not
          </h3>
        </div>

        <ul className="space-y-4">
          {isNotItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
              className="flex items-start gap-3"
            >
              <div className="mt-1 w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <X className="w-3 h-3 text-muted-foreground" />
              </div>
              <span className="text-muted-foreground">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default IsIsNot;
