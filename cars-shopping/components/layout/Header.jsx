import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Title from "../ui/Title";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";
import Search from "../ui/Search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import Link from "next/link";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
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
            <li className="px-[5px] font-dancing py-[10px] uppercase hover:text-red cursor-pointer">
              <Link href="/about"> about</Link>
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
          <a href="#">
            <FaUserAlt className="hover:text-red transition-all" />
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-red transition-all" />
          </a>
          <a href="#">
            <button onClick={() => setIsSearchModal(true)}>
              <FaSearch className="hover:text-red transition-all" />
            </button>
          </a>
          <button
            className="md:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-xl hover:text-red transition-all" />
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
