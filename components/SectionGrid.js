import { motion } from "framer-motion";
const SectionGrid = () => {
	return (
		<motion.div
			initial={{ scale: 0.5 }}
			whileInView={{ scale: 1 }}
			className="h-30rem flex justify-content-center"
		>
			Hello Next.js
		</motion.div>
	);
};

export default SectionGrid;
