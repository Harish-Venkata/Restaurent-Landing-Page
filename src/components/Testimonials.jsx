import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="mt-30">
      <div className="flex justify-center items-center flex-col">
        <p className="text-orange-400 mb-4">Testimonials</p>
        <h1 className="text-5xl text-custom-gray max-w-600">
          What They Are Saying
        </h1>
        <p className="mt-6 mr-0 text-gray-500 max-w-500 mb-4 w-130 ml-15">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          possimus ut error molestiae expedita reprehenderit, quod adipisci
          impedit architecto eligendi assumenda ex, fuga non laudantium eius?
          Obcaecati aliquam in magnam!
        </p>
      </div>
      <div className="mt-8 bg-white pt-4 pr-8 flex items-center justify-center max-w-500 rounded-2xl flex-col text-center drop-shadow-md  md:w-200 md:ml-60 sm:ml-5 sm:w-150">
        <img src={ProfilePic} alt="" className="mt-0 mr-1 text-2xl" />
        <p className="mt-6 mr-0 text-gray-500 max-w-500 mb-4 w-130">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          quisquam unde mollitia quibusdam. Repellat expedita fugiat quo a quas
          totam itaque! Voluptatum numquam cum provident eligendi, fugit
          doloremque aliquam laudantium
        </p>
        <div className="mt-0 mr-1 text-2xl flex text-orange-400">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2 className="mt-4 mb-4 font-bold -ml-7">John Deep</h2>
      </div>
    </div>
  );
};

export default Testimonials;
