import axios from "axios";
import React from 'react'
import Shops from '../../../components/product/Shops'
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";

const Index = ({ categoryList , productList}) => {
  return (
    <div>
        <Header/>
        <Shops   categoryList={categoryList} productList={productList} />
        <Footer/>
    </div>
  )
}
export const getServerSideProps = async () => {
  const category = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  );
  const product = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );
  return {
    props: {
      categoryList: category.data ? category.data : [],
      productList: product.data ? product.data : [],
    },
  };
};

export default Index