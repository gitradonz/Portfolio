import { motion } from "framer-motion";

const IPhoneX = ({ image }) => {
	return (
		<motion.div
			initial={{
				scale: 0.4,
				margin: -230,
				x: 0,
				rotateX: -5,
				rotateZ: 5,
				rotateY: 30,
				backgroundImage: image,
				backgroundSize: "contain",
				opacity: 0,
			}}
			whileInView={{ x: 200, opacity: 1 }}
			whileHover={{ rotateX: 0, rotateZ: 0 }}
			viewport={{ once: true }}
			className="iphone-x"
		>
			<i />
			<b />
			<span />
			<span />
		</motion.div>
	);
};

export default IPhoneX;
