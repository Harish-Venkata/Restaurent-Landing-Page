import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex relative pt-10 sm:flex-col">
        <div className=" absolute -top-90 left-115 -z-20 max-w-600 sm:hidden md:block">
          <img src={BannerBackground} alt="" className="max-w-600 flex-1 " />
        </div>
        <div className="flex-1 md:mb-0 sm:mr-10 sm:mt-10 lg:-mt-1 ">
          <img
            src={BannerImage}
            alt=""
            className="w-full max-w-md md:max-w-lg mx-auto -mt-15"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start">
          <h1 className="text-5xl text-custom-gray max-w-600 sm:text-center sm:mt-10 lg:mt-8">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="mt-6 mr-0 text-gray-500 max-w-500 mb-4 sm:text-center">
            {" "}
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating. so you can cook a fresh food.
          </p>
          <button className="px-10 py-4 bg-[#fe9e0d] outline-none border-none rounded-full text-[1.1rem] cursor-pointer font-semibold text-white transition duration-200 flex items-center justify-center hover:bg-[#e48f0f] sm:flex sm:items-center sm:justify-center sm:ml-53 lg:ml-25 ">
            Order Now <FiArrowRight className="ml-2 mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
