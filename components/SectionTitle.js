import { motion } from "framer-motion";

const SectionTitle = ({ title, initial, inView }) => {
	return (
		<motion.div
			initial={initial}
			whileInView={inView}
			exit={{ x: -1000 }}
			className="h-30rem flex justify-content-center"
		>
			<h1>{title}</h1>
		</motion.div>
	);
};

export default SectionTitle;
