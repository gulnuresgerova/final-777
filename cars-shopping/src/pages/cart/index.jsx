import Image from "next/image";
import Title from "../../../components/ui/Title";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { reset } from "../../../redux/cartSlice";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Cart = ({ userList }) => {
  const { data: session } = useSession();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const user = userList?.find((user) => user.email === session?.user?.email);
  const router = useRouter();

  const newOrder = {
    customer: user?.fullName,
    address: user?.address ? user?.address : "No address",
    total: cart.total,
    method: 0,
  };

  const createOrder = async () => {
    try {
      if (session) {
        if (confirm("Are you sure to order?")) {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/orders`,
            newOrder
          );
          if (res.status === 201) {
            router.push(`/order/${res.data._id}`);
            dispatch(reset());
            toast.success("Order created successfully", {
              autoClose: 1000,
            });
          }
        }
      } else {
        toast.error("Please login first.", {
          autoClose: 1000,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="min-h-[calc(100vh_-_433px)] font-dancing  bg-black bg-no-repeat h-full w-full bg-[url('/images/red.png')]">
      <Header className="!bg-transparent" />
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="md:min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10  w-full">
        <div className="max-h-52 overflow-auto w-full">
            {cart?.products?.length > 0 ? (
          <table className="w-full bg-transparent text-sm text-center text-white min-w-full ">
            <thead className="text-xs bg-transparent text-white uppercase ">
              <tr>
                <th scope="col" className=" border-2 border-gray-700 p-6 ">
                  Images
                </th>
                <th scope="col" className="border-2 border-gray-700  p-6 ">
                  PRODUCT
                </th>
                <th scope="col" className="border-2 border-gray-700 p-6">
                  Extras
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
            {cart.products.map((product, index) => (
                <tr
                  className="transition-all bg-transparant border-2 border-gray-700  "
                  key={index}
                >
                  <td className=" p-8 font-medium whitespace-nowrap flex align-center justify-center hover:text-white ">
                    <Image
                      src={product?.img}
                      alt=""
                      width={70}
                      height={70}
                    />
                  </td>
                  <td className=" p-8 font-medium text-white whitespace-nowrap hover:text-red ">
                    <span>{product.title}</span>
                  </td>

                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        {product.extras?.length > 0
                          ? product.extras.map((item) => (
                              <span key={item.id}>{item.text}, </span>
                            ))
                          : "empty"}
                      </td>

                  <td className="p-6 font-medium whitespace-nowrap hover:text-red">
                    ${product.price}
                  </td>
                  <td className="p-8 font-medium whitespace-nowrap hover:text-red">
                    {product.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          ) : (
            <p className="text-center font-semibold">Hiç Ürün Yok..</p>
          )}
        </div>
        </div>
        <div className="bg-transparant min-h-[calc(100vh_-_433px)] flex flex-col justify-start text-white p-12 md:w-auto w-full   md:text-start !text-center">
          <Title addClass="text-[30px]">Order summary</Title>
          <hr />

          <div className="p-4 ">
            <b className="p-4">Subtotal: </b>
            {cart.total} <br />
            <b className=" inline-block my-1 p-4">Discount: </b>$0.00 <br />
            <b className="p-4">Total: </b>
            {cart.total}
          </div>

          <div>
            <button
              className="bg-red shop font-dancing text-black p-2 w-5/12 hover:text-white hover:bg-transparent border-1  rounded-3xl"
              onClick={createOrder}
             
            >
              checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);

  return {
    props: {
      userList: res.data ? res.data : [],
    },
  };
};


export default Cart;
