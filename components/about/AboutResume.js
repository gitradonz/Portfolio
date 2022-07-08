import { useViewportScroll, motion, useTransform } from "framer-motion";

const AboutResume = () => {
	const { scrollY } = useViewportScroll();
	const y = useTransform(scrollY, [1200, 1500], [0, -200]);

	console.log(scrollY);

	return (
		<motion.div className="h-30rem bg-yellow-100 relative " style={{ y }}>
			<div className="flex flex-column align-items-center justify-content-center p-3 ">
				<motion.div className="text-6xl font-bold">About me</motion.div>
			</div>
			<div className=" h-30rem bg-purple-100 relative" />
			<div className=" h-30rem bg-purble-200 absolute" />
		</motion.div>
	);
};

export default AboutResume;
