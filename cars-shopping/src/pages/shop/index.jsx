import axios from "axios";
import React from 'react'
import Shops from '../../../components/product/Shops'
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Shopbg from "../../../components/ui/Shopbg";
import Shoplayout from "../layout/Shoplayout";
import Spbg from "../../../components/ui/Spbg";
import Shiftup from "../../../components/shiftup/Shiftup";
import Quality from "../../../components/ui/Quality";
import Oclock from "../../../components/ui/Oclock";
import Auto from "../../../components/ui/Auto";
import Enjoy from "../../../components/ui/Enjoy";
import Derable from "../../../components/ui/Derable";
import Support from "../../../components/ui/Support";

const Index = ({ categoryList , productList}) => {
  return (
    <div>
        <Header/>
        <Shopbg/>
        <Shops   categoryList={categoryList} productList={productList} />
<Shoplayout />
<Spbg/>
<Shiftup/>
<Quality/>
<Oclock/>
<Enjoy/>
<Auto/>
<Derable/>
<Support/>
        <Footer/>
    </div>
  )
}
export const getServerSideProps = async () => {
  try {
    const category = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories`
    );
    const product = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products`
    );

    return {
      props: {
        categories: category.data,
        products: product.data,
      },
    };
  } catch (error) {
    console.error("API Error:", error.message);
    return {
      props: {
        categories: [],
        products: [],
        error: "Server Error occurred",
      },
    };
  }
};

export default Index