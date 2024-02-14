import Head from "next/head";
import axios from "axios";
import Home from "./home";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";



const Index = ({ categoryList , productList}) => {
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
      
      <Home categoryList={categoryList}productList={productList} />
    
      <Footer/>
     
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  
  const product = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );
  return {
    props: {
      categoryList: res.data ? res.data : [],
      productList: product.data ? product.data : [],
    },
  };
};

export default Index;
