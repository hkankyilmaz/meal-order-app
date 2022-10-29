import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../layout/Layout";
import "../styles/globals.css";

import { SessionProvider } from "next-auth/react";

import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}
export default MyApp;
