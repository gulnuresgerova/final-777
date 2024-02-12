import Image from "next/image";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";

const Order = () => {
  return (
    <div className="overflow-x-auto bg-black bg-no-repeat h-full w-full bg-[url('/images/red.png')]">
      <Header />
      <div className="min-h-[calc(100vh_-_433px)] flex align-center mt-11 justify-center items-center flex-col p-10  min-w-[1000px]">
        <div className=" bg-transparent flex items-center flex-1  w-full max-h-28">
          <table className="w-full bg-transparent  text-sm text-center text-gray-500">
            <thead className="text-xs bg-transparent text-gray-400 uppercase ">
              <tr cl>
                <th scope="col" className="py-3 border-2 border-gray-700  px-6">
                  ORDER ID
                </th>
                <th scope="col" className="py-3 border-2 border-gray-700  px-6">
                  CUSTOMER
                </th>
                <th scope="col" className="py-3 border-2 border-gray-700  px-6">
                  ADDRESS
                </th>
                <th scope="col" className="py-3 border-2 border-gray-700  px-6">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody className="bg-transparent">
              <tr className="transition-all bg-transparent border-2 border-gray-700 hover:bg-red-600 ">
                <td className="py-4 px-6  font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  63107f5559...
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Emin Başbayan
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Adana
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  $18
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between w-full p-10 text-white font-dancing mt-6">
          <div className="relative flex gap-6 flex-col">
            <Image
              src="/images/cost1.jpg"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Payment</span>
          </div>
          <div className="relative flex flex-col  gap-6  animate-pulse">
            <Image
              src="/images/cost1.jpg"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Preparing</span>
          </div>
          <div className="relative  gap-6  flex flex-col">
            <Image
              src="/images/cost1.jpg"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>On the way</span>
          </div>
          <div className="relative  gap-6  flex flex-col">
            <Image
              src="/images/cost1.jpg"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Delivered</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
