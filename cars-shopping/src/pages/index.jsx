import Head from "next/head";

import Home from "./home";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";


const Index = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>

      <Header />
      <Home />
      
      <Footer/>
     
    </div>
  );
};

export default Index;
