import React from "react";
import Image from "next/image";
const Rntbg = () => {
  return (
    <div className=" h-full md:di pt-40   bg-black w-full  ">
      <div className=" pl-10 container dbn flex pb-20  w-[500px] align-center justify-center  ">
        <Image src="/images/cn.png" alt="" width={950} height={1000} />
      </div>
    </div>
  );
};

export default Rntbg;
