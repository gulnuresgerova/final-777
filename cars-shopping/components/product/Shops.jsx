import React from 'react'
import Shopsitem from './Shopsitem'
import Title from "../ui/Title";
const Shops = () => {
  return (
  
            <div className="container mx-auto  mb-16">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-[40px]">Our Shop</Title>
        <div className="mt-10">
          <button className="px-6 py-2 bg-secondary rounded-3xl text-white">
            All
          </button>
          <button className="px-6 py-2 rounded-3xl ">Cars</button>
          <button className="px-6 py-2  rounded-3xl ">Whooles</button>
          <button className="px-6 py-2  rounded-3xl ">Motors</button>
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      <Shopsitem/>
      <Shopsitem/>
      <Shopsitem/>
      <Shopsitem/>
      <Shopsitem/>
      <Shopsitem/>
      <Shopsitem/>
      </div>
    </div>


  )
}

export default Shops