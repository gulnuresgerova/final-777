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



const Index = () => {
  return (
  <div >
 
      <Layout/>
      <Cars/>
      <Bgimg/>
      <Whelis/>
      <Stop/>
      <Site/>
      <div className="text-red-600  bg-auto bg-no-repeat bg-center   font-dancing text-center text-3xl kaybol">
   <Carousel/>
      </div>
      <Fade/>
      <Campaigns/>
      <Shops/>
      <Rental/>
<Customers/>

  </div>
  );
 
};

export default Index;
