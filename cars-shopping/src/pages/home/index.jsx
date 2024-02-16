import React from "react";
import Carousel from "../../../components/Carousel";
import Shops from "../../../components/product/Shops";
import Layout from "../layout/Layout";
import Cars from "../catagory/cars";
import Bgimg from "../../../components/ui/Bg-img";
import Whelis from "../catagory/whelis";
import Stop from "../stop/Stop";
import Site from "../stop/Site";
import Fade from "../../../components/Fade";
import Campaigns from "../../../components/Campaigns";
import Rental from "../../../components/Rental";
import Customers from "../../../components/costumers/Customers";
import Bgkecid from "../../../components/ui/Bgkecid";
import Shopbg from "../../../components/ui/Shopbg";
import Limuzin from "../stop/limuzin";
import Orng from "../stop/orng";
import Shiftup from "../../../components/shiftup/Shiftup";
import Phorse from "../stop/Phorse";
import Read from "../stop/Read";
import Bgv from "../../../components/ui/Bgv";

import Videolayout from "../layout/Videolayout";

const Index = ({ categoryList, productList }) => {
  return (
    <div className="pt-12 ">
      <Layout className="bg-black" />
      <Cars />
      <Bgimg />
      <Whelis />
      <Stop />
      <Site />
     <Bgv/>
      <Shops categoryList={categoryList} productList={productList} />
      <div className="text-red-600  bg-auto bg-no-repeat bg-center   font-dancing text-center text-3xl kaybol"></div>
      <Bgkecid />
      <Limuzin />
      <Orng />
      <Campaigns />
     <Videolayout/>
      <Read/>
      <Fade />

      <Rental />
      <Phorse />
      <Customers />
      <Shiftup />
      
    </div>
  );
};

export default Index;
