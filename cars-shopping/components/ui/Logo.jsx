import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return(
    <Link href="/">
    <div className="text-[2rem] font-dancing font-bold">
      <Image src="/images/logo-w.png" alt="" width={128} height={128} />
    </div>
  </Link>;
  )
};

export default Logo;
