import axios from "axios";
import Image from "next/image";
import React from "react";

import Title from "../../../components/ui/Title";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { addProduct } from "../../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

 

const Index = ({ car }) => {
  const [prices, setPrices] = useState(car.prices);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [extraItems, setExtraItems] = useState(car?.extraOptions);
  const [extras, setExtras] = useState([]);
  const cart = useSelector((state) => state.cart);
  const findCart = cart.products.find((item) => item._id === car._id);

  const dispatch = useDispatch();

  const handleSize = (sizeIndex) => {
    const difference = prices[sizeIndex] - prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleChange = (e, item) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(item.price);
      setExtras([...extras, item]);
    } else {
      changePrice(-item.price);
      setExtras(extras.filter((extra) => extra.id !== item.id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...car, extras, price, quantity: 1 }));
  };

  console.log(car);
  return (
    <div>
      <Header />
      <div className="flex container pt-12 mt-24  items-center font-dancing md:h-[calc(100vh_-_88px)] gap-5 py-10 flex-wrap ">
        <div className="relative md:flex-1 mt-20 md:w-full md:h-full w-36 h-36 mx-auto">
          <Image src={car?.img} alt="" layout="fill" objectFit="contain" />
        </div>
        <div className="md:flex-1 md:text-start text-center">
          <Title addClass="text-6xl">{car?.title}</Title>
          <span className="text-red text-2xl font-bold underline underline-offset-1 my-6 inline-block">
            ${price}
          </span>
          <p className="text-sm mb-10 md:pr-24">
          {car?.desc}
          </p>
          <div>
            <h4 className="text-xl font-bold">Choose the size</h4>
            <div className="flex items-center gap-x-20 md:justify-start justify-center">
              <div
                className="relative w-8 h-8 cursor-pointer"
                onClick={() => handleSize(0)}
              >
                <Image src="/images/depo.jpeg" alt="" layout="fill" />
                <span className="absolute top-0 -right-6 text-xs bg-red rounded-full px-[5px] font-medium">
                  Small
                </span>
              </div>
              <div
                className="relative w-12 h-12 cursor-pointer"
                onClick={() => handleSize(1)}
              >
                <Image src="/images/depo.jpeg" alt="" layout="fill" />
                <span className="absolute top-0 -right-6 text-xs bg-red rounded-full px-[5px] font-medium">
                  Medium
                </span>
              </div>
              <div
                className="relative w-16 h-16 cursor-pointer"
                onClick={() => handleSize(2)}
              >
                <Image src="/images/depo.jpeg" alt="" layout="fill" objectFit="contain"  priority />
                <span className="absolute top-0 -right-6 text-xs bg-red rounded-full px-[5px] font-medium">
                  Large
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-x-4 my-6 md:justify-start justify-center">
          {extraItems.map((item) => (
            <label className="flex items-center gap-x-1" key={item._id}>
              <input
                type="checkbox"
                className="w-5 h-5 accent-primary"
                onChange={(e) => handleChange(e, item)}
              />
              <span className="text-sm font-semibold">{item.text}</span>
            </label>
          ))}
        </div>

          <button
            className="bg-red shop font-dancing text-black p-3  hover:text-black  border-1  rounded-3xl "
            onClick={handleClick}
            disabled={findCart}
          >
            Add to Card
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`
  );
  console.log("params:", params);
  return {
    props: {
      car: res.data ? res.data : null,
    },
  };
};
export default Index;
