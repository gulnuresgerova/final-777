import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import Slider from "react-slick";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 30000,
    appendDots: (dots) => (
      <div>
        <ul className="container mx-auto w-full text-start">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="h-screen w-full -mt-[88px] ">
      <div className="absolute left-0 w-full h-full">
        <div className="relative blur h-full w-full">
          <Image
            src="/images/yagis.png"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          
          <div className="mt-48  text-white flex flex-col container mx-auto  items-start gap-y-10">
            <Title addClass="text-5xl">cars</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <button className="btn-primary">Shop Now</button>
          </div>
        </div>
        <div>
          <div className=" text-white mt-48 container mx-auto  flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">whooles</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <button className="btn-primary">Shop Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;