import { motion } from "framer-motion";
import SectionGrid from "./SectionGrid";
import SectionTitle from "./SectionTitle";

const Projects = () => {
	return (
		<div className="bg-yellow-50">
			<SectionTitle
				title="Projects"
				initial={{ opacity: 0 }}
				inView={{ opacity: 1 }}
			/>
			<SectionGrid />
			<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
				<h1 className="h-100">Hello Next.js</h1>
			</motion.div>
		</div>
	);
};

export default Projects;
