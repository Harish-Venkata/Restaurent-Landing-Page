import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-10 mr-0">
      <h1 className="text-5xl text-black-400 max-w-900 mb-10">
        Have Question In Mind?
      </h1>
      <h1 className="text-5xl text-black-400 max-w-900">Let Us Help You</h1>
      <div className="bg-white max-w-[700px] w-full mt-12 flex items-center p-4 rounded-[5rem]">
        <input
          type="text"
          placeholder="yourName@gmail.com"
          className="flex-1 h-full border-none outline-none text-[1.3rem] px-4 py-2"
        />
        <button className="px-10 py-4 bg-[#fe9e0d] outline-none border-none rounded-full text-[1.1rem] cursor-pointer font-semibold text-white transition duration-200 flex items-center justify-center hover:bg-[#e48f0f]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
