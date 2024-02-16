import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <div className=" h-full -mb-20 bg-white w-full  ">
      <div className=" pl-10 container  flex pb-20  w-[500px] align-center justify-center  ">
        <Image src="/images/ab5.jpeg" alt="" width={950} height={1000} />
      </div>
    </div>
  );
};

export default Team;
