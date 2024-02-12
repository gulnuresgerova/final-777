import Image from "next/image";
import Title from "../../../components/ui/Title";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";

const Cart = () => {
  return (
    <div className="min-h-[calc(100vh_-_433px)]  bg-black bg-no-repeat h-full w-full bg-[url('/images/red.png')]">
      <Header />
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="md:min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto w-full">
          <table className="w-full bg-transparent text-sm text-center text-gray-500 min-w-full">
            <thead className="text-xs bg-transparent text-gray-400 uppercase ">
              <tr>
                <th scope="col" className=" border-2 border-gray-700 p-6 ">
                  Images
                </th>
                <th scope="col" className="border-2 border-gray-700  p-6 ">
                  PRODUCT
                </th>
                <th scope="col" className="border-2 border-gray-700 p-6">
                  PRICE
                </th>
                <th scope="col" className="border-2 border-gray-700 p-6">
                  QUANTITY
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="transition-all bg-transparant border-2 border-gray-700 hover:bg-red ">
                <td className=" p-8 font-medium whitespace-nowrap flex align-center justify-center hover:text-white ">
                  <Image src="/images/cars.png" alt="" width={70} height={70} />
                </td>
                <td className=" p-8 font-medium whitespace-nowrap hover:text-white ">
                  <span>Fort Mustag</span>
                </td>
                <td className="p-6 font-medium whitespace-nowrap hover:text-white">
                  $20
                </td>
                <td className="p-8 font-medium whitespace-nowrap hover:text-white">
                  1
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-transparant min-h-[calc(100vh_-_433px)] flex flex-col justify-start text-white p-12 md:w-auto w-full   md:text-start !text-center">
          <Title addClass="text-[30px]">Order summary</Title>
          <hr />

          <div className="p-4 ">
            <b className="p-4">Subtotal: </b>$20 <br />
            
            <b className=" inline-block my-1 p-4">Discount: </b>$0.00 <br />
            <b className="p-4">Total: </b>$20
          </div>

          <div>
            <button className="bg-red shop font-dancing text-black p-2 w-5/12 hover:text-white hover:bg-transparent border-1  rounded-3xl ">
              checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
