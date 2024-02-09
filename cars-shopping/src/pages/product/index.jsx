import Image from "next/image";
import React from "react";
import Title from "../../components/ui/Title";

const Index = () => {
  return (
    <div className="flex items-center h-screen gap-20 py-20 flex-wrap ">
      <div className="relative md:flex-1 w-[80%] h-[80%] mx-20">
        <Image src="/images/fort-vp.jpeg" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline underline-offset-1 my-4 inline-block">
          $10
        </span>
        <p className="text-sm my-4 md:pr-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          fugit corporis ex laboriosam tenetur at ad aspernatur eius numquam
          molestiae.
        </p>
        <button className="bg-red shop font-dancing text-black p-3 hover:text-white hover:bg-transparent border-1  rounded-3xl ">
            Add to Card
          </button>
      </div>
    </div>
  );
};

export default Index;