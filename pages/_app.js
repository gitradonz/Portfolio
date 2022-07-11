import "../styles/globals.css";
import NextHead from "../components/NextHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MotionWrapper from "../components/MotionWrapper";

// PrimeReact imports
import PrimeReact from "primereact/api";
import "primereact/resources/themes/saga-orange/theme.css"; // primetheme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // primeicons
import "primeflex/primeflex.css"; // primeflex
PrimeReact.ripple = true;

function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<NextHead />
			<Header />
			<MotionWrapper router={router}>
				<Component {...pageProps} />
			</MotionWrapper>
			<Footer />
		</>
	);
}

export default MyApp;
