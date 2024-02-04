import React from "react";
import Image from "next/image";
const Logo = () => {
  return <div className="text-[2rem] font-dancing font-bold">
     <Image
                    src="/images/logo-w.png"
                    alt=""
                    
                    width={128}
                    height={128}
                  />
  </div>;
};

export default Logo;