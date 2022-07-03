import { useViewportScroll, motion, useTransform } from "framer-motion";
import { BsChevronCompactDown } from "react-icons/bs";

const ArrowGoDown = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <motion.div
      className="w-full h-6rem flex justify-content-center align-items-center"
      style={{ y }}
    >
      <motion.a
        href="#projectsResume"
        whileInView={{ opacity: [0, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <BsChevronCompactDown className="text-8xl" />
      </motion.a>
    </motion.div>
  );
};

export default ArrowGoDown;
