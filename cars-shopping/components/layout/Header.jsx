import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Title from "../ui/Title";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";
import Search from "../ui/Search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const cart = useSelector((state) => state.cart);
  return (
    <div className="h-[5.5rem]  bg-black">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`md:static absolute top-0 left-0 sm:w-auto md:h-auto w-full text-white  bg-black  md:flex hidden ${
            isMenuModal === true &&
            "!grid place-content-center z-999 w-[270px] h-[67px] pt-6 right-0 bg-black text-white"
          }`}
        >
          <ul className={`flex gap-x-2 ${isMenuModal === true && "!flex  "}`}>
            <li className="px-[5px] font-dancing py-[10px] uppercase hover:text-red cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[5px] font-dancing py-[10px] uppercase hover:text-red cursor-pointer">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="px-[5px] font-dancing py-[10px] uppercase hover:text-red cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="px-[5px] font-dancing py-[10px] uppercase hover:text-red cursor-pointer">
              <Link href="/contact">Contact us</Link>
            </li>
            <li className="px-[5px] font-dancing py-[10px] uppercase hover:text-red cursor-pointer">
              <Link href="/reservation"> Rental</Link>
            </li>
           
          </ul>
          {isMenuModal && (
            <button
              className="absolute top-4 right-4 z-50"
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href="/auth/login">
            <FaUserAlt className="hover:text-red transition-all cursor-pointer" />
          </Link>
          <Link href="/cart">
          <span className="relative">
              <FaShoppingCart className="hover:text-red transition-all cursor-pointer" />
              <span className="w-4 h-4 text-xs grid place-content-center rounded-full bg-red absolute -top-2 -right-3 text-black font-bold">
                {cart.products.length === 0 ? "0" : cart.products.length}
              </span>
            </span>
          </Link>
          <Link href="#">
            <button onClick={() => setIsSearchModal(true)}>
              <FaSearch className="hover:text-red transition-all cursor-pointer" />
            </button>
          </Link>
          <button
            className="md:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-xl hover:text-red transition-all cursor-pointer" />
          </button>
        </div>
      </div>
      {isSearchModal && (
        <OutsideClickHandler onOutsideClick={() => setIsSearchModal(true)}>
          <div className="">
            <Title addClass="text-9xl"></Title>
          </div>
        </OutsideClickHandler>
      )}

      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
