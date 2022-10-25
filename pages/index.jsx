import Head from "next/head";
import Header from "../components/layout/Header";
import Home from "./home";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Meal-Ordering</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Home />
    </div>
  );
}
