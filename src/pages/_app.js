import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pokemon Tracker</title>
        <link rel="icon" href="/images/pokeball2.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
