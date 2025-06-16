import React from "react";
import Logo from "../assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex mx-24 my-0 mt-40">
      <div className="sm:-ml-29">
        <div className="max-w-110 sm:mr-4">
          <img src={Logo} alt="" />
        </div>
        <div className="mt-10 flex items-center sm:mt-5">
          <BsTwitter className="text-gray-400 text-2xl mr-5" />
          <SiLinkedin className="text-gray-400 text-2xl mr-5" />
          <BsYoutube className="text-gray-400 text-2xl mr-5" />
          <FaFacebookF className="text-gray-400 text-2xl mr-5" />
        </div>
      </div>
      <div className="flex justify-end flex-1 -mr-10 sm:ml-10">
        <div className="flex flex-col max-w-190 mr-10">
          <span className="font-semibold text-[#4c4c4c] cursor-pointer">
            Quality
          </span>
          <span className="font-semibold text-[#4c4c4c] cursor-pointer">
            Help
          </span>
          <span className="font-semibold text-[#4c4c4c] cursor-pointer">
            Share
          </span>
          <span className="font-semibold text-[#4c4c4c] cursor-pointer">
            Careers
          </span>
          <span className="font-semibold text-[#4c4c4c] cursor-pointer">
            Testimonials
          </span>
          <span className="font-semibold text-[#4c4c4c] cursor-pointer">
            Work
          </span>
        </div>
        <div className="flex flex-col max-w-190 mr-10">
          <span className="font-semibold text-[#4c4c4c] cursor-pointer">
            244-5333-7783
          </span>
          <span className="font-semibold text-[#4c4c4c] cursor-pointer">
            hello@food.com
          </span>
          <span className="font-semibold text-[#4c4c4c] cursor-pointer">
            press@food.com
          </span>
          <span className="font-semibold text-[#4c4c4c] cursor-pointer">
            contact@food.com
          </span>
        </div>
        <div className="flex flex-col max-w-190">
          <span className="font-semibold text-[#4c4c4c] cursor-pointer">
            Terms & Conditions
          </span>
          <span className="font-semibold text-[#4c4c4c] cursor-pointer">
            Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
