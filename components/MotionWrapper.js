import { motion } from "framer-motion";

const variants = {
	initial: { x: "120%" },
	animate: { x: 0 },
	exit: { x: "120%" },
};

const MotionWrapper = ({ children }) => {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={variants}
			transition={{ type: "spring" }}
		>
			{children}
		</motion.div>
	);
};

export default MotionWrapper;
