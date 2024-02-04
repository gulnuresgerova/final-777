import Image from "next/image";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { GiCancel } from "react-icons/gi";

const Search = ({ setIsSearchModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen pr-2 pl-2 z-50 after:content-[''] after:w-screen after:h-screen after:bg-black after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center relative">
          <div className="relative z-50 md:w-[600px] w-[370px] bg-black border-none rounded-3xl p-10">
            <Title addClass="text-[30px] font-dancing text-center p-0 m-0 text-white">Search</Title>
            <input
              type="text"
              placeholder="Search..."
              className="border font-dancing outline-none w-full my-10 p-1 "
            />
            <ul className="flex flex-col gap-2">
              <li className="flex font-dancing border-2 p-2 items-center justify-between hover:bg-red transition-all">
                <div className="relative flex">
                  <Image
                    src="/images/mt.jpg"
                    alt=""
                    className="rounded-full"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="font-bold text-white">BMW</span>
                <span className="font-bold  text-white">$19.005</span>
              </li>
              <li className="flex font-dancing border-2  items-center justify-between p-2 hover:bg-red  transition-all">
                <div className="relative flex">
                  <Image
                    src="/images/mt.jpg"
                    alt=""
                    className="rounded-ee-full"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="font-bold  text-white">NISSAN</span>
                <span className="font-bold  text-white">$20.999</span>
              </li>
              <li className="flex font-dancing  border-2  items-center justify-between p-2 hover:bg-red transition-all">
                <div className="relative font-dancing  flex">
                  <Image src="/images/mt.jpg" alt="" width={48} height={48} />
                </div>
                <span className="font-bold  text-white">KIA</span>
                <span className="font-bold  text-white">$10.000</span>
              </li>
            </ul>
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
