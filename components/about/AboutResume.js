import { useViewportScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";

const AboutResume = () => {
	const { scrollY } = useViewportScroll();
	const y = useTransform(scrollY, [1200, 1400, 1800], [0, -950, -650]);

	return (
		<motion.div style={{ y }}>
			<div className="flex flex-column align-items-center justify-content-center p-3 ">
				<div className="text-6xl font-bold">About me</div>
				<motion.div
					initial={{ x: -200, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					className="text-4xl font-bold"
				>
					<div className=" px-4 py-4 text-center">
						<div className="mb-6 font-bold text-2xl">
							<span className="text-900">My Work,</span>
							<span className="text-yellow-600"> My Passion</span>
						</div>

						<div className="grid">
							<GridSection
								title="Clean Code"
								description="I love to write clean code, and I'm always looking for new ways to improve my code."
								image="pi-code"
							/>
							<GridSection
								title="UI/UX"
								description="I love to create beautiful and functional interfaces to make the user experience better."
								image="pi-palette"
							/>
							<GridSection
								title="Teamwork"
								description="I'm always connected to the team and I use technologies to work with them and create the best possible product..."
								image="pi-github"
							/>
							<GridSection
								title="International"
								description="Experience with international companys, I have no problem to work with people from different countries."
								image="pi-globe"
							/>
							<GridSection
								title="Security"
								description="Always looking ways to protect clients data and protect the server..."
								image="pi-shield"
							/>
							<GridSection
								title="Explore"
								description="I'm never satisfied with my knowledge, I love to explore new things and keep updated..."
								image="pi-map"
							/>
						</div>
					</div>
				</motion.div>
				<Link href="/about">
					<a className="bg-yellow-200 mt-8 flex justify-content-center align-items-center text-xl hover:bg-yellow-300 transition-duration-300 cursor-pointer shadow-4 border-none border-round-xl py-2 px-4 font-bold">
						<i className="pi pi-user mr-2" />
						MORE DETAILS
						<CgArrowLongRight size={25} className="ml-3" />
					</a>
				</Link>
			</div>
		</motion.div>
	);
};

const GridSection = ({ title, description, image }) => {
	return (
		<div className="col-12 md:col-4 mb-4 px-5">
			<div className="py-3 px-4 shadow-2 mb-3 inline-block border-round">
				<i className={`pi ${image} text-4xl text-yellow-500`} />
			</div>
			<div className="text-900 mb-3 font-medium">{title}</div>
			<div className="text-700 text-sm line-height-3">{description}</div>
		</div>
	);
};

export default AboutResume;
