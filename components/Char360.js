import { motion } from "framer-motion";

const Char360 = ({ char }) => {
  return (
    <motion.span
      className={"font-bold font-italic"}
      whileHover={{ rotate: 20 }}
    >
      {char}
    </motion.span>
  );
};

export default Char360;
