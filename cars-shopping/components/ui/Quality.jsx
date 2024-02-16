import React from 'react'
import Image from "next/image";
const Quality = () => {
  return (
    <div className=" h-full mt-36 bg-gry w-full  ">
    <div className=" pl-10 container  flex pb-20  w-[1000] align-center justify-center  ">
    <Image
                    src="/images/bo1.jpeg"
                    alt=""
                    className="rounded-full"
                    width={1000}
                    height={1000}
                  />
    </div>
  </div>
  )
}

export default Quality