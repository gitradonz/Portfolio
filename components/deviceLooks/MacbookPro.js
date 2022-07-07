import { motion } from "framer-motion";
import Image from "next/image";

const MacbookPro = ({ image }) => {
	return (
		<motion.div
			initial={{ scale: 0.5, margin: -120 }}
			className="section section-device"
		>
			<div id="macbook-pro" className="container grid-xl text-center">
				<div className="columns">
					<div className="column col-12">
						<div className="dots">
							<div className="dot tooltip" data-tooltip="device-silver (default)"></div>
							<div className="dot tooltip" data-tooltip="device-spacegray"></div>
						</div>
					</div>
					<div className="column col-12">
						<div className="device device-macbook-pro device-spacegray">
							<div className="device-frame">
								<Image className="device-content" src={image} alt="macbook-pro" layout="fill" />
							</div>
							<div className="device-stripe"></div>
							<div className="device-header"></div>
							<div className="device-sensors"></div>
							<div className="device-btns"></div>
							<div className="device-power"></div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default MacbookPro;
