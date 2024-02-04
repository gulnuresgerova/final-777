import Head from "next/head";

import Home from "./home";
import Header from "../../components/layout/Header";
import Layout from "./layout/Layout";
import Whelis from "./catagory/whelis";
import Cars from "./catagory/cars";
import Bgimg from "../../components/ui/Bg-img";
import Stop from "./stop/Stop";

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
      <Layout />

      <Cars />
      <Bgimg />
      <Whelis />
      <Stop/>
      <Home />
    </div>
  );
};

export default Index;
