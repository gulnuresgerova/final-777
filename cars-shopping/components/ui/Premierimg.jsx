import React from 'react'
import Image from "next/image";

const Premierimg = () => {
  return (
    <div className=" h-full  bg-white w-full  ">
    <div className=" pl-10 container  flex pb-20  w-[1000] align-center justify-center  ">
    <Image
                    src="/images/ab2.jpeg"
                    alt=""
                    
                    width={1000}
                    height={1000}
                  />
    </div>
  </div>
  )
}

export default Premierimg