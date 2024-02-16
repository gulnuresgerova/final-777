import React from "react";
import Image from "next/image";
import {Card, CardFooter,} from "@nextui-org/react";
const Cars = () => {
  return (
    <div className="mt  h-full w-full ">
      <div className="container mt-10">
        <div className="flex container align-center justify-between w-full mt-10 pt-7 pb-6">
          <h1 className="  catagory text-white text-3xl font-dancing">
            Shop by Cars Category
          </h1>
          <button className="bg-transparant shops font-dancing text-white p-3 hover:text-black hover:bg-red border-1  rounded-3xl ">
            Shop
          </button>
        </div>

        <div className="cards grid grid-cols-4 gap-4 pb-10">
        <Card
      isFooterBlurred
     
      className="border-none hovers flex flex-col  "
    >
   <div className="hover">
   <Image
        alt=""
        className="object-cover images relative"
        height={60}
        src="/images/fort-vp.jpeg"
        width={250}
      />
   </div>
      <CardFooter >
        <p className="text-white text-2xl font-dancing flex align-start justify-start">Fort Mustag</p>
      
      </CardFooter>
      </Card>
      <Card
      isFooterBlurred
     
      className="border-none flex flex-col  "
    >
     <div className="hover">
     <Image
        alt=""
        className="object-cover images relative"
        height={60}
        src="/images/bugatti.jpeg"
        width={250}
      />
     </div>
      <CardFooter >
        <p className="text-white text-2xl font-dancing flex align-start justify-start">Bugatti</p>
      
      </CardFooter>
      </Card>
      <Card
      isFooterBlurred
     
      className="border-none flex flex-col  "
    >
    <div className="hover">
    <Image
        alt=""
        className="object-cover images relative"
        height={90}
        src="/images/oll.jpeg"
        width={250}
      />
    </div>
      <CardFooter >
        <p className="text-white text-2xl font-dancing flex align-start justify-start">Nissan</p>
      
      </CardFooter>
      </Card>
      <Card
      isFooterBlurred
     
      className="border-none flex flex-col  "
    >
  <div className="hover">
  <Image
        alt=""
        className="object-cover images relative"
        height={60}
        src="/images/bent.jpeg"
        width={250}
      />
  </div>
      <CardFooter >
        <p className="text-white text-2xl font-dancing flex align-start justify-start">Bentley</p>
      
      </CardFooter>
      </Card>
        </div>
      </div>
    </div>
  );
};

export default Cars;
