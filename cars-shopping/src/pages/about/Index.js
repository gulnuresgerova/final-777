import React from "react";
import About from "../../../components/About";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";


const Index = () => {
  return (
    <div>
      <Header/>
     <About className="pt-12 "/>
     <Footer/>
    </div>
  );
};

export default Index;