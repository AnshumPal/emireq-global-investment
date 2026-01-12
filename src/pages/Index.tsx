import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IsIsNot from "@/components/IsIsNot";
import MoneyFlowDiagram from "@/components/MoneyFlowDiagram";
import RiskMeter from "@/components/RiskMeter";
import AudienceSection from "@/components/AudienceSection";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" } as const,
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-small text-copper mb-4 block">
              Ethical Global Investment
            </span>
            <h1 className="heading-display text-balance mb-6">
              Invest in what you{" "}
              <span className="text-forest italic">believe</span> in
            </h1>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto mb-10">
              We won't promise you the moon. What we will promise is complete
              transparency about where your money goes, the risks involved, and
              whether this investment is actually right for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center"
          >
            <a
              href="#what-it-is"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">Read the full picture</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* What It Is / Is Not */}
      <section id="what-it-is" className="section-padding bg-secondary/30">
        <div className="container-wide">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="label-small text-muted-foreground mb-3 block">
              Clear Expectations
            </span>
            <h2 className="heading-section text-balance">
              Let's be honest about what this is
            </h2>
          </motion.div>

          <IsIsNot />
        </div>
      </section>

      {/* How Money Moves */}
      <section id="money-flow" className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div {...fadeInUp} className="lg:sticky lg:top-32">
              <span className="label-small text-muted-foreground mb-3 block">
                Full Transparency
              </span>
              <h2 className="heading-section mb-6">
                How your money actually moves
              </h2>
              <p className="body-large text-muted-foreground mb-8">
                No black boxes. Click each step to see exactly what happens at
                every stage of the investment process—from the moment your funds
                arrive to when returns are distributed.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="w-12 h-px bg-border" />
                <span>Interactive diagram</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <MoneyFlowDiagram />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section id="risks" className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <RiskMeter />
            </motion.div>

            <motion.div {...fadeInUp} className="lg:sticky lg:top-32 lg:order-first">
              <span className="label-small text-muted-foreground mb-3 block">
                Honest About Risk
              </span>
              <h2 className="heading-section mb-6">
                Every investment carries risk
              </h2>
              <p className="body-large text-muted-foreground mb-8">
                We believe you deserve to understand exactly what could go
                wrong—and what we do to mitigate it. Explore each risk factor to
                see the full picture.
              </p>
              <div className="p-5 bg-copper/5 rounded-xl border border-copper/20">
                <p className="text-sm leading-relaxed">
                  <strong className="text-copper">Our commitment:</strong> We
                  will never hide risks or use complicated language to obscure
                  them. If something isn't suitable for you, we'd rather you
                  didn't invest.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section id="audience" className="section-padding">
        <div className="container-wide">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="label-small text-muted-foreground mb-3 block">
              Right Fit
            </span>
            <h2 className="heading-section text-balance max-w-2xl mx-auto">
              Not every investment is right for everyone
            </h2>
          </motion.div>

          <AudienceSection />
        </div>
      </section>

      {/* Soft CTA */}
      <section id="learn-more" className="section-padding bg-forest">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="heading-section text-cream mb-6">
              Still interested? Let's talk.
            </h2>
            <p className="body-large text-cream/70 mb-10 max-w-xl mx-auto">
              No pressure, no sales tactics. We're happy to answer your
              questions, provide more documentation, or simply have an honest
              conversation about whether this is right for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cream text-forest font-medium rounded-xl hover:bg-cream-dark transition-colors"
              >
                <Mail className="w-5 h-5" />
                Request more information
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-cream font-medium rounded-xl border border-cream/30 hover:bg-cream/10 transition-colors"
              >
                Download our prospectus
              </motion.button>
            </div>

            <p className="mt-8 text-sm text-cream/50">
              Response within 2 business days. No obligations, no follow-up
              calls unless you want them.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
