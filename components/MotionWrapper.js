import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const MotionWrapper = ({ children, router }) => {
  return (
    <AnimatePresence exitBeforeEnter={true}>
      <motion.main
        key={router.route}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ type: "spring", duration: 0.4 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default MotionWrapper;
