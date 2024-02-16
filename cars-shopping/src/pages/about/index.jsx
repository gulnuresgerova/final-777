import React from "react";
import About from "../../../components/About";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Aboutbg from "../../../components/ui/Aboutbg";
import Ab from "../../../components/ui/ab";
import Xala from "../../../components/ui/Xala";
import Care from "../../../components/ui/Care";

import Read from "../stop/Read";
import Await from "../../../components/ui/Await";
import Premier from "../../../components/ui/Premier";
import Premierimg from "../../../components/ui/Premierimg";
import Valued from "../../../components/ui/Valued";
import Road from "../../../components/ui/Road";

import Phorse from "../stop/Phorse";
import Team from "../../../components/ui/Team";



const Index = () => {
  return (
    <div>
      <Header/>
     <About className="pt-12 "/>
     <Aboutbg/>
     <Ab/>
     <Xala/>
     <Read/>
     <Await/>
     <Premier/>
     <Premierimg/>
     <Valued/>
     <Care/>
     <Road/>
    <Phorse/>
    <Team/>
    
     <Footer/>
    </div>
  );
};

export default Index;