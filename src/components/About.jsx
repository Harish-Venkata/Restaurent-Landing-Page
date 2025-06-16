import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="mt-30 relative flex flex-col lg:flex-row items-center lg:space-x-4 px-4 lg:px-16 text-center lg:text-left">
      <div className="absolute -left-26 -z-20 hidden md:block">
        <img src={AboutBackground} alt="" className="w-[250px] lg:w-auto" />
      </div>

      <div className="mb-8 lg:mb-0 md:block">
        <img
          src={AboutBackgroundImage}
          alt=""
          className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto"
        />
      </div>

      <div className="flex flex-col justify-center flex-1 items-center lg:items-start">
        <p className="font-bold text-orange-400 text-[20px]">About</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-custom-gray max-w-[600px]">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="mt-4 text-gray-500 max-w-[500px] px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente
          distinctio voluptatem cumque officiis voluptate expedita fugit ducimus
          accusamus. Quos.
        </p>
        <p className="mt-4 text-gray-500 max-w-[500px] px-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolore
          eligendi, optio deleniti harum laudantium quis aperiam reiciendis
          reprehenderit quia.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button className="px-10 py-4 bg-[#fe9e0d] outline-none border-none rounded-full text-[1.1rem] cursor-pointer font-semibold text-white transition duration-200 flex items-center justify-center hover:bg-[#e48f0f]">
            Learn More
          </button>
          <button className="bg-transparent outline-none border-none rounded-full text-[1.1rem] cursor-pointer font-semibold text-gray-700 transition duration-200 flex items-center justify-center">
            <BsFillPlayCircleFill className="mr-2 text-4xl" /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
