import Image from "next/image";

import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import React, { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";
import axios from "axios";

import { useRouter } from "next/router";
import PacmanLoader from "react-spinners/PacmanLoader";
import Input from "../form/Input";
const Search = ({ setIsSearchModal }) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/products`
        );
        setProducts(res.data);
        setFiltered(res.data.slice(0, 5));
      } catch (err) {
        console.log(err);
      }
    };
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, []);

  const handleSearch = (e) => {
    const searchFilter = products
      .filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
      .slice(0, 5);
    setFiltered(searchFilter);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pr-2 pl-2 z-50 after:content-[''] after:w-screen after:h-screen after:bg-black after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center relative">
          <div className="relative  z-50 md:w-[600px] w-[370px] back border-none rounded-3xl p-10">
            <Title addClass="text-[30px] font-dancing text-center p-0 m-0 text-white">Search</Title>
            <Input placeholder="Search..." onChange={handleSearch} />
            {products.length > 0 ? (
              <ul className="mt-4">
                {filtered.length > 0 ? (
                  filtered.map((product) => (
                    <li
                      className="flex items-center justify-between p-1 text-white hover:text-black hover:bg-primary transition-all px-2 cursor-pointer"
                      key={product._id}
                      onClick={() => {
                        router.push(`/product/${product?._id}`);
                        setIsSearchModal(false);
                      }}
                    >
                      <div className="relative flex">
                        <Image
                          src={product?.img}
                          alt={product?.title}
                          width={48}
                          height={48}
                        />
                      </div>
                      <span className="font-bold">{product?.title}</span>
                      <span className="font-bold">${product.prices[0]}</span>
                    </li>
                  ))
                ) : (
                  <p className="text-center font-semibold">No results found!</p>
                )}
              </ul>
            ) : (
              <div className="flex justify-center items-center mt-3">
                <PacmanLoader color="#fca311" />
              </div>
            )}
            <button
              className="absolute text-white  top-4 right-4"
              onClick={() => setIsSearchModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
