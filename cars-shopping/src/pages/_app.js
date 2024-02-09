import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
