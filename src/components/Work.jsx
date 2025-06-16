import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="mt-40">
      <div className="flex justify-center items-center flex-col">
        <p className="text-center text-orange-400">Work</p>
        <h1 className="max-w-700 text-orange-400">How It Works</h1>
        <p className="mt-6 mr-0 text-gray-500 w-120 max-w-500 mb-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          dolore quos quod distinctio a expedita sequi esse, sapiente et quam
          eos, harum accusamus, repudiandae iste similique vel ad voluptatum
          quasi!
        </p>
      </div>
      <div className="mt-12 flex justify-center items-center flex-wrap">
        {workInfoData.map((data) => (
          <div
            className="w-[290px] min-h-[350px] bg-white px-8 py-4 flex flex-col justify-center items-center text-center rounded-xl text-gray-500 m-4 mx-8 drop-shadow-md"
            key={data.title}
          >
            <div>
              <img src={data.image} alt="" width={126} height={126} />
            </div>
            <h2 className="mt-4 mr-0 font-bold text-black">{data.title}</h2>
            <p className="flex items-center font-semibold flex-1 justify-between">
              {data.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
