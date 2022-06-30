import { motion, AnimatePresence } from "framer-motion";

const variants = {
	initial: { x: "120%" },
	animate: { x: 0 },
	exit: { x: "-120%" },
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
				transition={{ type: "spring", duration: 0.6 }}
			>
				{children}
			</motion.main>
		</AnimatePresence>
	);
};

export default MotionWrapper;
