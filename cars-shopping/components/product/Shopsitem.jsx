import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
const Shopsitem = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const findCart = cart.products.find((item) => item._id === product._id);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addProduct({
        ...product,
        extras: [{ text: "empty" }],
        price: product.prices[0],
        quantity: 1,
      })
    );
  };
  return (
    <div className="rounded-3xl w-[230px] h-[200] pt-20  flex flex-col gap-4">
      <div className=" w-[240px] overflow-hidden  grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
        <Link href={`/details/${product._id}`}>
          <div className=" hover  hover:scale-110 w-[240] h-[170px] hover:transition-all-z-2 transition delay-150 ease-in-out duration-300 ">
            <Image src={product.img} alt="" width={240} height={200} priority />
          </div>
        </Link>
      </div>
      <div className=" text-white">
        <h4 className="text-xl font-semibold ">{product.title}</h4>
        <p className="text-[15px] pt-3 whitespace-nowrap overflow-hidden text-ellipsis">
          {product.desc}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span>${product.prices[0]}</span>
          <button
            className="outline-dashed outline-2 outline-bordo bg-black !w-10 !h-10 !rounded-full !p-0 grid place-content-center"
            disabled={findCart}
            onClick={handleClick}
          >
            <RiShoppingCart2Fill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shopsitem;
