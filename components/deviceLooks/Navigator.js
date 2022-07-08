import Image from "next/image";
import { motion } from "framer-motion";

const Navigator = ({ image }) => {
	return (
		<motion.div whileHover={{ scale: 1.2 }} className="navigator-frame">
			<Image src={image} width={1920} height={1080} alt={image} />
		</motion.div>
	);
};

export default Navigator;
