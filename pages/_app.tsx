import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "../components/Head/Head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Head>
      <Component {...pageProps} />
    </Head>
  );
}

export default MyApp;
