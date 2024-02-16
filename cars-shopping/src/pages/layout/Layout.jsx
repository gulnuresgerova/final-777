import Image from "next/image";
const Layout = () => {
  return (
    <div className="relative m-0 p-0  bg-black h-screen layout  w-full md:w-auto overflow-hidden">
      <video
        className=" absolute w-full  min-w-full  md:h-full max-w-none md:w-auto "
        autoPlay
        loop
        muted
      >
        <source src={"video/bg2.mp4"} width={2200} height={1008} />
      </video>

      <div className=" cars container flex flex-col  absolute z-999 w-[1000] align-center justify-center  ">
        <div className=" text flex flex-col w-[700px] ">
          <p className="font-dancing text-white text-3xl">
            Shop Our Premium Auto Parts
          </p>
          <h1 className="font-dancing text-white text-5xl">
            Build Your Dream Car Today. Now 15% Off On All Items.
          </h1>
          <button className="bg-red shop font-dancing text-black p-3 hover:text-white hover:bg-transparent border-1  rounded-3xl ">
            Shop Now
          </button>
        </div>
        <div className="flex axir gap-8 align-start  justify-start ">
          <div className="flex  ">
            <div className="border-r-2 border-red pr-3 ">
              <Image src="/images/w.jpeg" alt="" width={58} height={58} />
            </div>
            <div className="flex flex-col pl-3 align-center justify-center">
              <p className="text-white font-dancing">Free Shipping</p>
              <em className="text-white font-dancing">On all orders over 75$</em>
            </div>
          </div>
          <div className="flex  ">
            <div className="border-r-2 border-red pr-3 ">
              <Image src="/images/w2.jpeg" alt="" width={58} height={58} />
            </div>
            <div className="flex flex-col pl-3 align-center justify-center">
              <p className="text-white font-dancing">Free Shipping</p>
              <em className="text-white font-dancing">On all orders over 75$</em>
            </div>
          </div>
          <div className="flex  ">
            <div className="border-r-2 border-red pr-3 ">
              <Image src="/images/w3.jpeg" alt="" width={58} height={58} />
            </div>
            <div className="flex flex-col pl-3 align-center justify-center">
              <p className="text-white font-dancing">Free Shipping</p>
              <em className="text-white font-dancing">On all orders over 75$</em>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

// w-[2200px]
