import { motion } from "framer-motion";
import WorksSection from "./WorksSection";

const WorksDetailed = () => {
	return (
		<div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.7 }}
			>
				<div className="JAVASCRIPT">
					<WorksSection
						subtitle="Mobile & Web"
						title="JavaScript"
						description="With JavaScript I've developed both front and backend. React and React Native are the main libraries I use and some frameworks and services like NodeJS, NextJS, Express, React-Router, React-Hook-Forms..."
						projects={jsProjects}
					/>
				</div>
				<div className="JAVA">
					<WorksSection
						subtitle="Desktop"
						title="Java"
						description="With Java I've developed mainly backend projects. I've used JavaFX to show outputs and I made connections to BBDD with JDBC, hibernate, ORM..."
						projects={javaProjects}
					/>
				</div>
				<div className="CSHARP">
					<WorksSection
						subtitle="Desktop ( Unity )"
						title="C#"
						description="I've developed my first game with C# and I've used Unity and Firebase to do it. Also I connected a web and mobile app with Firebase connections."
						projects={csharpProjects}
					/>
				</div>
				<div className="KOTLIN">
					<WorksSection
						subtitle="Mobile ( AndroidStudio )"
						title="KOTLIN"
						description="I used Kotlin to develop mobile applications with AndroidStudio."
						projects={worksMockup}
					/>
				</div>
				<div className="OTHER">
					<WorksSection
						subtitle="Fullstack"
						title="OTHER"
						description="I used Kotlin to develop mobile applications with AndroidStudio."
						projects={worksMockup}
					/>
				</div>
			</motion.div>
		</div>
	);
};

const worksMockup = [
	{
		title: "Facilisis gravida neque",
		description:
			"Potenti nullam ac tortor vitae. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.",
		image: "https://altertecnia.com/wp-content/uploads/oee-4.png",
	},
	{
		title: "Facilisis gravida neque",
		description:
			"Potenti nullam ac tortor vitae. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.",
		image: "https://altertecnia.com/wp-content/uploads/oee-4.png",
	},
	{
		title: "Facilisis gravida neque",
		description:
			"Potenti nullam ac tortor vitae. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.",
		image: "https://altertecnia.com/wp-content/uploads/oee-4.png",
	},
	{
		title: "Facilisis gravida neque",
		description:
			"Potenti nullam ac tortor vitae. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.",
		image: "https://altertecnia.com/wp-content/uploads/oee-4.png",
	},
];
const javaProjects = [
	{
		title: "LinkTracker",
		description:
			"Application to track links in a website. It uses a multi-thread system and JavaFX to show the results.",
		image: "https://altertecnia.com/wp-content/uploads/oee-4.png",
	},
	{
		title: "FlightsFX",
		description: "Desktop application to track Flights shedule.",
		image: "https://altertecnia.com/wp-content/uploads/oee-4.png",
	},
	{
		title: "CurrencyConverter",
		description:
			"Simple desktop application to convert currencies. It also uses JavaFX for the UI.",
		image: "https://altertecnia.com/wp-content/uploads/oee-4.png",
	},
	{
		title: "HeroesFight",
		description:
			"Application to make random fights between heroes. It uses console to show the results.",
		image: "https://altertecnia.com/wp-content/uploads/oee-4.png",
	},
];
const jsProjects = [
	{
		title: "CRM - Dashboard",
		description:
			"Web to manage clients and their products. Has a login system, API connections, MySQL database auth and performance features on the UI.",
		image: "https://altertecnia.com/wp-content/uploads/oee-4.png",
	},
	{
		title: "WebViewer",
		description:
			"Mobile app developed to wrap a PWA in a WebView component to give push/local notifications and login system to iOS/Android.",
		image: "https://altertecnia.com/wp-content/uploads/oee-4.png",
	},
	{
		title: "ePub Reader",
		description:
			"Web app developed to read ePub books. It has highlighting, search system, dictionary API and other features",
		image: "https://altertecnia.com/wp-content/uploads/oee-4.png",
	},
	{
		title: "Test App",
		description:
			"Mobile app developed to implement and test features. It has QR code scanning, camera, file management, logins, pdf reader, biometric authentication...",
		image: "https://altertecnia.com/wp-content/uploads/oee-4.png",
	},
];
const csharpProjects = [
	{
		title: "HuntZ",
		description: "",
		image: "https://altertecnia.com/wp-content/uploads/oee-4.png",
	},
];

export default WorksDetailed;
