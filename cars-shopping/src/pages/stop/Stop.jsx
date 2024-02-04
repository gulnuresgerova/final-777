import React from "react";

const Stop = () => {
  return (
    <div className="bg-stop  h-full w-full bgstop ">
      <div className=" pl-10 container flex flex-col  absolute z-999 w-[1000] align-center justify-center  ">
        <div className=" stop md:w-[300] text flex flex-col w-[700px] ">
          <h1 className="font-dancing  text-white md:text-3xl text-5xl">
            The One-Stop Shop for Automotive Enthusiasts
          </h1>
          <p className="font-dancing text-white text-2xl">
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <table class="table-auto mt-5 text-white tb-non font-dancing border-white" >
  <thead className="border-white ">
    <tr  className="border-white br ">
      <th  className="border-white br ">Free in-store <br />
or curbside pickup

</th>
      <th  className="border-white br">Personalized care including <br /> battery testing and installation</th>
     
    </tr>
  </thead >
  <tbody>
    <tr className="border-white br " >
      <td className="border-white br ">
Certified <br />
technicians only</td>
      <td className="border-white br ">
Get points for every purchase. <br /> Redeem points for rewards</td>
      
    </tr>
   
  </tbody>
</table>
          <button className="bg-red shop font-dancing text-black p-3 hover:text-white hover:bg-transparent border-1  rounded-3xl ">
            shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stop;
