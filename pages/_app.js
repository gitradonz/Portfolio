import "../styles/globals.css";

// PrimeReact imports
import PrimeReact from "primereact/api";
import "primereact/resources/themes/lara-light-teal/theme.css"; // primetheme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // primeicons
import "primeflex/primeflex.css"; // primeflex
PrimeReact.ripple = true;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
