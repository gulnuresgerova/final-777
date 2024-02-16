import React from "react";
import Title from "../ui/Title";

const Shiftup = () => {
  return (
    <div className="relative -mb-40">
      <div className="relative">
        <div className="bg-no-repeat bg-[url('/images/teker.jpg')]   h-full w-full bgst "></div>
      </div>
      <div className="sift w-full p-32 h-[1000] top-0 left-0 absolute">
        <Title addClass="text-6xl text-white font-dancing">SIFT UP</Title>
      </div>
    </div>
  );
};

export default Shiftup;
