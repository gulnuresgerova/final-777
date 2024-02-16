import React from "react";
import Slider from "react-slick";
import Image from "next/image";

function Fade() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
  <div className="bg-black">
      <div className="slider-container container bg-black">
      <Slider {...settings}>
        <div className="h-screen w-full container mx-auto ">
          <div className=" w-full h-full">
            <div className=" h-full w-full">
              <Image
                src="/images/fade6.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="h-screen w-full container mx-auto ">
          <div className=" w-full h-full">
            <div className=" h-full w-full">
              <Image
                src="/images/fade3.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="h-screen w-full container mx-auto ">
          <div className=" w-full h-full">
            <div className=" h-full w-full">
              <Image
                src="/images/fade2.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="h-screen w-full container mx-auto ">
          <div className=" w-full h-full">
            <div className=" h-full w-full">
              <Image
                src="/images/fade4.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  </div>
  );
}

export default Fade;
