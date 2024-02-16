import React from 'react'
import Image from "next/image";
const Shoplayout = () => {
  return (
    <div className="relative m-0 p-0   bg-black h-screen layout  w-full pr-44 md:w-auto overflow-hidden">
    <video
      className=" absolute w-full  min-w-full  md:h-full max-w-none md:w-auto "
      autoPlay
      loop
      muted
    >
      <source src={"video/ratata.mp4"} width={2200} height={1008} />
    </video>

  </div>
  )
}

export default Shoplayout