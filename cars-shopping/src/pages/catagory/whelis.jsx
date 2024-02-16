import React from "react";
import Image from "next/image";
import {Card, CardFooter,} from "@nextui-org/react";
const Whelis = () => {
  return (
    <div className="mt whelis h-full w-full ">
      <div className="container md:pt-5  mt-10">
        <div className="flex container align-center justify-between w-full mt-10 pt-7 md:pt-5 pb-6">
          <h1 className="text-white catagory text-3xl font-dancing">
            Shop by Wheels Category
          </h1>
          <button className="bg-transparant shops font-dancing text-white p-3 hover:text-black hover:bg-red border-1  rounded-3xl ">
            Shop
          </button>
        </div>

        <div className="cards grid grid-cols-4 gap-4 pb-10">
        <Card
      isFooterBlurred
     
      className="border-none flex flex-col  "
    >
   <div className="hover">
   <Image
        alt=""
        className="object-cover images relative"
        height={60}
        src="/images/zp.jpg"
        width={250}
      />
   </div>
      <CardFooter >
        <p className="text-white text-2xl font-dancing flex align-start justify-start">Wheels & Rims</p>
      
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
        src="/images/zp2.jpg"
        width={250}
      />
   </div>
      <CardFooter >
        <p className="text-white text-2xl font-dancing flex align-start justify-start">Engine</p>
      
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
        src="/images/zp3.jpg"
        width={250}
      />
    </div>
      <CardFooter >
        <p className="text-white text-2xl font-dancing flex align-start justify-start">Vehicle Body Parts</p>
      
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
        src="/images/zp4.jpg"
        width={250}
      />
   </div>
      <CardFooter >
        <p className="text-white text-2xl font-dancing flex align-start justify-start">Accessories</p>
      
      </CardFooter>
      </Card>
        </div>
      </div>
    </div>
  );
};

export default Whelis;
