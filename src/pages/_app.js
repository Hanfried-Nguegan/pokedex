import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pokemon Tracker App</title>
        <meta name="description" content="NextJS Pokemon Tracker App" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/images/pokeball2.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
