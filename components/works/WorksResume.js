import { useViewportScroll, motion, useTransform } from "framer-motion";
import IPhoneX from "../deviceLooks/IPhoneX";
import Navigator from "../deviceLooks/Navigator";

const WorksResume = () => {
	const { scrollY } = useViewportScroll();
	const y = useTransform(scrollY, [400, 800], [0, 60]);

	return (
		<motion.div id="works" className="relative bg-yellow-50">
			<div className="flex flex-column align-items-center justify-content-center p-3 ">
				<motion.div className="text-6xl font-bold" style={{ y }}>
					Works
				</motion.div>
				<p
					className="mt-8 mb-4 line-height-3 text-center mx-auto "
					style={{ maxWidth: "500px" }}
				>
					Mainly developed with Java, C#, Kotlin and JavaScript.
				</p>
				<div className="px-4 md:px-6 lg:px-8">
					<div className="flex flex-wrap">
						<div className="w-full h-full lg:w-6 xl:w-3 p-5 flex flex-column justify-content-center align-items-center">
							<IPhoneX image="url(images/comocomen.PNG)" />
							<div className="mt-3 mb-2 font-medium text-900 text-xl flex justify-content-center">
								Fullstack
							</div>
							<div className="text-700 line-height-3 text-center">
								From scratch to production. Design, development, testing and continuous
								integration.
							</div>
						</div>
						<div className="w-full lg:w-6 xl:w-3 p-5 flex flex-column justify-content-center align-items-center">
							<Navigator image={"/images/huntz.png"} />
							<div className="mt-3 mb-2 font-medium text-900 text-xl flex justify-content-center">
								Databases and APIs
							</div>
							<div className="text-700 line-height-3 text-center">
								Developed multiple projects with backend connections and API calls.
							</div>
						</div>
						<div className="w-full lg:w-6 xl:w-3 p-5 flex flex-column justify-content-center align-items-center">
							<IPhoneX image="url(images/lobocom.png)" />
							<div className="mt-3 mb-2 font-medium text-900 text-xl flex justify-content-center">
								Android & iOS
							</div>
							<div className="text-700 line-height-3 text-center">
								Created and distributed apps throught PlayStore and AppStore.
							</div>
						</div>
						<div className="w-full lg:w-6 xl:w-3 p-5 flex flex-column justify-content-center align-items-center">
							<Navigator image={"/images/fresmedical.png"} />

							{/* <IPhoneX image="url(images/lobocom.png)" /> */}

							<div className="mt-3 mb-2 font-medium text-900 text-xl flex justify-content-center">
								Web
							</div>
							<div className="text-700 line-height-3 text-center">
								Spezialiced in frontend development. Using modern frameworks and services.
							</div>
						</div>
					</div>
				</div>
			</div>
			<motion.div className="text-center text-xl">ALL PROYECTS </motion.div>
			<div className=" h-30rem " />
			<div className=" h-30rem " />
			<div className=" h-30rem " />
		</motion.div>
	);
};

export default WorksResume;
