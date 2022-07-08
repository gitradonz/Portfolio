import { useViewportScroll, motion, useTransform } from "framer-motion";

const AboutResume = () => {
	const { scrollY } = useViewportScroll();
	const y = useTransform(scrollY, [1200, 1500], [0, -200]);

	console.log(scrollY);

	return (
		<motion.div className="bg-yellow-100 " style={{ y }}>
			<div className="flex flex-column align-items-center justify-content-center p-3">
				<motion.div className="text-6xl font-bold">About me</motion.div>
				<div className="flex w-full justify-content-evenly">
					<motion.div
						initial={{ x: -200, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 1 }}
						className="text-4xl font-bold"
					>
						Experience
					</motion.div>
					<motion.div
						initial={{ x: 200, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 1 }}
						className="text-4xl font-bold"
					>
						Education
					</motion.div>
				</div>
			</div>
			<div className=" h-30rem bg-yellow-200" />
			<div className=" h-30rem bg-yellow-200" />
		</motion.div>
	);
};

export default AboutResume;
