import Image from "next/image";
import Title from "./ui/Title";
import { MdShoppingCart } from "react-icons/md";

const CampaignItem1 = () => {
  return (
    <div className="bg-black flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
      <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-['']   border-[5px] border-red rounded-full overflow-hidden">
        <Image
          src="/images/zp2.jpg"
          alt=""
          layout="fill"
          priority
          
          className="hover:scale-105 w-[40] h-[40] transition-all"
          objectFit="cover"
        />
      </div>
      <div className="text-white">
        <Title addClass="text-2xl">Whooles Thursdays</Title>
        <div className="font-dancing my-1">
          <span className="text-[40px]">20%</span>
          <span className="text-sm inline-block ml-1">Off</span>
        </div>
        <button className=" flex items-center gap-x-2 h-[200] bg-red shop font-dancing text-black p-3 hover:text-white hover:bg-transparent border-1  rounded-3xl ">
          Shop <MdShoppingCart size={23} />
        </button>
      </div>
    </div>
  );
};
const CampaignItem2 = () => {
    return (
      <div className="bg-black flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
        <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-['']   border-[5px] border-red rounded-full overflow-hidden">
          <Image
            src="/images/fort-vp.jpeg"
            alt=""
            layout="fill"
            className="hover:scale-105 transition-all"
            objectFit="cover"
          />
        </div>
        <div className="text-white">
          <Title addClass="text-2xl">Cars Mondays</Title>
          <div className="font-dancing my-1">
            <span className="text-[40px]">40%</span>
            <span className="text-sm inline-block ml-1">Off</span>
          </div>
          <button className=" flex items-center gap-x-2 h-[200] bg-red shop font-dancing text-black p-3 hover:text-white hover:bg-transparent border-1  rounded-3xl ">
            Shop <MdShoppingCart size={23} />
          </button>
        </div>
      </div>
    );
  };

const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
      <CampaignItem1 />
      <CampaignItem2 />
    </div>
  );
};

export default Campaigns;