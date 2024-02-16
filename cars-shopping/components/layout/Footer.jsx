import Title from "../ui/Title";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMessage3Line } from "react-icons/ri";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaFacebookF , FaLinkedinIn , FaTwitter , FaInstagram , FaTiktok} from "react-icons/fa";
const Footer = () => {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    const getFooter = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`
        );
        setFooter(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getFooter();
  }, []);
  console.log(footer);
  return (
    <div className="bg-black pt-11 font-dancing mt-24 text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Contact Us</Title>
            <div className="flex align-center justify-center    flex-col gap-y-2 mt-3">

              <a href={footer?.location} target="_blank" rel="noreferrer" className="flex align-center justify-center">
              <FaLocationDot />
                <span className="inline-block ml-2">{footer?.location}</span>
              </a>
              <a href={`tel:${footer?.phoneNumber}`} className="flex align-center justify-center">
              <FaPhoneAlt />
                <span className="inline-block ml-2">Call {footer?.phoneNumber}</span>
              </a>
              <a href={`mailto:${footer?.email}`} className="flex align-center justify-center">
              <RiMessage3Line />
                <span className="inline-block ml-2">{footer?.email}</span>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px]">Feane</Title>
            <p className="mt-3">
            {footer?.desc}
            </p>
            <div className="flex items-center  justify-center mt-5 gap-x-2">
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full "
              >
                <FaFacebookF />
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <FaTwitter />
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
               <FaLinkedinIn />
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
              <FaInstagram />
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">{footer?.openingHours?.day}</span>
              </div>
              <div>
                <span className="inline-block ml-2"> {footer?.openingHours?.hour}</span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <p className="text-center mt-5">
          © 2024 All Rights Reserved By{" "}
          <a href="#" className="text-dancing text-red">
            Gulnur Asgarova
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
