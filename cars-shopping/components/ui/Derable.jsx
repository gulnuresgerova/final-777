import React from 'react'
import Image from "next/image";
const Derable = () => {
  return (
    <div className=" h-full  bg-gry w-full  ">
    <div className=" pl-10 container  flex pb-20  w-[1000] align-center justify-center  ">
    <Image
                    src="/images/bo5.jpeg"
                    alt=""
                    className="rounded-full"
                    width={1000}
                    height={1000}
                  />
    </div>
  </div>
  )
}

export default Derable