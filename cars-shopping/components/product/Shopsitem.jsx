import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { RiShoppingCart2Fill } from "react-icons/ri";
const Shopsitem = () => {
  return (
    <div className="bg-black rounded-3xl">
    <div className="w-full  bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
     <Link href="/details">
     <div className="relative w-36 h-36 hover:scale-110 transition-all">
        <Image src="/images/fort-vp.jpeg" alt="" layout="fill" />
      </div>
     
     </Link >
    </div>
    <div className="p-[25px] text-white">
      <h4 className="text-xl font-semibold">Fort Mustag</h4>
      <p className="text-[15px]">
      Get points for every purchase. Redeem points for rewards
      </p>
      <div className="flex justify-between items-center mt-4">
        <span>$20.000</span>
        <button className="bg-red !w-10 !h-10 !rounded-full !p-0 grid place-content-center">
          <RiShoppingCart2Fill />
        </button>
      </div>
    </div>
   
  </div>
  )
}

export default Shopsitem