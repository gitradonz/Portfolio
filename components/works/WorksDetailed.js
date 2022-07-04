import { motion } from "framer-motion";

const WorksDetailed = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="h-30rem mt-2 bg-yellow-100">Hello Next.js</h1>
        <h1 className="h-30rem mt-2 bg-yellow-200">Hello Next.js</h1>
      </motion.div>
    </div>
  );
};

export default WorksDetailed;
