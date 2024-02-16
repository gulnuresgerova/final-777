import axios from "axios";
import Image from "next/image";
import { IoIosHome } from "react-icons/io";
import { GiPerpendicularRings } from "react-icons/gi";
import { signOut, useSession } from "next-auth/react";
import Account from "../../../components/profile/Account";
import Password from "../../../components/profile/Password";
import Order from "../../../components/profile/Order";
import { FaKey } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import Footer from "../../../components/layout/Footer";
import Header from "../../../components/layout/Header";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Profile = ({ user }) => {
  const { data: session } = useSession();
  const [tabs, setTabs] = useState(0);
  const { push } = useRouter();

  const handleSignOut = () => {
    if (confirm("Are you sure you want to sign out?")) {
      signOut({ redirect: false });
      push("/auth/login");
    }
  };

  useEffect(() => {
    if (!session) {
      push("/auth/login");
    }
  }, [session, push]);
  return (
    <div>
      <Header />
      <div className="flex px-10 pt-36 font-dancing min-h-[calc(100vh_-_433px)] lg:flex-row flex-col lg:mb-0 mb-10">
        <div className="lg:w-80 w-100 flex-shrink-0">
          <div className="relative flex flex-col items-center px-10 py-5 border border-b-0 ">
            <Image
              src={user.image ? user.image : "/images/ozum.jpeg"}
              alt=""
              width={100}
              height={100}
              className="rounded-full"
            />
            <b className="text-2xl mt-1">{user.fullName}</b>
          </div>
          <ul className="text-center font-semibold">
            <li
              className={`border w-full p-3 flex text-center align-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all ${
                tabs === 0 && "bg-primary text-white"
              }`}
              onClick={() => setTabs(0)}
            >
              <IoIosHome className="m-0 p-0 size-5" />
              <button className="ml-1 ">Account</button>
            </li>
            <li
              className={`border w-full p-3 flex text-center align-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all ${
                tabs === 1 && "bg-primary text-white"
              }`}
              onClick={() => setTabs(1)}
            >
              <FaKey className="m-0 p-0 size-4" />
              <button className="ml-1">Password</button>
            </li>
            <li
              className={`border w-full p-3 flex text-center align-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all ${
                tabs === 2 && "bg-primary text-white"
              }`}
              onClick={() => setTabs(2)}
            >
              <GiPerpendicularRings className="m-0 p-0 size-5" />
              <button className="ml-1">Orders</button>
            </li>
            <li
              className={`border w-full p-3 flex text-center align-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all`}
              onClick={handleSignOut}
            >
              <ImExit className="m-0 p-0 size-5" />
              <button className="ml-1">Exit</button>
            </li>
          </ul>
        </div>
        {tabs === 0 && <Account user={user} />}
        {tabs === 1 && <Password user={user} />}
        {tabs === 2 && <Order />}
      </div>
      <Footer />
    </div>
  );
};
export async function getServerSideProps({ req, params }) {
  const user = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`
  );

  return {
    props: {
      user: user ? user.data : null,
    },
  };
}

export default Profile;
