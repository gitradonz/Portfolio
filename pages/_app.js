import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import NextHead from "../components/NextHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
// PrimeReact imports
import PrimeReact from "primereact/api";
import "primereact/resources/themes/lara-light-teal/theme.css"; // primetheme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // primeicons
import "primeflex/primeflex.css"; // primeflex
PrimeReact.ripple = true;

const variants = {
	initial: { x: "120%" },
	animate: { x: 0 },
	exit: { x: "-120%" },
};

function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<NextHead />
			<Header />
			<AnimatePresence exitBeforeEnter={true}>
				<motion.main
					key={router.route}
					initial="initial"
					animate="animate"
					exit="exit"
					variants={variants}
					transition={{ type: "spring", duration: 0.5 }}
				>
					<Component {...pageProps} />
				</motion.main>
			</AnimatePresence>
			<Footer />
		</>
	);
}

export default MyApp;
