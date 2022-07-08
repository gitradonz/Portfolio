import { motion } from "framer-motion";

const IPhoneX = ({ image }) => {
	return (
		<motion.div
			initial={{
				scale: 0.4,
				margin: -220,
				x: 0,
				rotateX: -5,
				rotateZ: 5,
				rotateY: 30,
				backgroundImage: image,
				backgroundSize: "contain",
				opacity: 0,
				boxShadow:
					"0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 20px 20px 30px 20px #1f1f1f",
			}}
			whileInView={{ opacity: 1 }}
			whileHover={{
				rotateX: 0,
				rotateZ: 0,
				boxShadow:
					"0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #ffffff",
				scale: 0.5,
				padding: -150,
			}}
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
