import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	}, []);

	return <Component {...pageProps} />
}

export default MyApp
