import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import NextHead from "../components/NextHead";
import Footer from "../components/Footer";

// PrimeReact imports
import PrimeReact from "primereact/api";
import "primereact/resources/themes/lara-light-teal/theme.css"; // primetheme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // primeicons
import "primeflex/primeflex.css"; // primeflex
PrimeReact.ripple = true;

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextHead />
			<AnimatePresence
				exitBeforeEnter={true}
				initial={false}
				// onExitComplete={() => window.scrollTo(0, 0)}
			>
				<Component {...pageProps} />
			</AnimatePresence>
			<Footer />
		</>
	);
}

export default MyApp;
