import { useViewportScroll, motion, useTransform } from "framer-motion";
import { BsChevronCompactDown } from "react-icons/bs";

const ArrowGoDown = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 1200], [0, 100]);

  return (
    <motion.div
      className="w-full h-6rem flex justify-content-center align-items-center"
      style={{ y: y1 }}
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
