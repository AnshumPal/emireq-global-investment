import { motion } from "framer-motion";
import { UserCheck, UserX } from "lucide-react";

const forYou = [
  {
    title: "Patient investors",
    description: "You're comfortable with a 5-10 year investment horizon",
  },
  {
    title: "Values-driven individuals",
    description: "Aligning your money with your ethics matters to you",
  },
  {
    title: "Long-term planners",
    description: "Building wealth for retirement, future goals, or legacy",
  },
  {
    title: "Diversification seekers",
    description: "Looking to add sustainable assets to an existing portfolio",
  },
];

const notForYou = [
  {
    title: "Short-term traders",
    description: "If you need returns within 1-2 years, this isn't suitable",
  },
  {
    title: "Those needing liquidity",
    description: "Emergency funds or money you may need soon shouldn't be here",
  },
  {
    title: "High-risk seekers",
    description: "This is moderate-risk; we don't chase volatile returns",
  },
  {
    title: "Those uncomfortable with loss",
    description: "If any capital loss is unacceptable, please reconsider",
  },
];

const AudienceSection = () => {
  return (
    <div className="space-y-12">
      {/* For You */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center">
            <UserCheck className="w-6 h-6 text-forest" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-medium">This is for you if...</h3>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {forYou.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
              className="bg-forest/5 rounded-xl p-5 border-l-4 border-forest"
            >
              <h4 className="font-medium mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Not For You */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
            <UserX className="w-6 h-6 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-medium text-muted-foreground">
              This is not for you if...
            </h3>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {notForYou.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
              className="bg-card rounded-xl p-5 border border-border"
            >
              <h4 className="font-medium text-muted-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudienceSection;
