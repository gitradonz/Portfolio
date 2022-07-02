import { motion } from "framer-motion";

const SectionTitle = ({ title, initial, inView, exit }) => {
  return (
    <motion.div
      initial={initial}
      whileInView={inView}
      exit={exit}
      transition={{ duration: 0.7 }}
    >
      <h1>{title}</h1>
    </motion.div>
  );
};

export default SectionTitle;
