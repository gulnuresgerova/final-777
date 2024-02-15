import Router from "next/router";
import NProgress from "nprogress";

import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../../redux/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SessionProvider } from "next-auth/react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component,  pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}> 
    <Provider store={store}>
    <div >
            <ToastContainer />
            <Component {...pageProps} />
          </div>
     
    </Provider>
    </SessionProvider>
  );
}

export default MyApp;