import React from "react";
import Rental from "../../../components/Rental";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Rentalbg from "../../../components/ui/Rentalbg";
import Contactrn from "../../../components/ui/Contactrn";
import Reach from "../../../components/ui/Reach";

const Index = () => {
  return (
    <div>
        <Header/>
        <Rentalbg/>
      <Rental/>
      <Contactrn/>
      <Reach/>
      <Footer/>
    </div>
  );
};

export default Index;