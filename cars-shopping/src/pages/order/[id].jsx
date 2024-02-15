import Image from "next/image";
import axios from "axios";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Title from "../../../components/ui/Title";

const Order = ({ order }) => {
  const status = order?.status;

  const statusClass = (index) => {
    if (index - status < 1) return "";
    if (index - status === 1) return "animate-pulse";
    if (index - status > 1) return "";
  };
  return (
    <div className="overflow-x-auto  bg-black bg-no-repeat h-full w-full bg-[url('/images/red.png')]">
      <Header />
   
      <div className="min-h-[calc(100vh_-_433px)] flex pt-36 align-center mt-11 justify-center items-center flex-col p-10  ">
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
                  {order?._id.substring(0, 5)}...
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {order?.customer}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {order?.address}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  ${order?.total}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between w-full p-10 text-white font-dancing mt-6">
          <div className={`relative flex align-center text-center justify-center flex-col ${statusClass(0)}`}>
            <Image
              src="/images/py-remove.png"
              alt=""
              width={110}
              height={110}
              objectFit="contain"
            />
            <span>Payment</span>
          </div>
          <div className={`relative  flex align-center text-center justify-center flex-col ${statusClass(1)}`}>
            <Image
              src="/images/prep-rm.png"
              alt=""
              width={100}
              height={100}
              objectFit="contain"
            />
            <span>Preparing</span>
          </div>
          <div className={`relative gap-2  flex align-center text-center justify-center flex-col ${statusClass(2)}`}>
            <Image
              src="/images/kamaz-rm.png"
              alt=""
              width={130}
              height={130}
              objectFit="contain"
            />
            <span>On the way</span>
          </div>
          <div className={`relative flex align-center text-center justify-center flex-col ${statusClass(3)}`}>
            <Image
              src="/images/deliv.png"
              alt=""
              width={80}
              height={80}
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

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/${params.id}`
  );

  return {
    props: {
      order: res.data ? res.data : null,
    },
  };
};


export default Order;
