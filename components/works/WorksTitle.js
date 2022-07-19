import { motion } from "framer-motion";

const WorksTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-yellow-100 text-center text-7xl "
    >
      <div className="WORKSTITLE">WORKS</div>
    </motion.div>
  );
};

export default WorksTitle;
