import { motion } from "framer-motion";
import Char360 from "../components/Char360";

const SectionTitle = ({ title, initial, inView }) => {
	return (
		<>
			<motion.div
				initial={initial}
				whileInView={inView}
				exit={{ x: -1000 }}
				transition={{ duration: 0.7 }}
				className="h-30rem flex justify-content-center"
			>
				<h1>{title}</h1>
			</motion.div>
			<motion.div>
				{title.split("").map((t, i) => (
					<Char360 key={i} char={t} />
				))}
			</motion.div>
		</>
	);
};

export default SectionTitle;
