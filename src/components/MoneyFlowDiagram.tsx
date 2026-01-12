import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Shield, TrendingUp, Globe, Wallet } from "lucide-react";

interface FlowStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  detail: string;
}

const flowSteps: FlowStep[] = [
  {
    id: 1,
    title: "Your Investment",
    description: "Funds enter a segregated client account",
    icon: <Wallet className="w-6 h-6" />,
    detail:
      "Your money is held in a separate account from our operating funds. This means if anything happens to Emireq, your capital remains protected and accessible.",
  },
  {
    id: 2,
    title: "Compliance Review",
    description: "Every investment screened for ethical alignment",
    icon: <Shield className="w-6 h-6" />,
    detail:
      "Our independent ethics committee reviews each potential investment against strict ESG criteria. We exclude fossil fuels, weapons manufacturing, and exploitative labor practices.",
  },
  {
    id: 3,
    title: "Global Allocation",
    description: "Diversified across sustainable assets",
    icon: <Globe className="w-6 h-6" />,
    detail:
      "Capital is distributed across renewable energy, sustainable agriculture, green bonds, and ethically-governed companies in developed and emerging markets.",
  },
  {
    id: 4,
    title: "Returns & Reporting",
    description: "Quarterly statements with full transparency",
    icon: <TrendingUp className="w-6 h-6" />,
    detail:
      "You receive detailed reports showing exactly where your money is invested, the impact it's generating, and your returns—both financial and ethical.",
  },
];

const MoneyFlowDiagram = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="w-full">
      {/* Flow Steps */}
      <div className="relative">
        {/* Connection Line */}
        <div className="absolute left-8 top-12 bottom-12 w-px bg-border hidden md:block" />

        <div className="space-y-4">
          {flowSteps.map((step, index) => (
            <div key={step.id}>
              <motion.button
                onClick={() => setActiveStep(step.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 relative ${
                  activeStep === step.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card hover:bg-secondary"
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start gap-4">
                  {/* Step Number */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center relative z-10 ${
                      activeStep === step.id
                        ? "bg-primary-foreground/20"
                        : "bg-secondary"
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="label-small opacity-60">
                        Step {step.id}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg font-medium mb-1">
                      {step.title}
                    </h4>
                    <p
                      className={`text-sm ${
                        activeStep === step.id
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Expand Indicator */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      activeStep === step.id ? "rotate-180" : ""
                    }`}
                  >
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Expanded Detail */}
                <AnimatePresence>
                  {activeStep === step.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-primary-foreground/20">
                        <p className="text-sm leading-relaxed text-primary-foreground/90">
                          {step.detail}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Arrow Between Steps */}
              {index < flowSteps.length - 1 && (
                <div className="flex justify-center py-2">
                  <motion.div
                    animate={{
                      y: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowDown className="w-5 h-5 text-muted-foreground/40" />
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 p-4 bg-secondary/50 rounded-xl">
        <p className="text-sm text-muted-foreground text-center">
          <span className="font-medium text-foreground">Click any step</span> to
          see exactly what happens with your investment at each stage
        </p>
      </div>
    </div>
  );
};

export default MoneyFlowDiagram;
