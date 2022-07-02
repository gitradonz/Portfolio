import { motion } from "framer-motion";

const HeroTitle = ({ title, initial, inView, exit }) => {
  return (
    <motion.div
      initial={initial}
      whileInView={inView}
      exit={exit}
      transition={{ duration: 0.7 }}
    >
      <div className="text-6xl  font-bold">{title}</div>
    </motion.div>
  );
};

export default HeroTitle;
