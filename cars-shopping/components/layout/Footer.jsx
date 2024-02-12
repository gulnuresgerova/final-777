import Title from "../ui/Title";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMessage3Line } from "react-icons/ri";
import { FaFacebookF , FaLinkedinIn , FaTwitter , FaInstagram , FaTiktok} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black mt-32 text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Contact Us</Title>
            <div className="flex align-center justify-center    flex-col gap-y-2 mt-3">
              <div className="flex align-center justify-center">
              <FaLocationDot />
                <span className="inline-block ml-2">Location</span>
              </div>
              <div className="flex align-center justify-center">
              <FaPhoneAlt />
                <span className="inline-block ml-2">Call +01 1234567890</span>
              </div>
              <div className="flex align-center justify-center">
              <RiMessage3Line />
                <span className="inline-block ml-2">demo@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px]">Feane</Title>
            <p className="mt-3">
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
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
                <span className="inline-block ml-2">Everyday</span>
              </div>
              <div>
                <span className="inline-block ml-2">10.00 Am -10.00 Pm</span>
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
