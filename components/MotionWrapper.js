import { motion } from "framer-motion";

const variants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { x: 1000 },
};

const MotionWrapper = ({ children }) => {
	return (
		<motion.div
			animate="enter"
			exit="exit"
			variants={variants}
			transition={{ type: "linear" }}
		>
			{children}
		</motion.div>
	);
};

export default MotionWrapper;
