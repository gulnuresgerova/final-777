import Image from "next/image";
import React from "react";
import Title from "../../../components/ui/Title";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";

const Index = () => {
  return (
  
    <div className="flex items-center h-screen gap-2 py-10 flex-wrap ">
        <Header/>
      <div className="relative md:flex-1 w-[80%] h-[80%] mx-20">
        <Image src="/images/fort-vp.jpeg" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl">Fort Mustag</Title>
        <span className="text-red text-2xl font-bold underline underline-offset-1 my-6 inline-block">
          $10
        </span>
        <p className="text-sm mb-10 md:pr-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          fugit corporis ex laboriosam tenetur at ad aspernatur eius numquam
          molestiae.
        </p>
        <button className="bg-red shop font-dancing text-black p-3 hover:text-black hover:bg-transparent border-1  rounded-3xl ">
            Add to Card
          </button>
      
      </div>
      <Footer/>
    </div>
  );
};

export default Index;