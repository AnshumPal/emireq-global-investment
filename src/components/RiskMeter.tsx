import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Info, TrendingDown, Clock, Globe } from "lucide-react";

interface RiskFactor {
  id: string;
  title: string;
  level: "low" | "medium" | "high";
  description: string;
  mitigation: string;
}

const riskFactors: RiskFactor[] = [
  {
    id: "market",
    title: "Market Volatility",
    level: "medium",
    description:
      "Investment values can go down as well as up. During economic downturns, your portfolio may lose value temporarily.",
    mitigation:
      "We diversify across asset classes and regions to reduce impact. Historical data shows recovery over 5+ year periods.",
  },
  {
    id: "currency",
    title: "Currency Risk",
    level: "low",
    description:
      "As we invest globally, exchange rate fluctuations can affect returns when converted back to your base currency.",
    mitigation:
      "We hedge major currency exposures and maintain a balanced geographic allocation.",
  },
  {
    id: "liquidity",
    title: "Liquidity Constraints",
    level: "medium",
    description:
      "Some sustainable investments are in less liquid markets. Withdrawing large sums quickly may take 30-60 days.",
    mitigation:
      "We maintain 20% in liquid assets for withdrawal requests. Standard withdrawals process within 5 business days.",
  },
  {
    id: "regulatory",
    title: "Regulatory Changes",
    level: "low",
    description:
      "ESG regulations and definitions may change, potentially affecting which investments qualify as 'ethical'.",
    mitigation:
      "Our compliance team monitors regulatory developments. We exceed current standards to buffer against changes.",
  },
];

const levelColors = {
  low: {
    bg: "bg-forest/10",
    text: "text-forest",
    bar: "bg-forest",
    percentage: 25,
  },
  medium: {
    bg: "bg-copper/10",
    text: "text-copper",
    bar: "bg-copper",
    percentage: 55,
  },
  high: {
    bg: "bg-destructive/10",
    text: "text-destructive",
    bar: "bg-destructive",
    percentage: 85,
  },
};

const RiskMeter = () => {
  const [expandedRisk, setExpandedRisk] = useState<string | null>("market");

  return (
    <div className="space-y-4">
      {riskFactors.map((risk) => {
        const colors = levelColors[risk.level];
        const isExpanded = expandedRisk === risk.id;

        return (
          <motion.div
            key={risk.id}
            className="bg-card rounded-2xl overflow-hidden"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <button
              onClick={() => setExpandedRisk(isExpanded ? null : risk.id)}
              className="w-full p-6 text-left"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${colors.bg}`}>
                    {risk.id === "market" && (
                      <TrendingDown className={`w-5 h-5 ${colors.text}`} />
                    )}
                    {risk.id === "currency" && (
                      <Globe className={`w-5 h-5 ${colors.text}`} />
                    )}
                    {risk.id === "liquidity" && (
                      <Clock className={`w-5 h-5 ${colors.text}`} />
                    )}
                    {risk.id === "regulatory" && (
                      <AlertTriangle className={`w-5 h-5 ${colors.text}`} />
                    )}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium">
                      {risk.title}
                    </h4>
                    <span
                      className={`text-xs uppercase tracking-wider font-medium ${colors.text}`}
                    >
                      {risk.level} risk
                    </span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-muted-foreground"
                >
                  <Info className="w-5 h-5" />
                </motion.div>
              </div>

              {/* Risk Bar */}
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${colors.bar} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${colors.percentage}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </button>

            {/* Expanded Content */}
            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 space-y-4">
                <div className="h-px bg-border" />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-sm font-medium mb-2 text-muted-foreground">
                      What this means
                    </h5>
                    <p className="text-sm leading-relaxed">{risk.description}</p>
                  </div>
                  <div className="bg-forest/5 rounded-xl p-4">
                    <h5 className="text-sm font-medium mb-2 text-forest">
                      How we mitigate this
                    </h5>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {risk.mitigation}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Honest Disclaimer */}
      <div className="mt-6 p-4 border border-border rounded-xl bg-background">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Important:</strong> All investments
          carry risk. The value of your investment can fall as well as rise. Past
          performance is not a reliable indicator of future results. You may get
          back less than you invest.
        </p>
      </div>
    </div>
  );
};

export default RiskMeter;
